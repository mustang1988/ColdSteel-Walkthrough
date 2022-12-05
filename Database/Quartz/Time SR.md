---
ID: "Quartz.Time.SR"
Element: "Time"
Quartzs:
  - Name: "死神"
    ID: "si-shen"
    Arts:
      - "[[Database/Art/Time#^e-mo-zhi-lian|恶魔之镰]]"
      - "[[Database/Art/Water#^han-shuang-zhi-ren|寒霜之刃]]"
      - "[[Database/Art/Wind#^dian-liu-zhi-shi|电流之矢]]"
    Effects:
      - "ATS+7"
      - "使用时属性魔法后的僵直时间减半"
    Compositions:
    Exchanges:

  - Name: "罗刹牙"
    ID: "luo-cha-ya"
    Arts:
    Effects:
      - "STR+30"
      - "MOV-50%(10%)"
      - "普通攻击·战技「SPD-25%(10%)」"
    Compositions:
    Exchanges:

  - Name: "神行珠"
    ID: "shen-xing-zhu"
    Arts:
      - "[[Database/Art/Time#^shi-jian-qu-dong|时间驱动]]"
      - "[[Database/Art/Time#^shi-jian-jian-su|时间减速]]"
      - "[[Database/Art/Time#^shi-jian-bao-fa|时间爆发]]"
    Effects:
      - "SPD+15"
    Compositions:
    Exchanges:

  - Name: "魔王珠"
    ID: "mo-wang-zhu"
    Arts:
      - "[[Database/Art/Time#^an-ying-wei-dian|暗影伪典]]"
    Effects:
      - "魔法驱动时间缩短25%"
    Compositions:
    Exchanges:
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Quartz/Time/SR', { quartz });
```
^si-shen

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Quartz/Time/SR', { quartz });
```
^luo-cha-ya

```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Quartz/Time/SR', { quartz });
```
^shen-xing-zhu

```dataviewjs
const quartz = dv.current().Quartzs[3];
await dv.view('Quartz/Time/SR', { quartz });
```
^mo-wang-zhu
