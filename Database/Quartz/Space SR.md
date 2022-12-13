---
ID: "Quartz.Space.SR"
Element: "Space"
Quartzs:
  - Name: "炽天使"
    ID: "chi-tian-shi"
    Arts:
      - "[[Database/Art/Space#^shan-yao-tian-qi|闪耀天启]]"
      - "[[Database/Art/Space#^chi-tian-shi-zhi-huan|炽天使之环]]"
    Effects:
      - "EP+100"
      - "ATS+15"
    Compositions:
    Exchanges:

  - Name: "麒麟牙"
    ID: "qi-lin-ya"
    Arts:
    Effects:
      - "STR+30"
      - "普通攻击·战技附加「STR-25%(10%)」、「DEF-25%(10%)」"
    Compositions:
    Exchanges:

  - Name: "霸道"
    ID: "ba-dao"
    Arts:
    Effects:
      - "STR+15"
      - "最初的普通攻击·战技赋予的损伤成为2倍"
    Compositions:
    Exchanges:

  - Name: "天帝珠"
    ID: "tian-di-zhu"
    Arts:
    Effects:
      - "STR+15"
      - "消耗EP减少25%"
    Compositions:
    Exchanges:
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Views/Quartz/Space/SR', { quartz });
```
^chi-tian-shi

---

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Views/Quartz/Space/SR', { quartz });
```
^qi-lin-ya

---

```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Views/Quartz/Space/SR', { quartz });
```
^ba-dao

---

```dataviewjs
const quartz = dv.current().Quartzs[3];
await dv.view('Views/Quartz/Space/SR', { quartz });
```
^tian-di-zhu