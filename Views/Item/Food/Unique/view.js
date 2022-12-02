/**
 * Custom render view for unique food
 */
 const {
    food: {
        Name: name,
        Range: range,
        Effects: effects,
    }
} = input;
const admonition = `
\`\`\`ad-food-unique
title: ${name}
${range} ${effects.join(" ")}
\`\`\`
`;
dv.paragraph(admonition);