const {
  quest: {
    Name: name,
    BasicAP: b_ap,
    ExtraAP: e_ap,
    Steps: steps,
    Bonus: bonus,
  },
} = input;
const admonition = `
\`\`\`ad-main-quest
title: ${name}

AP:  ${b_ap}${e_ap > 0 ? `+${e_ap}` : ""}

步骤:

${steps}

奖励:

${dv.markdownList(bonus) || ""}
\`\`\`
  `;
dv.paragraph(admonition);
