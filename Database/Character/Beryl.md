---
Aliases:
  - "贝莉尔"
ID: "bei-li-er"
Category: "1年级(III IV V班)"
CategoryNo: 3
Order: 4
Description: |
  1年III班【神秘现象研究会】

  担任神秘现象研究会会长的1年级女生.

  全身上下散发出诡异的气息.

Notes:
  - Title: "七大不可思议"
    ID: "bei-li-er-1"
    Content: |
      之前调查着传闻中的「学院七大不可思议」.

      似乎还知道所谓的

      「隐藏版七大不可思议」……

    When: ""
    How: "支线任务: [[游戏攻略/英雄传说 闪之轨迹/笔记/任务/调查学院七大不可思议|调查学院七大不可思议]] 获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^bei-li-er-1