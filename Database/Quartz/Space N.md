---
ID: "Quartz.Space.N"
Element: "Space"
Quartzs:
  - Name: "黄金球"
    ID: "huang-jin-qiu"
    Arts:
      - "[[Database/Art/Space#^huang-jin-qiu|黄金球]]"
    Effects:
    Compositions:
      - "[[Database/Item/Space Sepith|x60]]"
    Exchanges:

  - Name: "暗物质"
    ID: "an-wu-zhi"
    Arts:
      - "[[Database/Art/Space#^an-wu-zhi|暗物质]]"
    Effects:
    Compositions:
      - "[[Database/Item/Space Sepith|x250]]"
      - "[[Database/Item/Earth Sepith|x100]]"
    Exchanges:

  - Name: "破邪之印"
    ID: "po-xie-zhi-yin"
    Arts:
      - "[[Database/Art/Space#^po-xie-zhi-yin|破邪之印]]"
    Effects:
    Compositions:
      - "[[Database/Item/Space Sepith|x500]]"
      - "[[Database/Item/Earth Sepith|x150]]"
      - "[[Database/Item/Fire Sepith|x150]]"
    Exchanges:

  - Name: "天鹰之耀"
    ID: "tian-ying-zhi-yao"
    Arts:
      - "[[Database/Art/Space#^tian-ying-zhi-yao|天鹰之耀]]"
    Effects:
    Compositions:
      - "[[Database/Item/Space Sepith|x1500]]"
    Exchanges:

  - Name: "魔导祝福"
    ID: "mo-dao-zhu-fu"
    Arts:
      - "[[Database/Art/Space#^mo-dao-zhu-fu|魔导祝福]]"
    Effects:
    Compositions:
      - "[[Database/Item/Space Sepith|x60]]"
      - "[[Database/Item/Mirage Sepith|x20]]"
    Exchanges:

  - Name: "闪耀天启"
    ID: "shan-yao-tian-qi"
    Arts:
      - "[[Database/Art/Space#^shan-yao-tian-qi|闪耀天启]]"
    Effects:
    Compositions:
      - "[[Database/Item/Space Sepith|x120]]"
      - "[[Database/Item/Wind Sepith|x30]]"
    Exchanges:

  - Name: "炽天使之环"
    ID: "chi-tian-shi-zhi-huan"
    Arts:
      - "[[Database/Art/Space#^chi-tian-shi-zhi-huan|炽天使之环]]"
    Effects:
    Compositions:
      - "[[Database/Item/Space Sepith|x1500]]"
      - "[[Database/Item/Mirage Sepith|x500]]"
    Exchanges:

  - Name: "省EP1"
    ID: "sheng-ep-1"
    Arts:
    Effects:
      - "消耗EP减少10%"
    Compositions:
      - "[[Database/Item/Space Sepith|x120]]"
      - "[[Database/Item/Time Sepith|x15]]"
      - "[[Database/Item/Mirage Sepith|x15]]"
    Exchanges:
      - Item: "[[Database/Quartz/Space N#^huang-jin-qiu|黄金球]]"
        Count: 3

  - Name: "省EP2"
    ID: "sheng-ep-2"
    Arts:
    Effects:
      - "消耗EP减少15%"
    Compositions:
      - "[[Database/Item/Space Sepith|x320]]"
      - "[[Database/Item/Time Sepith|x40]]"
      - "[[Database/Item/Mirage Sepith|x40]]"
    Exchanges:
      - Item: "[[Database/Quartz/Space N#^sheng-ep-1|省EP1]]"
        Count: 3

  - Name: "命中1"
    ID: "ming-zhong-1"
    Arts:
    Effects:
      - "命中率+50%"
    Compositions:
      - "[[Database/Item/Space Sepith|x60]]"
      - "[[Database/Item/Water Sepith|x10]]"
      - "[[Database/Item/Fire Sepith|x10]]"
    Exchanges:
      - Item: "[[Database/Quartz/Space N#^huang-jin-qiu|黄金球]]"
        Count: 3

  - Name: "命中2"
    ID: "ming-zhong-2"
    Arts:
    Effects:
      - "命中率+100%"
    Compositions:
      - "[[Database/Item/Space Sepith|x200]]"
    Exchanges:
      - Item: "[[Database/Quartz/Space N#^ming-zhong-1|命中1]]"
        Count: 3
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Views/Quartz/N', { quartz, element: 'Space' });
```
^huang-jin-qiu

---

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Views/Quartz/N', { quartz, element: 'Space' });
```
^an-wu-zhi

---

```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Views/Quartz/N', { quartz, element: 'Space' });
```
^po-xie-zhi-yin

---

```dataviewjs
const quartz = dv.current().Quartzs[3];
await dv.view('Views/Quartz/N', { quartz, element: 'Space' });
```
^tian-ying-zhi-yao

---

```dataviewjs
const quartz = dv.current().Quartzs[4];
await dv.view('Views/Quartz/N', { quartz, element: 'Space' });
```
^mo-dao-zhu-fu

---

```dataviewjs
const quartz = dv.current().Quartzs[5];
await dv.view('Views/Quartz/N', { quartz, element: 'Space' });
```
^shan-yao-tian-qi

---

```dataviewjs
const quartz = dv.current().Quartzs[6];
await dv.view('Views/Quartz/N', { quartz, element: 'Space' });
```
^chi-tian-shi-zhi-huan

---

```dataviewjs
const quartz = dv.current().Quartzs[7];
await dv.view('Views/Quartz/N', { quartz, element: 'Space' });
```
^sheng-ep-1

---

```dataviewjs
const quartz = dv.current().Quartzs[8];
await dv.view('Views/Quartz/N', { quartz, element: 'Space' });
```
^sheng-ep-2

---

```dataviewjs
const quartz = dv.current().Quartzs[9];
await dv.view('Views/Quartz/N', { quartz, element: 'Space' });
```
^ming-zhong-1

---

```dataviewjs
const quartz = dv.current().Quartzs[10];
await dv.view('Views/Quartz/N', { quartz, element: 'Space' });
```
^ming-zhong-2

---

