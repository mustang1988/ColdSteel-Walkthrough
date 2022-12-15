---
ID: "Quartz.Fire.N"
Element: "Fire"
Quartzs:
  - Name: "火焰箭"
    ID: "huo-yan-jian"
    Arts:
      - "[[Database/Art/Fire#^huo-yan-jian|火焰箭]]"
    Effects:
    Compositions:
      - "[[Database/Item/Fire Sepith|x40]]"
    Exchanges:

  - Name: "灼热之波"
    ID: "zhuo-re-zhi-bo"
    Arts:
      - "[[Database/Art/Fire#^zhuo-re-zhi-bo|灼热之波]]"
    Effects:
    Compositions:
      - "[[Database/Item/Fire Sepith|x80]]"
      - "[[Database/Item/Wind Sepith|x20]]"
    Exchanges:
  - Name: "火焰之舌"
    ID: "huo-yan-zhi-she"
    Arts:
      - "[[Database/Art/Fire#^huo-yan-zhi-she|火焰之舌]]"
    Effects:
    Compositions:
      - "[[Database/Item/Fire Sepith|x200]]"
      - "[[Database/Item/Time Sepith|x50]]"
    Exchanges:

  - Name: "火山弹雨"
    ID: "huo-shan-dan-yu"
    Arts:
      - "[[Database/Art/Fire#^huo-shan-dan-yu|火山弹雨]]"
    Effects:
    Compositions:
      - "[[Database/Item/Fire Sepith|x350]]"
      - "[[Database/Item/Water Sepith|x50]]"
    Exchanges:

  - Name: "燃点爆裂"
    ID: "ran-dian-bao-lie"
    Arts:
      - "[[Database/Art/Fire#^ran-dian-bao-lie|燃点爆裂]]"
    Effects:
    Compositions:
      - "[[Database/Item/Fire Sepith|x600]]"
    Exchanges:

  - Name: "千阳新星"
    ID: "qian-yang-xin-xing"
    Arts:
      - "[[Database/Art/Fire#^qian-yang-xin-xing|千阳新星]]"
    Effects:
    Compositions:
      - "[[Database/Item/Fire Sepith|x1000]]"
    Exchanges:

  - Name: "振奋之激"
    ID: "zhen-fen-zhi-ji"
    Arts:
      - "[[Database/Art/Fire#^zhen-fen-zhi-ji|振奋之激]]"
    Effects:
    Compositions:
      - "[[Database/Item/Fire Sepith|x120]]"
      - "[[Database/Item/Earth Sepith|x30]]"
    Exchanges:

  - Name: "战意再起"
    ID: "zhan-yi-zai-qi"
    Arts:
      - "[[Database/Art/Fire#^zhan-yi-zai-qi|战意再起]]"
    Effects:
    Compositions:
      - "[[Database/Item/Fire Sepith|x200]]"
      - "[[Database/Item/Earth Sepith|x50]]"
    Exchanges:

  - Name: "强音之力"
    ID: "qiang-yin-zhi-li"
    Arts:
      - "[[Database/Art/Fire#^qiang-yin-zhi-li|强音之力]]"
    Effects:
    Compositions:
      - "[[Database/Item/Fire Sepith|x40]]"
    Exchanges:

  - Name: "强音之力·复"
    ID: "qiang-yin-zhi-li-fu"
    Arts:
      - "[[Database/Art/Fire#^qiang-yin-zhi-li-fu|强音之力·复]]"
    Effects:
    Compositions:
      - "[[Database/Item/Fire Sepith|x250]]"
    Exchanges:

  - Name: "攻击1"
    ID: "gong-ji-1"
    Arts:
    Effects:
      - "STR+10"
    Compositions:
      - "[[Database/Item/Fire Sepith|x100]]"
    Exchanges:
      - Item: "[[Database/Quartz/Fire N#^huo-yan-jian|火焰箭]]"
        Count: 3

  - Name: "攻击2"
    ID: "gong-ji-2"
    Arts:
    Effects:
      - "STR+20"
    Compositions:
      - "[[Database/Item/Fire Sepith|x250]]"
    Exchanges:
      - Item: "[[Database/Quartz/Fire N#^gong-ji-1|攻击1]]"
        Count: 3

  - Name: "攻击3"
    ID: "gong-ji-3"
    Arts:
    Effects:
      - "STR+40"
    Compositions:
      - "[[Database/Item/Fire Sepith|x600]]"
    Exchanges:
      - Item: "[[Database/Quartz/Fire N#^gong-ji-2|攻击2]]"
        Count: 3

  - Name: "封技之刃"
    ID: "feng-ji-zhi-ren"
    Arts:
    Effects:
      - "普通攻击·战技附加 [[Database/Status/Seal|封技(10%)]]"
    Compositions:
      - "[[Database/Item/Fire Sepith|x150]]"
    Exchanges:
      - Item: "[[Database/Quartz/Fire N#^huo-yan-jian|火焰箭]]"
        Count: 1
      - Item: "[[Database/Item/Accessory#^shan-hu-jie-zhi|珊瑚戒指]]"
        Count: 1
  - Name: "炎伤之刃"
    ID: "yan-shang-zhi-ren"
    Arts:
    Effects:
      - "普通攻击·战技附加 [[Database/Status/Burn|炎伤(10%)]]"
    Compositions:
      - "[[Database/Item/Fire Sepith|x250]]"
    Exchanges:
      - Item: "[[Database/Quartz/Fire N#^zhuo-re-zhi-bo|灼热之波]]"
        Count: 1
      - Item: "[[Database/Item/Accessory#^da-huo-ji|打火机]]"
        Count: 1
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Quartz/Fire/N', { quartz });
```
^huo-yan-jian

---

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Quartz/Fire/N', { quartz });
```
^zhuo-re-zhi-bo

---

```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Quartz/Fire/N', { quartz });
```
^huo-yan-zhi-she

---

```dataviewjs
const quartz = dv.current().Quartzs[3];
await dv.view('Quartz/Fire/N', { quartz });
```
^huo-shan-dan-yu

---

```dataviewjs
const quartz = dv.current().Quartzs[4];
await dv.view('Quartz/Fire/N', { quartz });
```
^ran-dian-bao-lie

---

```dataviewjs
const quartz = dv.current().Quartzs[5];
await dv.view('Quartz/Fire/N', { quartz });
```
^qian-yang-xin-xing

---

```dataviewjs
const quartz = dv.current().Quartzs[6];
await dv.view('Quartz/Fire/N', { quartz });
```
^zhen-fen-zhi-ji

---

```dataviewjs
const quartz = dv.current().Quartzs[7];
await dv.view('Quartz/Fire/N', { quartz });
```
^zhan-yi-zai-qi

---

```dataviewjs
const quartz = dv.current().Quartzs[8];
await dv.view('Quartz/Fire/N', { quartz });
```
^qiang-yin-zhi-li

---

```dataviewjs
const quartz = dv.current().Quartzs[9];
await dv.view('Quartz/Fire/N', { quartz });
```
^qiang-yin-zhi-li-fu

---

```dataviewjs
const quartz = dv.current().Quartzs[10];
await dv.view('Quartz/Fire/N', { quartz });
```
^gong-ji-1

---

```dataviewjs
const quartz = dv.current().Quartzs[11];
await dv.view('Quartz/Fire/N', { quartz });
```
^gong-ji-2

---

```dataviewjs
const quartz = dv.current().Quartzs[12];
await dv.view('Quartz/Fire/N', { quartz });
```
^gong-ji-3

---

```dataviewjs
const quartz = dv.current().Quartzs[13];
await dv.view('Quartz/Fire/N', { quartz });
```
^feng-ji-zhi-ren

---

```dataviewjs
const quartz = dv.current().Quartzs[14];
await dv.view('Quartz/Fire/N', { quartz });
```
^yan-shang-zhi-ren

---
