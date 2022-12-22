---
ID: "Quartz.Earth.Iron"
Element: "Earth"
Aliases: 
  - "钢铁"
When: "[[Walkthrough/Chapter 2#^master-quartz-get|第二章 5/29]]"
How: "[[Database/Character/Machias Regnitz#^ma-qi-ya-si|马奇亚斯]]初始核心"
Properties:
  - Level: 1
    Properties:
      HP: 300
      EP: 20
      STR: 15
      DEF: 30
      ATS: 10
      ADF: 25
      SPD: 1
  - Level: 2
    Properties:
      HP: 400
      EP: 30
      STR: 20
      DEF: 45
      ATS: 15
      ADF: 35
      SPD: 2
  - Level: 3
    Properties:
      HP: 500
      EP: 40
      STR: 25
      DEF: 60
      ATS: 20
      ADF: 45
      SPD: 3
  - Level: 4
    Properties:
      HP: 700
      EP: 50
      STR: 35
      DEF: 80
      ATS: 25
      ADF: 60
      SPD: 4
  - Level: 5
    Properties:
      HP: 900
      EP: 70
      STR: 45
      DEF: 100
      ATS: 35
      ADF: 80
      SPD: 5
Arts:
  - Level: 1
    Arts: 
      - "[[Database/Art/Earth#^yan-shi-zhi-ci|岩石之刺]]"
  - Level: 2
    Arts:
      - "[[Database/Art/Earth#^jie-jing-fang-hu|结晶防护]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Earth#^jie-jing-fang-hu-fu|结晶防护·复]]"
Abilities:
  - Level: 1
    Abilities:
      - "战斗开始时DEF&ADF+25%, 1回合"
  - Level: 2
    Abilities:
      - "战斗开始时DEF&ADF+25%, 2回合"
  - Level: 3
    Abilities:
      - "战斗开始时DEF&ADF+25%, 3回合"
      - "HP20%以下时DEF&ADF+25%, 3回合, 每场战斗限一次"
  - Level: 4
    Abilities:
      - "战斗开始时DEF&ADF+25%, 4回合"
      - "HP20%以下时DEF&ADF+25%, 4回合, 每场战斗限一次"
  - Level: 5
    Abilities:
      - "战斗开始时DEF&ADF+25%, 5回合"
      - "HP20%以下时DEF&ADF+25%, 5回合, 每场战斗限一次"
      - "在陷入战斗不能前发动起死回生, HP回复10%, CP+10, 每场战斗限一次"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```