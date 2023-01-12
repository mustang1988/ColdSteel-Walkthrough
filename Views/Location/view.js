const {
  location: { ID: id, Maps: maps, Name: name, Fishes: fishes },
} = input;
const CHEST_DB = "Database/Treasure Chest/Treasure Chest.md";
const MONSTER_CHEST_DB = "Database/Treasure Chest/Monster Treasure Chest.md";
const MONSTER_DB = "Database/Enemy/Monster.md";
const BOSS_DB = "Database/Enemy/Boss.md";

const GetLinks = (items) => {
  return items.map((i) => {
    const file = dv.page(i.path);
    const link =
      i.type === "file"
        ? dv.fileLink(i.path, false, i.display)
        : dv.blockLink(i.path, i.subpath, false, i.display);
    const { path, subpath, display } = link;
    const aria_label = subpath ? `${path} > ${subpath}` : path;
    const data_href = subpath ? `${path}#^${subpath}` : path;
    const href = data_href;
    const data_link_id = file.ID || "";
    let data = dv.page(path)?.TreasureChests
      ? dv.page(path)?.TreasureChests?.filter((tc) => tc.ID === display)
      : dv.page(path)?.MonsterTreasureChests?.filter((tc) => tc.ID === display);
    data = Array.isArray(data) ? data[0] || null : null;
    console.log(data);
    const link_display =
      display +
      (data != null && data.Remark != null ? "(" + data.Remark + ")" : "");
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
data-link-path="${path}">${link_display || ""}
</a>`;
  });
};

const BuildMap = (id, maps) => {
  let md = ``;
  for (let i = 0; i < maps.length; i++) {
    const map = maps[i];
    const map_path = map.path;
    md += map_path
      ? `
\`\`\`leaflet
id: ${id}-${i}
image: [[${map_path}]]
height: 400px
lat: 0
long: 0
minZoom: 8
maxZoom: 10
defaultZoom: 8
unit: meters
darkMode: false
\`\`\`
`
      : "";
  }
  return md;
};

const BuildChests = (id) => {
  const chests = (
    dv
      .page(CHEST_DB)
      .TreasureChests?.filter((tc) => tc.Location.subpath === id) || []
  ).map((m) =>
    m ? dv.blockLink(CHEST_DB, m.ID, false, m.Name || m.ID) : undefined
  );
  const monster_chests = (
    dv
      .page(MONSTER_CHEST_DB)
      .MonsterTreasureChests?.filter((tc) => tc.Location.subpath === id) || []
  ).map((m) =>
    m ? dv.blockLink(MONSTER_CHEST_DB, m.ID, false, m.Name || m.ID) : undefined
  );

  const chest_list = [...chests, ...monster_chests].sort(
    (c1, c2) => parseInt(c1.subpath) - parseInt(c2.subpath)
  );
  return `
<h1 class="treasure-chest-header">宝箱</span>

${dv.markdownList(GetLinks(chest_list))}
  `;
};

const BuildMonster = (id) => {
  const monsters = (
    dv
      .page(MONSTER_DB)
      .Monsters?.filter((m) =>
        m.Locations.map((l) => l.subpath).includes(id)
      ) || []
  ).map((m) => (m ? dv.blockLink(MONSTER_DB, m.ID, false, m.Name) : undefined));
  const bosses = (
    dv
      .page(BOSS_DB)
      .Bosses?.filter((m) => m.Locations.map((l) => l.subpath).includes(id)) ||
    []
  ).map((m) => (m ? dv.blockLink(BOSS_DB, m.ID, false, m.Name) : undefined));
  return `
<h1 class="monster-header">战斗笔记</h1>

${dv.markdownList(GetLinks([...monsters, ...bosses]))}
  `;
};

const BuildFish = (fishes) => {
  return fishes.length > 0
    ? `
<h1 class="fish-header">钓鱼笔记</h1>

${dv.markdownList(GetLinks(fishes))}
`
    : "";
};

const admonition = `
\`\`\`\`ad-location
title: ${name}
collapse: open

${BuildMap(id, maps)}

${BuildChests(id)}

${BuildMonster(id)}

${BuildFish(fishes || [])}
\`\`\`\`
`;
dv.paragraph(admonition);
