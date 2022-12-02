/**
 * Custom render view for superb food
 */
 const {
    food: {
        Name: name,
        Range: range,
        Effects: effects,
    }
} = input;
const admonition = `
\`\`\`ad-food-superb
title: ${name}
${range} ${effects.join(" ")}
\`\`\`
`;
dv.paragraph(admonition);