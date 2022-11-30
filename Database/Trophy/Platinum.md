---
ID: "Trophy.Platinum"
Trophies:
  - ID: "THE-LEGEND-OF-HEROES"
    Title: "THE LEGEND OF HEROES"
    Comment: "獲得所有獎盃"
    Chapter: ""
    Tips: |
      
---
```dataviewjs
const trophy = dv.current().Trophies[0];
await dv.view('Views/Trophy/Platinum', { trophy });
```
^THE-LEGEND-OF-HEROES