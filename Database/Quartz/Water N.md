---
ID: "Quartz.Water.N"
Element: "Water"
Quartzs:
  - Name: "高压水块"
    ID: "gao-ya-shui-kuai"
    Arts:
      - "[[Database/Art/Water#^gao-ya-shui-kuai|高压水块]]"
    Effects:
    Compositions:
      - "[[Database/Item/Water Sepith|x40]]"
    Exchanges:
  - Name: "寒霜之刃"
    ID: "han-shuang-zhi-ren"
    Arts:
      - "[[Database/Art/Water#^han-shuang-zhi-ren|寒霜之刃]]"
    Effects:
    Compositions:
      - "[[Database/Item/Water Sepith|x80]]"
      - "[[Database/Item/Earth Sepith|x20]]"
    Exchanges:
  - Name: "水流轰击"
    ID: "shui-liu-hong-ji"
    Arts:
      - "[[Database/Art/Water#^shui-liu-hong-ji|水流轰击]]"
    Effects:
    Compositions:
      - "[[Database/Item/Water Sepith|x200]]"
      - "[[Database/Item/Mirage Sepith|x50]]"
    Exchanges:
  - Name: "水晶洪流"
    ID: "shui-jing-hong-liu"
    Arts:
      - "[[Database/Art/Water#^shui-jing-hong-liu|水晶洪流]]"
    Effects:
    Compositions:
      - "[[Database/Item/Water Sepith|x600]]"
    Exchanges:
  - Name: "螺旋巨涡"
    ID: "luo-xuan-ju-wo"
    Arts:
      - "[[Database/Art/Water#^luo-xuan-ju-wo|螺旋巨涡]]"
    Effects:
    Compositions:
      - "[[Database/Item/Water Sepith|x1000]]"
    Exchanges:
  - Name: "回复术"
    ID: "hui-fu-shu"
    Arts:
      - "[[Database/Art/Water#^hui-fu-shu|回复术]]"
    Effects:
    Compositions:
      - "[[Database/Item/Water Sepith|x40]]"
    Exchanges:
  - Name: "中回复术"
    ID: "zhong-hui-fu-shu"
    Arts:
      - "[[Database/Art/Water#^zhong-hui-fu-shu|中回复术]]"
    Effects:
    Compositions:
      - "[[Database/Item/Water Sepith|x150]]"
    Exchanges:
  - Name: "大回复术"
    ID: "da-hui-fu-shu"
    Arts:
      - "[[Database/Art/Water#^da-hui-fu-shu|大回复术]]"
    Effects:
    Compositions:
      - "[[Database/Item/Water Sepith|x300]]"
    Exchanges:
  - Name: "复活术"
    ID: "fu-huo-shu"
    Arts:
      - "[[Database/Art/Water#^fu-huo-shu|复活术]]"
    Effects:
    Compositions:
      - "[[Database/Item/Water Sepith|x80]]"
      - "[[Database/Item/Space Sepith|x80]]"
    Exchanges:
  - Name: "圣灵术"
    ID: "sheng-ling-shu"
    Arts:
      - "[[Database/Art/Water#^sheng-ling-shu|圣灵术]]"
    Effects:
    Compositions:
      - "[[Database/Item/Water Sepith|x400]]"
      - "[[Database/Item/Space Sepith|x100]]"
    Exchanges:
  - Name: "HP1"
    ID: "hp-1"
    Arts:
    Effects:
      - "HP+500"
    Compositions:
      - "[[Database/Item/Water Sepith|x120]]"
      - "[[Database/Item/Earth Sepith|x30]]"
    Exchanges:
      - Item: "[[Database/Quartz/Water N#^gao-ya-shui-kuai|高压水块]]"
        Count: 4
  - Name: "HP2"
    ID: "hp-2"
    Arts:
    Effects:
      - "HP+1000"
    Compositions:
      - "[[Database/Item/Water Sepith|x320]]"
      - "[[Database/Item/Earth Sepith|x80]]"
    Exchanges:
      - Item: "[[Database/Quartz/Water N#^hp-1|HP1]]"
        Count: 3
  - Name: "魔防1"
    ID: "mo-fang-1"
    Arts:
    Effects:
      - "ADF+10"
    Compositions:
      - "[[Database/Item/Water Sepith|x100]]"
    Exchanges:
      - Item: "[[Database/Quartz/Water N#^gao-ya-shui-kuai|高压水块]]"
        Count: 3
  - Name: "魔防2"
    ID: "mo-fang-2"
    Arts:
    Effects:
      - "ADF+20"
    Compositions:
      - "[[Database/Item/Water Sepith|x250]]"
    Exchanges:
      - Item: "[[Database/Quartz/Water N#^mo-fang-1|魔防1]]"
        Count: 3
  - Name: "魔防3"
    ID: "mo-fang-3"
    Arts:
    Effects:
      - "ADF+40"
    Compositions:
      - "[[Database/Item/Water Sepith|x600]]"
    Exchanges:
      - Item: "[[Database/Quartz/Water N#^mo-fang-2|魔防2]]"
        Count: 3
  - Name: "封魔之刃"
    ID: "feng-mo-zhi-ren"
    Arts:
    Effects:
      - "普通攻击·战技附加 [[Database/Status/Mute|封魔(10%)]]"
    Compositions:
      - "[[Database/Item/Water Sepith|x150]]"
    Exchanges:
      - Item: "[[Database/Quartz/Water N#^hp-1|HP1]]"
        Count: 1
      - Item: "[[Database/Item/Accessory#^da-li-shi-jie-zhi|大理石戒指]]"
        Count: 1
  - Name: "冻结之刃"
    ID: "dong-jie-zhi-ren"
    Arts:
    Effects:
      - "普通攻击·战技附加 [[Database/Status/Freeze|冻结(10%)]]"
    Compositions:
      - "[[Database/Item/Water Sepith|x250]]"
    Exchanges:
      - Item: "[[Database/Quartz/Water N#^han-shuang-zhi-ren|寒霜之刃]]"
        Count: 1
      - Item: "[[Database/Item/Accessory#^liang-shuang-xiang-lian|凉爽项链]]"
        Count: 1
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^gao-ya-shui-kuai

---

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^han-shuang-zhi-ren

---

```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^shui-liu-hong-ji

---

```dataviewjs
const quartz = dv.current().Quartzs[3];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^shui-jing-hong-liu

---

```dataviewjs
const quartz = dv.current().Quartzs[4];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^luo-xuan-ju-wo

---

```dataviewjs
const quartz = dv.current().Quartzs[5];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^hui-fu-shu

---

```dataviewjs
const quartz = dv.current().Quartzs[6];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^zhong-hui-fu-shu

---

```dataviewjs
const quartz = dv.current().Quartzs[7];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^da-hui-fu-shu

---

```dataviewjs
const quartz = dv.current().Quartzs[8];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^fu-huo-shu

---

```dataviewjs
const quartz = dv.current().Quartzs[9];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^sheng-ling-shu

---

```dataviewjs
const quartz = dv.current().Quartzs[10];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^hp-1

---

```dataviewjs
const quartz = dv.current().Quartzs[11];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^hp-2

---

```dataviewjs
const quartz = dv.current().Quartzs[12];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^mo-fang-1

---

```dataviewjs
const quartz = dv.current().Quartzs[13];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^mo-fang-2

---

```dataviewjs
const quartz = dv.current().Quartzs[14];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^mo-fang-3

---

```dataviewjs
const quartz = dv.current().Quartzs[15];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^feng-mo-zhi-ren

---

```dataviewjs
const quartz = dv.current().Quartzs[16];
await dv.view('Views/Quartz/Water/N', { quartz, element: 'Water' });
```
^dong-jie-zhi-ren