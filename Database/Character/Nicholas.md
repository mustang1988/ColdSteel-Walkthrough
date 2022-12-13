---
Aliases:
  - "尼可拉斯"
ID: "ni-ke-la-si"
Category: "2年级(III IV V班)"
CategoryNo: 5
Order: 9
Description: |
  2年V班【烹饪社】

  担任烹饪社社长的2年级学生.

  拥有无论发生任何事都不为所动的大喇喇性格.

Notes:
  - Title: "厨师的资质"
    ID: "ni-ke-la-si-1"
    Content: |
      拥有精准的味觉和丰富的相关知识,

      只要吃上一口, 便能准确的说出

      料理中的材料和分量.

    When: "[[Walkthrough/Chapter 1#^character-ni-ke-la-si-1|第一章 4/18晚]]"
    How: "支线任务: [[Database/Quest/Side Quest#^yong-wan-de-tiao-wei-liao-diao-huo|用完的调味料调货]] 期间获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^ni-ke-la-si-1