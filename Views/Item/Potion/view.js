const {
  potion: { Name: name, Range: range, Effects: effects },
} = input;
const admonition = `
\`\`\`ad-potion
title: ${name}
${range} ${effects.join(" ")}
\`\`\`
`;
dv.paragraph(admonition);
