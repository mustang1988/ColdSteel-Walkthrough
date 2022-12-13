---
Aliases:
  - "桃乐丝"
ID: "Character.tao-le-si"
Category: "2年级(III IV V班)"
CategoryNo: 5
Order: 10
Description: |
  2年V班【文艺社】

  文艺社社长, 想象力丰富的女生.

  有着一旦兴奋便会流鼻血的习惯.

Notes:
  - Title: "淑女的嗜好"
    ID: "tao-le-si-1"
    Content: |
      她笔下的小说所描写的, 是有点逾越尺度的男生们的青春.
    When: ""
    How: "艾玛羁绊事件"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^tao-le-si-1