---
ID: "Quartz.Time.Raven"
Element: "Time"
Aliases:
  - "渡鸦"
When: "[[Walkthrough/Chapter 2#^master-quartz-get|第二章 5/29]]"
How: "[[Database/Character/Fie Claussell#^fei|菲]]初始核心"
Properties:
  - Level: 2
    Properties:
      HP: 200
      EP: 20
      STR: 35
      DEF: 10
      ATS: 10
      ADF: 10
      SPD: 9
  - Level: 3
    Properties:
      HP: 300
      EP: 30
      STR: 45
      DEF: 15
      ATS: 15
      ADF: 15
      SPD: 12 
  - Level: 4
    Properties:
      HP: 400
      EP: 40
      STR: 60
      DEF: 20
      ATS: 20
      ADF: 20
      SPD: 16
  - Level: 5
    Properties:
      HP: 500
      EP: 50
      STR: 80
      DEF: 25
      ATS: 25
      ADF: 25
      SPD: 20
Arts:
  - Level: 2
    Arts:
      - "[[Database/Art/Time#^shi-jian-qu-dong|时间驱动]]"
  - Level: 3
    Arts:
      - "[[Database/Art/Time#^e-mo-zhi-lian|恶魔之镰]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Time#^shi-jian-bao-fa|时间爆发]]"
Abilities:
  - Level: 2
    Abilities:
      - "战斗开始时发动SPD提升, SPD+25%, 2回合"
  - Level: 3
    Abilities:
      - "战斗开始时发动SPD提升, SPD+25%, 3回合"
      - "HP20%以下时发动SPD提升, SPD+25%, 3回合, 每场战斗限一次"
  - Level: 4
    Abilities:
      - "战斗开始时发动SPD提升, SPD+25%, 4回合"
      - "HP20%以下时发动SPD提升, SPD+25%, 4回合, 每场战斗限一次"
  - Level: 5
    Abilities:
      - "战斗开始时发动SPD提升, SPD+25%, 5回合"
      - "HP20%以下时发动SPD提升, SPD+25%, 5回合, 每场战斗限一次"
      - "回避率+10%"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
