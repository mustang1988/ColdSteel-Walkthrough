---
ID: "Treasure-Chest.Treasure-Chest"
TreasureChests:
- ID: "001"
  Location: ""
  Items: 
    - "[[Database/Item/Earth Sepith|x50]]"
    - "[[Database/Item/Water Sepith|x50]]"
    - "[[Database/Item/Fire Sepith|x50]]"
    - "[[Database/Item/Wind Sepith|x50]]"
    - "[[Database/Item/Time Sepith|x50]]"
    - "[[Database/Item/Space Sepith|x50]]"
    - "[[Database/Item/Mirage Sepith|x50]]"
  Chapter: ""
  Remark: ""
- ID: "002"
  Location: ""
  Items:  
    - "[[Database/Quartz/Earth N#^yan-shi-zhi-ci|岩石之刺]]"
  Chapter: ""
  Remark: ""
- ID: "003"
  Location: ""
  Items:  
    - "[[Database/Quartz/Water N#^hui-fu-shu|回复术]]"
  Chapter: ""
  Remark: ""
- ID: "004"
  Location: ""
  Items: 
    - "[[Database/Item/Earth Sepith|x50]]"
    - "[[Database/Item/Water Sepith|x50]]"
    - "[[Database/Item/Fire Sepith|x50]]"
    - "[[Database/Item/Wind Sepith|x50]]"
    - "[[Database/Item/Time Sepith|x50]]"
    - "[[Database/Item/Space Sepith|x50]]"
    - "[[Database/Item/Mirage Sepith|x50]]"
  Chapter: ""
  Remark: ""
- ID: "005"
  Location: ""
  Items:  
    - "[[Database/Quartz/Wind N#^hui-bi-1|回避1]]"
  Chapter: ""
  Remark: ""
---
```dataviewjs
const chest = dv.current().TreasureChests[0];
await dv.view('Treasure Chest/Treasure Chest', { chest });
```
^001

```dataviewjs
const chest = dv.current().TreasureChests[1];
await dv.view('Treasure Chest/Treasure Chest', { chest });
```
^002

```dataviewjs
const chest = dv.current().TreasureChests[2];
await dv.view('Treasure Chest/Treasure Chest', { chest });
```
^003

```dataviewjs
const chest = dv.current().TreasureChests[3];
await dv.view('Treasure Chest/Treasure Chest', { chest });
```
^004

```dataviewjs
const chest = dv.current().TreasureChests[4];
await dv.view('Treasure Chest/Treasure Chest', { chest });
```
^005