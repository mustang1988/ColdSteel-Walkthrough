---
Aliases:
  - "雷克斯"
ID: "Character.lei-ke-si"
Category: "1年级(III IV V班)"
CategoryNo: 3
Order: 10
Description: |
  1年V班【摄影社】

  充满狗崽队精神的摄影社社员.

  总是拿着导力相机,

  寻找适合入镜的可爱女生.

Notes:
  - Title: "误入歧途的才能"
    ID: "lei-ke-si-1"
    Content: |
      虽然不擅长拍摄风景,

      但在拍摄他最喜欢的主题「女生」时,

      似乎可以拍出相当好的照片.

    When: ""
    How: "学生会馆2F与裴德烈和雷克斯对话"
---
```dataviewjs
const character = dv.current();
await dv.view('Character/Description', { character });
```
^lei-ke-si

```dataviewjs
const note = dv.current().Notes[0];
await dv.view('Character/Note', { note });
```
^lei-ke-si-1