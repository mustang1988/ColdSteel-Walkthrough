---
Aliases:
  - "派崔克"
  - "派崔克·T·海恩斯"
ID: "Character.pai-cui-ke"
Category: "1年级(I II班)"
CategoryNo: 2
Order: 1
Description: |
  1年I班【击剑社】

  态度高傲的贵族班学生.

  怀有强烈的阶级意识, 通常用不把人放在

  眼中的自大态度与平民来往.

Notes:
  - Title: "海恩斯家"
    ID: "pai-cui-ke-1"
    Content: |
      《四大名门》海恩斯家的三男,

      家门位阶就算在1年级学生中也算相当高的.

    When: "[[Walkthrough/Chapter 2^character-pai-cui-ke-1|第二章 5/22]]"
    How: "剧情自动获得"
  - Title: "意外的一面"
    ID: "pai-cui-ke-2"
    Content: |
      会对自己脱口而出的恶言感到后悔,

      也主动对使用了异样之『力』的黎恩表达关心等,

      获取其实本性并不是那么坏.

    When: ""
    How: "第一学生宿舍前, 与派崔克对话"
  - Title: "瑟雷斯坦"
    ID: "pai-cui-ke-3"
    Content: |
      他似乎将管家瑟雷斯坦视为

      一位时而严厉时而温柔的兄长,

      如同自己的亲哥哥一般看待.

    When: ""
    How: "支线任务: [[游戏攻略/英雄传说 闪之轨迹/笔记/任务/管家的秘密|管家的秘密]] 获得"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^pai-cui-ke

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^pai-cui-ke-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^pai-cui-ke-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^pai-cui-ke-3
