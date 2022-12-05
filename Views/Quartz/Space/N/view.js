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
const buildEffects = (effects) => {
  if (effects != null) {
    return `
\`\`\`ad-list
title: 装备效果
${dv.markdownList(effects)}
\`\`\``;
  }
  return "";
};
const buildArts = (arts) => {
  if (arts != null) {
    return `
\`\`\`ad-art
title: 魔法
${dv.markdownList(arts)}
\`\`\``;
  }
  return "";
};
const buildComposition = (compositions) => {
  if (compositions != null) {
    return `
\`\`\`ad-sepith-space
title: 合成素材
${dv.markdownList(compositions)}
\`\`\``;
  }
  return "";
};
const buildExchange = (exchanges) => {
  if (exchanges != null) {
    return `
\`\`\`ad-upgrade
title: 交换素材
${dv.markdownList(
  exchanges.map((ex) => {
    const {
      Item: { path, subpath, display },
      Count,
    } = ex;
            return (subpath
          ? dv.blockLink(path, subpath, false, display)
          : dv.fileLink(path, false, display)) + `\tx\t${Count}`;
  })
)}
\`\`\``;
  }
  return "";
};
const admonition = `\`\`\`\`ad-quartz-space-n
title: ${name}
${buildEffects(effects)}
${buildArts(arts)}
${buildComposition(compositions)}
${buildExchange(exchanges)}
\`\`\`\``;
dv.paragraph(admonition);
