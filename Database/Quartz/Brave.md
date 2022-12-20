---
ID: "Quartz.Fire.Brave"
Element: "Fire"
Aliases:
  - "勇气"
When: ""
How: ""
Properties:
  - Level: 1
    Properties:
      HP: 200
      EP: 10
      STR: 30
      DEF: 10
      ATS: 5
      ADF: 10
      SPD: 1
  - Level: 2
    Properties:
      HP: 300
      EP: 20
      STR: 45
      DEF: 15
      ATS: 10
      ADF: 15
      SPD: 2
  - Level: 3
    Properties:
      HP: 400
      EP: 30
      STR: 60
      DEF: 20
      ATS: 15
      ADF: 20
      SPD: 3
  - Level: 4
    Properties:
      HP: 500
      EP: 40
      STR: 80
      DEF: 25
      ATS: 20
      ADF: 25
      SPD: 4
  - Level: 5
    Properties:
      HP: 700
      EP: 50
      STR: 100
      DEF: 35
      ATS: 25
      ADF: 35
      SPD: 5
Arts:
  - Level: 1
    Arts: 
      - "[[Database/Art/Fire#^huo-yan-jian|火焰箭]]"
  - Level: 2
    Arts:
      - "[[Database/Art/Fire#^qiang-yin-zhi-li|强音之力]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Fire#^qiang-yin-zhi-li-fu|强音之力·复]]"
Abilities:
  - Level: 1
    Abilities:
      - "战斗开始时发动STR提升，STR+25%，1回合"
  - Level: 2
    Abilities:
      - "战斗开始时发动STR提升，STR+25%，2回合"
  - Level: 3
    Abilities:
      - "战斗开始时发动STR提升，STR+25%，3回合"
      - "HP20%以下时发动STR提升，STR+25%，3回合, 每场战斗限一次"
  - Level: 4
    Abilities:
      - "战斗开始时发动STR提升，STR+25%，4回合"
      - "HP20%以下时发动STR提升，STR+25%，4回合, 每场战斗限一次"
  - Level: 5
    Abilities:
      - "战斗开始时发动STR提升，STR+25%，5回合"
      - "HP20%以下时发动STR提升，STR+25%，5回合, 每场战斗限一次"
      - "普通攻击&战技暴击, 发动几率5%"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
