---
ID: "Quartz.Earth.Tauros"
Element: "Earth"
Aliases:
  - "金牛"
When: ""
How: ""
Properties:
  - Level: 3
    Properties:
      HP: 700
      EP: 60
      STR: 45
      DEF: 25
      ATS: 25
      ADF: 25
      SPD: 3
  - Level: 4
    Properties:
      HP: 1000
      EP: 40
      STR: 60
      DEF: 35
      ATS: 35
      ADF: 35
      SPD: 4
  - Level: 5
    Properties:
      HP: 1200
      EP: 50
      STR: 80
      DEF: 45
      ATS: 45
      ADF: 45
      SPD: 5
Arts:
  - Level: 3
    Arts: 
      - "[[Database/Art/Earth#^jie-jing-fang-hu-fu|结晶防护·复]]"
      - "[[Database/Art/Fire#^qiang-yin-zhi-li-fu|强音之力·复]]"
      - "[[Database/Art/Earth#^da-di-zhi-qiang|大地之枪]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Earth#^da-di-beng-lie|大地崩裂]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Earth#^shi-jie-zhi-shu|世界之树]]"
Abilities:
  - Level: 3
    Abilities:
      - "普通攻击赋予1.5倍损伤, 2倍硬直时间"
  - Level: 4
    Abilities:
      - "普通攻击赋予2倍损伤, 2倍硬直时间"
      - "命中率+75%"
  - Level: 5
    Abilities:
      - "普通攻击赋予2.5倍损伤, 2倍硬直时间"
      - "命中率+100%"
      - "普通攻击&战技暴击, 触发概率5%"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```