/**
 * Custom render view for art of element water
 */
const {
  art: {
    Name: name,
    ID: id,
    Type: type,
    Range: range,
    Effects: effects,
    Comment: comment,
  },
} = input;

const admonition = `\`\`\`ad-art-water
title: ${name}
collapse: none
${type} : ${range} ${effects ? effects.join(" ") : ""}

${comment}
\`\`\``;
dv.paragraph(admonition);