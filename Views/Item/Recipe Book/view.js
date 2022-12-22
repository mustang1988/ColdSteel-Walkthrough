const {
  book: { Name: name, Recipe: recipe },
} = input;
const admonition = `
\`\`\`ad-recipe-book
title: ${name}
> 使用后获得食谱: ${recipe}
\`\`\`
`;
dv.paragraph(admonition);
