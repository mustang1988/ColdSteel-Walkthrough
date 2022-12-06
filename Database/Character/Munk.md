---
Aliases:
  - "孟亨"
ID: "meng-heng"
Category: "1年级(III IV V班)"
CategoryNo: 3
Order: 11
Description: |
  1年V班【未加入社团】

  存在感薄弱, 不太起眼的男学生.

  总是在寻找着可以用来投稿的材料.

Notes:
  - Title: "投稿专家"
    ID: "meng-heng-1"
    Content: |
      似乎私下向《星夜时分》投稿,

      拥有许多作为投稿纪念的

      签名贴纸.

    When: ""
    How: "支线任务: [[重要的贴纸]] 获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^meng-heng-1