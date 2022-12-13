---
ID: "Trophy.Gold"
Trophies:
  - ID: "jia-ling-ji-xue-sheng"
    Title: "甲零級學生"
    Comment: "學生階級晉昇至甲零級"
    Chapter: ""
    Tips: |

  - ID: "jun-guan-xue-yuan-ji-ran-hou"
    Title: "軍官學院祭, 然後──"
    Comment: "完成終章「軍官學院祭, 然後──」"
    Chapter: ""
    Tips: |
---
```dataviewjs
const trophy = dv.current().Trophies[0];
await dv.view('Views/Trophy/Gold', { trophy });
```
^jia-ling-ji-xue-sheng

---

```dataviewjs
const trophy = dv.current().Trophies[1];
await dv.view('Views/Trophy/Gold', { trophy });
```
^jun-guan-xue-yuan-ji-ran-hou