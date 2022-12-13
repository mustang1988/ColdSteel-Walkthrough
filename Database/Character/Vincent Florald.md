---
Aliases:
  - "文森"
  - "文森·弗罗拉尔德"
ID: "Character.wen-sen"
Category: "2年级(I II班)"
CategoryNo: 4
Order: 2
Description: |
  2年I班【未加入社团】

  弗罗拉尔德伯爵家的长男.

  是一位散发着贵公子气质的自恋狂,

  身旁总是随侍着女仆莎莉法.

Notes:
  - Title: "可惜的贵公子"
    ID: "wen-sen-1"
    Content: |
      去年的学院祭曾经办过戏剧公演,

      但据说轮到文森登场时,

      观众们都睡着了.

    When: ""
    How: "主校舍2F和文森对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^wen-sen-1
