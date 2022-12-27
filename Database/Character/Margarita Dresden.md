---
Aliases:
  - "玛格丽特"
ID: "Character.ma-ge-li-te"
Category: "1年级(I II班)"
CategoryNo: 2
Order: 5
Description: |
  1年II班【烹饪社】

  为了学习新娘该有的素养并寻找将来的夫婿,

  而来到学院的男爵家千金.

Notes:
  - Title: "格兰玫瑰"
    ID: "ma-ge-li-te"
    Content: |
      将家乡的特产《格兰玫瑰》

      送给心上人文森,

      做出符合华语「热烈求爱」的行动.

    When: "[[Walkthrough/Chapter 3#^character-ma-ge-li-te-1|第三章 6/20晚]]"
    How: "支线任务: [[Database/Quest/Side Quest#^wei-ceng-mou-mian-de-ji-jian-zhe|未曾谋面的寄件者]]"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^ma-ge-li-te

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^ma-ge-li-te-1