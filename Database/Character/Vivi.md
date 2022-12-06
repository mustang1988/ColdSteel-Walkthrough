---
Aliases:
  - "薇薇"
ID: "wei-wei"
Category: "1年级(III IV V班)"
CategoryNo: 3
Order: 8
Description: |
  1年IV班【园艺社】

  非常喜欢恶作剧的女生.

  总是在寻找着有趣的事情.

Notes:
  - Title: "双胞胎姐妹"
    ID: "wei-wei-1"
    Content: |
      美术社的琳黛是她的双胞胎姐姐.

      有时会冒充姐姐以享受恶作剧的乐趣.

    When: ""
    How: "支线任务: [[领取鲜花]] 获得"
  - Title: "对姐姐的信赖"
    ID: "wei-wei-2"
    Content: |
      不管怎么说, 似乎还是非常信赖

      在关键时刻可以靠得住的姐姐.

    When: ""
    How: "主校舍2F和双胞胎姐妹琳黛和薇薇对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^wei-wei-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^wei-wei-2
