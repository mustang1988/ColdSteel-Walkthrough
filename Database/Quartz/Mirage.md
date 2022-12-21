---
ID: "Quartz.Mirage.Mirage"
Element: "Mirage"
Aliases:
  - "幻象"
When: ""
How: ""
Properties:
  - Level: 2
    Properties:
      HP: 200
      EP: 70
      STR: 10
      DEF: 10
      ATS: 45
      ADF: 10
      SPD: 2
  - Level: 3
    Properties:
      HP: 300
      EP: 90
      STR: 15
      DEF: 15
      ATS: 60
      ADF: 15
      SPD: 3
  - Level: 4
    Properties:
      HP: 400
      EP: 120
      STR: 20
      DEF: 20
      ATS: 80
      ADF: 20
      SPD: 4
  - Level: 5
    Properties:
      HP: 500
      EP: 160
      STR: 25
      DEF: 25
      ATS: 100
      ADF: 25
      SPD: 5
Arts:
  - Level: 2
    Arts:
        - "[[Database/Art/Mirage#^qing-bao-jie-xi|情报解析]]"
        - "[[Database/Art/Mirage#^jiao-yue-zhi-guang|皎月之光]]"
  - Level: 3
    Arts:
      - "[[Database/Art/Mirage#^yin-ye-zhi-ji|银夜之棘]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Mirage#^xin-yue-zhi-jing|新月之镜]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Mirage#^mei-ying-zhi-ju|魅影之惧]]"
Abilities:
  - Level: 2
    Abilities:
      - "每击杀一名敌人EP+10"
  - Level: 3
    Abilities:
      - "每击杀一名敌人EP+15"
      - "魔法攻击回避率+25%, 若对方处于射程范围内可进行反击"
  - Level: 4
    Abilities:
      - "每击杀一名敌人EP+20"
      - "魔法攻击回避率+50%, 若对方处于射程范围内可进行反击"
  - Level: 5
    Abilities:
      - "每击杀一名敌人EP+25"
      - "魔法攻击回避率+75%, 若对方处于射程范围内可进行反击"
      - "HP20%以下时发动ATS提升，ATS+25%，5回合, 每场战斗限一次"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
