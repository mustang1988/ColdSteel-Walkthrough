---
Aliases:
  - "雨果"
  - "雨果·克莱斯特"
ID: "yu-guo"
Category: "1年级(III IV V班)"
CategoryNo: 3
Order: 1
Description: |
  1年III班【未加入社团】

  离开位于帝都的老家来到学院就读的男学生.

  似乎和充满生意人精神的贝琪相当合得来.

Notes:
  - Title: "克莱斯特商会"
    ID: "yu-guo-1"
    Content: |
      虽然还是学生,

      但也帮忙大理父亲经营的克莱斯特商会.

    When: ""
    How: "小镇上喫茶宿泊《樱桃》与雨果对话获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^yu-guo-1