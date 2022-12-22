---
ID: "Item.RecipeBook"
Books:
  - Name: "老子的料理·三明治"
    ID: "lao-zi-de-liao-li-san-ming-zhi"
    Recipe: "[[Database/Recipe/Recipe#^fan-qie-san-ming-zhi|番茄三明治]]"
#---------
  - Name: ""
    ID: ""
    Recipe: ""
---
```dataviewjs
const book = dv.current().Books[0];
await dv.view('Item/Recipe Book', { book });
```
^lao-zi-de-liao-li-san-ming-zhi