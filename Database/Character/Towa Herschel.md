---
Aliases:
  - "托娃"
  - "托娃·赫歇尔"
ID: "Character.tuo-wa"
Category: "2年级(III IV V班)"
CategoryNo: 5
Order: 2
Description: |
  2年V班【学生会】

  担任军官学院学生会长的学姐.

  个性认真努力, 不只是学生,

  就连教官们也相当信任她.

Notes:
  - Title: "优秀的学生会长"
    Content: |
      由于她实在太过出色,

      使得学生会部分阶级聚集了许多成员,

      获得压倒性的支持.

    When: ""
    How: "托娃羁绊事件"
  - Title: "及早送到"
    Content: |
      来自学生会的委托, 似乎是托娃会长

      亲自送到第三学生宿舍的.

    When: ""
    How: "学生会馆2F, 与托娃对话"
  - Title: "参加随行团"
    Content: |
      在帝都的活跃表现获得认可,

      获准以随行团一员的身份前往参加通商会议.

      关于毕业后的出路也早就收到各方邀约.

    When: ""
    How: "主线任务: [[游戏攻略/英雄传说 闪之轨迹/笔记/任务/导力机车的技能扩增|导力机车的技能扩增]] 获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^tuo-wa-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^tuo-wa-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^tuo-wa-3