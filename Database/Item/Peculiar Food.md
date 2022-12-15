---
ID: "Item.Food.Peculiar"
# 古怪料理
Foods:
  - Name: "硬邦邦蛋包饭"
    ID: "ying-bang-bang-dan-bao-fan"
    Range: "单体"
    Effects:
      - "HP+400"
      - "DEF+25%, 持续3回合"

  - Name: "黄色液体"
    ID: "huang-se-ye-ti"
    Range: "单体"
    Effects:
      - "EP+100"

  - Name: "苦苦三明治"
    ID: "ku-ku-san-ming-zhi"
    Range: "单体"
    Effects:
      - "HP+100"
      - "CP+40"

  - Name: "褐色液体"
    ID: "he-se-ye-ti"
    Range: "单体"
    Effects:
      - "EP+200"

  - Name: "元素塔"
    ID: "yuan-su-ta"
    Range: "单体"
    Effects:
      - "HP+1200"
      - "ATS+25%, 持续5回合"

  - Name: "潮湿粥"
    ID: "chao-shi-zhou"
    Range: "单体"
    Effects:
      - "HP+1800"
      - "DEF·ADF+50%, 持续3回合"

  - Name: "镜面披萨"
    ID: "jing-mian-pi-sa"
    Range: "单体"
    Effects:
      - "EP+50"
      - "[[Database/Status/Art Reflect|魔法反弹]] 1次"

  - Name: "黑色液体"
    ID: "hei-se-ye-ti"
    Range: "单体"
    Effects:
      - "EP+250"

  - Name: "熔岩焗烤"
    ID: "rong-yan-ju-kao"
    Range: "单体"
    Effects:
      - "HP+500"
      - "CP+50"

  - Name: "茶碗蒸布丁"
    ID: "cha-wan-zheng-bu-ding"
    Range: "单体"
    Effects:
      - "HP+600"
      - "[[Database/Status/Insight|心眼]] 持续5回合"

  - Name: "清淡面"
    ID: "qing-dan-mian"
    Range: "单体"
    Effects:
      - "HP+2400"
      - "STR·SPD+25%, 持续3回合"

  - Name: "金刚牛排"
    ID: "jin-gang-niu-pai"
    Range: "单体"
    Effects:
      - "HP+1000"
      - "[[Database/Status/Craft Guard|物理防御]] 1次"

  - Name: "红色液体"
    ID: "hong-se-ye-ti"
    Range: "单体"
    Effects:
      - "EP+300"
      - "CP+45"

  - Name: "神奇冰淇淋"
    ID: "shen-qi-bing-qi-lin"
    Range: "单体"
    Effects:
      - "HP+500"
      - "EP+150"
      - "解除「所有异常状态·能力低下」"

  - Name: "黑锅《胆识》"
    ID: "hei-guo-dan-shi"
    Range: "单体"
    Effects:
      - "EP+500"
      - "CP+100"
      - "或濒死"
---
```dataviewjs
const food = dv.current().Foods[0];
await dv.view('Item/Food/Peculiar', { food });
```
^ying-bang-bang-dan-bao-fan

---

```dataviewjs
const food = dv.current().Foods[1];
await dv.view('Item/Food/Peculiar', { food });
```
^huang-se-ye-ti

---

```dataviewjs
const food = dv.current().Foods[2];
await dv.view('Item/Food/Peculiar', { food });
```
^ku-ku-san-ming-zhi

---

```dataviewjs
const food = dv.current().Foods[3];
await dv.view('Item/Food/Peculiar', { food });
```
^he-se-ye-ti

---

```dataviewjs
const food = dv.current().Foods[4];
await dv.view('Item/Food/Peculiar', { food });
```
^yuan-su-ta

---

```dataviewjs
const food = dv.current().Foods[5];
await dv.view('Item/Food/Peculiar', { food });
```
^chao-shi-zhou

---

```dataviewjs
const food = dv.current().Foods[6];
await dv.view('Item/Food/Peculiar', { food });
```
^jing-mian-pi-sa

---

```dataviewjs
const food = dv.current().Foods[7];
await dv.view('Item/Food/Peculiar', { food });
```
^hei-se-ye-ti

---

```dataviewjs
const food = dv.current().Foods[8];
await dv.view('Item/Food/Peculiar', { food });
```
^rong-yan-ju-kao

---

```dataviewjs
const food = dv.current().Foods[9];
await dv.view('Item/Food/Peculiar', { food });
```
^cha-wan-zheng-bu-ding

---

```dataviewjs
const food = dv.current().Foods[10];
await dv.view('Item/Food/Peculiar', { food });
```
^qing-dan-mian

---

```dataviewjs
const food = dv.current().Foods[11];
await dv.view('Item/Food/Peculiar', { food });
```
^jin-gang-niu-pai

---

```dataviewjs
const food = dv.current().Foods[12];
await dv.view('Item/Food/Peculiar', { food });
```
^hong-se-ye-ti

---

```dataviewjs
const food = dv.current().Foods[13];
await dv.view('Item/Food/Peculiar', { food });
```
^shen-qi-bing-qi-lin

---

```dataviewjs
const food = dv.current().Foods[14];
await dv.view('Item/Food/Peculiar', { food });
```
^hei-guo-dan-shi