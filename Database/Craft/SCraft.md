---
ID: "Craft.SCraft"
SCrafts:
  - Name: "焰之太刀"
    ID: "yan-zhi-tai-dao"
    Description: "TODO"
    Type: "攻击(威力SS)"
    Range: "圆M"
    Effects:
      - "TODO"
    Character: "[[Database/Character/Rean Schwarzer#^li-en|黎恩]]"
    How: ""
  - Name: "苍焰之太刀"
    ID: "cang-yan-zhi-tai-dao"
    Description: "令刀身带有苍蓝之焰, 以烈火之势斩击敌人"
    Type: "攻击(威力SSS)"
    Range: "圆L"
    Effects:
      - "[[Database/Status/Burn|炎伤]] 100%"
    Character: "[[Database/Character/Rean Schwarzer#^li-en|黎恩]]"
    How: ""
  - Name: "巨塔之主"
    ID: "ju-ta-zhi-zhu"
    Description: "以巨塔之光将一切存在化为尘土"
    Type: "魔法攻击(威力SSS)"
    Range: "全体"
    Effects:
    Character: "[[Database/Character/Emma Millstein#^ai-ma|艾玛]]"
    How: ""
  - Name: "风精之舞"
    ID: "feng-jing-zhi-wu"
    Description: "以杀戮之舞纵横战场, 蹂躏整个交战区域"
    Type: "攻击(威力SS+)"
    Range: "圆LL"
    Effects:
    Character: "[[Database/Character/Fie Claussell#^fei|菲]]"
    How: ""
  - Name: "七彩狂想曲"
    ID: "qi-cai-kuang-xiang-qu"
    Description: ""
    Type: "魔法攻击(威力SS+)"
    Range: "圆LL"
    Effects:
      - "[[Database/Status/Confuse|混乱]] 100%"
    Character: "[[Database/Character/Elliot Craig#^ai-lve-te|艾略特]]"
    How: "第四章7/25"
###############
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
    How: ""
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