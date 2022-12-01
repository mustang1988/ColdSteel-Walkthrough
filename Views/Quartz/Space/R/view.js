const {
  quartz: {
    ID: id,
    Name: name,
    Arts: arts,
    Effects: effects,
    Compositions: compositions,
    Exchanges: exchanges,
  },
} = input;
const compositions_content =
  compositions == null
    ? ["无法通过合成获得"]
    : compositions.map((c) =>
        c.Item.subpath
          ? dv.blockLink(c.Item.path, c.Item.subpath, false, `x${c.Count}`)
          : dv.fileLink(c.Item.path, false, `x${c.Count}`)
      );
const exchanges_content =
  exchanges == null
    ? ["无法通过交换获得"]
    : exchanges.map((c) =>
        c.Item.id
          ? dv.blockLink(c.Item.path, c.Item.id, false, `x${c.Count}`)
          : dv.fileLink(c.Item.path, false, `x${c.Count}`)
      );
const admonition = `\`\`\`ad-quartz-space-r
title: ${name}

装备效果:
${dv.markdownList(effects ? effects : ["无"])}

魔法:
${arts === null ? "无" : dv.markdownList(arts)}

合成素材:
${dv.markdownList(compositions_content)}

交换素材:
${dv.markdownList(exchanges_content)}

\`\`\``;
dv.paragraph(admonition);
