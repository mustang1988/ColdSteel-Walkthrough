---
Aliases:
  - "亨利主任"
ID: "Character.heng-li"
Category: "教官·其他"
CategoryNo: 6
Order: 4
Description: |
  主任【负责政治经济学】

  拥有男爵爵位的主任,

  负责教授政治经济学.

  个性神经质且重视纪律, 喜欢抱怨.

Notes:
  - Title: "秘密的手记"
    ID: "heng-li-1"
    Content: |
      随身带着一本内容不能给别人看的私人手记.
    When: ""
    How: "支线任务: [[游戏攻略/英雄传说 闪之轨迹/笔记/任务/主任的失物|主任的失物]] 获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^heng-li-1