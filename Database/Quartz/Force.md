---
ID: "Quartz.Fire.Force"
Element: "Fire"
Aliases:
  - "力量"
When: ""
How: "黎恩初始回路"
Properties:
  - Level: 1
    Properties:
      HP: 300
      EP: 20
      STR: 25
      DEF: 5
      ATS: 10
      ADF: 5
      SPD: 2
  - Level: 2
    Properties:
      HP: 400
      EP: 30
      STR: 35
      DEF: 10
      ATS: 15
      ADF: 10
      SPD: 3
  - Level: 3
    Properties:
      HP: 500
      EP: 40
      STR: 45
      DEF: 15
      ATS: 20
      ADF: 15
      SPD: 4
  - Level: 4
    Properties:
      HP: 700
      EP: 50
      STR: 60
      DEF: 20
      ATS: 25
      ADF: 20
      SPD: 5
  - Level: 5
    Properties:
      HP: 900
      EP: 70
      STR: 80
      DEF: 25
      ATS: 35
      ADF: 25
      SPD: 7
Arts:
  - Level: 1
    Arts: 
      - "[[Database/Art/Fire#^huo-yan-jian|火焰箭]]"
  - Level: 2
    Arts:
      - "[[Database/Art/Fire#^zhen-fen-zhi-ji|振奋之激]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Fire#^zhan-yi-zai-qi|战意再起]]"
Abilities:
  - Level: 1
    Abilities:
      - "每击杀一名敌人CP+5"
  - Level: 2
    Abilities:
      - "每击杀一名敌人CP+10"
  - Level: 3
    Abilities:
      - "每击杀一名敌人CP+15"
      - "HP20%以下时发动 CP+50, 每场战斗限一次"
  - Level: 4
    Abilities:
      - "每击杀一名敌人CP+20"
      - "HP20%以下时发动 CP+100, 每场战斗限一次"
  - Level: 5
    Abilities:
      - "每击杀一名敌人CP+25"
      - "HP20%以下时发动 CP+200, 每场战斗限一次"
      - "HP20%以下时发动STR提升, STR+25%, 5回合, 每场战斗限一次"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
