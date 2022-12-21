---
ID: "Quartz.Earth.Aegis"
Element: "Earth"
Aliases:
  - "神盾"
When: ""
How: ""
Properties:
  - Level: 3
    Properties:
      HP: 500
      EP: 50
      STR: 35
      DEF: 45
      ATS: 35
      ADF: 60
      SPD: 5
  - Level: 4
    Properties:
      HP: 700
      EP: 70
      STR: 50
      DEF: 60
      ATS: 50
      ADF: 80
      SPD: 7
  - Level: 5
    Properties:
      HP: 900
      EP: 90
      STR: 60
      DEF: 80
      ATS: 60
      ADF: 100
      SPD: 9
Arts:
  - Level: 3
    Arts:
      - "[[Database/Art/Earth#^yan-shi-zhi-ci|岩石之刺]]"
      - "[[Database/Art/Earth#^da-di-zhi-yu|大地之愈]]"
      - "[[Database/Art/Earth#^jie-jing-fang-hu-fu|结晶防护·复]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Earth#^jian-ren-shou-hu|坚韧守护]]"
  - Level: 5
    Arts: 
      - "[[Database/Art/Earth#^yuan-gu-ju-yan|远古巨岩]]"
Abilities:
  - Level: 3
    Abilities:
      - "战斗开始时发动「物理防御&魔法反弹」"
  - Level: 4
    Abilities:
      - "战斗开始时发动「物理防御&魔法反弹」"
      - "HP20%以下时发动「物理防御&魔法反弹」, 每场战斗限一次"
  - Level: 5
    Abilities:
      - "战斗开始时发动「物理防御&魔法反弹」"
      - "HP20%以下时发动「物理防御&魔法反弹」, 每场战斗限一次"
      - "减少地属性魔法发动后的硬直时间, 硬直时间-50%"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
