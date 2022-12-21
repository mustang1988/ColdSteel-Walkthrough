const {
  quest: {
    Name: name,
    BasicAP: b_ap,
    ExtraAP: e_ap,
    Steps: steps,
    Bonus: bonus,
  },
  type
} = input;
const admonition = `
\`\`\`ad-${type.toLowerCase()}-quest
title: ${name}

AP:  ${b_ap}${e_ap > 0 ? `+${e_ap}` : ""}

步骤:

${steps}

奖励:

${dv.markdownList(bonus) || ""}
\`\`\`
  `;
dv.paragraph(admonition);
