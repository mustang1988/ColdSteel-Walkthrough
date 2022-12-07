---
ID: "Enemy.Boss"
Bosses:
- Name: "远古门犬"
  ID: "yuan-gu-men-quan"
  Description: |
    坐镇在旧校舍深处,  

    也是帝国传说中的石制守护者.  

    拥有无与伦比硬度的身体,  

    能够反弹物理攻击.  

  Locations: 
    - ""
  Properties:
    LV: 5
    HP: 10833
    EXP: 512
    STR: 150
    DEF: 268
    ATS: 142
    ADF: 0
    SPD: 75
  ArtRate:
    Earth: 120
    Water: 120
    Fire: 120
    Wind: 120
    Time: 100
    Space: 100
    Mirage: 100
  Loots:
    Sepiths:
      Earth: 12
      Water: 7
      Fire: 10
      Wind: 13
      Time: 5
      Space: 10
      Mirage: 12
      Mass: 40
    Items:
      - "[[Database/Quartz/Earth N#^du-zhi-ren|毒之刃]]"
  Unbalance:
    Slash: 1
    Thrust: 1
    Pierce: 1
    Strike: 2
  StatusRate:
    Poison: 100
    Burn: 100
    Death: 0
    Seal: 20
    Freeze: 100
    Nightmare: 20
    Mute: 100
    Petrify: 0
    Delay: 20
    Blind: 100
    Faint: 0
    Vanish: 0
    Sleep: 50
    Confuse: 50
    SDown: 50

- Name: "远古门犬"
  ID: "yuan-gu-men-quan-2"
  Description: |
    坐镇在旧校舍深处,  

    也是帝国传说中的石制守护者.  

    引起强烈的狂风,  

    将入侵者吹飞.  

  Locations: 
    - ""
  Properties:
    LV: 5
    HP: 10833
    EXP: 512
    STR: 150
    DEF: 268
    ATS: 142
    ADF: 0
    SPD: 75
  ArtRate:
    Earth: 125
    Water: 100
    Fire: 120
    Wind: 100
    Time: 100
    Space: 100
    Mirage: 100
  Loots:
    Sepiths:
      Earth: 12
      Water: 7
      Fire: 10
      Wind: 13
      Time: 5
      Space: 10
      Mirage: 12
      Mass: 40
    Items:
      - "[[Database/Quartz/Earth N#^du-zhi-ren|毒之刃]]"
  Unbalance:
    Slash: 1
    Thrust: 1
    Pierce: 1
    Strike: 2
  StatusRate:
    Poison: 100
    Burn: 100
    Death: 0
    Seal: 20
    Freeze: 100
    Nightmare: 20
    Mute: 100
    Petrify: 0
    Delay: 20
    Blind: 100
    Faint: 0
    Vanish: 0
    Sleep: 50
    Confuse: 50
    SDown: 50
---
```dataviewjs
const boss = dv.current().Bosses[0];
await dv.view('Enemy/Boss', { boss });
```
^yuan-gu-men-quan

```dataviewjs
const boss = dv.current().Bosses[1];
await dv.view('Enemy/Boss', { boss });
```
^yuan-gu-men-quan-2