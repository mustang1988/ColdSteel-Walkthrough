---
Aliases:
  - "萝西努"
ID: "Character.luo-xi-nu"
Category: "1年级(III IV V班)"
CategoryNo: 3
Order: 14
Description: |
  1年V班【未加入社团】

  信仰虔诚, 散发高洁气质得女学生.

  与他人来往时, 对所有人都一视同仁.

Notes:
  - Title: "显瘦穿搭？"
    ID: "luo-xi-nu-1"
    Content: |
      穿修女服时和穿制服时相比

      给人的印象有些许不同.

      她本人不知为何有些在意这件事.

    When: ""
    How: "支线任务: [[游戏攻略/英雄传说 闪之轨迹/笔记/任务/睡着的小男孩|睡着的小男孩]] 获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^luo-xi-nu-1