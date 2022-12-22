---
Aliases:
  - "艾伦"
ID: "Character.ai-lun"
Category: "1年级(III IV V班)"
CategoryNo: 3
Order: 6
Description: |
  1年IV班【击剑社】

  爱赌气且不服输的好强男学生.

  为了变强而每天努力锻炼.

Notes:
  - Title: "在变强之前"
    ID: "ai-lun-1"
    Content: |
      之所以躲着 [[Database/Character/Bridget#^bu-lai-xi-te|布莱希特]],

      是出于他的个人坚持,

      不想让青梅竹马看见半吊子的自己.

    When: ""
    How: "支线任务: [[青梅竹马的心意]] 获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^ai-lun

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^ai-lun-1
