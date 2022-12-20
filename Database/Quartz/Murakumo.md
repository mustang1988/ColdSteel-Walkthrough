---
ID: "Quartz.Time.Murakumo"
Element: "Time"
Aliases:
  - "丛云"
When: ""
How: ""
Properties:
  - Level: 4
    Properties:
      HP: 700
      EP: 70
      STR: 60
      DEF: 35
      ATS: 35
      ADF: 35
      SPD: 12
  - Level: 5
    Properties:
      HP: 900
      EP: 90
      STR: 80
      DEF: 45
      ATS: 45
      ADF: 45
      SPD: 16
Arts:
Abilities:
  - Level: 4
    Abilities:
      - "普通攻击&战技暴击, 发动几率10%"
      - "命中率+75%"
  - Level: 5
    Abilities:
      - "普通攻击&战技暴击, 发动几率20%"
      - "命中率+100%"
      - "提升暴击损伤, 损伤量提升至2倍，通常为1.5倍"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
