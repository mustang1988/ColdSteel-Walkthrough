const {
  chest: { ID: id, Items: items },
  monster,
} = input;
const admonition = `
\`\`\`ad-treasure-chest${monster ? "-monster" : ""}
title: ${id}
${dv.markdownList(items)}
\`\`\``;
dv.paragraph(admonition);
