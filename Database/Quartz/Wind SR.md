---
ID: "Quartz.Wind.SR"
Element: "Wind"
Quartzs:
  - Name: "熏风"
    ID: "xun-feng"
    Arts:
      - "[[Database/Art/Wind#^feng-zhi-ling-yu|风之领域]]"
      - "[[Database/Art/Wind#^sheng-ming-zhi-xi|生命之息]]"
      - "[[Database/Art/Wind#^da-zhi-yu-shu|大治愈术]]"
    Effects:
      - "EP+40"
      - "ATS+5"
    Compositions:
    Exchanges:

  - Name: "白虎刃"
    ID: "bai-hu-ren"
    Arts:
    Effects:
      - "普通攻击·战技附加 [[Database/Status/Blind|黑暗(10%)]]、[[Database/Status/Sleep|睡眠(10%)]]"
    Compositions:
    Exchanges:

  - Name: "逆鳞"
    ID: "ni-lin"
    Arts:
    Effects:
      - "闪避后反击必定形成暴击"
    Compositions:
    Exchanges:

  - Name: "雷神珠"
    ID: "lei-shen-zhu"
    Arts:
        - "[[Database/Art/Wind#^mo-ri-long-juan|末日龙卷]]"
    Effects:
      - "STR+10"
      - "使用普通攻击·战技 [[Database/Status/Delay|延迟+7]]"
      - "「解除驱动(90%)」"
    Compositions:
    Exchanges:

  - Name: "风神珠"
    ID: "fengshenzhu"
    Arts:
      - "[[Database/Art/Wind#^sheng-ling-zhi-xi|圣灵之息]]"
    Effects:
      - "STR+10"
      - "命中率+50%"
      - "回避率+15%"
      - "MOV+10"
    Compositions:
    Exchanges:
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Views/Quartz/SR', { quartz, element: 'Wind' });
```
^xun-feng

---

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Views/Quartz/SR', { quartz, element: 'Wind' });
```
^bai-hu-ren

---

```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Views/Quartz/SR', { quartz, element: 'Wind' });
```
^ni-lin

---

```dataviewjs
const quartz = dv.current().Quartzs[3];
await dv.view('Views/Quartz/SR', { quartz, element: 'Wind' });
```
^lei-shen-zhu

---

```dataviewjs
const quartz = dv.current().Quartzs[4];
await dv.view('Views/Quartz/SR', { quartz, element: 'Wind' });
```
^feng-shen-zhu

---
