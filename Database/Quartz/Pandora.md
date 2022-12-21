---
ID: "Quartz.Mirage.Pandora"
Element: "Mirage"
Aliases:
  - "魔盒"
When: ""
How: ""
Properties:
  - Level: 3
    Properties:
      HP: 300
      EP: 50
      STR: 15
      DEF: 15
      ATS: 45
      ADF: 25
      SPD: 5
  - Level: 4
    Properties:
      HP: 400
      EP: 70
      STR: 20
      DEF: 20
      ATS: 60
      ADF: 35
      SPD: 7
  - Level: 5
    Properties:
      HP: 500
      EP: 90
      STR: 25
      DEF: 25
      ATS: 80
      ADF: 45
      SPD: 9
Arts:
  - Level: 3
    Arts:
      - "[[Database/Art/Mirage#^yin-ye-zhi-ji|银夜之棘]]"
      - "[[Database/Art/Earth#^da-di-beng-lie|大地崩裂]]"
      - "[[Database/Art/Water#^shui-liu-hong-ji|水流轰击]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Space#^shan-yao-tian-qi|闪耀天启]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Mirage#^xing-guang-zhi-jian|星光之剑]]"
Abilities:
  - Level: 3
    Abilities:
      - "攻击魔法赋予1.2倍损伤, 消耗1.5倍EP"
  - Level: 4
    Abilities:
      - "攻击魔法赋予1.5倍损伤, 消耗1.5倍EP"
      - "魔法有效范围+1"
  - Level: 5
    Abilities:
      - "攻击魔法赋予2倍损伤, 消耗1.5倍EP"
      - "魔法有效范围+2"
      - "减少幻属性魔法发动后的硬直时间, 硬直时间50%"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
