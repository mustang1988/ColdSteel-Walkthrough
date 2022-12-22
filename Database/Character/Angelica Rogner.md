---
Aliases:
  - "安洁莉卡"
  - "安洁莉卡·罗格纳"
ID: "Character.an-jie-li-ka"
Category: "2年级(I II班)"
CategoryNo: 4
Order: 1
Description: |
  2年I班【自动二轮社】

  《四大名门》罗格纳侯爵家的千金.

  同时也是一位醉心于导力机车的学姐.

Notes:
  - Title: "兜风"
    ID: "an-jie-li-ka-1"
    Content: |
      有时会载着与她感情很好的 [[Database/Character/Towa Herschel#^tuo-wa|托娃会长]]

      骑导力机车外出兜风

    When: ""
    How: "学生会馆2F与安洁莉卡对话"
  - Title: "泰斗流"
    ID: "an-jie-li-ka-2"
    Content: |
      约7年前曾师事一位有东方血统的女性

      学习了《泰斗流》武术.

    When: ""
    How: "主线任务: [[游戏攻略/英雄传说 闪之轨迹/笔记/任务/个人委托|个人委托]] 获得"
  - Title: "喜爱的师傅"
    ID: "an-jie-li-ka-3"
    Content: |
      以前便想和古恩老先生有着密切的来往,

      从他身上学到如何虏获女性芳心

      和各种娱乐嗜好.

    When: ""
    How: "剧情自动获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^an-jie-li-ka

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^an-jie-li-ka-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^an-jie-li-ka-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^an-jie-li-ka-3