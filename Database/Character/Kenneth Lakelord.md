---
Aliases:
  - "肯尼斯"
  - "肯尼斯·雷克罗德"
ID: "Character.ken-ni-si"
Category: "1年级(I II班)"
CategoryNo: 2
Order: 3
Description: |
  1年II班【钓皇俱乐部】

  《钓皇俱乐部》1年级部长.

  总是泰然自若,

  只要一有空便随兴之所至外出钓鱼.

Notes:
  - Title: "兄长与钓皇"
    ID: "ken-ni-si-1"
    Content: |
      钓皇俱乐部似乎是他的哥哥所创立的,

      同时, 他的哥哥也是军官学院的毕业生.

    When: ""
    How: "学生会馆与肯尼斯对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^ken-ni-si

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^ken-ni-si-1