---
ID: "Art.Mirage"
Element: "Mirage"
Arts:
  - Name: "皎月之光"
    ID: "jiao-yue-zhi-guang"
    Element: "Mirage"
    Type: "攻击"
    Range: "直线S(指定地点)"
    Effects:
    Comment: "释放澄澈的月之光线."
  - Name: "银夜之棘"
    ID: "yin-ye-zhi-ji"
    Element: "Mirage"
    Type: "攻击"
    Range: "圆M"
    Effects:
      - "混乱(40%)"
    Comment: "降下带有疯狂气息的银色刀刃. 有40$机率造成「混乱」."
  - Name: "星光之剑"
    ID: "xing-guang-zhi-jian"
    Element: "Mirage"
    Type: "攻击"
    Range: "全体"
    Effects:
    Comment: "以浓缩过的强大魔力毁灭一切存在."
  - Name: "情报解析"
    ID: "qing-bao-jie-xi"
    Element: "Mirage"
    Type: "辅助"
    Range: "单体"
    Effects:
      - "情报解析"
    Comment: "分析并获取敌人的情报."
  - Name: "魅影之惧"
    ID: "mei-ying-zhi-ju"
    Element: "Mirage"
    Type: "攻击"
    Range: "圆LL"
    Effects:
      - "随机能力降低"
    Comment: "以死亡的幻觉使目标坠入恐惧的深渊. 随机造成「能力降低」."
  - Name: "神圣之力"
    ID: "shen-sheng-zhi-li"
    Element: "Mirage"
    Type: "辅助"
    Range: "单体"
    Effects:
      - "4回合STR·DEF+25%"
      - "解除「能力降低」"
    Comment: "以洁净的光辉使STR·DEF+25%, 并解除「能力降低」状态."
  - Name: "新月之镜"
    ID: "xin-yue-zhi-jing"
    Element: "Mirage"
    Type: "辅助"
    Range: "全体"
    Effects:
      - "反弹魔法"
      - "4回合ATS+25%"
    Comment: "反弹一次魔法攻击, 并获得ATS+25%效果."
---
```dataviewjs
const art = dv.current().Arts[0];
await dv.view('Views/Art/Mirage', { art });
```
^jiao-yue-zhi-guang

---

```dataviewjs
const art = dv.current().Arts[1];
await dv.view('Views/Art/Mirage', { art });
```
^yin-ye-zhi-ji

---

```dataviewjs
const art = dv.current().Arts[2];
await dv.view('Views/Art/Mirage', { art });
```
^xing-guang-zhi-jian

---

```dataviewjs
const art = dv.current().Arts[3];
await dv.view('Views/Art/Mirage', { art });
```
^qing-bao-jie-xi

---

```dataviewjs
const art = dv.current().Arts[4];
await dv.view('Views/Art/Mirage', { art });
```
^mei-ying-zhi-ju

---

```dataviewjs
const art = dv.current().Arts[5];
await dv.view('Views/Art/Mirage', { art });
```
^shen-sheng-zhi-li

---

```dataviewjs
const art = dv.current().Arts[6];
await dv.view('Views/Art/Mirage', { art });
```
^xin-yue-zhi-jing