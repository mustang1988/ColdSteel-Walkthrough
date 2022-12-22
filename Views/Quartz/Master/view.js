/**
 * Custom render view for master quartz of element earth
 */
const {
  quartz: {
    Properties: props,
    Arts: arts,
    Abilities: abs,
    Aliases,
    Element: elem,
    ID: id,
    When: when,
    How: how,
  },
} = input;
const [name] = Aliases;
const LinkToDisplay = (loots) => {
  if (loots.length === 0) {
    return ["-"];
  }
  const items = loots.map((i) => {
    const file = dv.page(i.path);
    const link =
      i.type === "file"
        ? dv.fileLink(i.path, false, i.display)
        : dv.blockLink(i.path, i.subpath, false, i.display);
    const { path, subpath, display } = link;
    const aria_label = subpath ? `${path} > ${subpath}` : path;
    const data_href = subpath ? `${path}#^${subpath}` : path;
    const href = data_href;
    const data_link_id = display || "";
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
  });
  return items;
};
const GetDataByLevel = (level, arts, abs, props) => {
  const level_arts =
    arts === null || arts === undefined || arts.length === 0
      ? []
      : arts
          .filter((art) => art.Level <= level)
          .map((art) => art.Arts || [])
          .flat();
  const level_abs = abs
    .filter((ab) => ab.Level == level)
    .map((ab) => ab.Abilities || [])
    .flat();
  const level_props = props
    .filter((prop) => prop.Level == level)
    .map((prop) => prop.Properties)
    .flat()[0] || {
    HP: "-",
    EP: "-",
    STR: "-",
    DEF: "-",
    ATS: "-",
    ADF: "-",
    SPD: "-",
  };
  return {
    arts:
      "</br></br>" +
      LinkToDisplay(level_arts).join("</br></br>") +
      "</br></br>",
    abs: "</br></br>" + level_abs.join("</br></br>") + "</br></br>",
    props: level_props,
  };
};
const admonition = `
\`\`\`ad-quartz-master-${elem.toLowerCase()}
title: ${name}
<body>
    <table class="master-quartz-table">
        <thead>
            <tr>
                <td colspan="10">
                  <img class="${id.replace(/\./g, "-").toLowerCase()}-image" />
                </td>
            </tr>
            <tr>
                <td>LV</td>
                <td>HP</td>
                <td>EP</td>
                <td>STR</td>
                <td>DEF</td>
                <td>ATS</td>
                <td>ADF</td>
                <td>SPD</td>
                <td>魔法</td>
                <td>能力</td>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>1</td>
              <td>${GetDataByLevel(1, arts, abs, props).props.HP}</td>
              <td>${GetDataByLevel(1, arts, abs, props).props.EP}</td>
              <td>${GetDataByLevel(1, arts, abs, props).props.STR}</td>
              <td>${GetDataByLevel(1, arts, abs, props).props.DEF}</td>
              <td>${GetDataByLevel(1, arts, abs, props).props.ATS}</td>
              <td>${GetDataByLevel(1, arts, abs, props).props.ADF}</td>
              <td>${GetDataByLevel(1, arts, abs, props).props.SPD}</td>
              <td>${GetDataByLevel(1, arts, abs, props).arts}</td>
              <td>${GetDataByLevel(1, arts, abs, props).abs}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>${GetDataByLevel(2, arts, abs, props).props.HP}</td>
              <td>${GetDataByLevel(2, arts, abs, props).props.EP}</td>
              <td>${GetDataByLevel(2, arts, abs, props).props.STR}</td>
              <td>${GetDataByLevel(2, arts, abs, props).props.DEF}</td>
              <td>${GetDataByLevel(2, arts, abs, props).props.ATS}</td>
              <td>${GetDataByLevel(2, arts, abs, props).props.ADF}</td>
              <td>${GetDataByLevel(2, arts, abs, props).props.SPD}</td>
              <td>${dv.markdownList(
                GetDataByLevel(2, arts, abs, props).arts
              )}</td>
              <td>${dv.markdownList(
                GetDataByLevel(2, arts, abs, props).abs
              )}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>${GetDataByLevel(3, arts, abs, props).props.HP}</td>
              <td>${GetDataByLevel(3, arts, abs, props).props.EP}</td>
              <td>${GetDataByLevel(3, arts, abs, props).props.STR}</td>
              <td>${GetDataByLevel(3, arts, abs, props).props.DEF}</td>
              <td>${GetDataByLevel(3, arts, abs, props).props.ATS}</td>
              <td>${GetDataByLevel(3, arts, abs, props).props.ADF}</td>
              <td>${GetDataByLevel(3, arts, abs, props).props.SPD}</td>
              <td>${dv.markdownList(
                GetDataByLevel(3, arts, abs, props).arts
              )}</td>
              <td>${dv.markdownList(
                GetDataByLevel(3, arts, abs, props).abs
              )}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>${GetDataByLevel(4, arts, abs, props).props.HP}</td>
              <td>${GetDataByLevel(4, arts, abs, props).props.EP}</td>
              <td>${GetDataByLevel(4, arts, abs, props).props.STR}</td>
              <td>${GetDataByLevel(4, arts, abs, props).props.DEF}</td>
              <td>${GetDataByLevel(4, arts, abs, props).props.ATS}</td>
              <td>${GetDataByLevel(4, arts, abs, props).props.ADF}</td>
              <td>${GetDataByLevel(4, arts, abs, props).props.SPD}</td>
              <td>${dv.markdownList(
                GetDataByLevel(4, arts, abs, props).arts
              )}</td>
              <td>${dv.markdownList(
                GetDataByLevel(4, arts, abs, props).abs
              )}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>${GetDataByLevel(5, arts, abs, props).props.HP}</td>
              <td>${GetDataByLevel(5, arts, abs, props).props.EP}</td>
              <td>${GetDataByLevel(5, arts, abs, props).props.STR}</td>
              <td>${GetDataByLevel(5, arts, abs, props).props.DEF}</td>
              <td>${GetDataByLevel(5, arts, abs, props).props.ATS}</td>
              <td>${GetDataByLevel(5, arts, abs, props).props.ADF}</td>
              <td>${GetDataByLevel(5, arts, abs, props).props.SPD}</td>
              <td>${dv.markdownList(
                GetDataByLevel(5, arts, abs, props).arts
              )}</td>
              <td>${dv.markdownList(
                GetDataByLevel(5, arts, abs, props).abs
              )}</td>
            </tr>
        </tbody>
    </table>
</body>
\`\`\`
`;
dv.paragraph(admonition);
