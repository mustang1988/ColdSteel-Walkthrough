## Quartz Table
```dataviewjs
const Elements = ["Earth", "Water", "Fire", "Wind", "Time", "Space", "Mirage"];
const Rates = ["N", "R", "SR"];
const quartzs = [];
for(const ele of Elements) {
  for(const rat of Rates) {
    const file = `${ele} ${rat}`;
    const page = dv.page(file);
    if(page) {
      console.log(page);
      page.Quartzs && quartzs.push(...page.Quartzs.map(q => {
        q.path = page.file.path;
        q.rate = rat;
        return q;
      }));
    }
  }
}
dv.table(
  ["","稀有度"],
  quartzs.map(q => [
    dv.blockLink(q.path, q.ID, false, q.Name),
    q.rate,
  ])
);
```