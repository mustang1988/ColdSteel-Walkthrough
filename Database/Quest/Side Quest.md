---
ID: "Quest.Side-Quest"
Quests:
  - Name: "丢失的学生手册"
    ID: "diu-shi-de-xue-sheng-shou-ce"
    BasicAP: 4
    ExtraAP: 0
    Steps:
      - "去学生会馆1楼，和平民女学生科蕾特对话。"
      - "然后前往主校舍2楼楼梯前的座椅处，找到丢失的学生手册。"
      - "回去报告，任务完成。"
    Bonus:
      - "[[Database/Item/Accessory#^yin-zhi-lian|银之链]]"
    When: "[[Walkthrough/Chapter 1#^quest-diu-shi-de-xue-sheng-shou-ce|第一章 4/18]]"

  - Name: "用完的调味料调货"
    ID: "yong-wan-de-tiao-wei-liao-diao-huo"
    BasicAP: 4
    ExtraAP: 0
    Steps:
      - "到喫茶·宿泊《樱桃》找弗雷德领取"
      - "到到主校舍2楼的家庭料理室对话"
      - "到学生会馆1楼找厨师要调味料"
      - "回去喫茶·宿泊《樱桃》报告"
    Bonus:
      - "[[Database/Item/Regular Food#^su-cui-pi-sa|酥脆披萨]]"
    When: "[[Walkthrough/Chapter 1#^quest-yong-wan-de-tiao-wei-liao-diao-huo|第一章 4/18晚]]"

  - Name: ""
    ID: ""
    BasicAP: 4
    ExtraAP: 0
    Steps:
      - ""
      - ""
      - ""
    Bonus:
      - ""
    When: ""
---
```dataviewjs
const quest = dv.current().Quests[0];
await dv.view('Quest/Side Quest', { quest });
```
^diu-shi-de-xue-sheng-shou-ce

```dataviewjs
const quest = dv.current().Quests[1];
await dv.view('Quest/Side Quest', { quest });
```
^yong-wan-de-tiao-wei-liao-diao-huo