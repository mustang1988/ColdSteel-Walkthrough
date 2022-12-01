---
ID: "Quartz.Water.N"
Element: "Water"
Quartzs:
  - Name: "高压水块"
    ID: "gao-ya-shui-kuai"
    Arts:
      - "[[Database/Art/Water#^gao-ya-shui-kuai|高压水块]]"
    Effects:
    Compositions:
      - "[[Database/Item/Water Sepith|x40]]"
    Exchanges:
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Views/Quartz/Water/N', { quartz });
```
^gao-ya-shui-kuai