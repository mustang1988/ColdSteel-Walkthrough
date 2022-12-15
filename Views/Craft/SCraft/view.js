const {
  craft: {
    Name: name,
    Type: type,
    Range: range,
    Effects: effects,
    Cost: cost,
    Description: desc,
  },
} = input;
const admonition = `
  \`\`\`ad-s-craft
  title: ${name}
  ${type}:${range} ${effects ? effects.join(" ") : ""}
  
  ${desc}
  \`\`\`
  `;
dv.paragraph(admonition);
