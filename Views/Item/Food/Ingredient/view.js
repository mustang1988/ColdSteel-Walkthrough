/**
 * Custom render view for food ingredient
 */
const {
  ingredient: { Name: name },
} = input;
const admonition = `
\`\`\`ad-food-ingredient
title: ${name}
\`\`\``;
dv.paragraph(admonition);
