---
Aliases:
  - "管家瑟雷斯坦"
ID: "Character.se-lei-si-tan"
Category: "教官·其他"
CategoryNo: 6
Order: 9
Description: |
  管家【第一学生宿舍】

  从海恩斯家被派至此的管家.

  能够面面俱到地做好各式各样的杂事.

Notes:
  - Title: "为了少爷"
    ID: "se-lei-si-tan-1"
    Content: |
      虽然本家已发出了召回命令,

      但为了派崔克而做了种种努力,

      希望能留在托利斯塔.

    When: ""
    How: "支线任务: [[游戏攻略/英雄传说 闪之轨迹/笔记/任务/管家的秘密|管家的秘密]] 获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^se-lei-si-tan-1