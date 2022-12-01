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
  - Name: "结晶防护R"
    ID: "jie-jing-fang-hu-r"
    Arts:
      - "[[Database/Art/Earth#^jie-jing-fang-hu|结晶防护]]"
    Effects:
      - "DEF+5"
      - "HP+50"
    Compositions:
    Exchanges:
      - Item: "[[Earth N#^jie-jing-fang-hu|结晶防护]]"
        Count: 2
      - Item: "[[U-Material|U物质]]"
        Count: 1
  - Name: "结晶防护·复R"
    ID: "jie-jing-fang-hu-fu-r"
    Arts:
      - "[[Database/Art/Earth#^jie-jing-fang-hu-fu|结晶防护·复]]"
    Effects:
      - "DEF+10"
      - "HP+100"
    Compositions:
    Exchanges:
      - Item: "[[Earth N#^jie-jing-fang-hu-fu|结晶防护·复]]"
        Count: 2
      - Item: "[[U-Material|U物质]]"
        Count: 2
  - Name: "坚韧守护R"
    ID: "jian-ren-shou-hu-r"
    Arts:
      - "[[Database/Art/Earth#^jian-ren-shou-hu|坚韧守护]]"
    Effects:
      - "DEF+15"
      - "HP+500"
    Compositions:
    Exchanges:
      - Item: "[[Earth N#^jian-ren-shou-hu|坚韧守护]]"
        Count: 3
      - Item: "[[U-Material|U物质]]"
        Count: 3
  - Name: "曜脉"
    ID: "yao-mai"
    Arts:
    Effects:
      - "敌人掉落的曜晶石增加"
    Compositions:
    Exchanges:
      - Item: "[[Earth N#^da-di-zhi-yu|大地之愈]]"
        Count: 3
  - Name: "龙脉"
    ID: "long-mai"
    Arts:
    Effects:
      - "敌人掉落的曜晶石增加"
      - "在原野上回复EP"
    Compositions:
    Exchanges:
      - Item: "[[Database/Quartz/Earth R#^yao-mai|耀脉]]"
        Count: 1
      - Item: "[[Database/Quartz/Fire R#^ji-gong|机功]]"
        Count: 1
  - Name: "破盾之牙"
    ID: "po-dun-zhi-ya"
    Arts:
    Effects:
      - "STR+10"
      - "普通攻击·战技附加「DEF-25%(15%)」"
    Compositions:
    Exchanges:
      - Item: "[[Database/Quartz/Earth N#^du-zhi-ren|毒之刃]]"
        Count: 1
      - Item: "[[Database/Quartz/Earth N#^shi-hua-zhi-ren|石化之刃]]"
        Count: 1
      - Item: "[[Database/Item/U-Material|U物质]]"
        Count: 1
  - Name: "地言铃"
    ID: "di-yan-ling"
    Arts:
    Effects:
      - "ATS+5"
      - "使用地属性魔法后的僵直时间减半"
    Compositions:
    Exchanges:
      - Item: "[[Database/Quartz/Earth N#^shi-jie-zhi-shu|世界之树]]"
        Count: 1
      - Item: "[[Database/Quartz/Earth N#^da-di-beng-lie|大地崩裂]]"
        Count: 1
      - Item: "[[Database/Quartz/Earth N#^da-di-zhi-qiang|大地之枪]]"
        Count: 1
      - Item: "[[Database/Quartz/Earth N#^yan-shi-zhi-ci|岩石之刺]]"
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

```dataviewjs
const quartz = dv.current().Quartzs[6];
await dv.view('Views/Quartz/Earth/R', { quartz });
```
^jie-jing-fang-hu-r

```dataviewjs
const quartz = dv.current().Quartzs[7];
await dv.view('Views/Quartz/Earth/R', { quartz });
```
^jie-jing-fang-hu-fu-r

```dataviewjs
const quartz = dv.current().Quartzs[8];
await dv.view('Views/Quartz/Earth/R', { quartz });
```
^jian-ren-shou-hu-r

```dataviewjs
const quartz = dv.current().Quartzs[9];
await dv.view('Views/Quartz/Earth/R', { quartz });
```
^yao-mai

```dataviewjs
const quartz = dv.current().Quartzs[10];
await dv.view('Views/Quartz/Earth/R', { quartz });
```
^long-mai

```dataviewjs
const quartz = dv.current().Quartzs[11];
await dv.view('Views/Quartz/Earth/R', { quartz });
```
^po-dun-zhi-ya

```dataviewjs
const quartz = dv.current().Quartzs[12];
await dv.view('Views/Quartz/Earth/R', { quartz });
```
^di-yan-ling