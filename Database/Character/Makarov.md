---
Aliases:
  - "马卡洛夫教官"
ID: "Character.ma-ka-luo-fu"
Category: "教官·其他"
CategoryNo: 6
Order: 6
Description: |
  教官【负责导力技术·自然科学】

  虽然该做的工作会做好,

  但看起来总是懒洋洋的男教官.

  1年III班的敏特是他的外甥女.

Notes:
  - Title: "辉煌的过去"
    ID: "ma-ka-luo-fu-1"
    Content: |
      拥有辉煌的经历,

      以第一名成绩自卢雷工科大学毕业后,

      层进入《帝国科学院》任职.

    When: ""
    How: "支线任务: [[游戏攻略/英雄传说 闪之轨迹/笔记/任务/ARCUS信号强度调查|ARCUS信号强度调查]] 获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^ma-ka-luo-fu-1