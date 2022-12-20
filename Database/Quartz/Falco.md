---
ID: "Quartz.Wind.Falco"
Element: "Wind"
Aliases:
  - "迅隼"
When: ""
How: "盖乌斯初始回路"
Properties:
  - Level: 1
    Properties:
      HP: 400
      EP: 20
      STR: 25
      DEF: 10
      ATS: 5
      ADF: 10
      SPD: 4
  - Level: 2
    Properties:
      HP: 500
      EP: 30
      STR: 35
      DEF: 15
      ATS: 10
      ADF: 15
      SPD: 5
  - Level: 3
    Properties:
      HP: 700
      EP: 40
      STR: 45
      DEF: 20
      ATS: 15
      ADF: 20
      SPD: 7
  - Level: 4
    Properties:
      HP: 1000
      EP: 50
      STR: 60
      DEF: 25
      ATS: 20
      ADF: 25
      SPD: 10
  - Level: 5
    Properties:
      HP: 1200
      EP: 70
      STR: 80
      DEF: 35
      ATS: 25
      ADF: 35
      SPD: 12
Arts:
  - Level: 1
    Arts: 
      - "[[Database/Art/Wind#^feng-zhi-lun|风之轮]]"
  - Level: 2
    Arts:
      - "[[Database/Art/Space#^shan-yao-tian-qi|闪耀天启]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Wind#^da-zhi-yu-shu|大治愈术]]"
Abilities:
  - Level: 1
    Abilities:
      - "战斗开始时发动 「心眼」，2回合"
  - Level: 2
    Abilities:
      - "战斗开始时发动 「心眼」，3回合"
  - Level: 3
    Abilities:
      - "战斗开始时发动 「心眼」，4回合"
      - "回避率+3%"
  - Level: 4
    Abilities:
      - "战斗开始时发动 「心眼」，5回合"
      - "回避率+6%"
  - Level: 5
    Abilities:
      - "战斗开始时发动 「心眼」，6回合"
      - "回避率+9%"
      - "普通攻击&战技暴击, 发动几率5%"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
