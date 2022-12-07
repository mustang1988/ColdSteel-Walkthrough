const {
  fish: {
    Aliases: names,
    Description: desc,
    Rank: rank,
    Points: points,
    Loots: loots,
    ID: id,
  },
} = input;
const GetItems = (items) => {
  return items.map((i) => {
    const file = dv.page(i.path);
    const link =
      i.type === "file"
        ? dv.fileLink(i.path, false, i.display)
        : dv.blockLink(i.path, i.subpath, false, i.display);
    console.log({ file, link });
    const data =
      link.type === "file"
        ? file
        : file.Foods.filter((f) => f.ID === link.subpath)[0];
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
    return html;
  });
};
const admonition = `
\`\`\`ad-fish
title: ${names[0]}
collapse: open
<table class="fish-table">
<thead>
<tr rowspan="2">
<td><img class="fish-${id}-image" /></td>
<td colspan="7"><span class="content-super-big">${names[0]}</span></td>
<td class="content-right-bottom"><span>稀有度:</span></td>
<td><span class="content-super-big">${rank}</span></td>
</tr>
<tr>
<td colspan="8"></td>
<td class="content-right-bottom"><span>钓果点数:</span></td>
<td>${points[1] ? points[0] + "~" + points[1] : points[0]}pt</td>
</tr>
</thead>
<tbody>
<tr>
<td colspan="10">${desc}</td>
</tr>
<tr>
<td colspan="10"><h1>掉落</h1></td>
</tr>
<tr>
<td colspan="10">${GetItems(loots).join("</br>")}</td>
</tr>
</tbody>
</table>
\`\`\`
`;
dv.paragraph(admonition);
