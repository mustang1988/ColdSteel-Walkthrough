---
ID: "Quartz.Space.Angel"
Element: "Space"
Aliases:
  - "天使"
When: "[[Walkthrough/Chapter 1#^master-quartz-get|第一章 4/24]]"
How: "亚莉莎初始核心"
Properties:
  - Level: 1
    Properties:
      HP: 200
      EP: 20
      STR: 10
      DEF: 10
      ATS: 25
      ADF: 15
      SPD: 3
  - Level: 2
    Properties:
      HP: 300
      EP: 30
      STR: 15
      DEF: 15
      ATS: 35
      ADF: 20
      SPD: 4
  - Level: 3
    Properties:
      HP: 400
      EP: 40
      STR: 20
      DEF: 20
      ATS: 45
      ADF: 25
      SPD: 5
  - Level: 4
    Properties:
      HP: 500
      EP: 50
      STR: 25
      DEF: 25
      ATS: 60
      ADF: 35
      SPD: 7
  - Level: 5
    Properties:
      HP: 700
      EP: 70
      STR: 35
      DEF: 35
      ATS: 80
      ADF: 45
      SPD: 9
Arts:
  - Level: 1
    Arts: 
      - "[[Database/Art/Water#^fu-huo-shu|复活术]]"
      - "[[Database/Art/Space#^huang-jin-qiu|黄金球]]"
  - Level: 2
    Arts:
      - "[[Database/Art/Space#^mo-dao-zhu-fu|魔导祝福]]"
  - Level: 3
    Arts:
      - "[[Database/Art/Space#^shan-yao-tian-qi|闪耀天启]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Space#^po-xie-zhi-yin|破邪之印]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Space#^tian-ying-zhi-yao|天鹰之耀]]"
Abilities:
  - Level: 1
    Abilities:
      - "在陷入战斗不能前发动「起死回生」, HP回复10%，CP+10, 每场战斗限一次"
  - Level: 2
    Abilities:
      - "在陷入战斗不能前发动「起死回生」, HP回复10%，CP+25, 每场战斗限一次"
  - Level: 3
    Abilities:
      - "在陷入战斗不能前发动「起死回生」, HP回复10%，CP+50, 每场战斗限一次"
      - "HP20%以下时发动HP逐渐回复，3回合, 每场战斗限一次"
  - Level: 4
    Abilities:
      - "在陷入战斗不能前发动「起死回生」, HP回复10%，CP+100, 每场战斗限一次"
      - "HP20%以下时发动HP逐渐回复，4回合, 每场战斗限一次"
  - Level: 5
    Abilities:
      - "在陷入战斗不能前发动「起死回生」, HP回复10%，CP+200, 每场战斗限一次"
      - "HP20%以下时发动HP逐渐回复，5回合, 每场战斗限一次"
      - "减少空属性魔法发动后的硬直时间, 硬直时间50%"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
