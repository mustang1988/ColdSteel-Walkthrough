---
ID: "Quartz.Earth.N"
Element: "Earth"
Quartzs:
  - Name: "岩石之刺"
    ID: "yan-shi-zhi-ci"
    Arts:
      - "[[Earth#^yan-shi-zhi-ci|岩石之刺]]"
    Effects:
    Compositions:
      - "[[Earth Sepith|x40]]"
    Exchanges:
  - Name: "大地之枪"
    ID: "da-di-zhi-qiang"
    Arts:
      - "[[Earth#^da-di-zhi-qiang|大地之枪]]"
    Effects:
    Compositions:
      - "[[Earth Sepith|x80]]"
      - "[[Fire Sepith|x20]]"
    Exchanges:
  - Name: "大地崩裂"
    ID: "da-di-beng-lie"
    Arts:
      - "[[Earth#^da-di-beng-lie|大地崩裂]]"
    Effects:
    Compositions:
      - "[[Earth Sepith|x200]]"
      - "[[Space Sepith|x50]]"
    Exchanges:
  - Name: "世界之树"
    ID: "shi-jie-zhi-shu"
    Arts:
      - "[[Earth#^shi-jie-zhi-shu|世界之树]]"
    Effects:
    Compositions:
      - "[[Earth Sepith|x600]]"
    Exchanges:
  - Name: "远古巨岩"
    ID: "yuan-gu-ju-yan"
    Arts:
      - "[[Earth#^yuan-gu-ju-yan|远古巨岩]]"
    Effects:
    Compositions:
      - "[[Earth Sepith|x1000]]"
    Exchanges:
  - Name: "大地之愈"
    ID: "da-di-zhi-yu"
    Arts:
      - "[[Earth#^da-di-zhi-yu|大地之愈]]"
    Effects:
    Compositions:
      - "[[Earth Sepith|x120]]"
      - "[[Water Sepith|x30]]"
    Exchanges:
  - Name: "结晶防护"
    ID: "jie-jing-fang-hu"
    Arts:
      - "[[Earth#^jie-jing-fang-hu|结晶防护]]"
    Effects:
    Compositions:
      - "[[Earth Sepith|x40]]"
    Exchanges:
  - Name: "结晶防护·复"
    ID: "jie-jing-fang-hu-fu"
    Arts:
      - "[[Earth#^jie-jing-fang-hu-fu|结晶防护·复]]"
    Effects:
    Compositions:
      - "[[Earth Sepith|x250]]"
    Exchanges:
  - Name: "坚韧守护"
    ID: "jian-ren-shou-hu"
    Arts:
      - "[[Earth#^jian-ren-shou-hu|坚韧守护]]"
    Effects:
    Compositions:
      - "[[Earth Sepith|x1000]]"
    Exchanges:
  - Name: "防御1"
    ID: "fang-yu-1"
    Arts:
    Effects:
      - "DEF+10"
    Compositions:
      - "[[Earth Sepith|x100]]"
    Exchanges:
      - Item: "[[Earth N#^yan-shi-zhi-ci|岩石之刺]]"
        Count: 3
  - Name: "防御2"
    ID: "fang-yu-2"
    Arts:
    Effects:
      - "DEF+20"
    Compositions:
      - "[[Earth Sepith|x250]]"
    Exchanges:
      - Item: "[[Earth N#^fang-yu-1|防御1]]"
        Count: 3
  - Name: "防御3"
    ID: "fang-yu-3"
    Arts:
    Effects:
      - "DEF+40"
    Compositions:
      - "[[Earth Sepith|x600]]"
    Exchanges:
      - Item: "[[Earth N#^fang-yu-2|防御2]]"
        Count: 3
  - Name: "毒之刃"
    ID: "du-zhi-ren"
    Arts:
    Effects:
      - "普通攻击·战技附加 [[Database/Status/Poison|中毒(10%)]]."
    Compositions:
      - "[[Earth Sepith|x150]]"
    Exchanges:
      - Item: "[[Earth N#^yan-shi-zhi-ci|岩石之刺]]"
        Count: 1
      - Item: "[[Accessory#^yin-er-huan|银耳环]]"
        Count: 1
  - Name: "石化之刃"
    ID: "du-zhi-ren"
    Arts:
    Effects:
      - "普通攻击·战技附加 [[Database/Status/Petrify|石化(10%)]]."
    Compositions:
      - "[[Earth Sepith|x250]]"
    Exchanges:
      - Item: "[[Earth N#^da-di-zhi-yu|大地之愈]]"
        Count: 1
      - Item: "[[Accessory#^qi-shi-xiong-zhen|奇石胸针]]"
        Count: 1
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Views/Quartz/Earth/N', { quartz });
```
^yan-shi-zhi-ci

---

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Views/Quartz/Earth/N', { quartz });
```
^da-di-zhi-qiang

---

```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Views/Quartz/Earth/N', { quartz });
```
^da-di-beng-lie

---

```dataviewjs
const quartz = dv.current().Quartzs[3];
await dv.view('Views/Quartz/Earth/N', { quartz });
```
^shi-jie-zhi-shu

---

```dataviewjs
const quartz = dv.current().Quartzs[4];
await dv.view('Views/Quartz/Earth/N', { quartz });
```
^yuan-gu-ju-yan

---

```dataviewjs
const quartz = dv.current().Quartzs[5];
await dv.view('Views/Quartz/Earth/N', { quartz });
```
^da-di-zhi-yu

---

```dataviewjs
const quartz = dv.current().Quartzs[6];
await dv.view('Views/Quartz/Earth/N', { quartz });
```
^jie-jing-fang-hu

---

```dataviewjs
const quartz = dv.current().Quartzs[7];
await dv.view('Views/Quartz/Earth/N', { quartz });
```
^jie-jing-fang-hu-fu

---

```dataviewjs
const quartz = dv.current().Quartzs[8];
await dv.view('Views/Quartz/Earth/N', { quartz });
```
^jian-ren-shou-hu

---

```dataviewjs
const quartz = dv.current().Quartzs[9];
await dv.view('Views/Quartz/Earth/N', { quartz });
```
^fang-yu-1

---

```dataviewjs
const quartz = dv.current().Quartzs[10];
await dv.view('Views/Quartz/Earth/N', { quartz });
```
^fang-yu-2

---

```dataviewjs
const quartz = dv.current().Quartzs[11];
await dv.view('Views/Quartz/Earth/N', { quartz });
```
^fang-yu-3

---

```dataviewjs
const quartz = dv.current().Quartzs[12];
await dv.view('Views/Quartz/Earth/N', { quartz });
```
^du-zhi-ren

---

```dataviewjs
const quartz = dv.current().Quartzs[13];
await dv.view('Views/Quartz/Earth/N', { quartz });
```
^shi-hua-zhi-ren

---
