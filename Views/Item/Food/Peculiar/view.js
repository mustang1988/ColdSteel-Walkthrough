/**
 * Custom render view for peculiar food
 */
 const {
    food: {
        Name: name,
        Range: range,
        Effects: effects,
    }
} = input;
const admonition = `
\`\`\`ad-food-peculiar
title: ${name}
${range} ${effects.join(" ")}
\`\`\`
`;
dv.paragraph(admonition);