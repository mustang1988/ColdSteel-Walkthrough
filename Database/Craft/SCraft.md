---
ID: "Craft.SCraft"
SCrafts:
  - Name: "焰之太刀"
    ID: "yan-zhi-tai-dao"
    Description: ""
    Type: "攻击(威力SS)"
    Range: "圆M"
    Effects:
    Cost: "CP100~200"
###############
  - Name: ""
    ID: ""
    Description: ""
    Type: ""
    Range: ""
    Effects:
      - ""
      - ""
      - ""
    Cost: ""

---
```dataviewjs
const craft = dv.current().SCrafts[0];
await dv.view('Craft/SCraft', { craft });
```
^yan-zhi-tai-dao