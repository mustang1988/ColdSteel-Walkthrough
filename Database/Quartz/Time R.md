---
ID: "Quartz.Time.R"
Element: "Time"
Quartzs:
  - Name: "心灵之霞R"
    ID: "xin-ling-zhi-xia-r"
    Arts:
      - "[[Database/Art/Time#^xin-ling-zhi-xia|心灵之霞]]"
    Effects:
      - "SPD+3"
    Compositions:
    Exchanges:
      - Item: "[[Database/Quartz/Time N#^xin-ling-zhi-xia|心灵之霞]]"
        Count: 2
      - Item: "[[Database/Item/U-Material|U物质]]"
        Count: 1

  - Name: "恶魔之镰R"
    ID: "e-mo-zhi-lian-r"
    Arts:
      - "[[Database/Art/Time#^e-mo-zhi-lian|恶魔之镰]]"
    Effects:
      - "SPD+4"
    Compositions:
    Exchanges:
      - Item: "[[Database/Quartz/Time N#^e-mo-zhi-lian|恶魔之镰]]"
        Count: 2
      - Item: "[[Database/Item/U-Material|U物质]]"
        Count: 2

  - Name: "厄运之蝶R"
    ID: "e-yun-zhi-die-r"
    Arts:
      - "[[Database/Art/Time#^e-yun-zhi-die|厄运之蝶]]"
    Effects:
      - "SPD+5"
    Compositions:
    Exchanges:
      - Item: "[[Database/Quartz/Time N#^e-yun-zhi-die|厄运之蝶]]"
        Count: 2
      - Item: "[[Database/Item/U-Material|U物质]]"
        Count: 2

  - Name: "暗影伪典R"
    ID: "an-ying-wei-dian-r"
    Arts:
      - "[[Database/Art/Time#^an-ying-wei-dian|暗影伪典]]"
    Effects:
      - "SPD+6"
    Compositions:
    Exchanges:
      - Item: "[[Database/Quartz/Time N#^an-ying-wei-dian|暗影伪典]]"
        Count: 2
      - Item: "[[Database/Item/U-Material|U物质]]"
        Count: 4

  - Name: "时间驱动R"
    ID: "shi-jian-qu-dong-r"
    Arts:
      - "[[Database/Art/Time#^shi-jian-qu-dong|时间驱动]]"
    Effects:
      - "SPD+3"
    Compositions:
    Exchanges:
      - Item: "[[Database/Quartz/Time N#^shi-jian-qu-dong|时间驱动]]"
        Count: 2
      - Item: "[[Database/Item/U-Material|U物质]]"
        Count: 1

  - Name: "时间减速R"
    ID: "shi-jian-jian-su-r"
    Arts:
      - "[[Database/Art/Time#^shi-jian-jian-su|时间减速]]"
    Effects:
      - "SPD+5"
    Exchanges:
      - Item: "[[Database/Quartz/Time N#^shi-jian-jian-su|时间减速]]"
        Count: 2
      - Item: "[[Database/Item/U-Material|U物质]]"
        Count: 2

  - Name: "时间爆发R"
    ID: "shi-jian-bao-fa-r"
    Arts:
      - "[[Database/Art/Time#^shi-jian-bao-fa|时间爆发]]"
    Effects:
      - "SPD+7"
    Compositions:
    Exchanges:
      - Item: "[[Database/Quartz/Time N#^shi-jian-bao-fa|时间爆发]]"
        Count: 2
      - Item: "[[Database/Item/U-Material|U物质]]"
        Count: 3

  - Name: "噩梦之刃"
    ID: "e-meng-zhi-ren"
    Arts:
    Effects:
      - "STR+10"
      - "普通攻击·战技附加 [[Database/Status/Nightmare|恶梦(10%)]]"
    Compositions:
    Exchanges:
      - Item: "[[Database/Quartz/Time R#^po-xun-zhi-ya|破迅之牙]]"
        Count: 1
      - Item: "[[Database/Quartz/Time N#^fang-ai-2|妨碍2]]"
        Count: 1

  - Name: "破迅之牙"
    ID: "po-xun-zhi-ya"
    Arts:
    Effects:
      - "STR+10"
      - "普通攻击·战技附加「SPD-25%(15%)」"
    Compositions:
    Exchanges:
      - Item: "[[Database/Quartz/Time N#^shi-jian-jian-su|时间减速]]"
        Count: 2

  - Name: "黑言铃"
    ID: "hei-yan-ling"
    Arts:
    Effects:
      - "ATS+7"
      - "使用时属性魔法后的僵直时间减半"
    Compositions:
    Exchanges:
      - Item: "[[Database/Quartz/Time N#^e-yun-zhi-die|厄运之蝶]]"
        Count: 1
      - Item: "[[Database/Quartz/Time N#^e-mo-zhi-lian|恶魔之镰]]"
        Count: 1
      - Item: "[[Database/Quartz/Time N#^xin-ling-zhi-xia|心灵之霞]]"
        Count: 1
      - Item: "[[Database/Quartz/Time N#^shi-jian-qu-dong|时间驱动]]"
        Count: 1
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Views/Quartz/R', { quartz, element: 'Time' });
```
^xin-ling-zhi-xia-r

---

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Views/Quartz/R', { quartz, element: 'Time' });
```
^e-mo-zhi-lian-r

---

```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Views/Quartz/R', { quartz, element: 'Time' });
```
^e-yun-zhi-die-r

---

```dataviewjs
const quartz = dv.current().Quartzs[3];
await dv.view('Views/Quartz/R', { quartz, element: 'Time' });
```
^an-ying-wei-dian-r

---

```dataviewjs
const quartz = dv.current().Quartzs[4];
await dv.view('Views/Quartz/R', { quartz, element: 'Time' });
```
^shi-jian-qu-dong-r

---

```dataviewjs
const quartz = dv.current().Quartzs[5];
await dv.view('Views/Quartz/R', { quartz, element: 'Time' });
```
^shi-jian-jian-su-r

---

```dataviewjs
const quartz = dv.current().Quartzs[6];
await dv.view('Views/Quartz/R', { quartz, element: 'Time' });
```
^shi-jian-bao-fa-r

---

```dataviewjs
const quartz = dv.current().Quartzs[7];
await dv.view('Views/Quartz/R', { quartz, element: 'Time' });
```
^e-meng-zhi-ren

---

```dataviewjs
const quartz = dv.current().Quartzs[8];
await dv.view('Views/Quartz/R', { quartz, element: 'Time' });
```
^po-xun-zhi-ya

---

```dataviewjs
const quartz = dv.current().Quartzs[9];
await dv.view('Views/Quartz/R', { quartz, element: 'Time' });
```
^hei-yan-ling