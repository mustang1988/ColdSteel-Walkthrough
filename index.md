---
banner: "![[Cover.jpg]]"
banner_y: 0.33268
---
# 英雄传说 闪之轨迹

```ad-quote
title: 奖杯
collapse: open
~~~dataviewjs
// Read trophy DB file
const platinum_page = dv.page('Database/Trophy/Platinum');
const gold_page = dv.page('Database/Trophy/Gold');
const silver_page = dv.page('Database/Trophy/Silver');
const bronze_page = dv.page('Database/Trophy/Bronze');

// Get all trophy data
const platinum_trophies = platinum_page.Trophies ? platinum_page.Trophies.map(t => {
    t.path = platinum_page.file.path;
    return t;
}):[];

const gold_trophies = gold_page.Trophies ? gold_page.Trophies.map(t => {
    t.path = gold_page.file.path;
    return t;
}):[];

const silver_trophies = silver_page.Trophies ? silver_page.Trophies.map(t => {
    t.path = silver_page.file.path;
    return t;
}):[];

const bronze_trophies = bronze_page.Trophies ? bronze_page.Trophies.map(t => {
    t.path = bronze_page.file.path;
    return t;
}):[];

const trophies = [...platinum_trophies, ...gold_trophies, ...silver_trophies, ...bronze_trophies];

// Render a table
dv.table(
    ["标题", "说明", "获取章节"],
    trophies.map(trophy => [
        dv.blockLink(trophy.path, trophy.ID, false, trophy.Title),
        trophy.Comment,
        trophy.Chapter,
    ])
);
~~~
```

```ad-quote
title: 攻略
collapse: open
~~~dataviewjs
const notes = dv.pages('"Walkthrough"')
                .sort(note => note.No, 'asc');
dv.table(
    [],
    notes.map(note => [
        dv.fileLink(note.file.path, false, note.Aliases[0])
    ])
)
~~~
```
