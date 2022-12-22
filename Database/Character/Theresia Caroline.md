---
Aliases:
  - "泰蕾莎"
ID: "Character.tai-lei-sha"
Category: "2年级(I II班)"
CategoryNo: 4
Order: 6
Description: |
  2年II班【袋棍球社】

  高雅的2年级贵族女学生.

  以袋棍球社副社长的身份,

  与爱蜜莉共同撑起社团的运作.

Notes:
  - Title: "对比的组合"
    ID: "tai-lei-sha-1"
    Content: |
      爱蜜莉虽然运动能力超群,

      但论念书则是泰蕾莎比较擅长.

      考试期间都由泰蕾莎负责教她功课.

    When: ""
    How: "图书馆与泰雷莎对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^tai-lei-sha

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^tai-lei-sha-1