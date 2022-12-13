---
Aliases:
  - "菲莉丝"
  - "菲莉丝·弗罗拉尔德"
ID: "Character.fei-li-si"
Category: "1年级(I II班)"
CategoryNo: 2
Order: 2
Description: |
  1年I班【袋棍球社】

  弗罗拉而德伯爵家的千金.

  对人的态度相当高傲, 且个性好胜,

  对亚莉莎怀有莫名其妙的竞争意识.

Notes:
  - Title: "好对手"
    ID: "fei-li-si-1"
    Content: |
      虽然过去与亚莉莎不对盘,

      但在袋棍球社中几次交手之后,

      认同对方为好对手, 并因此萌生友情.

    When: ""
    How: "亚莉莎羁绊事件"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^fei-li-si-1