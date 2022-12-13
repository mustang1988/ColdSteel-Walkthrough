---
Aliases:
  - "黎恩"
  - "黎恩·舒华泽"
ID: "Character.li-en"
Category: "VII班成员"
CategoryNo: 1
Order: 1
Description: |
      1年VII班【未加入社团】
      
      就读于特科班VII班的青年.
      
      拥有坚强而直率的性格,
      
      兼具擅长与人来往和好好先生的一面.
Notes:
  - Title: "没说出口的事"
    ID: "li-en-1"
    Content: |
          修习《八叶一刀流》并获得初传.
          
          同时也因被治理帝国北部的《悠米而》的
          
          《舒华泽男爵家》拾获而成为该家的养子.
    When: ""
    How: "剧情自动获得"
  - Title: "兄妹情深"
    ID: "li-en-2"
    Content: |
      有一位可爱的妹妹「爱丽榭」, 先正就读于
      
      《圣亚斯特莱亚女子学院》, 黎恩身为哥哥,
      
      似乎相当珍视这位没有血缘关系的妹妹.
    When: ""
    How: "剧情自动获得"
  - Title: "疯狂之”力”"
    ID: "li-en-3"
    Content: |
      突破某种桎梏之后, 身体将会发生变化,
      
      得以发挥有如野兽般的『力量』.
      
      黎恩从小就很害怕发生这样的情况.
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
^li-en-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^li-en-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^li-en-3
