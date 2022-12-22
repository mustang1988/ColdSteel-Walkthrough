---
Aliases:
  - "宝菈"
ID: "Character.bao-la"
Category: "1年级(III IV V班)"
CategoryNo: 3
Order: 12
Description: |
  1年V班【骑术社】

  活泼的1年级女生.

  就算面对贵族也不会有所顾忌,

  不加修饰地畅所欲言.

Notes:
  - Title: "技术有所进步"
    ID: "bao-la-1"
    Content: |
      虽然刚开始学骑马, 但最近已经进步到

      自己一个人也能骑得很好了.

    When: ""
    How: "在操场和宝菈对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^bao-la

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^bao-la-1