---
Aliases:
  - "盖乌斯"
  - "盖乌斯·沃泽尔"
ID: "Character.gai-wu-si"
Category: "VII班成员"
CategoryNo: 1
Order: 9
Description: |
  1年VII班【美术社】

  国外来的高大留学生.

  虽然沉默寡言, 但以诚实的态度与人来往,

  是在必要时刻相当靠得住的那种人.

Notes:
  - Title: "故乡"
    ID: "gai-wu-si-1"
    Content: |
      盖乌斯的故乡正是

      德莱凯尔斯大帝举兵之处,

      也就是帝国东北部的《诺尔德高原》.

    When: "[[Walkthrough/Chapter 3#^character-gai-wu-si-1|第三章 6/23]]"
    How: "剧情自动获得"
  - Title: "盖乌斯的决心"
    ID: "gai-wu-si-2"
    Content: |
      之所以决心进入帝国的军官学院就读,

      是为了认识『外界』,

      进而守护他所深爱的故乡.

    When: ""
    How: "剧情自动获得"
  - Title: "寄托希望的画作"
    ID: "gai-wu-si-3"
    Content: |
      盖乌斯怀着再次与VII班成员一起

      造访故乡的心愿,

      画出了诺尔德高原的风景画.

    When: ""
    How: "盖乌斯羁绊事件"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^gai-wu-si

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
^gai-wu-si-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^gai-wu-si-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^gai-wu-si-3