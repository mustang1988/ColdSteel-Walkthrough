const {
  note: { Title: title, Content: content },
} = input;
const html = `
<table class="character-table"><tr>
<td class="character-image">${title}</td>
<td class="character-desc">${content}</td>
</tr>
</table>
`;
dv.paragraph(html);
