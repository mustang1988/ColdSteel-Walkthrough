---
ID: "Quartz.Mirage.Juggler"
Element: "Mirage"
Aliases:
  - "小丑"
When: ""
How: ""
Properties:
  - Level: 3
    Properties:
      HP: 300
      EP: 30
      STR: 35
      DEF: 25
      ATS: 35
      ADF: 25
      SPD: 3
  - Level: 4
    Properties:
      HP: 400
      EP: 40
      STR: 50
      DEF: 35
      ATS: 50
      ADF: 35
      SPD: 4
  - Level: 5
    Properties:
      HP: 500
      EP: 50
      STR: 60
      DEF: 45
      ATS: 60
      ADF: 45
      SPD: 5
Arts:
  - Level: 3
    Arts:
      - "[[Database/Art/Mirage#^xin-yue-zhi-jing|新月之镜]]"
      - "[[Database/Art/Mirage#^jiao-yue-zhi-guang|皎月之光]]"
      - "[[Database/Art/Mirage#^yin-ye-zhi-ji|银夜之棘]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Earth#^jian-ren-shou-hu|坚韧守护]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Mirage#^mei-ying-zhi-ju|魅影之惧]]"
Abilities:
  - Level: 3
    Abilities:
      - "普通攻击%战技追加「异常状态」, 发动几率30%，随机决定效果"
  - Level: 4
    Abilities:
      - "普通攻击%战技追加「异常状态」, 发动几率60%，随机决定效果"
      - "攻击魔法追加「异常状态」, 发动几率10%，随机决定效果"
  - Level: 5
    Abilities:
      - "普通攻击%战技追加「异常状态」, 发动几率90%，随机决定效果"
      - "攻击魔法追加「异常状态」, 发动几率20%，随机决定效果"
      - "普通攻击战技追加「恶梦」, 发动几率50%"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
