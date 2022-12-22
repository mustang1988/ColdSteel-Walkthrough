---
Aliases:
  - "贝莉尔"
ID: "Character.bei-li-er"
Category: "1年级(III IV V班)"
CategoryNo: 3
Order: 4
Description: |
  1年III班【神秘现象研究会】

  担任神秘现象研究会会长的1年级女生.

  全身上下散发出诡异的气息.

Notes:
  - Title: "七大不可思议"
    ID: "bei-li-er-1"
    Content: |
      之前调查着传闻中的「学院七大不可思议」.

      似乎还知道所谓的

      「隐藏版七大不可思议」……

    When: ""
    How: ""
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^bei-li-er

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^bei-li-er-1