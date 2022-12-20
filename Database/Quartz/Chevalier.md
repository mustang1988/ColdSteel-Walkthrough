---
ID: "Quartz.Space.Chevalier"
Element: "Space"
Aliases:
  - "骑士"
When: ""
How: ""
Properties:
  - Level: 4
    Properties:
      HP: 1600
      EP: 100
      STR: 60
      DEF: 60
      ATS: 50
      ADF: 50
      SPD: 10
  - Level: 5
    Properties:
      HP: 2000
      EP: 120
      STR: 80
      DEF: 80
      ATS: 60
      ADF: 60
      SPD: 12
Arts:
  - Level: 4
    Arts:
      - "[[Database/Art/Earth#^jie-jing-fang-hu-fu|结晶防护·复]]"
      - "[[Database/Art/Fire#^qiang-yin-zhi-li-fu|强音之力·复]]"
      - "[[Database/Art/Space#^shan-yao-tian-qi|闪耀天启]]"
      - "[[Database/Art/Fire#^zhan-yi-zai-qi|战意再起]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Space#^chi-tian-shi-zhi-huan|炽天使之环]]"
Abilities:
  - Level: 4
    Abilities:
      - "随HP减少提升物理损伤, 损伤值最高提升至1.5倍"
      - "吸引敌人注意, 战斗中生效，发动几率30%"
  - Level: 5
    Abilities:
      - "随HP减少提升物理损伤, 损伤值最高提升至2倍"
      - "吸引敌人注意, 战斗中生效，发动几率90%"
      - "HP20%以下时发动STR&DEF提升，STR&DEF+25%，5回合, 每场战斗限一次"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
