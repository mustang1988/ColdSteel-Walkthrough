---
Aliases:
  - "萝德"
ID: "luo-de"
Category: "教官·其他"
CategoryNo: 6
Order: 11
Description: |
  女仆【第一学生宿舍】

  任职于第一学生宿舍的朴素女仆.

  还在进行女仆所需的修业.

Notes:
  - Title: "学习做菜"
    ID: "luo-de-1"
    Content: |
      为了扩充第一学生宿舍的伙食种类,

      正在日夜练习烹饪.

    When: "[[Walkthrough/Chapter 1#^character-luo-de-1|第一章 4/18]]"
    How: "第一学生宿舍与萝德对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^luo-de-1