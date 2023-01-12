---
Aliases:
  - "劳拉"
  - "劳拉·S·亚尔赛德"
ID: "Character.lao-la"
Category: "VII班成员"
CategoryNo: 1
Order: 4
Description: |
  1年VII班【游泳社】

  统治雷格拉姆的子爵家的长女.

  出身自骑士剑术的宗主流派《亚尔赛德流》,

  堪称在新生中拥有最强实力.
Notes:
  - Title: "遥远的目标"
    ID: "lao-la-1"
    Content: |
      劳拉努力仿效的目标似乎是

      250年前在《狮子战役》中大为活跃的

      《圣女桑德罗特》
    When: "[[Walkthrough/Chapter 2#^character-lao-la-1|第二章 5/23晚]]"
    How: "剧情自动获得"
  - Title: "咪西"
    ID: "lao-la-2"
    Content: |
      没有想到她似乎挺喜欢在杂货店看到的

      角色玩偶『咪西』
    When: "[[Walkthrough/Chapter 3#^character-lao-la-2|第三章 6/20]]"
    How: "[[Database/Character/Laura S Arseid#^lao-la|劳拉]] 羁绊事件"
  - Title: "父女间的羁绊"
    ID: "lao-la-3"
    Content: |
      劳拉宽大的胸怀和强大的力量,

      果然有很大一部分是

      继承自亚尔赛德子爵的.
    When: ""
    How: "剧情自动获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^lao-la

---

```dataviewjs
const character = dv.current();
const crafts = dv.page('Database/Craft/Craft').Crafts
              .filter(c => character.Aliases.includes(c.Character.display))
              .map(c => dv.blockLink('Database/Craft/Craft', c.ID, false, c.Name));
const scrafts = dv.page('Database/Craft/SCraft').SCrafts
              .filter(c => character.Aliases.includes(c.Character.display))
              .map(c => dv.blockLink('Database/Craft/SCraft', c.ID, false, c.Name));            
dv.table(
  [],
  [...crafts, ...scrafts].map(c => {
    const cs = dv.page(c.path).Crafts 
              ? dv.page(c.path).Crafts.filter(cr => cr.ID === c.subpath) 
              : dv.page(c.path).SCrafts.filter(cr => cr.ID === c.subpath);
    return [c, cs[0].How];
  })
);
```
^crafts

---

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