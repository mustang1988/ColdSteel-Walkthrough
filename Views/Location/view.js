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
    const fileName = link.path.split("/");
    const html = `<a aria-label-position="top" aria-label="${
      fileName[fileName.length - 1]
    } > ^${link.subpath}" data-href="${fileName[fileName.length - 1]}#^${
      link.subpath
    }" href="${fileName[fileName.length - 1]}#^${
      link.subpath
    }" class="internal-link data-link-icon data-link-icon-after data-link-text" target="_blank" rel="noopener" data-link-id="${
      file.ID
    }" data-link-tags="" data-link-path="${link.path}">${
      link.display || ""
    }</a>`;
    return html;
  });
};

const BuildMap = (id, maps) => {
  let md = ``;
  for (let i = 0; i < maps.length; i++) {
    const map = maps[i];
    md += `
\`\`\`leaflet
id: ${id}-${i}
image: [[${map.path}]]
height: 400px
lat: 0
long: 0
minZoom: 8
maxZoom: 10
defaultZoom: 8
unit: meters
darkMode: false
\`\`\`
    `;
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
  return dv.markdownList(GetLinks([...chests, ...monster_chests]));
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
  return dv.markdownList(GetLinks([...monsters, ...bosses]));
};

const BuildFish = (fishes) => {
  return fishes.length > 0
    ? dv.markdownList(GetLinks(fishes))
    : dv.markdownList(["无"]);
};

const admonition = `
\`\`\`\`ad-location
title: ${name}
collapse: open
${BuildMap(id, maps)}
## 宝箱
${BuildChests(id)}
## 战斗笔记
${BuildMonster(id)}
## 钓鱼笔记
${BuildFish(fishes || [])}
\`\`\`\`
`;
dv.paragraph(admonition);
