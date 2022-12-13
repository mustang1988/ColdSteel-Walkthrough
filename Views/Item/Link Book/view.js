const {
  book: { Name: name, Character: char, Link: link },
} = input;
const admonition = `
\`\`\`ad-link-book
title: ${name}
> ${char} LINK +${link}
\`\`\`
`;
dv.paragraph(admonition);
