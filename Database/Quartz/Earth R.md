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
  - Name: "世界之树R"
    ID: "shi-jie-zhi-shu-r"
    Arts:
      - "[[Earth#^shi-jie-zhi-shu|世界之树]]"
    Effects:
      - "DEF+10"
      - "STR+7"
    Compositions:
    Exchanges:
      - Item: "[[Earth N#^shi-jie-zhi-shu|世界之树]]"
        Count: 2
      - Item: "[[U-Material|U物质]]"
        Count: 2
  - Name: "远古巨岩R"
    ID: "yuan-gu-ju-yan-r"
    Arts:
      - "[[Earth#^yuan-gu-ju-yan|远古巨岩]]"
    Effects:
      - "DEF+15"
      - "STR+10"
    Compositions:
    Exchanges:
      - Item: "[[Earth N#^yuan-gu-ju-yan|远古巨岩]]"
        Count: 2
      - Item: "[[U-Material|U物质]]"
        Count: 3
  - Name: "大地之愈R"
    ID: "da-di-zhi-yu-r"
    Arts:
      - "[[Earth#^da-di-zhi-yu|大地之愈]]"
    Effects:
      - "HP+200"
      - "DEF+5"
    Compositions:
    Exchanges:
      - Item: "[[Earth N#^da-di-zhi-yu|大地之愈]]"
        Count: 2
      - Item: "[[U-Material|U物质]]"
        Count: 1
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

```dataviewjs
const quartz = dv.current().Quartzs[3];
await dv.view('Views/Quartz/Earth/R', { quartz });
```
^shi-jie-zhi-shu-r

```dataviewjs
const quartz = dv.current().Quartzs[4];
await dv.view('Views/Quartz/Earth/R', { quartz });
```
^yuan-gu-ju-yan-r

```dataviewjs
const quartz = dv.current().Quartzs[5];
await dv.view('Views/Quartz/Earth/R', { quartz });
```
^da-di-zhi-yu-r