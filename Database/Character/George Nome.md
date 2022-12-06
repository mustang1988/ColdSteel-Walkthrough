---
Aliases:
  - "乔治"
  - "乔治·诺姆"
ID: "qiao-zhi"
Category: "2年级(III IV V班)"
CategoryNo: 5
Order: 1
Description: |
  2年III班【技术社】

  掌管技术社, 是一位相当好相处的学长.

  是一位优秀的技师,

  调整导力器对他来说轻而易举.

Notes:
  - Title: "卢雷工科大学"
    ID: "qiao-zhi-1"
    Content: |
      定期与邀请他毕业后入学的

      卢雷工科大学间进行联络,

      发送导力机车的报告等.

    When: ""
    How: "技术栋与乔治对话"
  - Title: "爱吃甜食"
    ID: "qiao-zhi-2"
    Content: |
      无法抗拒甜食, 似乎是因为

      吃了之后作业起来如有神助的缘故.

    When: ""
    How: "技术栋与乔治对话"
  - Title: "导力机车的羁绊"
    ID: "qiao-zhi-3"
    Content: |
      安洁莉卡为他创造了

      一头载进导力机车研究的契机,

      虽然乔治没说出口, 但内心似乎很感谢她.

    When: ""
    How: "技术栋和乔治对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^qiao-zhi-1

```dataviewjs
const note = dv.current().Notes[1];
await dv.view('Character/Note', { note });
```
^qiao-zhi-2

```dataviewjs
const note = dv.current().Notes[2];
await dv.view('Character/Note', { note });
```
^qiao-zhi-3