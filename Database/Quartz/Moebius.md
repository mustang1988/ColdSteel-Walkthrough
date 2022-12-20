---
ID: "Quartz.Space.Moebius"
Element: "Space"
Aliases:
  - "无限"
When: ""
How: ""
Properties:
  - Level: 3
    Properties:
      HP: 500
      EP: 50
      STR: 35
      DEF: 35
      ATS: 25
      ADF: 25
      SPD: 5
  - Level: 4
    Properties:
      HP: 700
      EP: 70
      STR: 50
      DEF: 50
      ATS: 35
      ADF: 35
      SPD: 7
  - Level: 5
    Properties:
      HP: 900
      EP: 90
      STR: 60
      DEF: 60
      ATS: 45
      ADF: 45
      SPD: 9
Arts:
  - Level: 3
    Arts:
      - "[[Database/Art/Space#^huang-jin-qiu|黄金球]]"
      - "[[Database/Art/Space#^an-wu-zhi|暗物质]]"
      - "[[Database/Art/Wind#^sheng-ming-zhi-xi|生命之息]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Water#^sheng-ling-shu|圣灵术]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Wind#^sheng-ling-zhi-xi|圣灵之息]]"
Abilities:
  - Level: 3
    Abilities:
      - "回复道具的效果提升, HP·EP回复量提升至1.25倍，仅限战斗中"
  - Level: 4
    Abilities:
      - "回复道具的效果提升, HP·EP回复量提升至1.5倍，仅限战斗中"
      - "道具射程提升, RNG+4"
  - Level: 5
    Abilities:
      - "回复道具的效果提升, HP·EP回复量提升至2倍，仅限战斗中"
      - "道具射程提升, RNG+6"
      - "回复道具效果范围化, 范围·圆M"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
