---
ID: "Item.Food.Attack"
# 攻击料理
Foods:
  - Name: "毒毒饼干"
    ID: "du-du-bing-gan"
    Range: "圆S(指定地点)"
    Effects:
      - "攻击(威力D)"
      - "50%概率附加「中毒」"

  - Name: "冷冻浓汤"
    ID: "leng-dong-nong-tang"
    Range: "圆S(指定地点)"
    Effects:
      - "魔法攻击(威力C)"
      - "50%几率附加「冻结」"

  - Name: "燃烧炸物"
    ID: "ran-shao-zha-wu"
    Range: "圆S(指定地点)"
    Effects:
      - "攻击(威力C)"
      - "50%几率附加「炎伤」"

  - Name: "粘稠烩饭"
    ID: "nian-chou-hui-fan"
    Range: "圆S"
    Effects:
      - "攻击(威力B)"
      - "延迟+20"

  - Name: "危险肉丸"
    ID: "wei-xian-rou-wan"
    Range: "圆M(指定地点)"
    Effects:
      - "攻击(威力A)"
      - "50%附加「昏厥」"
---
```dataviewjs
const food = dv.current().Foods[0];
await dv.view('Item/Food/Attack', { food });
```
^du-du-bing-gan

---

```dataviewjs
const food = dv.current().Foods[1];
await dv.view('Item/Food/Attack', { food });
```
^leng-dong-nong-tang

---

```dataviewjs
const food = dv.current().Foods[2];
await dv.view('Item/Food/Attack', { food });
```
^ran-shao-zha-wu

---

```dataviewjs
const food = dv.current().Foods[3];
await dv.view('Item/Food/Attack', { food });
```
^nian-chou-hui-fan

---

```dataviewjs
const food = dv.current().Foods[4];
await dv.view('Item/Food/Attack', { food });
```
^wei-xian-rou-wan