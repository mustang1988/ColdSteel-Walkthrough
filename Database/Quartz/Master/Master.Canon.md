---
ID: "Quartz.Water.Canon"
Element: "Water"
Aliases:
  - "法则"
When: "[[Walkthrough/Chapter 0#^master-quartz-get|序章 3/31]]"
How: "艾略特初始核心"
Properties:
  - Level: 1
    Properties:
      HP: 200
      EP: 40
      STR: 10
      DEF: 10
      ATS: 25
      ADF: 20
      SPD: 1
  - Level: 2
    Properties:
      HP: 300
      EP: 50
      STR: 15
      DEF: 15
      ATS: 35
      ADF: 25
      SPD: 2
  - Level: 3
    Properties:
      HP: 400
      EP: 70
      STR: 20
      DEF: 20
      ATS: 45
      ADF: 35
      SPD: 3
  - Level: 4
    Properties:
      HP: 500
      EP: 100
      STR: 25
      DEF: 25
      ATS: 60
      ADF: 50
      SPD: 4
  - Level: 5
    Properties:
      HP: 700
      EP: 120
      STR: 35
      DEF: 35
      ATS: 80
      ADF: 60
      SPD: 5
Arts:
  - Level: 1
    Arts: 
      - "[[Database/Art/Water#^hui-fu-shu|回复术]]"
      - "[[Database/Art/Water#^gao-ya-shui-kuai|高压水块]]"
  - Level: 2
    Arts:
      - "[[Database/Art/Water#^zhong-hui-fu-shu|中回复术]]"
  - Level: 3
    Arts:
      - "[[Database/Art/Water#^shui-liu-hong-ji|水流轰击]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Water#^da-hui-fu-shu|大回复术]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Water#^sheng-ling-shu|圣灵术]]"
Abilities:
  - Level: 1
    Abilities:
      - "提升HP回复魔法的效果, 回复量1.25倍"
  - Level: 2
    Abilities:
      - "提升HP回复魔法的效果, 回复量1.5倍"
  - Level: 3
    Abilities:
      - "提升HP回复魔法的效果, 回复量1.75倍"
      - "战斗开始时发动HP逐渐回复, 每回合回复30%HP, 3回合"
  - Level: 4
    Abilities:
      - "提升HP回复魔法的效果, 回复量2倍"
      - "战斗开始时发动HP逐渐回复, 每回合回复30%HP, 4回合"
  - Level: 5
    Abilities:
      - "提升HP回复魔法的效果, 回复量3倍"
      - "战斗开始时发动HP逐渐回复, 每回合回复30%HP, 5回合"
      - "HP20%以下时发动HP逐渐回复, 每回合回复30%HP, 5回合, 每场战斗限一次"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
