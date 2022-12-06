---
Aliases:
  - "史提芬"
ID: "shi-ti-fen"
Category: "2年级(III IV V班)"
CategoryNo: 5
Order: 3
Description: |
  2年III班【第二棋艺社】

  第二棋艺社社长.

  虽然棋艺并不高明, 但对西洋棋的热爱

  不会输给任何人.

Notes:
  - Title: "血汗努力"
    ID: "shi-ti-fen-1"
    Content: |
      与马奇亚斯进行猛烈特训后,

      终于获得了足以和第一棋艺社的贵族学生们

      分庭抗礼的实力.

    When: ""
    How: "学生会馆2F的棋艺社和史提芬对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^shi-ti-fen-1