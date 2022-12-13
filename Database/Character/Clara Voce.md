---
Aliases:
  - "克莱菈"
ID: "Character.ke-lai-la"
Category: "2年级(III IV V班)"
CategoryNo: 5
Order: 4
Description: |
  2年III班【美术社】

  拥有天生的艺术家气质的美术社社长.

  专长是雕刻, 总是泡在美术教室中

  不断创作作品.

Notes:
  - Title: "天才特质"
    ID: "ke-lai-la-1"
    Content: |
      据说她就算完全不念书

      也能轻易拿下平均分数左右的成绩.

      因此, 她把多出来的时间都花在创作作品上.

    When: ""
    How: "主校舍2F美术室与克莱菈对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^ke-lai-la-1