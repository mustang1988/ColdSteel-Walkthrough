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
collapse: open
${type} : ${range} ${effects ? effects.join(" ") : ""}

${comment}
\`\`\``;
dv.paragraph(admonition);