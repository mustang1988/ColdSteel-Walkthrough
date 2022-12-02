---
ID: "Item.Fish.Rod"
# 鱼竿
Rods:
  - Name: "小巧射手"
    ID: "xiao-qiao-she-shou"
  - Name: "DX射手"
    ID: "dx-she-shou"
  - Name: "雷克罗德之星"
    ID: "lei-ke-luo-de-zhi-xing"
---
```dataviewjs
const rod = dv.current().Rods[0];
await dv.view('Item/Rod', { rod });
```
^xiao-qiao-she-shou

```dataviewjs
const rod = dv.current().Rods[1];
await dv.view('Item/Rod', { rod });
```
^dx-she-shou

```dataviewjs
const rod = dv.current().Rods[2];
await dv.view('Item/Rod', { rod });
```
^lei-ke-luo-de-zhi-xing