---
ID: "Art.Earth"
Element: "Earth"
Arts:
  - Name: "岩石之刺"
    ID: "yan-shi-zhi-ci"
    Type: "攻击"
    Range: "单体"
    Effects:
      - "石化(20%)"
    Comment: "射出尖锐的岩石. 有20%几率造成 [[Database/Status/Petrify|石化]]"

  - Name: "大地之枪"
    ID: "da-di-zhi-qiang"
    Type: "攻击"
    Range: "圆S(指定地点)"
    Effects:
      - "石化(20%)"
    Comment: "从地面刺出尖锐的石之枪. 有20%几率造成 [[Database/Status/Petrify|石化]]."
    
  - Name: "大地崩裂"
    ID: "da-di-beng-lie"
    Type: "攻击"
    Range: "圆M(指定地点)"
    Effects:
      - "MOV-50%"
    Comment: "造成局部地震, 压缩地面. MOV-50%."
    
  - Name: "世界之树"
    ID: "shi-jie-zhi-shu"
    Type: "攻击"
    Range: "圆L(指定地点)"
    Effects:
      - "石化(30%)"
    Comment: "以拥有意志的大树穿刺敌人, 有30%几率造成 [[Database/Status/Petrify|石化]]."
    
  - Name: "远古巨岩"
    ID: "yuan-gu-ju-yan"
    Type: "攻击"
    Range: "圆LL(指定地点)"
    Effects:
      - "石化(20%)"
    Comment: "在上空召唤出巨石, 使其坠落至交战区域. 有20%几率造成 [[Database/Status/Petrify|石化]]."
    
  - Name: "大地之愈"
    ID: "da-di-zhi-yu"
    Type: "回复"
    Range: "单体"
    Effects:
      - "逐渐回复HP"
    Comment: "以地脉之力提升自我治愈能力. 每回合回复30%HP, 持续4回合."
    
  - Name: "结晶防护"
    ID: "jie-jing-fang-hu"
    Type: "辅助"
    Range: "单体"
    Effects:
      - "4回合DEF+25%"
    Comment: "赋予大地之守护, 提升防御力."
    
  - Name: "结晶防护·复"
    ID: "jie-jing-fang-hu-fu"
    Type: "辅助"
    Range: "圆M"
    Effects:
      - "4回合DEF+25%"
    Comment: "赋予范围内伙伴大地之守护, 提升防御力."
    
  - Name: "坚韧守护"
    ID: "jian-ren-shou-hu"
    Type: "辅助"
    Range: "圆M"
    Effects:
      - "物理防御"
    Comment: "张开金刚石之盾, 完全防御一次物理攻击."
---
```dataviewjs
const art = dv.current().Arts[0];
await dv.view('Views/Art/Earth', { art });
```
^yan-shi-zhi-ci

---

```dataviewjs
const art = dv.current().Arts[1];
await dv.view('Views/Art/Earth', { art });
```
^da-di-zhi-qiang

---

```dataviewjs
const art = dv.current().Arts[2];
await dv.view('Views/Art/Earth', { art });
```
^da-di-beng-lie

---

```dataviewjs
const art = dv.current().Arts[3];
await dv.view('Views/Art/Earth', { art });
```
^shi-jie-zhi-shu

---

```dataviewjs
const art = dv.current().Arts[4];
await dv.view('Views/Art/Earth', { art });
```
^yuan-gu-ju-yan

---

```dataviewjs
const art = dv.current().Arts[5];
await dv.view('Views/Art/Earth', { art });
```
^da-di-zhi-yu

---

```dataviewjs
const art = dv.current().Arts[6];
await dv.view('Views/Art/Earth', { art });
```
^jie-jing-fang-hu

---

```dataviewjs
const art = dv.current().Arts[7];
await dv.view('Views/Art/Earth', { art });
```
^jie-jing-fang-hu-fu

---

```dataviewjs
const art = dv.current().Arts[8];
await dv.view('Views/Art/Earth', { art });
```
^jian-ren-shou-hu