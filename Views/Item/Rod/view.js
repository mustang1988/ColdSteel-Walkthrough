const {
    rod: {
        Name: name
    }
} = input;
const admonition = `
\`\`\`ad-rod
title: ${name}
\`\`\`
`;
dv.paragraph(admonition);