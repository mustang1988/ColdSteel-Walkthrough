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
- ID: "041"
  Location: "[[Database/Location/Location#^ao-luo-ke-si-xia-gu-dao-2|奥洛克斯峡谷道2]]"
  Items:  
    - "[[Database/Quartz/Wind SR#^xun-feng|熏风]]"
  Chapter: "[[Walkthrough/Chapter 2#^location-ao-luo-ke-si-xia-gu-dao-2|第二章 5/29]]"
  Remark:
- ID: "047"
  Location: "[[Database/Location/Location#^gong-du-di-xia-shui-lu-2|公都地下水路2]]"
  Items:  
    - "[[Database/Quartz/Fire R#^lian-qi|炼气]]"
  Chapter: "[[Walkthrough/Chapter 2#^location-gong-du-di-xia-shui-lu-2|第二章 5/30]]"
  Remark:
- ID: "057"
  Location: "[[Database/Location/Location#^jiu-xiao-she-di-xia-san-ceng-2|旧校舍地下·第3层2]]"
  Items:  
    - "[[Database/Quartz/Master/Master.Aries|白羊]]"
  Chapter: "[[Walkthrough/Chapter 3#^location-jiu-xiao-she-di-xia-san-ceng-2|第三章 6/20]]"
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

```dataviewjs
const chest = dv.current().MonsterTreasureChests[2];
await dv.view('Treasure Chest', { chest, monster: true });
```
^041

---

```dataviewjs
const chest = dv.current().MonsterTreasureChests[3];
await dv.view('Treasure Chest', { chest, monster: true });
```
^047

---

```dataviewjs
const chest = dv.current().MonsterTreasureChests[4];
await dv.view('Treasure Chest', { chest, monster: true });
```
^057