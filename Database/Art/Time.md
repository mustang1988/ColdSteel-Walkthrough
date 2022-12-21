---
ID: "Art.Time"
Element: "Time"
Arts:
  - Name: "心灵之霞"
    ID: "xin-ling-zhi-xia"
    Element: "Time"
    Type: "攻击"
    Range: "单体"
    Effects:
      - "昏厥(30%)"
    Comment: "释放摇撼时空的震波. 有30%机率造成 [[Database/Status/Faint|气绝]]."
  - Name: "恶魔之镰"
    ID: "e-mo-zhi-lian"
    Element: "Time"
    Type: "攻击"
    Range: "圆M"
    Effects:
      - "即死(30%)"
    Comment: "以死神的大镰收割生命. 有30%机率造成 [[Database/Status/Death|即死]]."
  - Name: "厄运之蝶"
    ID: "e-yun-zhi-die"
    Element: "Time"
    Type: "攻击"
    Range: "圆LL"
    Effects:
      - "噩梦(50%)"
    Comment: "召唤出漆黑之蝶, 使目标陷入绝望. 有50%机率造成 [[Database/Status/Nightmare|恶梦]]."
  - Name: "暗影伪典"
    ID: "an-ying-wei-dian"
    Element: "Time"
    Type: "攻击"
    Range: "圆L"
    Effects:
      - "HP吸收"
    Comment: "召唤出漆黑之魔剑, 回复相当于损伤值5%的HP."
  - Name: "时间驱动"
    ID: "shi-jian-qu-dong"
    Element: "Time"
    Type: "辅助"
    Range: "圆M"
    Effects:
      - "4回合SPD+25%·MOV+50%"
    Comment: "使范围内的时间流逝速度变快.SPD+25%·MOV+50%."
  - Name: "时间减速"
    ID: "shi-jian-jian-su"
    Element: "Time"
    Type: "辅助"
    Range: "圆M"
    Effects:
      - "SPD-25%"
      - "延迟+15"
    Comment: "使范围内的时间流逝速度变慢.SPD-25%、延迟+15."
  - Name: "时间爆发"
    ID: "shi-jian-bao-fa"
    Element: "Time"
    Type: "辅助"
    Range: "自身"
    Effects:
      - "连续行动2次"
    Comment: "干涉时间的法则, 能在施展后立刻连续行动2次."
---
```dataviewjs
const art = dv.current().Arts[0];
await dv.view('Views/Art', { art, element: 'Time' });
```
^xin-ling-zhi-xia

---

```dataviewjs
const art = dv.current().Arts[1];
await dv.view('Views/Art', { art, element: 'Time' });
```
^e-mo-zhi-lian

---

```dataviewjs
const art = dv.current().Arts[2];
await dv.view('Views/Art', { art, element: 'Time' });
```
^e-yun-zhi-die

---

```dataviewjs
const art = dv.current().Arts[3];
await dv.view('Views/Art', { art, element: 'Time' });
```
^an-ying-wei-dian

---

```dataviewjs
const art = dv.current().Arts[4];
await dv.view('Views/Art', { art, element: 'Time' });
```
^shi-jian-qu-dong

---

```dataviewjs
const art = dv.current().Arts[5];
await dv.view('Views/Art', { art, element: 'Time' });
```
^shi-jian-jian-su

---

```dataviewjs
const art = dv.current().Arts[6];
await dv.view('Views/Art', { art, element: 'Time' });
```
^shi-jian-bao-fa