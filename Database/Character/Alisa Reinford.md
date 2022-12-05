---
Aliases:
  - "亚莉莎"
  - "亚莉莎·莱恩福而特"
ID: "ya-li-sha"
Category: "VII班成员"
CategoryNo: 1
Order: 2
Description: |
  1年VII班【袋棍球社】
  
  看似柔弱的千金大小姐,
  
  但却会直截了当地表达自己的意见.
  
  出乎意料地是爱鸡婆的烂好人.
Notes:
  - Title: "RF公司千金"
    ID: "ya-li-sha-1"
    Content: |
      原来她是帝国最大规模的重工业制造商
      
      《莱恩福而特公司》的千金.
    When: ""
    How: "剧情自动获得"
  - Title: "给祖父的礼物"
    ID: "ya-li-sha-2"
    Content: |
      和黎恩一起绞尽脑汁选了一顶
      
      新潮的帽子送给
      
      人在诺而德高原的古恩老先生.
    When: ""
    How: "亚莉莎羁绊事件"
  - Title: "对母亲的情感"
    ID: "ya-li-sha-3"
    Content: |
      虽然对伊琳娜会长的生活方式感到反感,
      
      但亚莉莎身为她的独生女,
      
      还是以自己的方式在担心着她.
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
^ya-li-sha-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^ya-li-sha-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^ya-li-sha-3