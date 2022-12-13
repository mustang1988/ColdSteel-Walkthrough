---
ID: "Quartz.Water.SR"
Element: "Water"
Quartzs:
  - Name: "泛滥"
    ID: "fan-lan"
    Arts:
      - "[[Database/Art/Water#^shui-liu-hong-ji|水流轰击]]"
      - "[[Database/Art/Water#^shui-jing-hong-liu|水晶洪流]]"
      - "[[Database/Art/Water#^sheng-ling-shu|圣灵术]]"
    Effects:
      - "HP+800"
      - "EP+80"
      - "ATS+10"
    Compositions:
    Exchanges:

  - Name: "青龙刀"
    ID: "qing-long-dao"
    Arts:
    Effects:
      - "普通攻击·战技附加「封魔(10%)」、「冻结(10%)」"
    Compositions:
    Exchanges:

  - Name: "仙道珠"
    ID: "xian-dao-zhu"
    Arts:
    Effects:
      - "HP+1800"
      - "ADF+80"
    Compositions:
    Exchanges:
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Quartz/Water/SR', { quartz });
```
^fan-lan

---

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Quartz/Water/SR', { quartz });
```
^qing-long-dao

---

```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Quartz/Water/SR', { quartz });
```
^xian-dao-zhu