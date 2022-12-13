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

- Name: "西凯尔迪克街道1"
  ID: "xi-kai-er-di-ke-jie-dao-1"
  Maps:
    - ""
  Fishes:

- Name: "西凯尔迪克街道2"
  ID: "xi-kai-er-di-ke-jie-dao-2"
  Maps:
    - ""
  Fishes:

- Name: "东凯尔迪克街道1"
  ID: "dong-kai-er-di-ke-jie-dao-1"
  Maps:
    - ""
  Fishes:

- Name: "东凯尔迪克街道2"
  ID: "dong-kai-er-di-ke-jie-dao-2"
  Maps:
    - ""
  Fishes:
##################################
- Name: ""
  ID: ""
  Maps:
    - ""
  Fishes:

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

---

```dataviewjs
const location = dv.current().Locations[4];
await dv.view('Location', { location });
```
^xi-kai-er-di-ke-jie-dao-1

---

```dataviewjs
const location = dv.current().Locations[5];
await dv.view('Location', { location });
```
^xi-kai-er-di-ke-jie-dao-2

---

```dataviewjs
const location = dv.current().Locations[6];
await dv.view('Location', { location });
```
^dong-kai-er-di-ke-jie-dao-1

---

```dataviewjs
const location = dv.current().Locations[7];
await dv.view('Location', { location });
```
^dong-kai-er-di-ke-jie-dao-2

---