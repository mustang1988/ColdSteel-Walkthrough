---
ID: "Craft.SCraft"
SCrafts:
# 黎恩 -------------------------------------------------------------------
  - Name: "焰之太刀"
    ID: "yan-zhi-tai-dao"
    Description: "令刀身带有烈焰，以烈火之势斩击敌人"
    Type: "攻击(威力SS)"
    Range: "圆M"
    Effects:
      - "[[Database/Status/Burn|炎伤]] 100%"
    Character: "[[Database/Character/Rean Schwarzer#^li-en|黎恩]]"
    How: "[[Walkthrough/Chapter 1#^s-craft-yan-zhi-tai-dao|第一章 4/25]] Boss战习得"
  - Name: "苍焰之太刀"
    ID: "cang-yan-zhi-tai-dao"
    Description: "令刀身带有苍蓝之焰, 以烈火之势斩击敌人"
    Type: "攻击(威力SSS)"
    Range: "圆L"
    Effects:
      - "[[Database/Status/Burn|炎伤]] 100%"
    Character: "[[Database/Character/Rean Schwarzer#^li-en|黎恩]]"
    How: "TODO终章自动习得"
# 艾玛 -------------------------------------------------------------------
  - Name: "巨塔之主"
    ID: "ju-ta-zhi-zhu"
    Description: "以巨塔之光将一切存在化为尘土"
    Type: "魔法攻击(威力SSS)"
    Range: "全体"
    Effects:
    Character: "[[Database/Character/Emma Millstein#^ai-ma|艾玛]]"
    How: "TODO"
# 菲 -------------------------------------------------------------------
  - Name: "风精之舞"
    ID: "feng-jing-zhi-wu"
    Description: "以杀戮之舞纵横战场, 蹂躏整个交战区域"
    Type: "攻击(威力SS+)"
    Range: "圆LL"
    Effects:
    Character: "[[Database/Character/Fie Claussell#^fei|菲]]"
    How: "TODO"
# 艾略特 -------------------------------------------------------------------
  - Name: "七彩狂想曲"
    ID: "qi-cai-kuang-xiang-qu"
    Description: ""
    Type: "魔法攻击(威力SS+)"
    Range: "圆LL"
    Effects:
      - "[[Database/Status/Confuse|混乱]] 100%"
    Character: "[[Database/Character/Elliot Craig#^ai-lve-te|艾略特]]"
    How: "TODO第四章7/25"
# 劳拉 -------------------------------------------------------------------
  - Name: "洸刃乱舞"
    ID: "guang-ren-luan-wu"
    Description: "挥舞带着光辉的刀刃，以怒涛之势斩击敌人"
    Type: "攻击(威力SS)"
    Range: "圆M"
    Effects:
    Character: "[[Database/Character/Laura S Arseid|劳拉]]"
    How: "初始习得"
  - Name: "真·洸刃乱舞"
    ID: "zhen-guang-ren-luan-wu"
    Description: "炽烈而又华丽地使出极尽锋利的连续斩击"
    Type: "攻击(威力SSS)"
    Range: "圆LL"
    Effects:
    Character: "[[Database/Character/Laura S Arseid|劳拉]]"
    How: "TODO 第五章8/28"
# ?? -------------------------------------------------------------------
  - Name: ""
    ID: ""
    Description: ""
    Type: ""
    Range: ""
    Effects:
      - ""
      - ""
      - ""
    Character: ""
    How: "TODO"
---
```dataviewjs
const craft = dv.current().SCrafts[0];
await dv.view('Craft/SCraft', { craft });
```
^yan-zhi-tai-dao

---

```dataviewjs
const craft = dv.current().SCrafts[1];
await dv.view('Craft/SCraft', { craft });
```
^cang-yan-zhi-tai-dao

---

```dataviewjs
const craft = dv.current().SCrafts[2];
await dv.view('Craft/SCraft', { craft });
```
^ju-ta-zhi-zhu

---

```dataviewjs
const craft = dv.current().SCrafts[3];
await dv.view('Craft/SCraft', { craft });
```
^feng-jing-zhi-wu

---

```dataviewjs
const craft = dv.current().SCrafts[4];
await dv.view('Craft/SCraft', { craft });
```
^qi-cai-kuang-xiang-qu

---

```dataviewjs
const craft = dv.current().SCrafts[5];
await dv.view('Craft/SCraft', { craft });
```
^guang-ren-luan-wu

---

```dataviewjs
const craft = dv.current().SCrafts[6];
await dv.view('Craft/SCraft', { craft });
```
^zhen-guang-ren-luan-wu