---
ID: "Quartz.Water.Orochi"
Element: "Water"
Aliases:
  - "大蛇"
When: ""
How: ""
Properties:
  - Level: 4
    Properties:
      HP: 1000
      EP: 100
      STR: 50
      DEF: 50
      ATS: 50
      ADF: 50
      SPD: 4
  - Level: 5
    Properties:
      HP: 1200
      EP: 120
      STR: 60
      DEF: 60
      ATS: 60
      ADF: 60
      SPD: 5
Arts:
Abilities:
  - Level: 4
    Abilities:
      - "随机提升物理损伤(最高可提升至1.8倍)"
      - "随机提升魔法损伤(最高可提升至1.5倍)"
  - Level: 5
    Abilities:
      - "随机提升物理损伤(最高可提升至2.5倍)"
      - "随机提升魔法损伤(最高可提升至1.8倍)"
      - "普通攻击%战技追加「中毒」(触发概率50%)"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
