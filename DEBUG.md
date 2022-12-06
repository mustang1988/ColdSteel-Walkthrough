---
Name: "《C》"
ID: "c"
Description: |
  率领帝国解放战线,
  
  充满谜团的假面男子.
  
  巧妙的操弄双刃剑,
  
  使出各式各样的招式.
Properties:
  LV: 60
  HP: 11397
  EXP: 0
  STR: 1886
  DEF: 1454
  ATS: 670
  ADF: 838
  SPD: 117
ArtRate:
  Earth: 100
  Water: 100
  Fire: 100
  Wind: 100
  Time: 100
  Space: 100
  Mirage: 100
Loots:
  Sepiths:
    Earth: 0
    Water: 0
    Fire: 0
    Wind: 0
    Time: 0
    Space: 0
    Mirage: 0
    Mass: 0
  Items:
    - "[[Database/Item/Wind Sepith]]"
Unbalance:
  Slash: 1
  Thrust: 0
  Pierce: 0
  Strike: 1
StatusRate:
  Poison: 50
  Burn: 50
  Death: 0
  Seal: 0
  Freeze: 50
  Nightmare: 50
  Mute: 0
  Petrify: 0
  Delay: 0
  Blind: 0
  Faint: 50
  Vanish: 0
  Sleep: 0
  Confuse: 50
  SDown: 50
---
```dataviewjs
const boss = dv.current();
await dv.view('Enemy/Boss', { boss });
```