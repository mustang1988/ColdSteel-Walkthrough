---
banner: "![[Cover.jpg]]"
banner_y: 0.33268
---
# 英雄传说 闪之轨迹

```ad-quote
title: 奖杯
collapse: close
~~~dataviewjs
// Read trophy DB files
const trophies = []
const dbs = dv.pages('"Database/Trophy/Platinum" or "Database/Trophy/Gold" or "Database/Trophy/Silver" or "Database/Trophy/Bronze"');
dbs.forEach(db => {
  trophies.push(...db.Trophies ? db.Trophies.map(t => {
    t.path = db.file.path;
    return t;
  }):[]);
})

// Render a table display all trophy data
dv.table(
  ["标题", "奖杯说明", "获取章节"],
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
title: 图例
collapse: close
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
  - [[Database/Quartz/Master/Master.Iron|]][[Database/Quartz/Master/Master.Aegis|]][[Database/Quartz/Master/Master.Tauros|]][[Database/Quartz/Master/Master.Megalith|]][[Database/Quartz/Master/Master.Aries|]][[Database/Quartz/Master/Master.Canon|]][[Database/Quartz/Master/Master.Scepter|]][[Database/Quartz/Master/Master.Orochi|]][[Database/Quartz/Master/Master.Force|]][[Database/Quartz/Master/Master.Criminal|]][[Database/Quartz/Master/Master.Brave|]][[Database/Quartz/Master/Master.Vermillion|]][[Database/Quartz/Master/Master.Wing|]][[Database/Quartz/Master/Master.Falco|]][[Database/Quartz/Master/Master.Mistral|]][[Database/Quartz/Master/Master.Thor|]][[Database/Quartz/Master/Master.Katze|]][[Database/Quartz/Master/Master.Cypher|]][[Database/Quartz/Master/Master.Murakumo|]][[Database/Quartz/Master/Master.Raven|]][[Database/Quartz/Master/Master.Angel|]][[Database/Quartz/Master/Master.Emblem|]][[Database/Quartz/Master/Master.Moebius|]][[Database/Quartz/Master/Master.Chevalier|]][[Database/Quartz/Master/Master.Mirage|]][[Database/Quartz/Master/Master.Juggler|]][[Database/Quartz/Master/Master.Pandora|]][[Database/Quartz/Master/Master.Magius|]] 核心回路
  - [[Database/Enemy/Monster|怪物战斗笔记]], [[Database/Enemy/Boss|Boss战斗笔记]]
  - [[Database/Treasure Chest/Treasure Chest|普通宝箱]], [[Database/Treasure Chest/Monster Treasure Chest|怪物宝箱]]
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
const notes = dv.pages('"Walkthrough"').sort(note => note.No, 'asc');
dv.table(
  [],
  notes.map(note => [
      dv.fileLink(note.file.path, false, note.Aliases[0])
  ])
);
~~~
```

````ad-quote
title: 收集品一览

```ad-quote
title: 核心回路
collapse: close
~~~dataviewjs
const master_quartzs = dv.pages('"Database/Quartz/Master"')
.map(quartz => {
  quartz.chapter = quartz.When ? dv.page(quartz.When.path) : null;
  return quartz;
})
.sort(quartz => [ quartz.chapter?quartz.chapter.No:100, quartz.When.display, quartz.How ], 'asc');
console.log(master_quartzs);
dv.table(
  [],
  master_quartzs.map(quartz => [
    dv.fileLink(quartz.file.path, false, quartz.Aliases[0]),
    quartz.When ? dv.blockLink(quartz.When.path, quartz.When.subpath, false, quartz.When.display) : null,
    quartz.How
  ])
);
~~~
```

```ad-quote
title: 书籍
collapse: close
```

```ad-quote
title: 食谱
collapse: close
```

```ad-quote
title: 宝箱
collapse: close
```

```ad-quote
title: 战斗笔记
collapse: close
```

````