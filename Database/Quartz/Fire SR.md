---
ID: "Quartz.Fire.SR"
Element: "Fire"
Quartzs:
  - Name: "业火"
    ID: "ye-huo"
    Arts:
      - "[[Database/Art/Fire#^huo-yan-zhi-she|火焰之舌]]"
      - "[[Database/Art/Fire#^huo-shan-dan-yu|火山弹雨]]"
      - "[[Database/Art/Fire#^ran-dian-bao-lie|燃点爆裂]]"
    Effects:
      - "EP+100"
      - "ATS+10"
    Compositions:
    Exchanges:
  - Name: "朱雀刃"
    ID: "zhu-que-ren"
    Arts:
    Effects:
      - "普通攻击·战技附加 [[Database/Status/Seal|封技(10%)]]、[[Database/Status/Burn|炎伤(10%)]]"
    Compositions:
    Exchanges:
  - Name: "武神珠"
    ID: "wu-shen-zhu"
    Arts:
      - "[[Database/Art/Fire#^qian-yang-xin-xing|千阳新星]]"
    Effects:
      - "STR+80"
    Compositions:
    Exchanges:
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Quartz/Fire/SR', { quartz });
```
^ye-huo

---

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Quartz/Fire/SR', { quartz });
```
^zhu-que-ren

---

```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Quartz/Fire/SR', { quartz });
```
^wu-shen-zhu

---
