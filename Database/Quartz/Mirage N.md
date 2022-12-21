---
ID: "Quartz.Mirage.N"
Element: "Mirage"
Quartzs:
  - Name: "皎月之光"
    ID: "jiao-yue-zhi-guang"
    Arts:
      - "[[Database/Art/Mirage#^jiao-yue-zhi-guang|皎月之光]]"
    Effects:
    Compositions:
      - "[[Database/Item/Mirage Sepith|x60]]"
    Exchanges:

  - Name: "银夜之棘"
    ID: "yin-ye-zhi-ji"
    Arts:
      - "[[Database/Art/Mirage#^yin-ye-zhi-ji|银夜之棘]]"
    Effects:
    Compositions:
      - "[[Database/Item/Mirage Sepith|x200]]"
      - "[[Database/Item/Fire Sepith|x50]]"
    Exchanges:

  - Name: "魅影之惧"
    ID: "mei-ying-zhi-ju"
    Arts:
      - "[[Database/Art/Mirage#^mei-ying-zhi-ju|魅影之惧]]"
    Effects:
    Compositions:
      - "[[Database/Item/Mirage Sepith|x450]]"
      - "[[Database/Item/Fire Sepith|x125]]"
      - "[[Database/Item/Time Sepith|x125]]"
    Exchanges:

  - Name: "星光之剑"
    ID: "xing-guang-zhi-jian"
    Arts:
      - "[[Database/Art/Mirage#^xing-guang-zhi-jian|星光之剑]]"
    Effects:
    Compositions:
      - "[[Database/Item/Mirage Sepith|x1500]]"
    Exchanges:

  - Name: "情报解析"
    ID: "qing-bao-jie-xi"
    Arts:
      - "[[Database/Art/Mirage#^qing-bao-jie-xi|情报解析]]"
    Effects:
    Compositions:
      - "[[Database/Item/Mirage Sepith|x20]]"
    Exchanges:

  - Name: "神圣之力"
    ID: "shen-sheng-zhi-li"
    Arts:
      - "[[Database/Art/Mirage#^shen-sheng-zhi-li|神圣之力]]"
    Effects:
    Compositions:
      - "[[Database/Item/Mirage Sepith|x80]]"
      - "[[Database/Item/Earth Sepith|x40]]"
      - "[[Database/Item/Fire Sepith|x40]]"
    Exchanges:

  - Name: "新月之镜"
    ID: "xin-yue-zhi-jing"
    Arts:
      - "[[Database/Art/Mirage#^xin-yue-zhi-jing|新月之镜]]"
    Effects:
    Compositions:
      - "[[Database/Item/Mirage Sepith|x500]]"
      - "[[Database/Item/Earth Sepith|x150]]"
      - "[[Database/Item/Fire Sepith|x150]]"
    Exchanges:

  - Name: "EP1"
    ID: "ep-1"
    Arts:
    Effects:
      - "EP+50"
    Compositions:
      - "[[Database/Item/Mirage Sepith|x120]]"
      - "[[Database/Item/Time Sepith|x15]]"
      - "[[Database/Item/Space Sepith|x15]]"
    Exchanges:

  - Name: "EP2"
    ID: "ep-2"
    Arts:
    Effects:
      - "EP+100"
    Compositions:
      - "[[Database/Item/Mirage Sepith|x320]]"
      - "[[Database/Item/Time Sepith|x40]]"
      - "[[Database/Item/Space Sepith|x40]]"
    Exchanges:
      - Item: "[[Database/Quartz/Mirage N#^ep-1|EP1]]"
        Count: 3

  - Name: "精神1"
    ID: "jing-shen-1"
    Arts:
    Effects:
      - "ATS+10"
    Compositions:
      - "[[Database/Item/Mirage Sepith|x100]]"
    Exchanges:
      - Item: "[[Database/Quartz/Mirage N#^jiao-yue-zhi-guang|皎月之光]]"
        Count: 2

  - Name: "精神2"
    ID: "jing-shen-2"
    Arts:
    Effects:
      - "ATS+20"
    Compositions:
      - "[[Database/Item/Mirage Sepith|x250]]"
    Exchanges:
      - Item: "[[Database/Quartz/Mirage N#^jing-shen-1|精神1]]"
        Count: 3

  - Name: "精神3"
    ID: "jing-shen-3"
    Arts:
    Effects:
      - "ATS+40"
    Compositions:
      - "[[Database/Item/Mirage Sepith|x600]]"
    Exchanges:
      - Item: "[[Database/Quartz/Mirage N#^jing-shen-2|精神2]]"
        Count: 3
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Quartz/N', { quartz, element: 'Mirage' });
```
^jiao-yue-zhi-guang

---

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Quartz/N', { quartz, element: 'Mirage' });
```
^yin-ye-zhi-ji

---

```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Quartz/N', { quartz, element: 'Mirage' });
```
^mei-ying-zhi-ju

---

```dataviewjs
const quartz = dv.current().Quartzs[3];
await dv.view('Quartz/N', { quartz, element: 'Mirage' });
```
^xing-guang-zhi-jian

---

```dataviewjs
const quartz = dv.current().Quartzs[4];
await dv.view('Quartz/N', { quartz, element: 'Mirage' });
```
^qing-bao-jie-xi

---

```dataviewjs
const quartz = dv.current().Quartzs[5];
await dv.view('Quartz/N', { quartz, element: 'Mirage' });
```
^shen-sheng-zhi-li

---

```dataviewjs
const quartz = dv.current().Quartzs[6];
await dv.view('Quartz/N', { quartz, element: 'Mirage' });
```
^xin-yue-zhi-jing

---

```dataviewjs
const quartz = dv.current().Quartzs[7];
await dv.view('Quartz/N', { quartz, element: 'Mirage' });
```
^ep-1

---

```dataviewjs
const quartz = dv.current().Quartzs[8];
await dv.view('Quartz/N', { quartz, element: 'Mirage' });
```
^ep-2

---

```dataviewjs
const quartz = dv.current().Quartzs[9];
await dv.view('Quartz/N', { quartz, element: 'Mirage' });
```
^jing-shen-1

---

```dataviewjs
const quartz = dv.current().Quartzs[10];
await dv.view('Quartz/N', { quartz, element: 'Mirage' });
```
^jing-shen-2

---

```dataviewjs
const quartz = dv.current().Quartzs[11];
await dv.view('Quartz/N', { quartz, element: 'Mirage' });
```
^jing-shen-3