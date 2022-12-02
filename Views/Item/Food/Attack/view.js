/**
 * Custom render view for attack food
 */
const {
    food: {
        Name: name,
        Range: range,
        Effects: effects,
    }
} = input;
const admonition = `
\`\`\`ad-food-attack
title: ${name}
${range} ${effects.join(" ")}
\`\`\`
`;
dv.paragraph(admonition);