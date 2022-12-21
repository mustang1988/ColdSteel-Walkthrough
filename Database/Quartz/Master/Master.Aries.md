---
ID: "Quartz.Water.Aries"
Element: "Water"
Aliases:
  - "白羊"
When: ""
How: ""
Properties:
  - Level: 3
    Properties:
      HP: 500
      EP: 90
      STR: 15
      DEF: 25
      ATS: 45
      ADF: 25
      SPD: 5
  - Level: 4
    Properties:
      HP: 700
      EP: 120
      STR: 20
      DEF: 35
      ATS: 60
      ADF: 35
      SPD: 7
  - Level: 5
    Properties:
      HP: 900
      EP: 160
      STR: 25
      DEF: 45
      ATS: 80
      ADF: 45
      SPD: 9
Arts:
  - Level: 3
    Arts:
      - "[[Database/Art/Water#^gao-ya-shui-kuai|高压水块]]"
      - "[[Database/Art/Water#^han-shuang-zhi-ren|冰寒霜刃]]"
      - "[[Database/Art/Water#^shui-liu-hong-ji|水流轰击]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Water#^shui-jing-hong-liu|水晶洪流]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Water#^luo-xuan-ju-wo|螺旋巨涡]]"
Abilities:
  - Level: 3
    Abilities:
      - "攻击魔法回复HP(回复量为赋予损伤的10%)"
  - Level: 4
    Abilities:
      - "攻击魔法回复HP(回复量为赋予损伤的15%)"
      - "攻击魔法回复EP(回复量为赋予损伤的1%)"
  - Level: 5
    Abilities:
      - "攻击魔法回复HP(回复量为赋予损伤的20%)"
      - "攻击魔法回复EP(回复量为赋予损伤的2%)"
      - "减少水属性魔法发动后的硬直时间50%"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```

