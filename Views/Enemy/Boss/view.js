const { boss } = input;
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
${ItemLootTable(Items) /* 掉落物品 */}
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
<td><img class="${id}-image"></td>
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
            <td colspan="4">魔法属性有效率</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img class="icon-element-earth"></td>
            <td>${earthArtRate}</td>
            <td><img class="icon-element-time"></td>
            <td>${timeArtRate}</td>
        </tr>
        <tr>
            <td><img class="icon-element-water"></td>
            <td>${waterArtRate}</td>
            <td><img class="icon-element-space"></td>
            <td>${spaceArtRate}</td>
        </tr>
        <tr>
            <td><img class="icon-element-fire"></td>
            <td>${fireArtRate}</td>
            <td><img class="icon-element-mirage"></td>
            <td>${mirageArtRate}</td>
        </tr>
        <tr>
            <td><img class="icon-element-wind"></td>
            <td>${windArtRate}</td>
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
            <td colspan="8">取得耀晶石</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img class="icon-sepith-earth" /></td>
            <td>${earthSepithLoot}</td>
            <td><img class="icon-sepith-water" /></td>
            <td>${waterSepithLoot}</td>
            <td><img class="icon-sepith-fire" /></td>
            <td>${fireSepithLoot}</td>
            <td><img class="icon-sepith-wind" /></td>
            <td>${windSepithLoot}</td>
        </tr>
        <tr>
            <td><img class="icon-sepith-time" /></td>
            <td>${timeSepithLoot}</td>
            <td><img class="icon-sepith-space" /></td>
            <td>${spaceSepithLoot}</td>
            <td><img class="icon-sepith-mirage" /></td>
            <td>${mirageSepithLoot}</td>
            <td><img class="icon-sepith-mass" /></td>
            <td>${massSepithLoot}</td>
        </tr>
    </tbody>
</table>
  `;
};

const ItemLootTable = (loots) => {
  const [l1, l2, l3, l4] = loots;
  return `
<table class="item-loot-table">
<thead>
<tr>
<td colspan="2">取得道具</td>
</tr>
</thead>
<tbody>
<tr>
<td>${l1}</td>
<td>${l3}</td>
</tr>
<tr>
<td>${l2}</td>
<td>${l4}</td>
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
<td colspan="4">失衡引发几率</td>
</tr>
</thead>
<tbody>
<tr>
<td>斩</td>
<td>突</td>
<td>射</td>
<td>钢</td>
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
            <td colspan="6">状态变化有效率</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>中毒</td>
            <td>${poisonRate}</td>
            <td>炎伤</td>
            <td>${burnRate}</td>
            <td>即死</td>
            <td>${deathRate}</td>
        </tr>
        <tr>
            <td>封技</td>
            <td>${sealRate}</td>
            <td>冻结</td>
            <td>${freezeRate}</td>
            <td>噩梦</td>
            <td>${nightmareRate}</td>
        </tr>
        <tr>
            <td>封魔</td>
            <td>${muteRate}</td>
            <td>石化</td>
            <td>${petrifyRate}</td>
            <td>延迟</td>
            <td>${delayRate}</td>
        </tr>
        <tr>
            <td>黑暗</td>
            <td>${blindRate}</td>
            <td>气绝</td>
            <td>${faintRate}</td>
            <td>消失</td>
            <td>${vanishRate}</td>
        </tr>
        <tr>
            <td>睡眠</td>
            <td>${sleepRate}</td>
            <td>混乱</td>
            <td>${confuseRate}</td>
            <td>能力降低</td>
            <td>${sDownRate}</td>
        </tr>
    </tbody>
</table>
`;
};

const admonition = `
\`\`\`ad-enemy-boss
title: ${boss.Name}
${BuildPage(boss)}
\`\`\``;
dv.paragraph(admonition);
