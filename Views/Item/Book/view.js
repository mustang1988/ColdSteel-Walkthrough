/**
 * Custom render view for book
 */
const {
    book: {
        Name: name,
        Content: content
    }
} = input;
const admonition = `
\`\`\`ad-book
title: ${name}
collapse: close
${content}
\`\`\`
`;
dv.paragraph(admonition);