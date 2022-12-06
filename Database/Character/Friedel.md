---
Aliases:
  - "弗列妲"
ID: "fu-lie-da"
Category: "2年级(I II班)"
CategoryNo: 4
Order: 3
Description: |
  1年I班【击剑社】

  个性沉稳且好相处的击剑社社长.

  平时总是从背后默默支持着社员们.

Notes:
  - Title: "社内最强的剑术"
    ID: "fu-lie-da-1"
    Content: |
      其实在击剑社中拥有最强的实力,

      足以在对上派崔克时获得完全胜利.

    When: ""
    How: "体育馆2F, 与弗列妲对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^fi-lie-da-1