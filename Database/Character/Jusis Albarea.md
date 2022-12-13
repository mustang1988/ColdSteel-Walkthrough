---
Aliases:
  - "尤西斯"
  - "尤西斯·艾尔巴雷亚"
ID: "Character.you-xi-si"
Category: "VII班成员"
CategoryNo: 1
Order: 7
Description: |
  1年VII班【骑术社】

  名门贵族艾尔巴雷亚公爵家之子,

  常常拒绝与人接触.

  同时也是身怀传统的骑士剑术的好手.

Notes:
  - Title: "侧室之子"
    ID: "you-xi-si-1"
    Content: |
      尤西斯已过世的生母为平民出身,

      使他似乎从以前开始就与父亲

      艾尔巴雷亚公爵相当疏远.

    When: ""
    How: "剧情自动获得"
  - Title: "照料马匹"
    ID: "you-xi-si-2"
    Content: |
      过去在家中似乎亲自照料马匹,

      因此与学院的马也能心灵相通.

    When: ""
    How: "尤西斯羁绊事件"
  - Title: "天敌是米莉亚姆"
    ID: "you-xi-si-3"
    Content: |
      获取是因为原本具有讨小孩子喜欢的体质,

      他似乎常常被不断亲近他的米利亚姆

      弄得不知如何是好.

    When: ""
    How: "剧情自动获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^you-xi-si-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^you-xi-si-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^you-xi-si-3