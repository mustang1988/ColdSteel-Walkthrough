---
ID: "Quartz.Wind.N"
Element: "Wind"
Quartzs:
  - Name: "风之轮"
    ID: "feng-zhi-lun"
    Arts:
      - "[[Database/Art/Wind#^feng-zhi-lun|风之轮]]"
    Effects:
    Compositions:
      - "[[Database/Item/Wind Sepith|x40]]"
    Exchanges:

  - Name: "电流之矢"
    ID: "dian-liu-zhi-shi"
    Arts:
      - "[[Database/Art/Wind#^dian-liu-zhi-shi|电流之矢]]"
    Effects:
    Compositions:
      - "[[Database/Item/Wind Sepith|x80]]"
      - "[[Database/Item/Space Sepith|x20]]"
    Exchanges:

  - Name: "风之领域"
    ID: "feng-zhi-ling-yu"
    Arts:
      - "[[Database/Art/Wind#^feng-zhi-ling-yu|风之领域]]"
    Effects:
    Compositions:
      - "[[Database/Item/Wind Sepith|x200]]"
      - "[[Database/Item/Earth Sepith|x50]]"
    Exchanges:

  - Name: "审判之箭"
    ID: "shen-pan-zhi-jian"
    Arts:
      - "[[Database/Art/Wind#^shen-pan-zhi-jian|审判之箭]]"
    Effects:
    Compositions:
      - "[[Database/Item/Wind Sepith|x600]]"
    Exchanges:

  - Name: "末日龙卷"
    ID: "mo-ri-long-juan"
    Arts:
      - "[[Database/Art/Wind#^mo-ri-long-juan|末日龙卷]]"
    Effects:
    Compositions:
      - "[[Database/Item/Wind Sepith|x1000]]"
    Exchanges:

  - Name: "生命之息"
    ID: "sheng-ming-zhi-xi"
    Arts:
      - "[[Database/Art/Wind#^sheng-ming-zhi-xi|生命之息]]"
    Effects:
    Compositions:
      - "[[Database/Item/Wind Sepith|x120]]"
      - "[[Database/Item/Mirage Sepith|x30]]"
    Exchanges:

  - Name: "圣灵之息"
    ID: "sheng-ling-zhi-xi"
    Arts:
      - "[[Database/Art/Wind#^sheng-ling-zhi-xi|圣灵之息]]"
    Effects:
    Compositions:
      - "[[Database/Item/Wind Sepith|x240]]"
      - "[[Database/Item/Mirage Sepith|x60]]"
    Exchanges:

  - Name: "大治愈术"
    ID: "da-zhi-yu-shu"
    Arts:
      - "[[Database/Art/Wind#^da-zhi-yu-shu|大治愈术]]"
    Effects:
    Compositions:
      - "[[Database/Item/Wind Sepith|x200]]"
      - "[[Database/Item/Water Sepith|x50]]"
    Exchanges:

  - Name: "回避1"
    ID: "hui-bi-1"
    Arts:
    Effects:
      - "回避率+5%"
    Compositions:
      - "[[Database/Item/Wind Sepith|x120]]"
      - "[[Database/Item/Mirage Sepith|x30]]"
    Exchanges:
      - Item: "[[Database/Quartz/Wind N#^feng-zhi-lun|风之轮]]"
        Count: 4

  - Name: "回避2"
    ID: "hui-bi-2"
    Arts:
    Effects:
      - "回避率+10%"
    Compositions:
      - "[[Database/Item/Wind Sepith|x320]]"
      - "[[Database/Item/Mirage Sepith|x80]]"
    Exchanges:
      - Item: "[[Database/Quartz/Wind N#^hui-bi-1|回避1]]"
        Count: 3

  - Name: "移动1"
    ID: "yi-dong-1"
    Arts:
    Effects:
      - "MOV+5"
    Compositions:
      - "[[Database/Item/Wind Sepith|x100]]"
    Exchanges:
      - Item: "[[Database/Quartz/Wind N#^feng-zhi-lun|风之轮]]"
        Count: 3

  - Name: "移动2"
    ID: "yi-dong-2"
    Arts:
    Effects:
      - "MOV+10"
    Compositions:
      - "[[Database/Item/Wind Sepith|x250]]"
    Exchanges:
      - Item: "[[Database/Quartz/Wind N#^yi-dong-1|移动1]]"
        Count: 3
  - Name: "移动3"
    ID: "yi-dong-3"
    Arts:
    Effects:
      - "MOV+15"
    Compositions:
      - "[[Database/Item/Wind Sepith|x600]]"
    Exchanges:
      - Item: "[[Database/Quartz/Wind N#^yi-dong-2|移动2]]"
        Count: 3

  - Name: "黑暗之刃"
    ID: "hei-an-zhi-ren"
    Arts:
    Effects:
      - "普通攻击·战技附加 [[Database/Status/Blind|黑暗(10%)]]"
    Compositions:
      - "[[Database/Item/Wind Sepith|x150]]"
    Exchanges:
      - Item: "[[Database/Quartz/Wind N#^feng-zhi-lun|风之轮]]"
        Count: 1
      - Item: "[[Database/Item/Accessory#^bai-se-jing-pian|白色镜片]]"
        Count: 1

  - Name: "睡眠之刃"
    ID: "shui-mian-zhi-ren"
    Arts:
    Effects:
      - "普通攻击·战技附加 [[Database/Status/Sleep|睡眠(10%)]]"
    Compositions:
      - "[[Database/Item/Wind Sepith|x250]]"
    Exchanges:
      - Item: "[[Database/Quartz/Wind N#^sheng-ming-zhi-xi|生命之息]]"
        Count: 1
      - Item: "[[Database/Item/Accessory#^hei-se-shou-zhuo|黑色手镯]]"
        Count: 1
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Quartz/Wind/N', { quartz });
```
^feng-zhi-lun

---

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Quartz/Wind/N', { quartz });
```
^dian-liu-zhi-shi

---

```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Quartz/Wind/N', { quartz });
```
^feng-zhi-ling-yu

---

```dataviewjs
const quartz = dv.current().Quartzs[3];
await dv.view('Quartz/Wind/N', { quartz });
```
^shen-pan-zhi-jian

---

```dataviewjs
const quartz = dv.current().Quartzs[4];
await dv.view('Quartz/Wind/N', { quartz });
```
^mo-ri-long-juan

---

```dataviewjs
const quartz = dv.current().Quartzs[5];
await dv.view('Quartz/Wind/N', { quartz });
```
^sheng-ming-zhi-xi

---

```dataviewjs
const quartz = dv.current().Quartzs[6];
await dv.view('Quartz/Wind/N', { quartz });
```
^sheng-ling-zhi-xi

---

```dataviewjs
const quartz = dv.current().Quartzs[7];
await dv.view('Quartz/Wind/N', { quartz });
```
^da-zhi-yu-shu

---

```dataviewjs
const quartz = dv.current().Quartzs[8];
await dv.view('Quartz/Wind/N', { quartz });
```
^hui-bi-1

---

```dataviewjs
const quartz = dv.current().Quartzs[9];
await dv.view('Quartz/Wind/N', { quartz });
```
^hui-bi-2

---

```dataviewjs
const quartz = dv.current().Quartzs[10];
await dv.view('Quartz/Wind/N', { quartz });
```
^yi-dong-1

---

```dataviewjs
const quartz = dv.current().Quartzs[11];
await dv.view('Quartz/Wind/N', { quartz });
```
^yi-dong-2

---

```dataviewjs
const quartz = dv.current().Quartzs[12];
await dv.view('Quartz/Wind/N', { quartz });
```
^yi-dong-3

---

```dataviewjs
const quartz = dv.current().Quartzs[13];
await dv.view('Quartz/Wind/N', { quartz });
```
^hei-an-zhi-ren

---

```dataviewjs
const quartz = dv.current().Quartzs[14];
await dv.view('Quartz/Wind/N', { quartz });
```
^shui-mian-zhi-ren