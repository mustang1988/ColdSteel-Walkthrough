---
ID: "Item.Food.Regular"
# 普通料理
Foods:
  - Name: "简单蛋包饭"
    ID: "jian-dan-dan-bao-fan"
    Range: "单体"
    Effects:
      - "HP+600"

  - Name: "甜蜜饼干"
    ID: "tian-mi-bing-gan"
    Range: "单体"
    Effects:
      - "HP+700"
      - "解除「中毒」"

  - Name: "鲜榨果汁"
    ID: "xian-zha-guo-zhi"
    Range: "单体"
    Effects:
      - "HP+1000"
      - "解除「昏厥」"

  - Name: "番茄三明治"
    ID: "fan-qie-san-ming-zhi"
    Range: "单体"
    Effects:
      - "HP+1500"
      - "CP+10"

  - Name: "风味药草茶"
    ID: "feng-wei-yao-cao-cha"
    Range: "单体"
    Effects:
      - "HP+1200"
      - "解除「封技」"

  - Name: "香浓巧达汤"
    ID: "xiang-nong-qiao-da-tang"
    Range: "单体"
    Effects:
      - "HP+1400"
      - "解除「冻结」"

  - Name: "莓果塔"
    ID: "mei-guo-ta"
    Range: "单体"
    Effects:
      - "HP+1800"
      - "解除「石化」"

  - Name: "鲜奶粥"
    ID: "xian-nai-zhou"
    Range: "单体"
    Effects:
      - "HP+1800"
      - "DEF·ADF+25%, 持续3回合"

  - Name: "酥脆披萨"
    ID: "su-cui-pi-sa"
    Range: "单体"
    Effects:
      - "HP+1200"
      - "CP+15"

  - Name: "烘焙咖啡"
    ID: "hong-bei-ka-fei"
    Range: "单体"
    Effects:
      - "HP+1600"
      - "解除「睡眠·噩梦」"

  - Name: "番茄焗烤"
    ID: "fan-qie-ju-kao"
    Range: "单体"
    Effects:
      - "HP+2400"
      - "CP+20"

  - Name: "炸鱼"
    ID: "zha-yu"
    Range: "单体"
    Effects:
      - "HP+3000"
      - "SPD+25%, 持续3回合"

  - Name: "卡仕达布丁"
    ID: "ka-shi-da-bu-ding"
    Range: "单体"
    Effects:
      - "HP+1800"
      - "ATS·ADF+25%, 持续3回合"

  - Name: "凉风通心粉"
    ID: "liang-feng-tong-xin-fen"
    Range: "单体"
    Effects:
      - "HP+2600"
      - "EP+50"
      - "解除「炎伤」"

  - Name: "军式烩饭"
    ID: "jun-shi-hui-fan"
    Range: "单体"
    Effects:
      - "HP+3000"
      - "CP+10"
      - "SPD+25%, 持续3回合"

  - Name: "体力牛排"
    ID: "ti-li-niu-pai"
    Range: "单体"
    Effects:
      - "HP+3600"
      - "STR·DEF+25%, 持续3回合"

  - Name: "番茄鸡尾酒"
    ID: "fan-qie-ji-wei-jiu"
    Range: "单体"
    Effects:
      - "HP+2600"
      - "CP+30"

  - Name: "混合冰淇淋"
    ID: "hun-he-bing-qi-lin"
    Range: "单体"
    Effects:
      - "HP+2000"
      - "EP+100"
      - "解除「战斗不能」"

  - Name: "满腹什锦火锅"
    ID: "man-fu-shi-jin-huo-guo"
    Range: "单体"
    Effects:
      - "HP+7000"
      - "STR·ATS·SPD+25%, 持续3回合"

  - Name: "手工汉堡"
    ID: "shou-gong-han-bao"
    Range: "单体"
    Effects:
      - "HP+6000"
      - "CP+10"
      - "STR·DEF+25%, 持续5回合"
---
```dataviewjs
const food = dv.current().Foods[0];
await dv.view('Item/Food/Regular', { food });
```
^jian-dan-dan-bao-fan

---

```dataviewjs
const food = dv.current().Foods[1];
await dv.view('Item/Food/Regular', { food });
```
^tian-mi-bing-gan

---

```dataviewjs
const food = dv.current().Foods[2];
await dv.view('Item/Food/Regular', { food });
```
^xian-zha-guo-zhi

---

```dataviewjs
const food = dv.current().Foods[3];
await dv.view('Item/Food/Regular', { food });
```
^fan-qie-san-ming-zhi

---

```dataviewjs
const food = dv.current().Foods[4];
await dv.view('Item/Food/Regular', { food });
```
^feng-wei-yao-cao-cha

---

```dataviewjs
const food = dv.current().Foods[5];
await dv.view('Item/Food/Regular', { food });
```
^xiang-nong-qiao-da-tang

---

```dataviewjs
const food = dv.current().Foods[6];
await dv.view('Item/Food/Regular', { food });
```
^mei-guo-ta

---

```dataviewjs
const food = dv.current().Foods[7];
await dv.view('Item/Food/Regular', { food });
```
^xian-nai-zhou

---

```dataviewjs
const food = dv.current().Foods[8];
await dv.view('Item/Food/Regular', { food });
```
^su-cui-pi-sa

---

```dataviewjs
const food = dv.current().Foods[9];
await dv.view('Item/Food/Regular', { food });
```
^hong-bei-ka-fei

---

```dataviewjs
const food = dv.current().Foods[10];
await dv.view('Item/Food/Regular', { food });
```
^fan-qie-ju-kao

---

```dataviewjs
const food = dv.current().Foods[11];
await dv.view('Item/Food/Regular', { food });
```
^zha-yu

---

```dataviewjs
const food = dv.current().Foods[12];
await dv.view('Item/Food/Regular', { food });
```
^ka-shi-da-bu-ding

---

```dataviewjs
const food = dv.current().Foods[13];
await dv.view('Item/Food/Regular', { food });
```
^liang-feng-tong-xin-fen

---

```dataviewjs
const food = dv.current().Foods[14];
await dv.view('Item/Food/Regular', { food });
```
^jun-shi-hui-fan

---

```dataviewjs
const food = dv.current().Foods[15];
await dv.view('Item/Food/Regular', { food });
```
^ti-li-niu-pai

---

```dataviewjs
const food = dv.current().Foods[16];
await dv.view('Item/Food/Regular', { food });
```
^fan-qie-ji-wei-jiu

---

```dataviewjs
const food = dv.current().Foods[17];
await dv.view('Item/Food/Regular', { food });
```
^hun-he-bing-qi-lin

---

```dataviewjs
const food = dv.current().Foods[18];
await dv.view('Item/Food/Regular', { food });
```
^man-fu-shi-jin-huo-guo

---

```dataviewjs
const food = dv.current().Foods[19];
await dv.view('Item/Food/Regular', { food });
```
^shou-gong-han-bao