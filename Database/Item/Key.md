---
ID: "Item.Key"
Keys:
  - Name: "诱饵"
    ID: "you-er"
---
```dataviewjs
const key = dv.current().Keys[0];
await dv.view('Item/Key', { key });
```
^you-er