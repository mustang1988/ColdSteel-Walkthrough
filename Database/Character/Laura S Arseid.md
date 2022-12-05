---
Aliases:
  - "劳拉"
  - "劳拉·S·亚而赛德"
ID: "lao-la"
Category: "VII班成员"
CategoryNo: 1
Order: 4
Description: |
  1年VII班【游泳社】

  统治雷格拉姆的子爵家的长女.

  出身自骑士剑术的宗主流派《亚而赛德流》,

  堪称在新生中拥有最强实力.
Notes:
  - Title: "遥远的目标"
    ID: "lao-la-1"
    Content: |
      劳拉努力仿效的目标似乎是

      250年前在《狮子战役》中大为活跃的

      《圣女桑德罗特》
    When: ""
    How: "剧情自动获得"
  - Title: "咪西"
    ID: "lao-la-2"
    Content: |
      没有想到她似乎挺喜欢在杂货店看到的

      角色玩偶『咪西』
    When: ""
    How: "劳拉羁绊事件"
  - Title: "父女间的羁绊"
    ID: "lao-la-3"
    Content: |
      劳拉宽大的胸怀和强大的力量,

      果然有很大一部分是

      继承自亚而赛德子爵的.
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
^lao-la-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^lao-la-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^lao-la-3