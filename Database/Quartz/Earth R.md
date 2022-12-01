---
ID: "Quartz.Earth.R"
Element: "Earth"
Quartzs:
  - Name: "岩石之刺R"
    ID: "yan-shi-zhi-ci-r"
    Arts:
      - "[[Earth#^yan-shi-zhi-ci|岩石之刺]]"
    Effects:
      - "DEF+3"
      - "STR+2"
    Compositions:
    Exchanges:
      - Item: "[[Earth N#^yan-shi-zhi-ci|岩石之刺]]"
        Count: 2
      - Item: "[[U-Material|U物质]]"
        Count: 1
  - Name: "大地之枪R"
    ID: "da-di-zhi-qiang-r"
    Rate: "R"
    Element: "Earth"
    Arts:
      - "[[Earth#^da-di-zhi-qiang|大地之枪]]"
    Effects:
      - "DEF+5"
      - "STR+3"
    Compositions:
    Exchanges:
      - Item: "[[Earth N#^da-di-zhi-qiang|大地之枪]]"
        Count: 2
      - Item: "[[U-Material|U物质]]"
        Count: 1
  - Name: "大地崩裂R"
    ID: "da-di-beng-lie-r"
    Arts:
      - "[[Earth#^da-di-beng-lie|大地崩裂]]"
    Effects:
      - "DEF+7"
      - "STR+5"
    Compositions:
    Exchanges:
      - Item: "[[Earth N#^da-di-beng-lie|大地崩裂]]"
        Count: 2
      - Item: "[[U-Material|U物质]]"
        Count: 2
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Views/Quartz/Earth/R', { quartz });
```
^yan-shi-zhi-ci-r

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Views/Quartz/Earth/R', { quartz });
```
^da-di-zhi-qiang-r

```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Views/Quartz/Earth/R', { quartz });
```
^da-di-beng-lie-r