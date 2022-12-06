---
Aliases:
  - "莫妮卡"
ID: "mo-ni-ka"
Category: "1年级(III IV V班)"
CategoryNo: 3
Order: 2
Description: |
  1年III班【游泳社】

  个性文静, 内向的1年级女生.

  不太擅长运动.

Notes:
  - Title: "努力的成果"
    ID: "mo-ni-ka-1"
    Content: |
      和劳拉没日没夜地进行特训后,

      好不容易能够游到

      50亚距的距离.

    When: ""
    How: "劳拉羁绊事件"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^mo-ni-ka-1