---
Aliases:
  - "汤玛斯教官"
  - "汤玛斯·雷山德教官"
ID: "Character.tang-ma-si"
Category: "教官·其他"
CategoryNo: 6
Order: 5
Description: |
  教官【负责帝国史·文学】

  老是有点心不在焉的教官.

  对各地的传承等有很深的造诣,

  有时会一时兴起便自顾自的说起来.

Notes:
  - Title: "图书馆管理员"
    ID: "tang-ma-si-1"
    Content: |
      军官学院图书馆的现任管理员,

      只要一有时间便泡在图书馆里

      尽情阅读其中的藏书.

    When: ""
    How: "支线任务: [[游戏攻略/英雄传说 闪之轨迹/笔记/任务/调查学院七大不可思议|调查学院七大不可思议]] 获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^tang-ma-si

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^tang-ma-si-1