---
Aliases:
  - "刃鱼"
ID: "Fish.ren-yu"
Description: |
    锐利细长的尾鳍为其特征的小鱼.
    
    个性火爆, 要是有其他鱼进入领域范围, 就算有体格差距,
    
    也会进行攻击将其驱除出去. 体色鲜艳, 拥有美丽外表,
    
    是受欢迎的观赏鱼.
Rank: "D"
Points:
  - 5
  - 7
Loots:
  - "[[Database/Item/Water Sepith|x10]]"
  - "[[Database/Item/Water Sepith|x20]]"
  - "[[Database/Item/Water Sepith|x30]]"
Locations:
---
```dataviewjs
const fish = dv.current();
await dv.view('Fish', { fish });
```