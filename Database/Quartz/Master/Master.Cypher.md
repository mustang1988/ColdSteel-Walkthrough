---
ID: "Quartz.Time.Cypher"
Element: "Time"
Aliases:
  - "虚无"
When: ""
How: "克洛初始回路"
Properties:
  - Level: 3
    Properties:
      HP: 400
      EP: 50
      STR: 45
      DEF: 20
      ATS: 35
      ADF: 20
      SPD: 9
  - Level: 4
    Properties:
      HP: 500
      EP: 70
      STR: 60
      DEF: 25
      ATS: 50
      ADF: 25
      SPD: 12
  - Level: 5
    Properties:
      HP: 700
      EP: 90
      STR: 80
      DEF: 35
      ATS: 60
      ADF: 35
      SPD: 16
Arts:
  - Level: 3
    Arts:
      - "[[Database/Art/Time#^xin-ling-zhi-xia|心灵之霞]]"
      - "[[Database/Art/Time#^e-mo-zhi-lian|恶魔之镰]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Time#^shi-jian-jian-su|时间减速]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Time#^e-yun-zhi-die|厄运之蝶]]"
Abilities:
  - Level: 3
    Abilities:
      - "普通攻击%战技追加「能力低下」, 发动几率30%，随机决定效果"
  - Level: 4
    Abilities:
      - "普通攻击%战技追加「能力低下」, 发动几率60%，随机决定效果"
      - "攻击魔法发动「能力低下」, 发动几率10%，随机决定效果"
  - Level: 5
    Abilities:
      - "普通攻击·战技追加「能力低下」, 发动几率90%，随机决定效果"
      - "攻击魔法发动「能力低下」, 发动几率20%，随机决定效果"
      - "普通攻击·战技追加「即死」, 发动几率20%"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
