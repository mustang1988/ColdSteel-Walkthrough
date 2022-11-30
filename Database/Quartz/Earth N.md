---
ID: "Quartz.Earth.N"
Element: "Earth"
Quartzs:
  - Name: "岩石之刺"
    ID: "yan-shi-zhi-ci"
    Element: "Earth"
    Arts:
      - "[[Earth#^yan-shi-zhi-ci|岩石之刺]]"
    Effects:
    Compositions:
      - Item: "[[Earth Sepith| ]]"
        Count: 40
    Exchanges:
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Views/Quartz/Earth/N', { quartz });
```
^yan-shi-zhi-ci