/**
 * Custom render view for art of element earth
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
  element,
} = input;

const admonition = `\`\`\`ad-art-${element.toLowerCase()}
title: ${name}
collapse: none
${type} : ${range} ${effects ? effects.join(" ") : ""}

${comment}
\`\`\``;
dv.paragraph(admonition);
