---
Aliases:
  - "琳黛"
ID: "Character.lin-dai"
Category: "1年级(III IV V班)"
CategoryNo: 3
Order: 7
Description: |
  1年IV班【美术社】

  彬彬有礼的女学生. 目前加入美术社.

  个性有点懦弱, 容易受旁人捉弄.

Notes:
  - Title: "双胞胎姐妹"
    ID: "lin-dai-1"
    Content: |
      园艺社的薇薇是她的双胞胎妹妹.

      过着老是受她捉弄的每一天.

    When: "[[Walkthrough/Chapter 2#^character-lin-dai-1|第二章 5/23晚]]"
    How: "支线任务: [[Database/Quest/Side Quest#^yong-wan-de-tiao-wei-liao-diao-huo|领取鲜花]] 获得"
  - Title: "妹妹由我保护！"
    ID: "lin-dai-2"
    Content: |
      关键时刻也会展露坚强的一面,

      以姐姐的身份保护薇薇.

    When: ""
    How: "主校舍2F和双胞胎姐妹琳黛和薇薇对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^lin-dai

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^lin-dai-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^lin-dai-2