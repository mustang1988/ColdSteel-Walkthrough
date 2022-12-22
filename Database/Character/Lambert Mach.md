---
Aliases:
  - "兰伯特"
ID: "Character.lan-bo-te"
Category: "2年级(I II班)"
CategoryNo: 4
Order: 4
Description: |
  2年II班【骑术社】

  老是和爱马《马赫号》腻在一起.

  全心全意投注在与马有关的事物中的

  骑术社社长.

Notes:
  - Title: "真正的搭档"
    ID: "lan-bo-te-1"
    Content: |
      眼看着帝国的紧张气氛逐渐升高,

      发誓无论任何事情

      都会与马赫号共同克服.

    When: ""
    How: "操场和兰伯特对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^lan-bo-te

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^lan-bo-te-1