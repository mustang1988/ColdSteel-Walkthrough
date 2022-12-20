---
ID: "Quartz.Space.Emblem"
Element: "Space"
Aliases:
  - "纹章"
When: ""
How: ""
Properties:
  - Level: 4
    Properties:
      HP: 1200
      EP: 120
      STR: 50
      DEF: 60
      ATS: 50
      ADF: 60
      SPD: 12
  - Level: 5
    Properties:
      HP: 1600
      EP: 160
      STR: 60
      DEF: 80
      ATS: 60
      ADF: 80
      SPD: 16
Arts:
  - Level: 4
    Arts:
      - "[[Database/Art/Space#^huang-jin-qiu|黄金球]]"
      - "[[Database/Art/Space#^an-wu-zhi|暗物质]]"
      - "[[Database/Art/Space#^mo-dao-zhu-fu|魔导祝福]]"
      - "[[Database/Art/Space#^shan-yao-tian-qi|闪耀天启]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Space#^tian-ying-zhi-yao|天鹰之耀]]"
Abilities:
  - Level: 4
    Abilities:
      - "随HP减少减伤, 最多可减轻30%"
      - "道具掉落率+30%"
  - Level: 5
    Abilities:
      - "随HP减少减伤, 最多可减轻60%"
      - "道具掉落率+100%"
      - "获得掉落道具数提升至2倍"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
