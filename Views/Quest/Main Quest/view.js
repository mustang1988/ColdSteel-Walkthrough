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
AP: ${b_ap}+${e_ap}

步骤：
${dv.markdownList(steps)}

回报：
${bonus || ""}
\`\`\`
  `;
dv.paragraph(admonition);
