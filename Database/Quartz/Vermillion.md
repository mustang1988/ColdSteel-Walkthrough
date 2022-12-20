---
ID: "Quartz.Fire.Vermillion"
Element: "Fire"
Aliases:
  - "红莲"
When: ""
How: ""
Properties:
  - Level: 4
    Properties:
      HP: 1200
      EP: 50
      STR: 60
      DEF: 50
      ATS: 25
      ADF: 50
      SPD: 5
  - Level: 5
    Properties:
      HP: 1600
      EP: 70
      STR: 80
      DEF: 60
      ATS: 35
      ADF: 60
      SPD: 7
Arts:
Abilities:
  - Level: 4
    Abilities:
      - "HP越高物理损伤越高, 最高可提升至1.5倍"
      - "每击杀一个敌人HP+500"
  - Level: 5
    Abilities:
      - "HP越高物理损伤越高, 最高可提升至2倍"
      - "每击杀一个敌人HP+1000"
      - "普通攻击%战技追加「炎伤」, 发动几率50%"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
