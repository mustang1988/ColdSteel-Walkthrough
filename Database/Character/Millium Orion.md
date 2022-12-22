---
Aliases:
  - "米莉亚姆"
  - "米莉亚姆·奥莱恩"
ID: "Character.mi-li-ya-mu"
Category: "VII班成员"
CategoryNo: 1
Order: 10
Description: |
  1年VII班【烹饪社】

  从帝国军情报局插班转入VII班的少女,

  虽然有无拘无束、天真无邪的个性,

  但也会流露出身为宰相直属《铁血之子》成员的一面.

Notes:
  - Title: "怕鬼"
    ID: "mi-li-ya-mu-1"
    Content: |
      她最怕幽灵或鬼怪之类的了.
    When: ""
    How: "剧情自动获得"
  - Title: "逐渐找到乐趣"
    ID: "mi-li-ya-mu-2"
    Content: |
      不仅习惯了学院的生活, 还加入了社团.

      好像正尽情地享受学生生活.

    When: ""
    How: "米利亚姆羁绊事件"
  - Title: "米莉亚姆的任务"
    ID: "mi-li-ya-mu-3"
    Content: |
      米莉亚姆的任务原来是针对旧校舍的

      异变进行报告, 以及调查有可能潜伏在

      军官学院中的《C》.

    When: ""
    How: "剧情自动获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^mi-li-ya-mu

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^mi-li-ya-mu-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^mi-li-ya-mu-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^mi-li-ya-mu-3