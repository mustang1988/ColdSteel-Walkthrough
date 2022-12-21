---
ID: "Quartz.Mirage.SR"
Element: "Mirage"
Quartzs:
  - Name: "幻妖牙"
    ID: "huan-yao-ya"
    Arts:
    Effects:
      - "STR+30"
      - "普通攻击·战技附加「ATS-25%(10%)」、「ADF-25%(10%)」"
    Compositions:
    Exchanges:

  - Name: "梵天珠"
    ID: "fan-tian-zhu"
    Arts:
      - "[[Database/Art/Mirage#^xing-guang-zhi-jian|星光之剑]]"
    Effects:
      - "ATS+80"
    Compositions:
    Exchanges:

  - Name: "圣王珠"
    ID: "sheng-wang-zhu"
    Arts:
      - "[[Database/Art/Mirage#^yin-ye-zhi-ji|银夜之棘]]"
      - "[[Database/Art/Mirage#^shen-sheng-zhi-li|神圣之力]]"
      - "[[Database/Art/Mirage#^xin-yue-zhi-jing|新月之镜]]"
    Effects:
      - "EP+180"
    Compositions:
    Exchanges:
---
```dataviewjs
const quartz = dv.current().Quartzs[0];
await dv.view('Views/Quartz/SR', { quartz, element: 'Mirage' });
```
^huan-yao-ya

---

```dataviewjs
const quartz = dv.current().Quartzs[1];
await dv.view('Views/Quartz/SR', { quartz, element: 'Mirage' });
```
^fan-tian-zhu

---


```dataviewjs
const quartz = dv.current().Quartzs[2];
await dv.view('Views/Quartz/SR', { quartz, element: 'Mirage' });
```
^sheng-wang-zhu

---

