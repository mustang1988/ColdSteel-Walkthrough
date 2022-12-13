---
banner: "![[Cover.jpg]]"
banner_y: 0.33268
---
# 英雄传说 闪之轨迹

```ad-quote
title: 奖杯
collapse: close
~~~dataviewjs
// Read trophy DB file
const platinum_page = dv.page('Database/Trophy/Platinum');
const gold_page = dv.page('Database/Trophy/Gold');
const silver_page = dv.page('Database/Trophy/Silver');
const bronze_page = dv.page('Database/Trophy/Bronze');

// Get all trophy data
const platinum_trophies = platinum_page.Trophies ? platinum_page.Trophies.map(t => {
    t.path = platinum_page.file.path;
    return t;
}):[];

const gold_trophies = gold_page.Trophies ? gold_page.Trophies.map(t => {
    t.path = gold_page.file.path;
    return t;
}):[];

const silver_trophies = silver_page.Trophies ? silver_page.Trophies.map(t => {
    t.path = silver_page.file.path;
    return t;
}):[];

const bronze_trophies = bronze_page.Trophies ? bronze_page.Trophies.map(t => {
    t.path = bronze_page.file.path;
    return t;
}):[];

const trophies = [...platinum_trophies, ...gold_trophies, ...silver_trophies, ...bronze_trophies];

// Render a table
dv.table(
    ["标题", "说明", "获取章节"],
    trophies.map(trophy => [
        dv.blockLink(trophy.path, trophy.ID, false, trophy.Title),
        trophy.Comment,
        trophy.Chapter,
    ])
);
~~~
```

```ad-quote
title: 攻略
collapse: open
~~~ad-quote
title: 攻略图例一览
collapse: open
- 获得奖杯
  - [[Database/Trophy/Bronze|铜奖杯]]
  - [[Database/Trophy/Silver|银奖杯]]
  - [[Database/Trophy/Gold|金奖杯]]
  - [[Database/Trophy/Platinum|白金奖杯]]
- 任务/委托
  - [[Database/Quest/Main Quest|主线任务/委托]]
  - [[Database/Quest/Side Quest|支线任务/委托]]
- 笔记类
  - [[Database/Fish/Swordtail|钓鱼笔记]]
  - [[Database/Recipe/Recipe|烹饪笔记]]
  - [[Database/Item/Book|书籍笔记]]
  - [[Database/Character/Rean Schwarzer|人物笔记]]
  - [[Database/Quartz/Iron|]][[Database/Quartz/Scepter|]][[Database/Quartz/Force|]][[Database/Quartz/Wing|]][[Database/Quartz/Katze|]][[Database/Quartz/Angel|]][[Database/Quartz/Mirage|]] 核心回路
  - [[Database/Enemy/Monster|]][[Database/Enemy/Boss|]] 战斗笔记
  - [[Database/Treasure Chest/Treasure Chest|]][[Database/Treasure Chest/Monster Treasure Chest|]] 宝箱
- 物品道具
  - [[Database/Quartz/Earth N|]][[Database/Quartz/Water N|]][[Database/Quartz/Fire N|]][[Database/Quartz/Wind N|]][[Database/Quartz/Time N|]][[Database/Quartz/Space N|]][[Database/Quartz/Mirage N| ]], [[Database/Quartz/Earth R|]][[Database/Quartz/Water R|]][[Database/Quartz/Fire R|]][[Database/Quartz/Wind R|]][[Database/Quartz/Time R|]][[Database/Quartz/Space R|]][[Database/Quartz/Mirage R| ]], [[Database/Quartz/Earth SR|]][[Database/Quartz/Water SR|]][[Database/Quartz/Fire SR|]][[Database/Quartz/Wind SR|]][[Database/Quartz/Time SR|]][[Database/Quartz/Space SR|]][[Database/Quartz/Mirage SR|]] 普通回路
  - [[Database/Item/Accessory|饰品]]
  - [[Database/Item/Armour|护具]]
  - [[Database/Item/Boot|护腿]]
  - [[Database/Item/Fish Rod|鱼竿]]
  - [[Database/Item/Key|关键道具]]
  - [[Database/Item/Food Ingredient|食材]]
  - [[Database/Item/U-Material|U物质]]
  - [[Database/Item/Regular Food|]][[Database/Item/Superb Food|]][[Database/Item/Attack Food|]][[Database/Item/Peculiar Food|]][[Database/Item/Unique Food|]] 食物
  - [[Database/Item/Earth Sepith|]][[Database/Item/Water Sepith|]][[Database/Item/Fire Sepith|]][[Database/Item/Wind Sepith|]][[Database/Item/Time Sepith|]][[Database/Item/Space Sepith|]][[Database/Item/Mirage Sepith|]][[Database/Item/Mass Sepith|]] 耀晶片/块
  - [[Database/Item/Potion|消耗品]]
- 其他
  - [[Database/Art/Earth|]][[Database/Art/Water|]][[Database/Art/Fire|]][[Database/Art/Wind|]][[Database/Art/Time|]][[Database/Art/Space|]][[Database/Art/Mirage|]] 导力魔法
  - [[Database/Location/Location|地区/迷宫]]
~~~
~~~dataviewjs
const notes = dv.pages('"Walkthrough"')
                .sort(note => note.No, 'asc');
dv.table(
    [],
    notes.map(note => [
        dv.fileLink(note.file.path, false, note.Aliases[0])
    ])
);
~~~
```
