---
ID: "Quartz.Water.Scepter"
Element: "Water"
Aliases:
  - "权杖"
When: "[[Walkthrough/Chapter 1#^quartz-scepter|第一章 4/18]]"
How: ""
Properties:
  - Level: 1
    Properties:
      HP: 100
      EP: 20
      STR: 20
      DEF: 5
      ATS: 20
      ADF: 5
      SPD: 1
  - Level: 2
    Properties:
      HP: 200
      EP: 30
      STR: 25
      DEF: 10
      ATS: 25
      ADF: 10
      SPD: 2
  - Level: 3
    Properties:
      HP: 300
      EP: 40
      STR: 35
      DEF: 15
      ATS: 35
      ADF: 15
      SPD: 3
  - Level: 4
    Properties:
      HP: 400
      EP: 50
      STR: 50
      DEF: 20
      ATS: 50
      ADF: 20
      SPD: 4
  - Level: 5
    Properties:
      HP: 500
      EP: 70
      STR: 60
      DEF: 25
      ATS: 60
      ADF: 25
      SPD: 5
Arts:
  - Level: 1
    Arts: 
      - "[[Database/Art/Water#^gao-ya-shui-kuai|高压水块]]"
  - Level: 2
    Arts:
      - "[[Database/Art/Water#^han-shuang-zhi-ren|冰寒霜刃]]"
  - Level: 4
    Arts:
      - "[[Database/Art/Water#^shui-liu-hong-ji|水流轰击]]"
  - Level: 5
    Arts:
      - "[[Database/Art/Water#^shui-jing-hong-liu|水晶洪流]]"
Abilities:
  - Level: 1
    Abilities:
      - "普通攻击&战技可获得耀晶片(触发概率30%)"
  - Level: 2
    Abilities:
      - "普通攻击&战技可获得耀晶片(触发概率40%)"
  - Level: 3
    Abilities:
      - "普通攻击&战技可获得耀晶(触发概率50%)"
      - "攻击魔法可获得耀晶片(触发概率30%)"
  - Level: 4
    Abilities:
      - "普通攻击&战技可获得耀晶片(触发概率60%)"
      - "攻击魔法可获得耀晶片(触发概率40%)"
  - Level: 5
    Abilities:
      - "普通攻击&战技可获得耀晶片(触发概率90%)"
      - "攻击魔法可获得耀晶片(触发概率50%)"
      - "经验值获得量变为1.25倍"
---
```dataviewjs
const quartz = dv.current()
await dv.view('Quartz/Master', { quartz });
```
