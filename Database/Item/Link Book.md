---
ID: "Item.LinkBook"
Books:
  - Name: "疗愈系音乐"
    ID: "liao-yu-xi-yin-yue"
    Character: "[[Database/Character/Elliot Craig|艾略特]]"
    Link: 50

  - Name: "雷格拉姆导览"
    ID: "lei-ge-la-mu-dao-lan"
    Character: "[[Database/Character/Laura S Arseid|劳拉]]"
    Link: 50

  - Name: "感人至深絵画集"
    ID: "gan-ren-zhi-shen-hui-hua-ji"
    Character: "[[Database/Character/Gaius Worzel|盖乌斯]]"
    Link: 50

  - Name: ""
    ID: ""
    Character: ""
    Link: 
---
```dataviewjs
const book = dv.current().Books[0];
await dv.view('Item/Link Book', { book });
```
^liao-yu-xi-yin-yue

---

```dataviewjs
const book = dv.current().Books[1];
await dv.view('Item/Link Book', { book });
```
^lei-ge-la-mu-dao-lan

---

```dataviewjs
const book = dv.current().Books[2];
await dv.view('Item/Link Book', { book });
```
^gan-ren-zhi-shen-hui-hua-ji

---
