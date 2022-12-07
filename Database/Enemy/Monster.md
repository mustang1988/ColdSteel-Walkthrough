---
ID: "Enemy.Monster"
Monsters:
- Name: "跳跳猫"
  ID: "tiao-tiao-mao"
  Description: |
    长有翅膀的猫型魔兽.  

    会锲而不舍的追逐猎物,  

    并从空中使出连环踢击.  

  Locations: 
    - ""
  Properties:
    LV: 4
    HP: 669
    EXP: 34
    STR: 128
    DEF: 210
    ATS: 0
    ADF: 107
    SPD: 61
  ArtRate:
    Earth: 100
    Water: 100
    Fire: 140
    Wind: 100
    Time: 100
    Space: 100
    Mirage: 100
  Loots:
    Sepiths:
      Earth: 2
      Water: 1
      Fire: 3
      Wind: 3
      Time: 1
      Space: 0
      Mirage: 0
      Mass: 3
    Items:
      - "[[Database/Item/U-Material|U物质]]"
      - "[[Database/Item/Food Ingredient#^mo-shou-hong-rou|魔兽红肉]]"
  Unbalance:
    Slash: 2
    Thrust: 2
    Pierce: 3
    Strike: 2
  StatusRate:
    Poison: 100
    Burn: 150
    Death: 100
    Seal: 100
    Freeze: 150
    Nightmare: 100
    Mute: 100
    Petrify: 100
    Delay: 100
    Blind: 100
    Faint: 100
    Vanish: 100
    Sleep: 200
    Confuse: 100
    SDown: 100

- Name: "玻璃软体兽"
  ID: "bo-li-ruan-ti-shou"
  Description: |
    喜欢有湿气的场所,  

    肥肥软软的软体魔兽.  

    会从体内产生导力,  

    发动风属性魔法.  

  Locations: 
    - ""
  Properties:
    LV: 4
    HP: 408
    EXP: 35
    STR: 119
    DEF: 412
    ATS: 72 
    ADF: 0
    SPD: 53
  ArtRate:
    Earth: 110
    Water: 100
    Fire: 155
    Wind: 80
    Time: 100
    Space: 100
    Mirage: 100
  Loots:
    Sepiths:
      Earth: 1
      Water: 3
      Fire: 0
      Wind: 3
      Time: 0
      Space: 3
      Mirage: 1
      Mass: 3
    Items:
      - "[[Database/Item/Potion#^yan-yao|眼药]]"
      - "[[Database/Item/Food Ingredient#^mo-shou-ming-jiao|魔兽明胶]]"
  Unbalance:
    Slash: 3
    Thrust: 1
    Pierce: 1
    Strike: 1
  StatusRate:
    Poison: 50
    Burn: 100
    Death: 100
    Seal: 50
    Freeze: 150
    Nightmare: 20
    Mute: 50
    Petrify: 50
    Delay: 100
    Blind: 100
    Faint: 50
    Vanish: 100
    Sleep: 20
    Confuse: 50
    SDown: 150
---
```dataviewjs
const monster = dv.current().Monsters[0];
await dv.view('Enemy/Monster', { monster });
```
^tiao-tiao-mao

```dataviewjs
const monster = dv.current().Monsters[1];
await dv.view('Enemy/Monster', { monster });
```
^bo-li-ruan-ti-shou