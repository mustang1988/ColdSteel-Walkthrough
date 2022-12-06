---
Aliases:
  - "爱蜜莉"
ID: "ai-mi-li"
Category: "2年级(III IV V班)"
CategoryNo: 5
Order: 7
Description: |
  2年IV班【袋棍球社】

  身为袋棍球社的领导者, 以热情带领着

  大家的2年级女社长.

Notes:
  - Title: "友情萌芽"
    ID: "ai-mi-li-1"
    Content: |
      1年前与泰蕾莎的感情不睦,

      但现在却成为最好的朋友,

      她本人相当以此自豪.

    When: ""
    How: "操场内和爱蜜莉对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^ai-mi-li-1
