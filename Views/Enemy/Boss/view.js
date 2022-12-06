const { boss } = input;
const { Name: name } = boss;
// const BuildPage = (boss) => {
//   const {
//     ID: id,
//     Description: description,
//     Properties: props,
//     ArtRate,
//     Loots: { Sepiths, Items },
//     Unbalance: unbalance,
//     StatusRate,
//   } = boss;
//   return `
// <table class="monster-view-table">
// <tbody>
// <tr>
// <td class="monster-view-v-half">
// <table>
// <tbody>
// <tr>
// <td>
// ${PropertyTable(id, props, description) /* 属性 */}
// </td>
// </tr>
// <tr>
// <td>
// ${ArtRateTable(ArtRate) /* 魔法有效率 */}
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// <td class="monster-view-v-half">
// <table>
// <tr>
// <td>
// ${SepithLootTable(Sepiths) /* 掉落晶片 */}
// </td>
// </tr>
// <tr>
// <td>
// ${ItemLootTable(Items) /* 掉落物品 */}
// </td>
// </tr>
// <tr>
// <td>
// ${UnbalanceRateTable(unbalance /* 失衡有效率 */)}
// </td>
// </tr>
// <tr>
// <td>
// ${StatusRateTable(StatusRate) /* 异常状态有效率 */}
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// `;
// };

// const PropertyTable = (id, properties, desc) => {
//   const {
//     LV: level,
//     HP: hp,
//     EXP: exp,
//     STR: str,
//     DEF: def,
//     ATS: ats,
//     ADF: adf,
//     SPD: spd,
//   } = properties;
//   return `
// <table class="description-table">
// <tbody>
// <tr>
// <td><img class="${id}-image"></td>
// <td>
// <table class="property-table">
// <tbody>
// <tr>
// <td>LV</td>
// <td>${level}</td>
// </tr>
// <tr>
// <td>HP</td>
// <td>${hp}</td>
// </tr>
// <tr>
// <td>EXP</td>
// <td>${exp}</td>
// </tr>
// <tr>
// <td>STR</td>
// <td>${str}</td>
// </tr>
// <tr>
// <td>DEF</td>
// <td>${def}</td>
// </tr>
// <tr>
// <td>ATS</td>
// <td>${ats}</td>
// </tr>
// <tr>
// <td>ADF</td>
// <td>${adf}</td>
// </tr>
// <tr>
// <td>SPD</td>
// <td>${spd}</td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// <tr>
// <td colspan="2">${desc}</td>
// </tr>
// </tbody>
// </table>
//   `;
// };

// const ArtRateTable = (rates) => {
//   const {
//     Earth: earthArtRate,
//     Water: waterArtRate,
//     Fire: fireArtRate,
//     Wind: windArtRate,
//     Time: timeArtRate,
//     Space: spaceArtRate,
//     Mirage: mirageArtRate,
//   } = rates;
//   return `
// <table class="art-rate-table">
//     <thead>
//         <tr>
//             <td colspan="4"><h1>魔法属性有效率</h1></td>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td><img class="icon-element-earth"></td>
//             <td>${earthArtRate}</td>
//             <td><img class="icon-element-time"></td>
//             <td>${timeArtRate}</td>
//         </tr>
//         <tr>
//             <td><img class="icon-element-water"></td>
//             <td>${waterArtRate}</td>
//             <td><img class="icon-element-space"></td>
//             <td>${spaceArtRate}</td>
//         </tr>
//         <tr>
//             <td><img class="icon-element-fire"></td>
//             <td>${fireArtRate}</td>
//             <td><img class="icon-element-mirage"></td>
//             <td>${mirageArtRate}</td>
//         </tr>
//         <tr>
//             <td><img class="icon-element-wind"></td>
//             <td>${windArtRate}</td>
//         </tr>
//     </tbody>
// </table>
// `;
// };

// const SepithLootTable = (loots) => {
//   const {
//     Earth: earthSepithLoot,
//     Water: waterSepithLoot,
//     Fire: fireSepithLoot,
//     Wind: windSepithLoot,
//     Time: timeSepithLoot,
//     Space: spaceSepithLoot,
//     Mirage: mirageSepithLoot,
//     Mass: massSepithLoot,
//   } = loots;
//   return `
// <table class="sepith-loot-table">
//     <thead>
//         <tr>
//             <td colspan="8"><h1>取得耀晶石</h1></td>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td><img class="icon-sepith-earth" /></td>
//             <td>${earthSepithLoot}</td>
//             <td><img class="icon-sepith-water" /></td>
//             <td>${waterSepithLoot}</td>
//             <td><img class="icon-sepith-fire" /></td>
//             <td>${fireSepithLoot}</td>
//             <td><img class="icon-sepith-wind" /></td>
//             <td>${windSepithLoot}</td>
//         </tr>
//         <tr>
//             <td><img class="icon-sepith-time" /></td>
//             <td>${timeSepithLoot}</td>
//             <td><img class="icon-sepith-space" /></td>
//             <td>${spaceSepithLoot}</td>
//             <td><img class="icon-sepith-mirage" /></td>
//             <td>${mirageSepithLoot}</td>
//             <td><img class="icon-sepith-mass" /></td>
//             <td>${massSepithLoot}</td>
//         </tr>
//     </tbody>
// </table>
//   `;
// };

// const ItemLootTable = (loots) => {
//   const [l1, l2, l3, l4] = loots;
//   return `
// <table class="item-loot-table">
// <thead>
// <tr>
// <td colspan="2"><h1>取得道具</h1></td>
// </tr>
// </thead>
// <tbody>
// <tr>
// <td>${l1}</td>
// <td>${l3}</td>
// </tr>
// <tr>
// <td>${l2}</td>
// <td>${l4}</td>
// </tr>
// </tbody>
// </table>`;
// };

// const UnbalanceRateTable = (rates) => {
//   const {
//     Slash: slashRate,
//     Thrust: thrustRate,
//     Pierce: pierceRate,
//     Strike: strileRate,
//   } = rates;
//   return `
// <table class="unbalance-rate-table">
// <thead>
// <tr>
// <td colspan="4"><h1>失衡引发几率</h1></td>
// </tr>
// </thead>
// <tbody>
// <tr>
// <td><h2>斩</h2></td>
// <td><h2>突</h2></td>
// <td><h2>射</h2></td>
// <td><h2>钢</h2></td>
// </tr>
// <tr>
// <td>${RenderUnballanceRate(slashRate)}</td>
// <td>${RenderUnballanceRate(thrustRate)}</td>
// <td>${RenderUnballanceRate(pierceRate)}</td>
// <td>${RenderUnballanceRate(strileRate)}</td>
// </tr>
// </tbody>
// </table>
//   `;
// };

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

// const StatusRateTable = (status) => {
//   const {
//     Poison: poisonRate,
//     Burn: burnRate,
//     Death: deathRate,
//     Seal: sealRate,
//     Freeze: freezeRate,
//     Nightmare: nightmareRate,
//     Mute: muteRate,
//     Petrify: petrifyRate,
//     Delay: delayRate,
//     Blind: blindRate,
//     Faint: faintRate,
//     Vanish: vanishRate,
//     Sleep: sleepRate,
//     Confuse: confuseRate,
//     SDown: sDownRate,
//   } = status;
//   return `
// <table class="status-rate-table">
//     <thead>
//         <tr>
//             <td colspan="9"><h1>状态变化有效率<h1></td>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td><img class="status-poison" /></td>
//             <td>中毒</td>
//             <td>${poisonRate}</td>
//             <td><img class="status-burn" /></td>
//             <td>炎伤</td>
//             <td>${burnRate}</td>
//             <td><img class="status-death" /></td>
//             <td>即死</td>
//             <td>${deathRate}</td>
//         </tr>
//         <tr>
//             <td><img class="status-seal" /></td>
//             <td>封技</td>
//             <td>${sealRate}</td>
//             <td><img class="status-freeze" /></td>
//             <td>冻结</td>
//             <td>${freezeRate}</td>
//             <td><img class="status-nightmare" /></td>
//             <td>恶梦</td>
//             <td>${nightmareRate}</td>
//         </tr>
//         <tr>
//             <td><img class="status-mute" /></td>
//             <td>封魔</td>
//             <td>${muteRate}</td>
//             <td><img class="status-petrify" /></td>
//             <td>石化</td>
//             <td>${petrifyRate}</td>
//             <td><img class="status-delay" /></td>
//             <td>延迟</td>
//             <td>${delayRate}</td>
//         </tr>
//         <tr>
//             <td><img class="status-blind" /></td>
//             <td>黑暗</td>
//             <td>${blindRate}</td>
//             <td><img class="status-faint" /></td>
//             <td>气绝</td>
//             <td>${faintRate}</td>
//             <td><img class="status-vanish" /></td>
//             <td>消失</td>
//             <td>${vanishRate}</td>
//         </tr>
//         <tr>
//             <td><img class="status-sleep" /></td>
//             <td>睡眠</td>
//             <td>${sleepRate}</td>
//             <td><img class="status-confuse" /></td>
//             <td>混乱</td>
//             <td>${confuseRate}</td>
//             <td><img class="status-s-down" /></td>
//             <td>能力降低</td>
//             <td>${sDownRate}</td>
//         </tr>
//     </tbody>
// </table>
// `;
// };

const buildHTML = (boss) => {
  console.log(boss);
  const {
    Properties: { LV, HP, EXP, STR, DEF, ATS, ADF, SPD },
    Description,
    ArtRate,
    Loots: { Sepiths, Items },
    Unbalance: { Slash, Thrust, Pierce, Strike },
    StatusRate,
    ID,
  } = boss;
  return `
  <div class="monster-view">
  <div class="monster-v-half">
    <div class="description">
      <div class="description-v-half monster-img"><img class="${ID}-image"></div>
      <div class="description-v-half monster-property">
        <ul>
          <li>
            <label>LV</label>
            <label>${LV}</label>
          </li>
          <li>
            <label>HP</label>
            <label>${HP}</label>
          </li>
          <li>
            <label>EXP</label>
            <label>${EXP}</label>
          </li>
          <li>
            <label>STR</label>
            <label>${STR}</label>
          </li>
          <li>
            <label>DEF</label>
            <label>${DEF}</label>
          </li>
          <li>
            <label>ATS</label>
            <label>${ATS}</label>
          </li>
          <li>
            <label>ADF</label>
            <label>${ADF}</label>
          </li>
          <li>
            <label>SPD</label>
            <label>${SPD}</label>
          </li>
        </ul>
      </div>
      <div class="monster-desc">${Description}</div>
    </div>
    <div class="art-rate">
      <h1>魔法属性有效率</h1>
      <ul>
        <li>
          <label><img class="icon-element-earth"></label>
          <label>${ArtRate.Earth}</label>
          <label><img class="icon-element-time"></label>
          <label>${ArtRate.Time}</label>
        </li>
        <li>
          <label><img class="icon-element-water"></label>
          <label>${ArtRate.Water}</label>
          <label><img class="icon-element-space"></label>
          <label>${ArtRate.Space}</label>
        </li>
        <li>
          <label><img class="icon-element-fire"></label>
          <label>${ArtRate.Fire}</label>
          <label><img class="icon-element-mirage"></label>
          <label>${ArtRate.Mirage}</label>
        </li>
        <li>
          <label><img class="icon-element-wind"></label>
          <label>${ArtRate.Wind}</label>
        </li>
      </ul>
    </div>
  </div>
  <div class="monster-v-half">
    <div class="loot-sepith">
      <h1>取得耀晶石</h1>
      <ul>
        <li>
          <label><img class="icon-sepith-earth" /></label>
          <label>${Sepiths.Earth}</label>
          <label><img class="icon-sepith-water" /></label>
          <label>${Sepiths.Water}</label>
          <label><img class="icon-sepith-fire" /></label>
          <label>${Sepiths.Fire}</label>
          <label><img class="icon-sepith-wind" /></label>
          <label>${Sepiths.Wind}</label>
        </li>
        <li>
          <label><img class="icon-sepith-time" /></label>
          <label>${Sepiths.Time}</label>
          <label><img class="icon-sepith-space" /></label>
          <label>${Sepiths.Space}</label>
          <label><img class="icon-sepith-mirage" /></label>
          <label>${Sepiths.Mirage}</label>
          <label><img class="icon-sepith-mass" /></label>
          <label>${Sepiths.Mass}</label>
        </li>
      </ul>
    </div>
    <div class="loot-item">
      <h1>取得道具</h1>
      <div>
        <ul>
          <li>${Items[0] ? Items[0] : ""}</li>
          <li>${Items[1] ? Items[1] : ""}</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>${Items[2] ? Items[2] : ""}</li>
          <li>${Items[3] ? Items[3] : ""}</li>
        </ul>
      </div>
    </div>
    <div class="unballance-rate">
      <h1>失衡引发几率</h1>
      <ul>
        <li>
          <label>斩</label>
        </li>
        <li>
          <label>突</label>
        </li>
        <li>
          <label>射</label>
        </li>
        <li>
          <label>钢</label>
        </li>
      </ul>
      <ul>
        <li>
          <label>${RenderUnballanceRate(Slash)}</label>
        </li>
        <li>
          <label>${RenderUnballanceRate(Thrust)}</label>
        </li>
        <li>
          <label>${RenderUnballanceRate(Pierce)}</label>
        </li>
        <li>
          <label>${RenderUnballanceRate(Strike)}</label>
        </li>
      </ul>
    </div>
    <div class="status-rate">
      <h1>状态变化有效率</h1>
      <ul>
        <li>
          <label class="status-img-lab"><img class="status-poison" />中毒</label>
          <label class="status-val-lab">${StatusRate.Poison}</label>
          <label class="status-img-lab"><img class="status-burn" />炎伤</label>
          <label class="status-val-lab">${StatusRate.Burn}</label>
          <label class="status-img-lab"><img class="status-death" />即死</label>
          <label class="status-val-lab">${StatusRate.Death}</label>
        </li>
        <li>
          <label class="status-img-lab"><img class="status-seal" />封技</label>
          <label class="status-val-lab">${StatusRate.Seal}</label>
          <label class="status-img-lab"><img class="status-freeze" />冻结</label>
          <label class="status-val-lab">${StatusRate.Freeze}</label>
          <label class="status-img-lab"><img class="status-nightmare" />噩梦</label>
          <label class="status-val-lab">${StatusRate.Nightmare}</label>
        </li>
        <li>
          <label class="status-img-lab"><img class="status-mute" />封魔</label>
          <label class="status-val-lab">${StatusRate.Mute}</label>
          <label class="status-img-lab"><img class="status-petrify" />石化</label>
          <label class="status-val-lab">${StatusRate.Petrify}</label>
          <label class="status-img-lab"><img class="status-delay" />延迟</label>
          <label class="status-val-lab">${StatusRate.Delay}</label>
        </li>
        <li>
          <label class="status-img-lab"><img class="status-blind" />黑暗</label>
          <label class="status-val-lab">${StatusRate.Blind}</label>
          <label class="status-img-lab"><img class="status-faint" />气绝</label>
          <label class="status-val-lab">${StatusRate.Faint}</label>
          <label class="status-img-lab"><img class="status-vanish" />消失</label>
          <label class="status-val-lab">${StatusRate.Vanish}</label>
        </li>
        <li>
          <label class="status-img-lab"><img class="status-sleep" />睡眠</label>
          <label class="status-val-lab">${StatusRate.Sleep}</label>
          <label class="status-img-lab"><img class="status-confuse" />混乱</label>
          <label class="status-val-lab">${StatusRate.Confuse}</label>
          <label class="status-img-lab"><img class="status-s-down" />能力降低</label>
          <label class="status-val-lab">${StatusRate.SDown}</label>
        </li>
      </ul>
    </div>
  </div>
</div>
`;
};

const admonition = `
\`\`\`ad-enemy-boss
title: ${name}
\`\`\``;
dv.paragraph(buildHTML(boss));
