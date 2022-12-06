---
Aliases:
  - "科蕾特"
ID: "ke-lei-te"
Category: "1年级(III IV V班)"
CategoryNo: 3
Order: 9
Description: |
  1年IV班【未加入社团】

  喜欢购物的1年级女生.

  商店街到处都能看见她的身影.

Notes:
  - Title: "美食探险家"
    ID: "ke-lei-te-1"
    Content: |
      兴趣是购物的科蕾特,

      似乎十分喜欢寻访美食.

    When: ""
    How: "主校舍2F和科蕾特对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^ke-lei-te-1