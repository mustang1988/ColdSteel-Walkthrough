---
ID: "Quartz.Wind.Wing"
Element: "Wind"
Aliases:
  - "羽翼"
When: ""
How: ""
Properties:
  - Level: 2
    Properties:
      HP: 500
      EP: 50
      STR: 20
      DEF: 20
      ATS: 25
      ADF: 25
      SPD: 5
  - Level: 3
    Properties:
      HP: 700
      EP: 70
      STR: 25
      DEF: 25
      ATS: 35
      ADF: 35
      SPD: 7
  - Level: 4
    Properties:
      HP: 1000
      EP: 100
      STR: 35
      DEF: 35
      ATS: 50
      ADF: 50
      SPD: 10
  - Level: 5
    Properties:
      HP: 1200
      EP: 120
      STR: 45
      DEF: 45
      ATS: 60
      ADF: 60
      SPD: 12
Arts:
  - Level: 2
    Arts:
      - "[[Database/Art/Wind#^feng-zhi-lun|风之轮]]"
      - "[[Database/Art/Wind#^sheng-ming-zhi-xi|生命之息]]"
  - Level: 3
    Arts:
      - "[[Database/Art/Wind#^da-zhi-yu-shu|大治愈术]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Wind#^sheng-ling-zhi-xi|圣灵之息]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Wind#^mo-ri-long-juan|末日龙卷]]"
Abilities:
  - Level: 2
    Abilities:
      - "「全异常状态·能力低下」无效, 发动几率25%"
  - Level: 3
    Abilities:
      - "「全异常状态·能力低下」无效, 发动几率50%"
      - "回避率+3%"
  - Level: 4
    Abilities:
      - "「全异常状态·能力低下」无效, 发动几率75%"
      - "回避率+6%"
  - Level: 5
    Abilities:
      - "「全异常状态·能力低下」无效, 发动几率100%"
      - "回避率+9%"
      - "减少风属性魔法发动后的硬直时间, 硬直时间50%"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```