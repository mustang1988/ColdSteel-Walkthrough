---
Aliases:
  - "梵戴克学院长"
ID: "Character.fan-dai-ke"
Category: "教官·其他"
CategoryNo: 6
Order: 2
Description: |
  学院长

  托尔兹军官学院的学院长.

  身兼帝国正规军的名誉元帅,

  甚至到业已离开军旅的现在仍散发出威严.

Notes:
  - Title: "雅好阅读"
    ID: "fan-dai-ke-1"
    Content: |
      自军旅退役后,

      过了将近10年埋首书堆的日子.

      书写时爱用相当气派的东方钢笔.

    When: ""
    How: "支线任务: [[东方式的笔]] 获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^fan-dai-ke

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^fan-dai-ke-1