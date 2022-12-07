---
ID: "Recipe.Recipe"
Recipes:
  - Name: "简单蛋包饭"
    ID: "jian-dan-dan-bao-fan"
    When: ""
    How: "与料理手册一起获得"
    Ingredients:
      - "[[Database/Item/Food Ingredient#^xin-xian-ji-dan|新鲜鸡蛋x1]]"
      - "[[Database/Item/Food Ingredient#^cu-sui-yan-yan|粗碎岩盐x1]]"
    Regular: "[[Database/Item/Regular Food#^jian-dan-dan-bao-fan|简单蛋包饭]]"
    Peculiar: "[[Database/Item/Peculiar Food#^ying-bang-bang-dan-bao-fan|硬邦邦蛋包饭]]"
    Superb: "[[Database/Item/Superb Food#^peng-song-nong-chou-dan-bao-fan|蓬松浓稠蛋包饭]]"
    Unique: "[[Database/Item/Unique Food#^nuan-hu-hu-dan-hua-tang|暖呼呼蛋花汤]]"
    Attack:
---
```dataviewjs
const recipe = dv.current().Recipes[0];
await dv.view('Recipe', { recipe });
```
^jian-dan-dan-bao-fan