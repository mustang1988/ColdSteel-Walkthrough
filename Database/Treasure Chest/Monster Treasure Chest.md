---
ID: "Treasure-Chest.Monster-Treasure-Chest"
MonsterTreasureChests:
- ID: "028"
  Location: "[[Database/Location/Location#^lu-na-li-ya-zi-ran-gong-yuan-3|露纳利亚自然公园3]]"
  Items:  
    - "[[Database/Quartz/Fire R#^zhuo-re-zhi-bo-r|灼热之波R]]"
  Chapter: "[[Walkthrough/Chapter 1#^location-lu-na-li-ya-zi-ran-gong-yuan-3|第一章 4/15]]"
  Remark:
- ID: "033"
  Location: "[[Database/Location/Location#^jiu-xiao-she-di-xia-er-ceng|旧校舍地下·第二层]]"
  Items:  
    - "[[Database/Quartz/Time SR#^si-shen|死神]]"
  Chapter: "[[Walkthrough/Chapter 2#^location-jiu-xiao-she-di-xia-er-ceng|第二章 5/23]]"
  Remark:
#-------------
- ID: ""
  Location: ""
  Items:  
    - ""
  Chapter: ""
  Remark:
---
```dataviewjs
const chest = dv.current().MonsterTreasureChests[0];
await dv.view('Treasure Chest', { chest, monster: true });
```
^028

---

```dataviewjs
const chest = dv.current().MonsterTreasureChests[1];
await dv.view('Treasure Chest', { chest, monster: true });
```
^033

---