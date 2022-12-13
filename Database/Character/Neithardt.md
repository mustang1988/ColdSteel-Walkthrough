---
Aliases:
  - "奈特哈尔教官"
ID: "Character.nai-te-ha-er"
Category: "教官·其他"
CategoryNo: 6
Order: 3
Description: |
  教官【负责军事学】

  原为从属于帝国军第四机甲师团的少校.

  被派至学院担任军事学教官.

  个性有点太过认真, 不太好相处.

Notes:
  - Title: "斯巴达式教官"
    ID: "nai-te-ha-er-1"
    Content: |
      毫不留情的为黎恩等人安排

      军队级训练的斯巴达式教官.

    When: ""
    How: "支线任务: [[游泳训练]] 获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^nai-te-ha-er-1