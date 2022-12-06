---
Aliases:
  - "海贝尔"
ID: "hai-bei-er"
Category: "2年级(III IV V班)"
CategoryNo: 5
Order: 5
Description: |
  2年IV班【管乐社】

  担任管乐社社长的2年级学生.

  负责的乐器是小提琴, 演奏技术一流.

Notes:
  - Title: "管乐社演奏会"
    ID: "hai-bei-er-1"
    Content: |
      在演奏会前受伤,

      因此正式演出时无法上台.

      不过, 他似乎对学弟妹的成长感到很满足.

    When: ""
    How: "主校舍2F音乐室与海贝尔对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^hai-bei-er-1