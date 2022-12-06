---
Aliases:
  - "贝琪"
ID: "bei-qi"
Category: "1年级(III IV V班)"
CategoryNo: 3
Order: 13
Description: |
  1年V班【未加入社团】

  散发商人气质得女学生.

  凡是总是以赚钱为优先考量.

Notes:
  - Title: "摆摊对决的结果"
    ID: "bei-qi-1"
    Content: |
      在学院祭时与雨果比赛营业额,

      因此互相认同了彼此做生意得能力.

    When: ""
    How: "主校舍前和贝琪对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^bei-qi-1