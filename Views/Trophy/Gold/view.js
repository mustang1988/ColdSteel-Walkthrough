const {
    trophy: {
      ID: id,
      Title: title,
      Comment: comment,
      Chapter: chapter,
      Tips: tips,
    },
  } = input;
  
  const admonition = `
  \`\`\`ad-gold-trophy
  title: ${title}
  
  > ${comment}
  
  ${tips}
  
  \`\`\``;
  dv.paragraph(admonition);
  