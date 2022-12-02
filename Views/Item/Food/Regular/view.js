/**
 * Custom render view for regular food
 */
 const {
    food: {
        Name: name,
        Range: range,
        Effects: effects,
    }
} = input;
const admonition = `
\`\`\`ad-food-regular
title: ${name}
${range} ${effects.join(" ")}
\`\`\`
`;
dv.paragraph(admonition);