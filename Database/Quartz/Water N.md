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
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Views/Quartz/Water/N', { quartz });
```
^gao-ya-shui-kuai

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Views/Quartz/Water/N', { quartz });
```
^han-shuang-zhi-ren

```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Views/Quartz/Water/N', { quartz });
```
^shui-liu-hong-ji

```dataviewjs
const quartz = dv.current().Quartzs[3];
await dv.view('Views/Quartz/Water/N', { quartz });
```
^shui-jing-hong-liu

```dataviewjs
const quartz = dv.current().Quartzs[4];
await dv.view('Views/Quartz/Water/N', { quartz });
```
^luo-xuan-ju-wo

```dataviewjs
const quartz = dv.current().Quartzs[5];
await dv.view('Views/Quartz/Water/N', { quartz });
```
^hui-fu-shu

```dataviewjs
const quartz = dv.current().Quartzs[6];
await dv.view('Views/Quartz/Water/N', { quartz });
```
^zhong-hui-fu-shu