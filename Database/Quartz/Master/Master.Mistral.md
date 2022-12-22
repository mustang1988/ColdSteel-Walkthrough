---
ID: "Quartz.Wind.Mistral"
Element: "Wind"
Aliases:
  - "北风"
When: "[[Walkthrough/Chapter 2#^master-quartz-get|第二章 5/29]]"
How: "[[Database/Character/Jusis Albarea#^you-xi-si|尤西斯]]初始核心"
Properties:
  - Level: 1
    Properties:
      HP: 100
      EP: 20
      STR: 25
      DEF: 5
      ATS: 25
      ADF: 5
      SPD: 2
  - Level: 2
    Properties:
      HP: 200
      EP: 30
      STR: 35
      DEF: 10
      ATS: 35
      ADF: 10
      SPD: 3
  - Level: 3
    Properties:
      HP: 300
      EP: 40
      STR: 45
      DEF: 15
      ATS: 45
      ADF: 15
      SPD: 4 
  - Level: 4
    Properties:
      HP: 400
      EP: 50
      STR: 60
      DEF: 20
      ATS: 60
      ADF: 20
      SPD: 5 
  - Level: 5
    Properties:
      HP: 500
      EP: 70
      STR: 80
      DEF: 25
      ATS: 80
      ADF: 25
      SPD: 7
Arts:
  - Level: 1
    Arts: 
      - "[[Database/Art/Wind#^feng-zhi-lun|风之轮]]"
  - Level: 3
    Arts:
      - "[[Database/Art/Wind#^feng-zhi-ling-yu|风之领域]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Wind#^shen-pan-zhi-jian|审判之箭]]"
Abilities:
  - Level: 1
    Abilities:
      - "战斗开始时发动ATS提升, ATS+25%, 1回合"
  - Level: 2
    Abilities:
      - "战斗开始时发动ATS提升, ATS+25%, 2回合"
  - Level: 3
    Abilities:
      - "战斗开始时发动ATS提升, ATS+25%, 3回合"
      - "HP20%以下时发动ATS提升, ATS+25%, 3回合, 每场战斗限一次"
  - Level: 4
    Abilities:
      - "战斗开始时发动ATS提升, ATS+25%, 4回合"
      - "HP20%以下时发动ATS提升, ATS+25%, 4回合, 每场战斗限一次"
  - Level: 5
    Abilities:
      - "战斗开始时发动ATS提升, ATS+50%, 5回合"
      - "HP20%以下时发动ATS提升, ATS+50%, 5回合, 每场战斗限一次"
      - "攻击魔法暴击, 触发概率30%"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
