---
Aliases:
  - "克洛"
  - "克洛·安布斯特"
ID: "Character.ke-luo"
Category: "VII班成员"
CategoryNo: 1
Order: 11
Description: |
  1年VII班【未加入社团】

  2年级的学长, 虽然有些爱玩,

  但也是个很会照顾人的大哥哥.

  因为学分不足, 被安排插班转入VII班.

Notes:
  - Title: "Blade"
    ID: "ke-luo-1"
    Content: |
      能使「Blade」得以在托利斯塔

      推广开来的人

      他似乎常陪小朋友们玩这种纸牌游戏.

    When: ""
    How: "克洛羁绊事件"
  - Title: "制作人"
    ID: "ke-luo-2"
    Content: |
      活用去年的经验,

      负责准备VII班展出时所需用到的

      器材和服饰等.

    When: ""
    How: "剧情自动获得"
  - Title: "《C》"
    ID: "ke-luo-3"
    Content: |
      《帝国解放战线》的领导人《C》——

      那便是克洛的真面目.

    When: ""
    How: "剧情自动获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^ke-luo-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^ke-luo-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^ke-luo-3