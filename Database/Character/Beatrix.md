---
Aliases:
  - "碧翠丝教官"
ID: "Character.bi-cui-si"
Category: "教官·其他"
CategoryNo: 6
Order: 7
Description: |
  教官【负责医学】

  性格温和, 是军官学院的保健医生.

  用柔软的身段和广阔的胸怀

  迎接来到保健教室的学生们.

Notes:
  - Title: "神秘的压迫感"
    ID: "bi-cui-si-1"
    Content: |
      平时虽然很温柔, 但偶尔会散发出

      连亨利主任都为之退缩的压迫感.

    When: ""
    How: "主校舍1F和翠碧丝教官对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^bi-cui-si-1