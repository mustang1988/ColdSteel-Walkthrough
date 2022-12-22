---
Aliases:
  - "克连"
ID: "Character.ke-lian"
Category: "2年级(III IV V班)"
CategoryNo: 5
Order: 8
Description: |
  2年V班【游泳社】

  担任游泳社社长的爽朗2年级学生.

  以领导者的身份带领着大家.

Notes:
  - Title: "重视家人"
    ID: "ke-lian-1"
    Content: |
      非常重视父亲死后以一己之力养育自己的

      母亲, 以及家中的弟弟妹妹们.

    When: "[[Walkthrough/Chapter 2#^character-ke-lian-1|第二章 5/23]]"
    How: "支线任务: [[Database/Quest/Side Quest#^dai-ke-lao-shi-de-qing-tuo|代课老师的请托]] 获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^ke-lian

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^ke-lian-1