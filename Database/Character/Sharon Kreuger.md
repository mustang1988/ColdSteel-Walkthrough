---
Aliases:
  - "雪伦"
  - "雪伦·克鲁格"
ID: "Character.xue-lun"
Category: "教官·其他"
CategoryNo: 6
Order: 12
Description: |
  女仆【第三学生宿舍·管理员】

  侍奉莱恩福而特家的优秀女仆.

  以第三宿舍管理员的身份

  支持者VII班的成员.

Notes:
  - Title: "情同姐妹"
    ID: "xue-lun-1"
    Content: |
      [[Database/Character/Alisa Reinford#^ya-li-sha|亚莉莎]]对她就有如姐姐般仰慕,

      而雪伦似乎也将[[Database/Character/Alisa Reinford#^ya-li-sha|亚莉莎]]当作妹妹一样看待.

    When: ""
    How: "[[Database/Character/Alisa Reinford#^ya-li-sha|亚莉莎]]羁绊事件"
  - Title: "超级女仆"
    ID: "xue-lun-2"
    Content: |
      身为伊琳娜会长的女仆,

      似乎连军官学院理事的工作也要帮忙打理.

    When: ""
    How: "与雪伦对话获得"
  - Title: "Blade大师"
    ID: "xue-lun-3"
    Content: |
      以由克洛所发掘的Blade大师身份君临着《亚瓦隆之门》.
    When: ""
    How: "参与主校舍2F, Blade比赛"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^xue-lun

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^xue-lun-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^xue-lun-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^xue-lun-3