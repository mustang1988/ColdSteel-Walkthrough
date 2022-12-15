---
ID: "Craft.Craft"
Crafts:
  - Name: "红叶切"
    ID: "hong-ye-qie"
    Description: ""
    Type: "攻击(威力C)"
    Range: "圆S(指定地点)"
    Effects:
      - "解除驱动"
      - "延迟+15"
      - "失衡+10%"
    Cost: "CP-20"
    
#########
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
const craft = dv.current().Crafts[0];
await dv.view('Craft/Craft', { craft });
```
^hong-ye-qie