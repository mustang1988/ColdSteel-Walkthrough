const {
  note: { Title: title, Content: content },
} = input;
const buildLinkHTML = (link) => {
  const { path, subpath, display, ID: id } = link;
  const aria_label = subpath ? `${path} > ${subpath}` : path;
  const data_href = subpath ? `${path}#^${subpath}` : path;
  const href = data_href;
  const data_link_id = id || "";
  return `
<a 
aria-label-position="top" 
aria-label="${aria_label}" 
data-href="${data_href}" 
href="${href}" 
class="internal-link data-link-icon data-link-icon-after data-link-text" 
target="_blank" 
rel="noopener" 
data-link-id="${data_link_id}" 
data-link-tags="" 
data-link-path="${path}">${display || ""}
</a>`;
};
const ReplaceLinkInContent = (content) => {
  const linkRegex =
    /(?<link>\[\[(?<path>[\w\s]+(\/[\w\s]+)*)(#\^(?<subpath>[\w\-]+))*(\|(?<display>[^\[\]]+))*\]\])/g;
  while ((result = linkRegex.exec(content))) {
    const {
      groups: { path, subpath, display, link },
    } = result;
    content = content.replace(link, buildLinkHTML({ path, subpath, display }));
  }
  return content;
};

const html = `
<table class="character-table"><tr>
<td class="character-image">${title}</td>
<td class="character-desc">${ReplaceLinkInContent(content)}</td>
</tr>
</table>
`;
dv.paragraph(html);
