---
ID: "Art.Fire"
Element: "Fire"
Arts:
  - Name: "火焰箭"
    ID: "huo-yan-jian"
    Element: "Fire"
    Type: "攻击"
    Range: "单体"
    Effects:
      - "炎伤(20%)"
    Comment: "射出熊熊燃烧的火球, 有20%机率造成 [[Database/Status/Burn|炎伤]]"
  - Name: "灼热之波"
    ID: "zhuo-re-zhi-bo"
    Element: "Fire"
    Type: "攻击"
    Range: "圆S"
    Effects:
      - "炎伤(30%)"
    Comment: "以高热笼罩地表, 将敌人焚烧殆尽, 有30%机率造成 [[Database/Status/Burn|炎伤]]"
  - Name: "火焰之舌"
    ID: "huo-yan-zhi-she"
    Element: "Fire"
    Type: "攻击"
    Range: "圆M"
    Effects:
      - "炎伤(20%)"
    Comment: "从地面喷出烈焰贯穿敌人, 有20%机率造成 [[Database/Status/Burn|炎伤]]"
  - Name: "火山弹雨"
    ID: "huo-shan-dan-yu"
    Element: "Fire"
    Type: "攻击"
    Range: "圆L"
    Effects:
      - "炎伤(30%)"
    Comment: "如雨般降下灼热的火山弹, 有30%机率造成 [[Database/Status/Burn|炎伤]]"
  - Name: "燃点爆裂"
    ID: "ran-dian-bao-lie"
    Element: "Fire"
    Type: "攻击"
    Range: "圆LL"
    Effects:
      - "炎伤(20%)"
    Comment: "令两柱烈焰互相碰撞引发大爆炸, 有20%机率造成 [[Database/Status/Burn|炎伤]]"
  - Name: "千阳新星"
    ID: "qian-yang-xin-xing"
    Element: "Fire"
    Type: "攻击"
    Range: "圆S"
    Effects:
      - "炎伤(50%)"
    Comment: "召唤炼狱的业火, 使敌人化为灰烬, 有50%机率造成 [[Database/Status/Burn|炎伤]]"
  - Name: "振奋之激"
    ID: "zhen-fen-zhi-ji"
    Element: "Fire"
    Type: "回复"
    Range: "单体"
    Effects:
      - "CP逐渐上升"
    Comment: "点燃伙伴的斗志, 每回合CP+20, 持续4回合"
  - Name: "战意再起"
    ID: "zhan-yi-zai-qi"
    Element: "Fire"
    Type: "回复"
    Range: "圆L"
    Effects:
      - "解除 [[Database/Status/SDown|能力降低]] 状态"
      - "CP+5"
    Comment: "解除范围内伙伴的 [[Database/Status/SDown|能力降低]] 状态, 且CP+5"
  - Name: "强音之力"
    ID: "qiang-yin-zhi-li"
    Element: "Fire"
    Type: "辅助"
    Range: "单体"
    Effects:
      - "4回合STR+25%"
    Comment: "赋予炎之加护, 提升攻击力"
  - Name: "强音之力·复"
    ID: "qiang-yin-zhi-li-fu"
    Element: "Fire"
    Type: "辅助"
    Range: "圆M"
    Effects:
      - "4回合STR+25%"
    Comment: "赋予范围内伙伴炎之加护, 提升攻击力"
---
```dataviewjs
const art = dv.current().Arts[0];
await dv.view('Views/Art', { art, element: 'Fire' });
```
^huo-yan-jian

---

```dataviewjs
const art = dv.current().Arts[1];
await dv.view('Views/Art', { art, element: 'Fire' });
```
^zhuo-re-zhi-bo

---

```dataviewjs
const art = dv.current().Arts[2];
await dv.view('Views/Art', { art, element: 'Fire' });
```
^huo-yan-zhi-she

---

```dataviewjs
const art = dv.current().Arts[3];
await dv.view('Views/Art', { art, element: 'Fire' });
```
^huo-shan-dan-yu

---

```dataviewjs
const art = dv.current().Arts[4];
await dv.view('Views/Art', { art, element: 'Fire' });
```
^ran-dian-bao-lie

---

```dataviewjs
const art = dv.current().Arts[5];
await dv.view('Views/Art', { art, element: 'Fire' });
```
^qian-yang-xin-xing

---

```dataviewjs
const art = dv.current().Arts[6];
await dv.view('Views/Art', { art, element: 'Fire' });
```
^zhen-fen-zhi-ji

---

```dataviewjs
const art = dv.current().Arts[7];
await dv.view('Views/Art', { art, element: 'Fire' });
```
^zhan-yi-zai-qi

---

```dataviewjs
const art = dv.current().Arts[8];
await dv.view('Views/Art', { art, element: 'Fire' });
```
^qiang-yin-zhi-li

---

```dataviewjs
const art = dv.current().Arts[9];
await dv.view('Views/Art', { art, element: 'Fire' });
```
^qiang-yin-zhi-li-fu