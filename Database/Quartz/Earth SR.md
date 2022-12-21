---
ID: "Quartz.Earth.SR"
Element: "Earth"
Quartzs:
  - Name: "丰饶"
    ID: "feng-rao"
    Arts:
      - "[[Database/Art/Earth#^da-di-zhi-yu|大地之愈]]"
      - "[[Database/Art/Earth#^jie-jing-fang-hu-fu|结晶防护·复]]"
      - "[[Database/Art/Earth#^da-di-beng-lie|大地崩裂]]"
    Effects:
      - "HP+200"
      - "DEF+5"
      - "ATS+5"
    Compositions:
    Exchanges:

  - Name: "玄武刃"
    ID: "xuan-wu-ren"
    Arts:
    Effects:
      - "普通攻击·战技附加 [[Database/Status/Poison|中毒(10%)]]、[[Database/Status/Petrify|石化(10%)]]"
    Compositions:
    Exchanges:

  - Name: "金刚盾"
    ID: "jin-gang-dun"
    Arts:
      - "[[Database/Art/Earth#^jian-ren-shou-hu|坚韧守护]]"
      - "[[Database/Art/Mirage#^xin-yue-zhi-jing|新月之镜]]"
    Effects:
      - "DEF+20"
      - "ADF+20"
    Compositions:
    Exchanges:

  - Name: "不动珠"
    ID: "bu-dong-zhu"
    Arts:
      - "[[Database/Art/Earth#^yuan-gu-ju-yan|远古巨岩]]"
    Effects:
      - "DEF+80"
    Compositions:
    Exchanges:
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Views/Quartz/SR', { quartz, element: 'Earth' });
```
^feng-rao

---

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Views/Quartz/SR', { quartz, element: 'Earth' });
```
^xuan-wu-ren

---

```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Views/Quartz/SR', { quartz, element: 'Earth' });
```
^jin-gang-dun

---

```dataviewjs
const quartz = dv.current().Quartzs[3];
await dv.view('Views/Quartz/SR', { quartz, element: 'Earth' });
```
^bu-dong-zhu