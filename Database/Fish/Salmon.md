---
Aliases:
  - "鲑鱼"
ID: "Fish.gui-yu"
Description: |
  拥有在河川出生, 在海洋生长习性的洄游性鱼类.
  
  一旦上钩, 会充分利用在海中所锻炼出来的力量,
  
  让人尝到沉重有力的拉力.
Rank: "B"
Points:
  - 7
  - 9
Loots:
  - "[[Database/Item/Food Ingredient#^mo-shou-hong-rou|魔兽红肉x1]]"
  - "[[Database/Item/Food Ingredient#^mo-shou-hong-rou|魔兽红肉x2]]"
  - "[[Database/Item/Food Ingredient#^mo-shou-hong-rou|魔兽红肉x3]]"
Locations:
---
```dataviewjs
const fish = dv.current();
await dv.view('Fish', { fish });
```