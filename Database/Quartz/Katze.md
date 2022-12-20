---
ID: "Quartz.Time.Katze"
Element: "Time"
Aliases:
  - "灵猫"
When: ""
How: ""
Properties:
  - Level: 3
    Properties:
      HP: 700
      EP: 70
      STR: 35
      DEF: 35
      ATS: 45
      ADF: 35
      SPD: 7
  - Level: 4
    Properties:
      HP: 1000
      EP: 100
      STR: 50
      DEF: 50
      ATS: 60
      ADF: 50
      SPD: 10
  - Level: 5
    Properties:
      HP: 1200
      EP: 120
      STR: 60
      DEF: 60
      ATS: 80
      ADF: 60
      SPD: 12
Arts:
  - Level: 3
    Arts:
      - "[[Database/Art/Time#^xin-ling-zhi-xia|心灵之霞]]"
      - "[[Database/Art/Time#^e-mo-zhi-lian|恶魔之镰]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Time#^e-yun-zhi-die|厄运之蝶]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Time#^an-ying-wei-dian|暗影伪典]]"
Abilities:
  - Level: 3
    Abilities:
      - "吸收魔法攻击, 发动几率50%"
  - Level: 4
    Abilities:
      - "吸收魔法攻击, 发动几率75%"
      - "战斗开始时回复10%EP"
  - Level: 5
    Abilities:
      - "吸收魔法攻击, 发动几率100%"
      - "战斗开始时回复20%EP"
      - "减少时属性魔法发动后的硬直时间, 硬直时间50%"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
