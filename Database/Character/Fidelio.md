---
Aliases:
  - "裴德烈"
ID: "Character.pei-de-lie"
Category: "2年级(I II班)"
CategoryNo: 4
Order: 5
Description: |
  2年II班【摄影社】

  担任摄影社社长,

  是一位温和而懂得待人处事的学长.

  虽然是贵族学生, 但不太拘泥于阶级与身份.

Notes:
  - Title: "社长的责任"
    ID: "pei-de-lie-1"
    Content: |
      平时虽然很温和,

      但仍善尽身为摄影社社长的职责,

      不留情面地对雷克斯处以严正地处罚.

    When: ""
    How: "支线任务: [[举发偷拍照]] 获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^pei-de-lie

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^pei-de-lie-1