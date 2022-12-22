---
Aliases:
  - "玛丽教官"
ID: "Character.ma-li"
Category: "教官·其他"
CategoryNo: 6
Order: 8
Description: |
  教官【负责音乐·艺术·烹饪技术】

  今年起任职于军官学院的新任教官.

  洋溢着对学生们的慈爱之情.

Notes:
  - Title: "伯爵家千金"
    ID: "ma-li-1"
    Content: |
      沙萨兰特州的名门

      奥特海姆伯爵家的千金.

      不过, 现在似乎以教官的工作为优先.

    When: ""
    How: "主校舍2F家庭料理室和玛丽教官对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^ma-li

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^ma-li-1