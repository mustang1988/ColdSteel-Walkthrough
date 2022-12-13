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

  - Name: "收集药的材料"
    ID: "shou-ji-yao-de-cai-liao"
    BasicAP: 4
    ExtraAP: 0
    Steps:
      - "在礼拜堂找吉伯尔教区长接任务"
      - "可以和主线的任务 [[Database/Quest/Main Quest#^geng-huan-huai-diao-de-lu-deng|更换坏掉的路灯]] 一起接"
      - "到大市集的弗林特药局找弗林特老人拿「熊爪草」"
      - "再向西凯尔迪克街道2的农家保罗拿「皇帝红萝卜」"
      - "回去报告"
    Bonus:
      - "[[Database/Item/Potion#^zhong-hui-fu-yao|中回复药]]"
      - "[[Database/Item/Potion#^sheng-ling-yao|圣灵药]]"
    When: "[[Walkthrough/Chapter 1#^quest-shou-ji-yao-de-cai-liao|第一章 4/24]]"

  - Name: "大市集商人体验"
    ID: "da-shi-ji-shang-ren-ti-yan"
    BasicAP: 3
    ExtraAP: 2
    Steps:
      - "到大市集左侧找商人莱蒙领取"
      - "正确选项:"
      - "- 35米拉"
      - "- 900米拉"
      - "- 搭配8折的乳酪"
      - "- 6个60米拉"
      - "上述全部选择正确==AP+2=="
      - "结束后获得奖励"
    Bonus:
      - "[[Database/Item/Accessory#^shan-hu-shou-huan|珊瑚手环]]"
    When: "[[Walkthrough/Chapter 1#^quest-da-shi-ji-shang-ren-ti-yan|第一章 4/24]]"
###################################
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

---

```dataviewjs
const quest = dv.current().Quests[1];
await dv.view('Quest/Side Quest', { quest });
```
^yong-wan-de-tiao-wei-liao-diao-huo

---

```dataviewjs
const quest = dv.current().Quests[2];
await dv.view('Quest/Side Quest', { quest });
```
^shou-ji-yao-de-cai-liao

---

```dataviewjs
const quest = dv.current().Quests[3];
await dv.view('Quest/Side Quest', { quest });
```
^da-shi-ji-shang-ren-ti-yan

---
