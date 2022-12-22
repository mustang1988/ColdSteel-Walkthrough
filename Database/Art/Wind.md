---
ID: "Art.Wind"
Element: "Wind"
Arts:
  - Name: "风之轮"
    ID: "feng-zhi-lun"
    Element: "Wind"
    Type: "攻击"
    Range: "单体"
    Effects:
    Comment: "以压缩过的空气块撞击敌人"
  - Name: "电流之矢"
    ID: "dian-liu-zhi-shi"
    Element: "Wind"
    Type: "攻击"
    Range: "直线S(指定地点)"
    Effects:
      - "封技(20%)"
    Comment: "释放直线状的电击, 有20%机率造成 [[Database/Status/Seal|封技]]"
  - Name: "风之领域"
    ID: "feng-zhi-ling-yu"
    Element: "Wind"
    Type: "攻击"
    Range: "圆L(指定地点)"
    Effects:
    Comment: "产生夹带着岩砾的强烈龙卷风"
  - Name: "审判之箭"
    ID: "shen-pan-zhi-jian"
    Element: "Wind"
    Type: "攻击"
    Range: "直线M(指定地点)"
    Effects:
      - "封技(50%)"
    Comment: "使审判之雷四处流窜, 有50%机率造成 [[Database/Status/Seal|封技]]"
  - Name: "末日龙卷"
    ID: "mo-ri-long-juan"
    Element: "Wind"
    Type: "攻击"
    Range: "全体"
    Effects:
      - "封技(30%)"
    Comment: "以蕴含雷击的巨大龙卷吞噬敌人, 有30%机率造成 [[Database/Status/Seal|封技]]"
  - Name: "生命之息"
    ID: "sheng-ming-zhi-xi"
    Element: "Wind"
    Type: "回复"
    Range: "圆M"
    Effects:
      - "HP小回复"
    Comment: "以涤净生命的气息之力, 小幅回复范围内伙伴的HP"
  - Name: "圣灵之息"
    ID: "sheng-ling-zhi-xi"
    Element: "Wind"
    Type: "回复"
    Range: "圆L"
    Effects:
      - "HP中回复"
    Comment: "以涤净生命的气息之力, 中幅回复范围内伙伴的HP"
  - Name: "大治愈术"
    ID: "da-zhi-yu-shu"
    Element: "Wind"
    Type: "回复"
    Range: "圆LL"
    Effects:
      - "解除「所有异常状态」"
    Comment: "解除范围内伙伴的「所有异常状态」"
---
```dataviewjs
const art = dv.current().Arts[0];
await dv.view('Views/Art', { art, element: 'Wind' });
```
^feng-zhi-lun

---

```dataviewjs
const art = dv.current().Arts[1];
await dv.view('Views/Art', { art, element: 'Wind' });
```
^dian-liu-zhi-shi

---

```dataviewjs
const art = dv.current().Arts[2];
await dv.view('Views/Art', { art, element: 'Wind' });
```
^feng-zhi-ling-yu

---

```dataviewjs
const art = dv.current().Arts[3];
await dv.view('Views/Art', { art, element: 'Wind' });
```
^shen-pan-zhi-jian

---

```dataviewjs
const art = dv.current().Arts[4];
await dv.view('Views/Art', { art, element: 'Wind' });
```
^mo-ri-long-juan

---

```dataviewjs
const art = dv.current().Arts[5];
await dv.view('Views/Art', { art, element: 'Wind' });
```
^sheng-ming-zhi-xi

---

```dataviewjs
const art = dv.current().Arts[6];
await dv.view('Views/Art', { art, element: 'Wind' });
```
^sheng-ling-zhi-xi

---

```dataviewjs
const art = dv.current().Arts[7];
await dv.view('Views/Art', { art, element: 'Wind' });
```
^da-zhi-yu-shu