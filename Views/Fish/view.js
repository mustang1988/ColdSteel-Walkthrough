const {
  fish: {
    Aliases: names,
    Description: desc,
    Rank: rank,
    Points: points,
    Loots: loots,
    ID: id,
    Locations: locations,
  },
} = input;
const GetItems = (items) => {
  return items.map((i) => {
    const file = dv.page(i.path);
    const link =
      i.type === "file"
        ? dv.fileLink(i.path, false, i.display)
        : dv.blockLink(i.path, i.subpath, false, i.display);
    const { path, subpath, display } = link;
    const aria_label = subpath ? `${path} > ${subpath}` : path;
    const data_href = subpath ? `${path}#^${subpath}` : path;
    const href = data_href;
    const data_link_id = file.ID || "";
    return `
<a 
aria-label-position="top" 
aria-label="${aria_label}" 
data-href="${data_href}" 
href="${href}" 
class="internal-link data-link-icon data-link-icon-after data-link-text" 
target="_blank" 
rel="noopener" 
data-link-id="${data_link_id}" 
data-link-tags="" 
data-link-path="${path}">${display || ""}
</a>`;
  });
};
const SplitGroup = (list) => {
  if (list.length > 3) {
    const groupSize = list.length / 3;
    const group = [];
    for (let i = 0; i < list.length; i += groupSize) {
      group.push(list.slice(i, i + groupSize).join(""));
    }
    return group;
  }
  return list;
};

const admonition = `
\`\`\`ad-fish
title: ${names[0]}
<table class="fish-table full-width">
<thead>
<tr rowspan="2">
<td colspan="8"><img class="fish-${id.replace("Fish.", "")}-image" /></td>
<td class="content-right-bottom"><span>稀有度:</span></td>
<td><span class="content-super-big rank-color-${rank}">${rank}</span></td>
</tr>
<tr>
<td colspan="8"></td>
<td class="content-right-bottom"><span>钓果点数:</span></td>
<td><span>${points[1] ? points[0] + "~" + points[1] : points[0]}pt</span></td>
</tr>
</thead>
<tbody>
<tr>
<td colspan="10">${desc}</td>
</tr>
<tr>
<td colspan="5"><h1>取得道具</h1></td>
<td colspan="5"><h1>钓鱼点</h1></td>
</tr>
<tr>
<td colspan="5">${SplitGroup(GetItems(loots)).join("</br>")}</td>
<td colspan="5">${GetItems(locations || []).join("</br>")}</td>
</tr>
</tbody>
</table>
\`\`\`
`;
dv.paragraph(admonition);
