---
ID: "Quartz.Earth.Megalith"
Element: "Earth"
Aliases:
  - "巨石"
Time: ""
How: ""
Properties:
  - Level: 4
    Properties:
      HP: 1200
      EP: 120
      STR: 20
      DEF: 50
      ATS: 20
      ADF: 50
      SPD: 4
  - Level: 5
    Properties:
      HP: 1600
      EP: 160
      STR: 25
      DEF: 60
      ATS: 25
      ADF: 60
      SPD: 5
Arts:
  - Level: 4
    Arts:
      - "[[Database/Art/Earth#^da-di-zhi-qiang|大地之枪]]"
      - "[[Database/Art/Earth#^da-di-beng-lie|大地崩裂]]"
      - "[[Database/Art/Earth#^da-di-zhi-yu|大地之愈]]"
      - "[[Database/Art/Earth#^jie-jing-fang-hu-fu|结晶防护·复]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Earth#^jian-ren-shou-hu|坚韧守护]]"
Abilities:
  - Level: 4
    Abilities:
      - "经验值获得量变为1.25倍"
      - "在场景上回复HP·EP·CP, 效果小"
  - Level: 5
    Abilities:
      - "经验值获得量变为1.5倍"
      - "在场景上回复HP·EP·CP, 效果大"
      - "在场景上变得不容易被敌人发现"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
