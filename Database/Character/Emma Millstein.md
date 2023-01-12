---
Aliases:
  - "艾玛"
  - "艾玛·米尔斯汀"
ID: "Character.ai-ma"
Category: "VII班成员"
CategoryNo: 1
Order: 6
Description: |
  1年VII班【文艺社】

  出身于帝国边境、成绩优异的优等生.

  有过人的包容力, 担任VII班的班长.

  颇受大家仰赖.
Notes:
  - Title: "家教老师"
    ID: "ai-ma-1"
    Content: |
      非常会照顾人, 主动教导菲念书.
    When: "[[Walkthrough/Chapter 2#^character-ai-ma-1|第二章 5/22]]"
    How: "剧情自动获得"
  - Title: "瑟蕾奴"
    ID: "ai-ma-2"
    Content: |
      她似乎与黑猫瑟蕾奴的感情很好,

      偷偷的在照顾着它.
    When: ""
    How: "操场仓库角落触发艾玛的剧情"
  - Title: "神秘之力"
    ID: "ai-ma-3"
    Content: |
      艾玛的族人似乎拥有常理无法解释的

      『神秘力量』, 且一直以来

      都将其视为秘密.
    When: ""
    How: "艾玛羁绊事件"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^ai-ma

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
^ai-ma-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^ai-ma-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^ai-ma-3