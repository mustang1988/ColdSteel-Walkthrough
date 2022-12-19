const { recipe } = input;
const BuildRecipeTable = (recipe) => {
  const { Ingredients, Superb, Regular, Peculiar, Attack, Unique, ID } = recipe;
  const ingredients = GetIngredients(Ingredients);
  const items = GetItems([Superb, Regular, Peculiar || Attack, Unique]);
  return `
<table class="recipe-table full-width">
<tbody>
<tr>
<td>
<table class="recipe-ingredient-table full-width">
<thead>
<tr>
<td colspan="2"><h1>必要食材</h1></td>
</tr>
</thead>
<tbody>
<tr>
<td class="right-border half-width">${ingredients[0] || ""}</td>
<td class="half-width">${ingredients[4] || ""}</td>
</tr>
<tr>
<td class="right-border half-width">${ingredients[1] || ""}</td>
<td class="half-width">${ingredients[5] || ""}</td>
</tr>
<tr>
<td class="right-border half-width">${ingredients[2] || ""}</td>
<td class="half-width">${ingredients[6] || ""}</td>
</tr>
<tr>
<td class="right-border half-width">${ingredients[3] || ""}</td>
<td class="half-width">${ingredients[7] || ""}</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
<table class="recipe-item-table full-width">
<thead>
<tr>
<td colspan="2"><h1>获得道具</h1></td>
</tr>
</thead>
<tbody>
<tr>
<td class="half-width">${items[0].html || ""}</td>
<td class="half-width">${items[0].effects || ""}</td>
</tr>
<tr>
<td class="half-width">${items[1].html || ""}</td>
<td class="half-width">${items[1].effects || ""}</td>
</tr>
<tr>
<td class="half-width">${items[2].html || ""}</td>
<td class="half-width">${items[2].effects || ""}</td>
</tr>
<tr>
<td class="half-width">${items[3].html || ""}</td>
<td class="half-width">${items[3].effects || ""}</td>
</tr>
</tbody>
</table>
</td>
</tr>
<!--
<tr>
<td>
<table class="full-width skillfull-table">
<thead>
<tr>
<td colspan="12"><h1>擅长度</h1></td>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2"><img class="recipe-character-icon-li-en"/></td>
<td rowspan="2">?</td>
<td><img class="recipe-character-icon-ya-li-sha"/></td>
<td>?</td>
<td><img class="recipe-character-icon-ai-lve-te"/></td>
<td>?</td>
<td><img class="recipe-character-icon-lao-la"/></td>
<td>?</td>
<td><img class="recipe-character-icon-ma-qi-ya-si"/></td>
<td>?</td>
<td><img class="recipe-character-icon-ai-ma"/></td>
<td>?</td>
</tr>
<tr>
<td><img class="recipe-character-icon-you-xi-si"/></td>
<td>?</td>
<td><img class="recipe-character-icon-fei"/></td>
<td>?</td>
<td><img class="recipe-character-icon-gai-wu-si"/></td>
<td>?</td>
<td><img class="recipe-character-icon-mi-li-ya-mu"/></td>
<td>?</td>
<td><img class="recipe-character-icon-ke-luo"/></td>
<td>?</td>
</tr>
</tbody>
</table>
</td>
</tr>
-->
</tbody>
</table>
`;
};
const GetIngredients = (ingredients) => {
  return ingredients.map((i) => {
    const file = dv.page(i.path);
    const link =
      i.type === "file"
        ? dv.fileLink(i.path, false, i.display)
        : dv.blockLink(i.path, i.subpath, false, i.display);
    const fileName = link.path.split("/");
    return `<a aria-label-position="top" aria-label="${
      fileName[fileName.length - 1]
    } > ^${link.subpath}" data-href="${fileName[fileName.length - 1]}#^${
      link.subpath
    }" href="${fileName[fileName.length - 1]}#^${
      link.subpath
    }" class="internal-link data-link-icon data-link-icon-after data-link-text" target="_blank" rel="noopener" data-link-id="${
      file.ID
    }" data-link-tags="" data-link-path="${link.path}">${
      link.display || ""
    }</a>`;
  });
};
const GetItems = (items, with_effects = true) => {
  return items.map((i) => {
    const file = dv.page(i.path);
    const link =
      i.type === "file"
        ? dv.fileLink(i.path, false, i.display)
        : dv.blockLink(i.path, i.subpath, false, i.display);
    let effects = [];
    if (with_effects) {
      const data = file.Foods.filter((f) => f.ID === link.subpath)[0];
      effects = data.Effects.map((eff) => {
        if (eff.includes("[[")) {
          const stat_page = eff.substring(
            eff.indexOf("[[") + 2,
            eff.indexOf("|")
          );
          const stat_dis = eff.substring(
            eff.indexOf("|") + 1,
            eff.indexOf("]]")
          );
          const stat_link = GetItems(
            [dv.fileLink(stat_page, false, stat_dis)],
            false
          )[0];
          const replaced_link = eff.replace(/\[\[.+\|.+\]\]/g, stat_link);
          return replaced_link;
        } else {
          return eff;
        }
      }).join(" ");
    }

    const fileName = link.path.split("/");
    const html = `<a aria-label-position="top" aria-label="${
      fileName[fileName.length - 1]
    } > ^${link.subpath}" data-href="${fileName[fileName.length - 1]}#^${
      link.subpath
    }" href="${fileName[fileName.length - 1]}#^${
      link.subpath
    }" class="internal-link data-link-icon data-link-icon-after data-link-text" target="_blank" rel="noopener" data-link-id="${
      file.ID
    }" data-link-tags="" data-link-path="${link.path}">${
      link.display || ""
    }</a>`;

    return with_effects ? { html, effects: effects } : html;
  });
};
const admonition = `
\`\`\`ad-recipe
title: ${recipe.Name}
collapse: open
${BuildRecipeTable(recipe)}
\`\`\`
`;
dv.paragraph(admonition);
