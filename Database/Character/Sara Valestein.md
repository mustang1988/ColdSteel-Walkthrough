---
Aliases:
  - "莎拉教官"
  - "莎拉·巴雷斯坦教官"
ID: "Character.sha-la"
Category: "教官·其他"
CategoryNo: 6
Order: 1
Description: |
  教官【负责武术·实战技术】

  担任VII班的班导师与武术教官.

  在私生活中却也有着不像话的一面,

  有时甚至大白天的便开始喝啤酒.

Notes:
  - Title: "神秘的交友关系"
    ID: "sha-la-1"
    Content: |
      她似乎与交换店老板密休特是旧识.

      彼此都知道对方的难言之隐.

    When: ""
    How: "托利斯塔当铺与莎拉对话"
  - Title: "前游击士"
    ID: "sha-la-2"
    Content: |
      过去是被称为《紫电的巴雷斯坦》的

      A级游击士, 隶属于帝都的协会分部.

    When: ""
    How: "剧情自动获得"
  - Title: "战友"
    ID: "sha-la-3"
    Content: |
      每到『战友』的忌日,

      似乎就会显得有点感伤.

      虽然那好像不是她在担任游击士时的事……

    When: ""
    How: "莎拉教官羁绊事件"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^sha-la

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^sha-la-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^sha-la-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^sha-la-3