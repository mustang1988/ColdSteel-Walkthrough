---
ID: "Quartz.Time.N"
Element: "Time"
Quartzs:
  - Name: "心灵之霞"
    ID: "xin-ling-zhi-xia"
    Arts:
      - "[[Database/Art/Time#^xin-ling-zhi-xia|心灵之霞]]"
    Effects:
    Compositions:
      - "[[Database/Item/Time Sepith|x60]]"
    Exchanges:
    
  - Name: "恶魔之镰"
    ID: "e-mo-zhi-lian"
    Arts:
      - "[[Database/Art/Time#^e-mo-zhi-lian|恶魔之镰]]"
    Effects:
    Compositions:
      - "[[Database/Item/Time Sepith|x160]]"
      - "[[Database/Item/Wind Sepith|x40]]"
    Exchanges:
    
  - Name: "厄运之蝶"
    ID: "e-yun-zhi-die"
    Arts:
      - "[[Database/Art/Time#^e-yun-zhi-die|厄运之蝶]]"
    Effects:
    Compositions:
      - "[[Database/Item/Time Sepith|x400]]"
      - "[[Database/Item/Wind Sepith|x100]]"
      - "[[Database/Item/Mirage Sepith|x100]]"
    Exchanges:

  - Name: "暗影伪典"
    ID: "an-ying-wei-dian"
    Arts:
      - "[[Database/Art/Time#^an-ying-wei-dian|暗影伪典]]"
    Effects:
    Compositions:
      - "[[Database/Item/Time Sepith|x1500]]"
    Exchanges:

  - Name: "时间驱动"
    ID: "shi-jian-qu-dong"
    Arts:
      - "[[Database/Art/Time#^shi-jian-qu-dong|时间驱动]]"
    Effects:
    Compositions:
      - "[[Database/Item/Time Sepith|x120]]"
      - "[[Database/Item/Wind Sepith|x30]]"
    Exchanges:

  - Name: "时间减速"
    ID: "shi-jian-jian-su"
    Arts:
      - "[[Database/Art/Time#^shi-jian-jian-su|时间减速]]"
    Effects:
    Compositions:
      - "[[Database/Item/Time Sepith|x240]]"
      - "[[Database/Item/Earth Sepith|x60]]"
    Exchanges:

  - Name: "时间爆发"
    ID: "shi-jian-bao-fa"
    Arts:
      - "[[Database/Art/Time#^shi-jian-bao-fa|时间爆发]]"
    Effects:
    Compositions:
      - "[[Database/Item/Time Sepith|x1000]]"
    Exchanges:

  - Name: "行动力1"
    ID: "xing-dong-li-1"
    Arts:
    Effects:
      - "SPD+3"
    Compositions:
      - "[[Database/Item/Time Sepith|x100]]"
    Exchanges:
      - Item: "[[Database/Quartz/Time N#^xin-ling-zhi-xia|心灵之霞]]"
        Count: 2

  - Name: "行动力2"
    ID: "xing-dong-li-2"
    Arts:
    Effects:
      - "SPD+6"
    Compositions:
      - "[[Database/Item/Time Sepith|x250]]"
    Exchanges:
      - Item: "[[Database/Quartz/Time N#^xing-dong-li-1|行动力1]]"
        Count: 3

  - Name: "行动力3"
    ID: "xing-dong-li-3"
    Arts:
    Effects:
      - "SPD+9"
    Compositions:
      - "[[Database/Item/Time Sepith|x600]]"
    Exchanges:
      - Item: "[[Database/Quartz/Time N#^xing-dong-li-2|行动力2]]"
        Count: 3

  - Name: "妨碍1"
    ID: "fang-ai-1"
    Arts:
    Effects:
      - "普通攻击·战技附加「延迟+3」、「解除驱动(30%)」"
    Compositions:
      - "[[Database/Item/Time Sepith|x160]]"
      - "[[Database/Item/Earth Sepith|x20]]"
      - "[[Database/Item/Wind Sepith|x20]]"
    Exchanges:
      - Item: "[[Database/Quartz/Time N#^xin-ling-zhi-xia|心灵之霞]]"
        Count: 3

  - Name: "妨碍2"
    ID: "fang-ai-2"
    Arts:
    Effects:
      - "普通攻击·战技附加「延迟+5」、「解除驱动(60%)」"
    Compositions:
      - "[[Database/Item/Time Sepith|x400]]"
      - "[[Database/Item/Earth Sepith|x50]]"
      - "[[Database/Item/Wind Sepith|x50]]"
    Exchanges:
      - Item: "[[Database/Quartz/Time N#^fang-ai-1|妨碍1]]"
        Count: 3

  - Name: "驱动1"
    ID: "qu-dong-1"
    Arts:
    Effects:
      - "魔法驱动时间缩短10%"
    Compositions:
      - "[[Database/Item/Time Sepith|x120]]"
      - "[[Database/Item/Space Sepith|x15]]"
      - "[[Database/Item/Mirage Sepith|x15]]"
    Exchanges:
      - Item: "[[Database/Quartz/Time N#^xin-ling-zhi-xia|心灵之霞]]"
        Count: 3

  - Name: "驱动2"
    ID: "qu-dong-2"
    Arts:
    Effects:
      - "魔法驱动时间缩短15%"
    Compositions:
      - "[[Database/Item/Time Sepith|x320]]"
      - "[[Database/Item/Space Sepith|x40]]"
      - "[[Database/Item/Mirage Sepith|x40]]"
    Exchanges:
      - Item: "[[Database/Quartz/Time N#^qu-dong-1|驱动1]]"
        Count: 3
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Quartz/Time/N', { quartz });
```
^xin-ling-zhi-xia

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Quartz/Time/N', { quartz });
```
^e-mo-zhi-lian

```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Quartz/Time/N', { quartz });
```
^e-yun-zhi-die

```dataviewjs
const quartz = dv.current().Quartzs[3];
await dv.view('Quartz/Time/N', { quartz });
```
^an-ying-wei-dian

```dataviewjs
const quartz = dv.current().Quartzs[4];
await dv.view('Quartz/Time/N', { quartz });
```
^shi-jian-qu-dong

```dataviewjs
const quartz = dv.current().Quartzs[5];
await dv.view('Quartz/Time/N', { quartz });
```
^shi-jian-jian-su

```dataviewjs
const quartz = dv.current().Quartzs[6];
await dv.view('Quartz/Time/N', { quartz });
```
^shi-jian-bao-fa

```dataviewjs
const quartz = dv.current().Quartzs[7];
await dv.view('Quartz/Time/N', { quartz });
```
^xing-dong-li-1

```dataviewjs
const quartz = dv.current().Quartzs[8];
await dv.view('Quartz/Time/N', { quartz });
```
^xing-dong-li-2

```dataviewjs
const quartz = dv.current().Quartzs[9];
await dv.view('Quartz/Time/N', { quartz });
```
^xing-dong-li-3

```dataviewjs
const quartz = dv.current().Quartzs[10];
await dv.view('Quartz/Time/N', { quartz });
```
^fang-ai-1

```dataviewjs
const quartz = dv.current().Quartzs[11];
await dv.view('Quartz/Time/N', { quartz });
```
^fang-ai-2

```dataviewjs
const quartz = dv.current().Quartzs[12];
await dv.view('Quartz/Time/N', { quartz });
```
^qu-dong-1

```dataviewjs
const quartz = dv.current().Quartzs[13];
await dv.view('Quartz/Time/N', { quartz });
```
^qu-dong-2
