---
Aliases:
  - "艾略特"
  - "艾略特·克雷格"
ID: "Character.ai-lve-te"
Category: "VII班成员"
CategoryNo: 1
Order: 3
Description: |
  1年VII班【管乐社】

  目前加入管乐社

  特征是红褐色头发的温和少年.

  个性温柔, 不喜欢与人争执.
Notes:
  - Title: "朝音乐领域发展"
    ID: "ai-lve-te-1"
    Content: |
      从小喜欢音乐,

      本来想朝与音乐有关的方向发展.
    When: "[[Walkthrough/Chapter 1#^character-ai-lve-te-1|第一章 4/18]]"
    How: "艾略特羁绊事件"
  - Title: "克雷格中将"
    ID: "ai-lve-te-2"
    Content: |
      父亲是以身为猛将文明的《红发的克雷格》.

      率领着据说拥有帝国首屈一指打击力的

      第四机甲师团.
    When: ""
    How: "剧情自动获得"
  - Title: "音乐之鬼"
    ID: "ai-lve-te-3"
    Content: |
      平时温和的艾略特

      在音乐方面却不容许任何妥协,

      笑着提出各种强人所难的要求.
    When: ""
    How: "剧情自动获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^ai-lve-te

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
^ai-lve-te-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^ai-lve-te-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^ai-lve-te-3