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

const admonition = `\`\`\`ad-art-mirage
title: ${name}
collapse: none
${type} : ${range} ${effects ? effects.join(" ") : ""}

${comment}
\`\`\``;
dv.paragraph(admonition);