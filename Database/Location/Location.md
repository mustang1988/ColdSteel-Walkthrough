---
ID: "Location.Location"
Locations:
- Name: "旧校舍‧地下区块1"
  ID: "jiu-xiao-she-di-xia-qu-kuai-1"
  Maps:
    - "![[images/Maps/旧校舍‧地下区块1.webp]]"

- Name: "旧校舍‧地下区块2"
  ID: "jiu-xiao-she-di-xia-qu-kuai-2"
  Maps:
    - "![[images/Maps/旧校舍‧地下区块2.webp]]"

- Name: "旧校舍‧地下区块3"
  ID: "jiu-xiao-she-di-xia-qu-kuai-3"
  Maps:
    - "![[images/Maps/旧校舍‧地下区块3.webp]]"
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