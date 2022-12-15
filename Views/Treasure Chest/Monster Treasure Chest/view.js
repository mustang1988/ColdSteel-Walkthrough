const {
  chest: { ID: id, Items: items },
} = input;
const admonition = `
\`\`\`ad-treasure-chest-monster
title: ${id}
${dv.markdownList(items)}
\`\`\``;
dv.paragraph(admonition);
