const {
  accessory: { Name: name, ID: id, Description: desc, Effects: effects },
} = input;

const admonition = `\`\`\`ad-accessory
title: ${name}

【 ${effects.join(" ")} 】

${desc}

\`\`\``;
dv.paragraph(admonition);
