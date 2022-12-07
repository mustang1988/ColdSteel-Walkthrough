const {
    chest: { ID: id, Items: items },
  } = input;
  const admonition = `
  \`\`\`ad-monster-treasure-chest
  title: ${id}
  ${dv.markdownList(items)}
  \`\`\``;
  dv.paragraph(admonition);
  