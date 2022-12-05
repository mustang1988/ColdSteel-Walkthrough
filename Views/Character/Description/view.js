const {
    character: {
        Aliases: aliases,
        Description: description,
        ID: id
    }
} = input;
const html = `
<h1>${aliases[1]||aliases[0]}</h1>
<table class="character-table">
<theader>
</theader>
<tbody>
<tr>
<td class="character-image">
<img class="${id}-image">
</td>
<td class="character-desc">
${description}
</td>
</tr>
</tbody>
</table>
`;
dv.paragraph(html);