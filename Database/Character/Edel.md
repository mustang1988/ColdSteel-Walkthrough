---
Aliases:
  - "艾德尔"
ID: "Character.ai-de-er"
Category: "2年级(I II班)"
CategoryNo: 4
Order: 7
Description: |
  2年II班【园艺社】

  园艺社社长。

  头上的草帽可说是她的注册商标。

  基本上个性悠哉，且有很高的包容力。
Notes:
  - Title: "园艺社的活动"
    Content: |
      在园艺社也兼种菜。

      吃『苦番茄』时是喜欢大口咬下的那一派。
    When: ""
    How: "士官学院中庭, 与艾德尔对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^ai-de-er-1