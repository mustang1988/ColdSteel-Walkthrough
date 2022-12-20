---
ID: "Quartz.Wind.Thor"
Element: "Wind"
Aliases:
  - "雷神"
When: ""
How: ""
Properties:
  - Level: 4
    Properties:
      HP: 1200
      EP: 120
      STR: 60
      DEF: 20
      ATS: 60
      ADF: 20
      SPD: 12
  - Level: 5
    Properties:
      HP: 1600
      EP: 160
      STR: 80
      DEF: 25
      ATS: 80
      ADF: 25
      SPD: 16
Arts:
  - Level: 4
    Arts:
      - "[[Database/Art/Wind#^dian-liu-zhi-shi|电流之矢]]"
      - "[[Database/Art/Wind#^shen-pan-zhi-jian|审判之箭]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Wind#^mo-ri-long-juan|末日龙卷]]"
Abilities:
  - Level: 4
    Abilities:
      - "普通攻击&战技回复HP, 回复量为赋予损伤的20%"
      - "普通攻击&战技回复EP, 回复量为赋予损伤的1%"
  - Level: 5
    Abilities:
      - "普通攻击&战技回复HP, 回复量为赋予损伤的30%"
      - "普通攻击&战技回复EP, 回复量为赋予损伤的2%"
      - "回避率+7%"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
