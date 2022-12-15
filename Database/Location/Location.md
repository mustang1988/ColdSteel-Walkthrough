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
    - "![[images/Maps/西凯尔迪克街道1.webp]]"
  Fishes:

- Name: "西凯尔迪克街道2"
  ID: "xi-kai-er-di-ke-jie-dao-2"
  Maps:
    - "![[images/Maps/西凯尔迪克街道2.webp]]"
  Fishes:

- Name: "东凯尔迪克街道1"
  ID: "dong-kai-er-di-ke-jie-dao-1"
  Maps:
    - "![[images/Maps/东凯尔迪克街道1.jpg]]"
  Fishes:

- Name: "东凯尔迪克街道2"
  ID: "dong-kai-er-di-ke-jie-dao-2"
  Maps:
    - "![[images/Maps/东凯尔迪克街道2.jpg]]"
  Fishes:
- Name: "露纳利亚自然公园1"
  ID: "lu-na-li-ya-zi-ran-gong-yuan-1"
  Maps:
    - "![[images/Maps/露纳利亚自然公园1.jpg]]"
  Fishes:
- Name: "露纳利亚自然公园2"
  ID: "lu-na-li-ya-zi-ran-gong-yuan-2"
  Maps:
    - "![[images/Maps/露纳利亚自然公园2.jpg]]"
  Fishes:
- Name: "露纳利亚自然公园3"
  ID: "lu-na-li-ya-zi-ran-gong-yuan-3"
  Maps:
    - "![[images/Maps/露纳利亚自然公园3.jpg]]"
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

```dataviewjs
const location = dv.current().Locations[8];
await dv.view('Location', { location });
```
^lu-na-li-ya-zi-ran-gong-yuan-1

---

```dataviewjs
const location = dv.current().Locations[9];
await dv.view('Location', { location });
```
^lu-na-li-ya-zi-ran-gong-yuan-2

---

```dataviewjs
const location = dv.current().Locations[10];
await dv.view('Location', { location });
```
^lu-na-li-ya-zi-ran-gong-yuan-3

---