---
Aliases:
  - "莎莉法"
ID: "Character.sha-li-fa"
Category: "教官·其他"
CategoryNo: 6
Order: 10
Description: |
  女仆【第一学生宿舍】

  从弗罗拉尔德家被派至此的女仆.

  总是随侍在文森身边.

Notes:
  - Title: "奇妙的主仆"
    ID: "sha-li-fa-1"
    Content: |
      常年侍奉文森和菲莉丝的理由,

      是因为她觉得他们两个是

      『非常有趣又惹人怜爱』的缘故.

    When: ""
    How: "第一学生宿舍内与女仆莎莉法对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^sha-li-fa-1