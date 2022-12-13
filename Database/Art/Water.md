---
ID: "Art.Water"
Element: "Water"
Arts:
  - Name: "高压水块"
    ID: "gao-ya-shui-kuai"
    Element: "Water"
    Type: "攻击"
    Range: "单体"
    Effects:
      - ""
    Comment: "以沉重的水块打击敌人."
  - Name: "寒霜之刃"
    ID: "han-shuang-zhi-ren"
    Element: "Water"
    Type: "攻击"
    Range: "圆M"
    Effects:
      - "冻结(20%)"
    Comment: "以结晶化的冰之刃攻击.有20%几率造成「冻结」."
  - Name: "水流轰击"
    ID: "shui-liu-hong-ji"
    Element: "Water"
    Type: "攻击"
    Range: "直线M(指定地点)"
    Effects:
    Comment: "以直线状的高压水流冲击敌人."
  - Name: "水晶洪流"
    ID: "shui-jing-hong-liu"
    Element: "Water"
    Type: "攻击"
    Range: "直线L(指定地点)"
    Effects:
      - "冻结(30%)"
    Comment: "创造出闪耀着白光的超低温大河. 有30%机率造成「冻结」."
  - Name: "螺旋巨涡"
    ID: "luo-xuan-ju-wo"
    Element: "Water"
    Type: "攻击"
    Range: "全体"
    Effects:
    Comment: "操纵水之奔流, 使其爆发性地生成巨大的涡流."
  - Name: "回复术"
    ID: "hui-fu-shu"
    Element: "Water"
    Type: "回复"
    Range: "单体"
    Effects:
      - "HP小回复"
    Comment: "藉由能带来疗愈的水之力小幅回复1名伙伴的HP."
  - Name: "中回复术"
    ID: "zhong-hui-fu-shu"
    Element: "Water"
    Type: "回复"
    Range: "单体"
    Effects:
      - "HP中回复"
    Comment: "藉由能带来疗愈的水之力中幅回复1名伙伴的HP."
  - Name: "大回复术"
    ID: "da-hui-fu-shu"
    Element: "Water"
    Type: "回复"
    Range: "单体"
    Effects:
      - "HP大回复"
    Comment: "藉由能带来疗愈的水之力大幅回复1名伙伴的HP."
  - Name: "复活术"
    ID: "fu-huo-shu"
    Element: "Water"
    Type: "回复"
    Range: "单体"
    Effects:
      - "解除「无法战斗」"
      - "HP小回复"
    Comment: "解除1名伙伴的「无法战斗」状态, 并小幅回复HP."
  - Name: "圣灵术"
    ID: "sheng-ling-shu"
    Element: "Water"
    Type: "回复"
    Range: "单体"
    Effects:
      - "解除「无法战斗」"
      - "HP中回复"
    Comment: "解除1名伙伴的「无法战斗」状态, 并中幅回复HP."
---
```dataviewjs
const art = dv.current().Arts[0];
await dv.view('Views/Art/Water', { art });
```
^gao-ya-shui-kuai

---

```dataviewjs
const art = dv.current().Arts[1];
await dv.view('Views/Art/Water', { art });
```
^han-shuang-zhi-ren

---

```dataviewjs
const art = dv.current().Arts[2];
await dv.view('Views/Art/Water', { art });
```
^shui-liu-hong-ji

---

```dataviewjs
const art = dv.current().Arts[3];
await dv.view('Views/Art/Water', { art });
```
^shui-jing-hong-liu

---

```dataviewjs
const art = dv.current().Arts[4];
await dv.view('Views/Art/Water', { art });
```
^luo-xuan-ju-wo

---

```dataviewjs
const art = dv.current().Arts[5];
await dv.view('Views/Art/Water', { art });
```
^hui-fu-shu

---

```dataviewjs
const art = dv.current().Arts[6];
await dv.view('Views/Art/Water', { art });
```
^zhong-hui-fu-shu

---

```dataviewjs
const art = dv.current().Arts[7];
await dv.view('Views/Art/Water', { art });
```
^da-hui-fu-shu

---

```dataviewjs
const art = dv.current().Arts[8];
await dv.view('Views/Art/Water', { art });
```
^fu-huo-shu

---

```dataviewjs
const art = dv.current().Arts[9];
await dv.view('Views/Art/Water', { art });
```
^sheng-ling-shu