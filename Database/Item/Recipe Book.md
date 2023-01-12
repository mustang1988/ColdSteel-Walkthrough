---
ID: "Item.RecipeBook"
Books:
  - Name: "老子的料理·三明治"
    ID: "lao-zi-de-liao-li-san-ming-zhi"
    Recipe: "[[Database/Recipe/Recipe#^fan-qie-san-ming-zhi|番茄三明治]]"
#---------
  - Name: "老子的料理·红茶"
    ID: "lao-zi-de-liao-li-hong-cha"
    Recipe: "[[Database/Recipe/Recipe#^feng-wei-yao-cao-cha|风味药草茶]]"
#---------
  - Name: "老子的料理·咖啡"
    ID: "lao-zi-de-liao-li-ka-fei"
    Recipe: "[[Database/Recipe/Recipe#^hong-bei-ka-fei|烘焙咖啡]]"
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

---

```dataviewjs
const book = dv.current().Books[1];
await dv.view('Item/Recipe Book', { book });
```
^lao-zi-de-liao-li-hong-cha

---

```dataviewjs
const book = dv.current().Books[2];
await dv.view('Item/Recipe Book', { book });
```
^lao-zi-de-liao-li-ka-fei