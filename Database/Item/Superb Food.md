---
ID: "Item.Food.Superb"
# 极品料理
Foods:
  - Name: "蓬松浓稠蛋包饭"
    ID: "peng-song-nong-chou-dan-bao-fan"
    Range: "单体"
    Effects:
      - "HP+100"
      - "解除「战斗不能」"

  - Name: "黄金舒芙蕾"
    ID: "huang-jin-shu-fu-lei"
    Range: "单体"
    Effects:
      - "HP+1000"
      - "解除 [[Database/Status/Poison|中毒]]"

  - Name: "黄金特调"
    ID: "huang-jin-te-tiao"
    Range: "单体"
    Effects:
      - "HP+1200"
      - "解除「战斗不能」"

  - Name: "优雅三明治"
    ID: "you-ya-san-ming-zhi"
    Range: "单体"
    Effects:
      - "HP+1800"
      - "CP+20"

  - Name: "芳醇香氛茶"
    ID: "fang-chun-xiang-fen-cha"
    Range: "单体"
    Effects:
      - "HP+2000"
      - "解除 [[Database/Status/Mute|封魔]] · [[Database/Status/Seal|封技]]"

  - Name: "宝石浓汤"
    ID: "bao-shi-nong-tang"
    Range: "单体"
    Effects:
      - "HP+2400"
      - "解除 [[Database/Status/Freeze|冻结]]"

  - Name: "奢侈总汇塔"
    ID: "she-chi-zong-hui-ta"
    Range: "单体"
    Effects:
      - "HP+2800"
      - "解除 [[Database/Status/Petrify|石化]]"

  - Name: "诺尔德养生粥"
    ID: "nuo-er-de-yang-sheng-zhou"
    Range: "单体"
    Effects:
      - "HP+2600"
      - "DEF·ADF+25%, 持续5回合"

  - Name: "特制披萨"
    ID: "te-zhi-pi-sa"
    Range: "单体"
    Effects:
      - "HP+2000"
      - "CP+25"
      - "解除 [[Database/Status/SDown|能力降低]]"

  - Name: "特级咖啡"
    ID: "te-ji-ka-fei"
    Range: "单体"
    Effects:
      - "HP+3000"
      - "解除 [[Database/Status/Sleep|睡眠]] · [[Database/Status/Nightmare|恶梦]]"

  - Name: "入口即化焗烤"
    ID: "ru-kou-ji-hua-ju-kao"
    Range: "单体"
    Effects:
      - "HP+2800"
      - "CP+40"

  - Name: "贵族炸物"
    ID: "gui-zu-zha-wu"
    Range: "单体"
    Effects:
      - "HP+4000"
      - "SPD+25%, 持续5回合"

  - Name: "浓密布丁"
    ID: "nong-mi-bu-ding"
    Range: "单体"
    Effects:
      - "HP+2600"
      - "ATS·ADF+25%, 持续5回合"

  - Name: "苍天面《瑞雨》"
    ID: "cang-tian-mian-rui-yu"
    Range: "单体"
    Effects:
      - "HP+3000"
      - "EP+150"
      - "解除 [[Database/Status/Burn|炎伤]]"

  - Name: "高贵烩饭"
    ID: "gao-gui-hui-fan"
    Range: "单体"
    Effects:
      - "HP+5000"
      - "CP+15"
      - "ATS·SPD+25%, 持续3回合"

  - Name: "霜降牛排"
    ID: "shuang-jiang-niu-pai"
    Range: "单体"
    Effects:
      - "HP+5600"
      - "STR·DEF+25%, 持续5回合"

  - Name: "灵水《绯樱》"
    ID: "ling-shui-fei-ying"
    Range: "单体"
    Effects:
      - "HP+3200"
      - "CP+45"

  - Name: "冰果《花园》"
    ID: "bing-guo-hua-yuan"
    Range: "单体"
    Effects:
      - "HP+3200"
      - "EP+150"
      - "解除「战斗不能」"

  - Name: "至妙锅《烂漫》"
    ID: "zhi-miao-guo-lan-man"
    Range: "单体"
    Effects:
      - "HP+12000"
      - "STR·ATS·SPD+50%, 持续3回合"

  - Name: "帝王汉堡"
    ID: "di-wang-han-bao"
    Range: "单体"
    Effects:
      - "HP+10000"
      - "CP+25"
      - "STR·DEF+50%, 持续5回合"
---
```dataviewjs
const food = dv.current().Foods[0];
await dv.view('Item/Food/Superb', { food });
```
^peng-song-nong-chou-dan-bao-fan

---

```dataviewjs
const food = dv.current().Foods[1];
await dv.view('Item/Food/Superb', { food });
```
^huang-jin-shu-fu-lei

---

```dataviewjs
const food = dv.current().Foods[2];
await dv.view('Item/Food/Superb', { food });
```
^huang-jin-te-tiao

---

```dataviewjs
const food = dv.current().Foods[3];
await dv.view('Item/Food/Superb', { food });
```
^you-ya-san-ming-zhi

---

```dataviewjs
const food = dv.current().Foods[4];
await dv.view('Item/Food/Superb', { food });
```
^fang-chun-xiang-fen-cha

---

```dataviewjs
const food = dv.current().Foods[5];
await dv.view('Item/Food/Superb', { food });
```
^bao-shi-nong-tang

---

```dataviewjs
const food = dv.current().Foods[6];
await dv.view('Item/Food/Superb', { food });
```
^she-chi-zong-hui-ta

---

```dataviewjs
const food = dv.current().Foods[7];
await dv.view('Item/Food/Superb', { food });
```
^nuo-er-de-yang-sheng-zhou

---

```dataviewjs
const food = dv.current().Foods[8];
await dv.view('Item/Food/Superb', { food });
```
^te-zhi-pi-sa

---

```dataviewjs
const food = dv.current().Foods[9];
await dv.view('Item/Food/Superb', { food });
```
^te-ji-ka-fei

---

```dataviewjs
const food = dv.current().Foods[10];
await dv.view('Item/Food/Superb', { food });
```
^ru-kou-ji-hua-ju-kao

---

```dataviewjs
const food = dv.current().Foods[11];
await dv.view('Item/Food/Superb', { food });
```
^gui-zu-zha-wu

---

```dataviewjs
const food = dv.current().Foods[12];
await dv.view('Item/Food/Superb', { food });
```
^nong-mi-bu-ding

---

```dataviewjs
const food = dv.current().Foods[13];
await dv.view('Item/Food/Superb', { food });
```
^cang-tian-mian-rui-yu

---

```dataviewjs
const food = dv.current().Foods[14];
await dv.view('Item/Food/Superb', { food });
```
^gao-gui-hui-fan

---

```dataviewjs
const food = dv.current().Foods[15];
await dv.view('Item/Food/Superb', { food });
```
^shuang-jiang-niu-pai

---

```dataviewjs
const food = dv.current().Foods[16];
await dv.view('Item/Food/Superb', { food });
```
^ling-shui-fei-ying

---

```dataviewjs
const food = dv.current().Foods[17];
await dv.view('Item/Food/Superb', { food });
```
^bing-guo-hua-yuan

---

```dataviewjs
const food = dv.current().Foods[18];
await dv.view('Item/Food/Superb', { food });
```
^zhi-miao-guo-lan-man

---

```dataviewjs
const food = dv.current().Foods[19];
await dv.view('Item/Food/Superb', { food });
```
^di-wang-han-bao