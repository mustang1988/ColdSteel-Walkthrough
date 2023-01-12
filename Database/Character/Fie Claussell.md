---
Aliases:
  - "菲"
  - "菲·克劳赛尔"
ID: "Character.fei"
Category: "VII班成员"
CategoryNo: 1
Order: 8
Description: |
  1年VII班【园艺社】

  散发出如猫般文静气质的小个子少女.

  虽然身手矫健且拥有出色的战斗技术,

  但似乎常常打瞌睡.

Notes:
  - Title: "猎兵团"
    ID: "fei-1"
    Content: |
      据说菲来到军官学院之前,

      从小便待在《猎兵团》当中.

    When: "[[Walkthrough/Chapter 2#^character-fei-1|第二章 5/30]]"
    How: "剧情自动获得"
  - Title: "西风妖精"
    ID: "fei-2"
    Content: |
      过去仍是猎兵团《西风旅团》成员时,

      在战场上被称为《西风妖精》.

    When: ""
    How: "剧情自动获得"
  - Title: "菲所种的花"
    ID: "fei-3"
    Content: |
      她投注心血在园艺社所种的花,

      是花语是『亲情』的香草.
    When: ""
    How: "菲羁绊事件"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^fei

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
^fei-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^fei-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^fei-3