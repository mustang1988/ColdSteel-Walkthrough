---
Aliases:
  - "马奇亚斯"
  - "马奇亚斯·雷格尼兹"
ID: "Character.ma-qi-ya-si"
Category: "VII班成员"
CategoryNo: 1
Order: 5
Description: |
  1年VII班【第二棋艺社】

  担任VII班副班长的男生.
  
  为雷格尼兹帝都首长的儿子,

  对贵族怀有强烈的对抗心.
Notes:
  - Title: "名列前茅"
    ID: "ma-qi-ya-si-1"
    Content: |
      期中考的成绩和班长并列第一.

      付出相当多的努力之后终于得到回报.
    When: ""
    How: "剧情自动获得"
  - Title: "马奇亚斯的过去"
    ID: "ma-qi-ya-si-2"
    Content: |
      马奇亚斯憎恨贵族的原因

      来自于他的表姐与贵族之间的一段过去.

      不过, 他的憎恨之情似乎已稍微缓和下来了.
    When: "[[Walkthrough/Chapter 3#^character-ma-qi-ya-si-1|第三章 6/23]]"
    How: "剧情自动获得"
  - Title: "棋艺社的和解"
    ID: "ma-qi-ya-si-2"
    Content: |
      在棋艺社内部产生的与贵族学生之间的对立,

      似乎终于通过比赛化解了,

      马奇亚斯自己的心境似乎也有所变化.
    When: ""
    How: "马奇亚斯羁绊事件"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^ma-qi-ya-si

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
^ma-qi-ya-si-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^ma-qi-ya-si-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^ma-qi-ya-si-3