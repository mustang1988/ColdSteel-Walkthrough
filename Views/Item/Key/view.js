const {
  key: { Name: name },
} = input;
const admonition = `
\`\`\`ad-key
title: ${name}
\`\`\``;
dv.paragraph(admonition);
