const { enemy, boss } = input;
const BuildPage = (boss) => {
  const {
    ID: id,
    Description: description,
    Properties: props,
    ArtRate,
    Loots: { Sepiths, Items },
    Unbalance: unbalance,
    StatusRate,
  } = boss;
  return `
<table class="monster-view-table">
<tbody>
<tr>
<td class="monster-view-v-half">
<table>
<tbody>
<tr>
<td>
${PropertyTable(id, props, description) /* 属性 */}
</td>
</tr>
<tr>
<td>
${ArtRateTable(ArtRate) /* 魔法有效率 */}
</td>
</tr>
</tbody>
</table>
</td>
<td class="monster-view-v-half">
<table>
<tr>
<td>
${SepithLootTable(Sepiths) /* 掉落晶片 */}
</td>
</tr>
<tr>
<td>
${ItemLootTable(Items || []) /* 掉落物品 */}
</td>
</tr>
<tr>
<td>
${UnbalanceRateTable(unbalance /* 失衡有效率 */)}
</td>
</tr>
<tr>
<td>
${StatusRateTable(StatusRate) /* 异常状态有效率 */}
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
`;
};

const PropertyTable = (id, properties, desc) => {
  const {
    LV: level,
    HP: hp,
    EXP: exp,
    STR: str,
    DEF: def,
    ATS: ats,
    ADF: adf,
    SPD: spd,
  } = properties;
  return `
<table class="description-table">
<tbody>
<tr>
<td><img class="enemy-${id}-image icon-min-size-monster"></td>
<td>
<table class="property-table">
<tbody>
<tr>
<td>LV</td>
<td>${level}</td>
</tr>
<tr>
<td>HP</td>
<td>${hp}</td>
</tr>
<tr>
<td>EXP</td>
<td>${exp}</td>
</tr>
<tr>
<td>STR</td>
<td>${str}</td>
</tr>
<tr>
<td>DEF</td>
<td>${def}</td>
</tr>
<tr>
<td>ATS</td>
<td>${ats}</td>
</tr>
<tr>
<td>ADF</td>
<td>${adf}</td>
</tr>
<tr>
<td>SPD</td>
<td>${spd}</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td colspan="2">${desc}</td>
</tr>
</tbody>
</table>
  `;
};

const ArtRateTable = (rates) => {
  const {
    Earth: earthArtRate,
    Water: waterArtRate,
    Fire: fireArtRate,
    Wind: windArtRate,
    Time: timeArtRate,
    Space: spaceArtRate,
    Mirage: mirageArtRate,
  } = rates;
  return `
<table class="art-rate-table">
    <thead>
        <tr>
            <td colspan="4"><h1>魔法属性有效率</h1></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="icon-td"><img class="icon-element-earth icon-min-size"></td>
            <td><div style="width: ${
              (earthArtRate / 200) * 80
            }%;" class="element-rate-bar element-rate-bar-earth">
            </div>
            <span>${earthArtRate}</span></td>
            <td class="icon-td"><img class="icon-element-time icon-min-size"></td>
            <td><div style="width: ${
              (timeArtRate / 200) * 80
            }%;" class="element-rate-bar element-rate-bar-time"></div>
            <span>${timeArtRate}</span></td>
        </tr>
        <tr>
            <td class="icon-td"><img class="icon-element-water icon-min-size"></td>
            <td><div style="width: ${
              (waterArtRate / 200) * 80
            }%;" class="element-rate-bar element-rate-bar-water"></div>
            <span>${waterArtRate}</span></td>
            <td class="icon-td"><img class="icon-element-space icon-min-size"></td>
            <td><div style="width: ${
              (spaceArtRate / 200) * 80
            }%;" class="element-rate-bar element-rate-bar-space"></div>
            <span>${spaceArtRate}</span></td>
        </tr>
        <tr>
            <td class="icon-td"><img class="icon-element-fire icon-min-size"></td>
            <td><div style="width: ${
              (fireArtRate / 200) * 80
            }%;" class="element-rate-bar element-rate-bar-fire"></div>
            <span>${fireArtRate}</span></td>
            <td class="icon-td"><img class="icon-element-mirage icon-min-size"></td>
            <td><div style="width: ${
              (mirageArtRate / 200) * 80
            }%;" class="element-rate-bar element-rate-bar-mirage"></div>
            <span>${mirageArtRate}</span></td>
        </tr>
        <tr>
            <td class="icon-td"><img class="icon-element-wind icon-min-size"></td>
            <td><div style="width: ${
              (windArtRate / 200) * 80
            }%;" class="element-rate-bar element-rate-bar-wind"></div>
            <span>${windArtRate}</span></td>
        </tr>
    </tbody>
</table>
`;
};

const SepithLootTable = (loots) => {
  const {
    Earth: earthSepithLoot,
    Water: waterSepithLoot,
    Fire: fireSepithLoot,
    Wind: windSepithLoot,
    Time: timeSepithLoot,
    Space: spaceSepithLoot,
    Mirage: mirageSepithLoot,
    Mass: massSepithLoot,
  } = loots;
  return `
<table class="sepith-loot-table">
    <thead>
        <tr>
            <td colspan="8"><h1>取得耀晶石</h1></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img class="icon-sepith-earth icon-min-size-sepith" /></td>
            <td>${earthSepithLoot}</td>
            <td><img class="icon-sepith-water icon-min-size-sepith" /></td>
            <td>${waterSepithLoot}</td>
            <td><img class="icon-sepith-fire icon-min-size-sepith" /></td>
            <td>${fireSepithLoot}</td>
            <td><img class="icon-sepith-wind icon-min-size-sepith" /></td>
            <td>${windSepithLoot}</td>
        </tr>
        <tr>
            <td><img class="icon-sepith-time icon-min-size-sepith" /></td>
            <td>${timeSepithLoot}</td>
            <td><img class="icon-sepith-space icon-min-size-sepith" /></td>
            <td>${spaceSepithLoot}</td>
            <td><img class="icon-sepith-mirage icon-min-size-sepith" /></td>
            <td>${mirageSepithLoot}</td>
            <td><img class="icon-sepith-mass icon-min-size-sepith" /></td>
            <td>${massSepithLoot}</td>
        </tr>
    </tbody>
</table>
  `;
};

const ItemLootTable = (loots) => {
  const items = loots.map((i) => {
    const file = dv.page(i.path);
    const link =
      i.type === "file"
        ? dv.fileLink(i.path, false, i.display)
        : dv.blockLink(i.path, i.subpath, false, i.display);
    return `<a aria-label-position="top" aria-label="${link.path} > ^${
      link.subpath
    }" data-href="${link.path}#^${link.subpath}" href="${link.path}#^${
      link.subpath
    }" class="internal-link data-link-icon data-link-icon-after data-link-text" target="_blank" rel="noopener" data-link-id="${
      file.ID || ""
    }" data-link-tags="" data-link-path="${link.path}">${
      link.display || ""
    }</a>`;
  });
  const [l1, l2, l3, l4] = items;
  return `
<table class="item-loot-table">
<thead>
<tr>
<td colspan="2"><h1>取得道具</h1></td>
</tr>
</thead>
<tbody>
<tr>
<td>${l1 ? l1 : ""}</td>
<td>${l3 ? l3 : ""}</td>
</tr>
<tr>
<td>${l2 ? l2 : ""}</td>
<td>${l4 ? l4 : ""}</td>
</tr>
</tbody>
</table>`;
};

const UnbalanceRateTable = (rates) => {
  const {
    Slash: slashRate,
    Thrust: thrustRate,
    Pierce: pierceRate,
    Strike: strileRate,
  } = rates;
  return `
<table class="unbalance-rate-table">
<thead>
<tr>
<td colspan="4"><h1>失衡引发几率</h1></td>
</tr>
</thead>
<tbody>
<tr>
<td><h2>斩</h2></td>
<td><h2>突</h2></td>
<td><h2>射</h2></td>
<td><h2>钢</h2></td>
</tr>
<tr>
<td>${RenderUnballanceRate(slashRate)}</td>
<td>${RenderUnballanceRate(thrustRate)}</td>
<td>${RenderUnballanceRate(pierceRate)}</td>
<td>${RenderUnballanceRate(strileRate)}</td>
</tr>
</tbody>
</table>
  `;
};

const RenderUnballanceRate = (value) => {
  let html = ``;
  for (let i = 1; i <= 5; i++) {
    html +=
      i <= value
        ? `<img class="icon-unballance-start">`
        : `<img class="icon-unballance-empty-start">`;
  }
  return html;
};

const StatusRateTable = (status) => {
  const {
    Poison: poisonRate,
    Burn: burnRate,
    Death: deathRate,
    Seal: sealRate,
    Freeze: freezeRate,
    Nightmare: nightmareRate,
    Mute: muteRate,
    Petrify: petrifyRate,
    Delay: delayRate,
    Blind: blindRate,
    Faint: faintRate,
    Vanish: vanishRate,
    Sleep: sleepRate,
    Confuse: confuseRate,
    SDown: sDownRate,
  } = status;
  return `
<table class="status-rate-table">
    <thead>
        <tr>
            <td colspan="9"><h1>状态变化有效率<h1></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="icon-td"><img class="status-poison icon-min-size" /></td>
            <td>中毒</td>
            <td>${poisonRate}</td>
            <td class="icon-td"><img class="status-burn icon-min-size" /></td>
            <td>炎伤</td>
            <td>${burnRate}</td>
            <td class="icon-td"><img class="status-death icon-min-size" /></td>
            <td>即死</td>
            <td>${deathRate}</td>
        </tr>
        <tr>
            <td class="icon-td"><img class="status-seal icon-min-size" /></td>
            <td>封技</td>
            <td>${sealRate}</td>
            <td class="icon-td"><img class="status-freeze icon-min-size" /></td>
            <td>冻结</td>
            <td>${freezeRate}</td>
            <td class="icon-td"><img class="status-nightmare icon-min-size" /></td>
            <td>恶梦</td>
            <td>${nightmareRate}</td>
        </tr>
        <tr>
            <td class="icon-td"><img class="status-mute icon-min-size" /></td>
            <td>封魔</td>
            <td>${muteRate}</td>
            <td class="icon-td"><img class="status-petrify icon-min-size" /></td>
            <td>石化</td>
            <td>${petrifyRate}</td>
            <td class="icon-td"><img class="status-delay icon-min-size" /></td>
            <td>延迟</td>
            <td>${delayRate}</td>
        </tr>
        <tr>
            <td class="icon-td"><img class="status-blind icon-min-size" /></td>
            <td>黑暗</td>
            <td>${blindRate}</td>
            <td class="icon-td"><img class="status-faint icon-min-size" /></td>
            <td>气绝</td>
            <td>${faintRate}</td>
            <td class="icon-td"><img class="status-vanish icon-min-size" /></td>
            <td>消失</td>
            <td>${vanishRate}</td>
        </tr>
        <tr>
            <td class="icon-td"><img class="status-sleep icon-min-size" /></td>
            <td>睡眠</td>
            <td>${sleepRate}</td>
            <td class="icon-td"><img class="status-confuse icon-min-size" /></td>
            <td>混乱</td>
            <td>${confuseRate}</td>
            <td class="icon-td"><img class="status-s-down icon-min-size" /></td>
            <td>能力降低</td>
            <td>${sDownRate}</td>
        </tr>
    </tbody>
</table>
`;
};

const admonition = `
\`\`\`ad-enemy-${boss ? "boss" : "monster"}
title: ${enemy.Name}
${BuildPage(enemy)}
\`\`\`
`;
dv.paragraph(admonition);
