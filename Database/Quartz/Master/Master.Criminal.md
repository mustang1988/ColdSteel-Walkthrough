---
ID: "Quartz.Fire.Criminal"
Element: "Fire"
Aliases:
  - "罪恶"
When: ""
How: ""
Properties:
  - Level: 3
    Properties:
      HP: 400
      EP: 50
      STR: 20
      DEF: 20
      ATS: 45
      ADF: 25
      SPD: 4
  - Level: 4
    Properties:
      HP: 500
      EP: 70
      STR: 25
      DEF: 25
      ATS: 60
      ADF: 35
      SPD: 5
  - Level: 5
    Properties:
      HP: 700
      EP: 90
      STR: 35
      DEF: 35
      ATS: 80
      ADF: 45
      SPD: 7
Arts:
  - Level: 3
    Arts:
      - "[[Database/Art/Fire#^huo-yan-jian|火焰箭]]"
      - "[[Database/Art/Fire#^zhuo-re-zhi-bo|灼热之波]]"
      - "[[Database/Art/Fire#^huo-yan-zhi-she|火焰之舌]]"
      - "[[Database/Art/Fire#^huo-shan-dan-yu|火山弹雨]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Fire#^ran-dian-bao-lie|燃点爆裂]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Fire#^qian-yang-xin-xing|千阳新星]]"
Abilities:
  - Level: 3
    Abilities:
      - "攻击魔法暴击, 发动几率30%"
  - Level: 4
    Abilities:
      - "攻击魔法暴击, 发动几率60%"
      - "HP20%以下时回复10%EP, 每场战斗限一次"
  - Level: 5
    Abilities:
      - "攻击魔法暴击, 发动几率90%"
      - "HP20%以下时回复20%EP, 每场战斗限一次"
      - "减少火属性魔法发动后的硬直时间, 硬直时间-50%"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
