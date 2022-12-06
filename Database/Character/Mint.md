---
Aliases:
  - "敏特"
ID: "min-te"
Category: "1年级(III IV V班)"
CategoryNo: 3
Order: 3
Description: |
  1年III班【管乐社】

  在管乐社中负责吹奏长笛的女生.

  个性乐天, 没有什么烦恼.

Notes:
  - Title: "外甥女手作料理"
    ID: "min-te-1"
    Content: |
      为了舅舅马卡洛夫教官

      而亲手做了《敏特特餐》.

      独特的苦味为其特征.

    When: ""
    How: "支线任务: [[游戏攻略/英雄传说 闪之轨迹/笔记/任务/亲手下厨做礼物|亲手下厨做礼物]] 获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^min-te-1