---
ID: "Art.Space"
Element: "Space"
Arts:
  - Name: "黄金球"
    ID: "huang-jinq-iu"
    Element: "Space"
    Type: "攻击"
    Range: "圆S(指定地点)"
    Effects:
      - "黑暗(30%)"
    Comment: "用金色的魔法球玩弄敌人并进行攻击.有30%机率造成 [[Database/Status/Blind|黑暗]]."
  - Name: "暗物质"
    ID: "an-wu-zhi"
    Element: "Space"
    Type: "攻击"
    Range: "圆L(指定地点)"
    Effects:
      - "吸近"
      - "MOV-50%"
    Comment: "以高压的空间压缩敌人并将其熙近.MOV-50%."
  - Name: "破邪之印"
    ID: "po-xie-zhi-yin"
    Element: "Space"
    Type: "攻击"
    Range: "全体"
    Effects:
    Comment: "在空间撕裂出十字形缺口, 以圣光笼罩整个交战区域."
  - Name: "天鹰之耀"
    ID: "tian-ying-zhi-yao"
    Element: "Space"
    Type: "攻击"
    Range: "全体"
    Effects:
      - "ATS·ADF-20%"
    Comment: "从遥远的上空降下驱邪的光辉. ATS·ADF-20%."
  - Name: "魔导祝福"
    ID: "mo-dao-zhu-fu"
    Element: "Space"
    Type: "辅助"
    Range: "圆M"
    Effects:
      - "4回合ATS·ADF+25%"
    Comment: "赋予范围内伙伴光之加护. ATS·ADF+25%."
  - Name: "闪耀天启"
    ID: "shan-yao-tian-qi"
    Element: "Space"
    Type: "辅助"
    Range: "单体"
    Effects:
      - "心眼"
    Comment: "赐予闪耀的天启. 赋予1名伙伴 [[Database/Status/Insight|心眼]] 效果, 持续4回合."
  - Name: "炽天使之环"
    ID: "chi-tian-shi-zhi-huan"
    Element: "Space"
    Type: "回复"
    Range: "全体"
    Effects:
      - "解除「无法战斗」"
      - "完全回复HP"
      - "逐渐回复HP"
    Comment: "完全治愈所有伙伴, 并附加每回合回复30%HP效果, 持续4回合."
---
```dataviewjs
const art = dv.current().Arts[0];
await dv.view('Views/Art/Space', { art });
```
^huang-jin-qiu

---

```dataviewjs
const art = dv.current().Arts[1];
await dv.view('Views/Art/Space', { art });
```
^an-wu-zhi

---

```dataviewjs
const art = dv.current().Arts[2];
await dv.view('Views/Art/Space', { art });
```
^po-xie-zhi-yin

---

```dataviewjs
const art = dv.current().Arts[3];
await dv.view('Views/Art/Space', { art });
```
^tian-ying-zhi-yao

---

```dataviewjs
const art = dv.current().Arts[4];
await dv.view('Views/Art/Space', { art });
```
^mo-dao-zhu-fu

---

```dataviewjs
const art = dv.current().Arts[5];
await dv.view('Views/Art/Space', { art });
```
^shan-yao-tian-qi

---

```dataviewjs
const art = dv.current().Arts[6];
await dv.view('Views/Art/Space', { art });
```
^chi-tian-shi-zhi-huan