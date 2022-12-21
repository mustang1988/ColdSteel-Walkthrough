---
ID: "Quartz.Mirage.Magius"
Element: "Mirage"
Aliases:
  - "贤者"
When: ""
How: ""
Properties:
  - Level: 4
    Properties:
      HP: 1000
      EP: 160
      STR: 50
      DEF: 50
      ATS: 60
      ADF: 60
      SPD: 10
  - Level: 5
    Properties:
      HP: 1200
      EP: 200
      STR: 60
      DEF: 60
      ATS: 80
      ADF: 80
      SPD: 12
Arts:
  - Level: 4
    Arts:
      - "[[Database/Art/Mirage#^jiao-yue-zhi-guang|皎月之光]]"
      - "[[Database/Art/Mirage#^yin-ye-zhi-ji|银夜之棘]]"
      - "[[Database/Art/Mirage#^mei-ying-zhi-ju|魅影之惧]]"
      - "[[Database/Art/Time#^e-yun-zhi-die|厄运之蝶]]"
      - "[[Database/Art/Space#^po-xie-zhi-yin|破邪之印]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Mirage#^xing-guang-zhi-jian|星光之剑]]"
Abilities:
  - Level: 4
    Abilities:
      - "随HP减少提升魔法损伤, 损伤值最高提升至1.5倍"
      - "魔法有效范围+1"
  - Level: 5
    Abilities:
      - "随HP减少提升魔法损伤, 损伤值最高提升至2倍"
      - "魔法有效范围+2"
      - "HP20%以下时发动ATS&ADF提升，ATS&ADF+25%，5回合, 每场战斗限一次"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
