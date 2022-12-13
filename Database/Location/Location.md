---
ID: "Location.Location"
Locations:
- Name: "旧校舍‧地下区块1"
  ID: "jiu-xiao-she-di-xia-qu-kuai-1"
  Maps:
    - "![[images/Maps/旧校舍‧地下区块1.webp]]"
  Fishes:

- Name: "旧校舍‧地下区块2"
  ID: "jiu-xiao-she-di-xia-qu-kuai-2"
  Maps:
    - "![[images/Maps/旧校舍‧地下区块2.webp]]"
  Fishes:

- Name: "旧校舍‧地下区块3"
  ID: "jiu-xiao-she-di-xia-qu-kuai-3"
  Maps:
    - "![[images/Maps/旧校舍‧地下区块3.webp]]"
  Fishes:

- Name: "旧校舍‧地下一层"
  ID: "jiu-xiao-she-di-xia-yi-ceng"
  Maps:
    - "![[images/Maps/旧校舍‧地下一层.jpg]]"
  Fishes:
    - "[[Database/Fish/Swordtail|刃鱼]]"
    - "[[Database/Fish/Gray Crab|花蟹]]"

---
```dataviewjs
const location = dv.current().Locations[0];
await dv.view('Location', { location });
```
^jiu-xiao-she-di-xia-qu-kuai-1

---

```dataviewjs
const location = dv.current().Locations[1];
await dv.view('Location', { location });
```
^jiu-xiao-she-di-xia-qu-kuai-2

---

```dataviewjs
const location = dv.current().Locations[2];
await dv.view('Location', { location });
```
^jiu-xiao-she-di-xia-qu-kuai-3

---

```dataviewjs
const location = dv.current().Locations[3];
await dv.view('Location', { location });
```
^jiu-xiao-she-di-xia-yi-ceng