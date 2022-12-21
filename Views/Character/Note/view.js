const {
  note: { Title: title, Content: content },
} = input;
const buildLinkHTML = (link) => {
  const { path, subpath, display, ID: id } = link;
  return `<a aria-label-position="top" aria-label="${path}${
    subpath ? ` > ^${subpath}` : ""
  }" data-href="${path}${subpath ? `#^${subpath}` : ""}" href="${path}${
    subpath ? `#^${subpath}` : ""
  }" class="internal-link data-link-icon data-link-icon-after data-link-text" target="_blank" rel="noopener" data-link-id="${
    id || ""
  }" data-link-tags="" data-link-path="${path}">${display || ""}</a>`;
};
const ReplaceLinkInContent = (content) => {
  const checkRegex = /\[\[.+\]\]/g;
  const results = content.match(checkRegex);
  console.log("results => ", results);
  if (results?.length > 0) {
    // 发现链接
    for (const res of results) {
      const path = res.substring(
        res.lastIndexOf("[") + 1,
        res.indexOf("#") < 0 ? res.indexOf("]") : res.indexOf("#")
      );
      const subpath =
        res.indexOf("^") < 0
          ? ""
          : res.substring(res.indexOf("^") + 1, res.indexOf("|"));
      const display =
        res.indexOf("|") < 0
          ? ""
          : res.substring(res.indexOf("|") + 1, res.indexOf("]"));
      console.log({ path, subpath, display });
      content = content.replace(res, buildLinkHTML({ path, subpath, display }));
    }
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
