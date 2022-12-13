---
Aliases:
  - "贾斯柏"
ID: "Character.jia-si-bo"
Category: "1年级(III IV V班)"
CategoryNo: 3
Order: 5
Description: |
  1年IV班【游泳社】

  因崇拜社长而加入游泳社的男学生.

  凭着活力与毅力全心投入社团活动.

Notes:
  - Title: "滨海城市"
    ID: "jia-si-bo-1"
    Content: |
      拉玛尔州沿岸区出身.

      相当熟悉海水浴, 因此相当尊敬

      泳技比自己更好的社长和劳拉.

    When: ""
    How: "与体育馆的贾斯柏对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^jia-si-po-1