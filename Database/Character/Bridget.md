---
Aliases:
  - "布莱希特"
ID: "bu-lai-xi-te"
Category: "1年级(I II班)"
CategoryNo: 2
Order: 4
Description: |
  1年II班【管乐社】

  能够明辨是非的贵族班女生.

  在管乐社中负责的乐器是钢琴.

Notes:
  - Title: "与青梅竹马和解"
    ID: "bu-lai-xi-te-1"
    Content: |
      和IV班的艾伦是打从主日学校时代起的青梅竹马,

      但不知为何对方却躲着她,

      后来透过对学生会的委托为契机与对方和解.

    When: ""
    How: "支线任务: [[青梅竹马的心意]] 获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^bu-lai-xi-te-1