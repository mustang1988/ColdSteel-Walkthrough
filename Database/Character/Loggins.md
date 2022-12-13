---
Aliases:
  - "罗金斯"
ID: "Character.luo-jin-si"
Category: "2年级(III IV V班)"
CategoryNo: 5
Order: 6
Description: |
  2年IV班【击剑社】

  外貌相当凶悍的击剑社2年级学生.

  容易生气是个性上美中不足的缺点.

Notes:
  - Title: "桀骜不驯的过去"
    ID: "luo-jin-si-1"
    Content: |
      据说1年级时是个令众人无计可施的

      火爆浪子, 后来似乎在遭到弗列妲

      狠狠教训过后而洗心革面.

    When: ""
    How: "体育馆内和罗金斯对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^luo-jin-si-1