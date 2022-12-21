---
ID: "Quest.Side-Quest"
Quests:
  - Name: "丢失的学生手册"
    ID: "diu-shi-de-xue-sheng-shou-ce"
    BasicAP: 4
    ExtraAP: 0
    Steps: |
      
      1. 去学生会馆1楼，和平民女学生科蕾特对话。
      
      2. 然后前往主校舍2楼楼梯前的座椅处，找到丢失的学生手册。
      
      3. 回去报告，任务完成。

    Bonus:
      - "[[Database/Item/Accessory#^yin-zhi-lian|银之链]]"
    When: "[[Walkthrough/Chapter 1#^quest-diu-shi-de-xue-sheng-shou-ce|第一章 4/18]]"
#--------------------------------------------------------------------------------------------------------------
  - Name: "用完的调味料调货"
    ID: "yong-wan-de-tiao-wei-liao-diao-huo"
    BasicAP: 4
    ExtraAP: 0
    Steps: |
      
      1. 到喫茶·宿泊《樱桃》找弗雷德领取
      
      2. 到到主校舍2楼的家庭料理室对话
      
      3. 到学生会馆1楼找厨师要调味料
      
      4. 回去喫茶·宿泊《樱桃》报告

    Bonus:
      - "[[Database/Item/Regular Food#^su-cui-pi-sa|酥脆披萨]]"
    When: "[[Walkthrough/Chapter 1#^quest-yong-wan-de-tiao-wei-liao-diao-huo|第一章 4/18晚]]"
#--------------------------------------------------------------------------------------------------------------
  - Name: "收集药的材料"
    ID: "shou-ji-yao-de-cai-liao"
    BasicAP: 4
    ExtraAP: 0
    Steps: |
      
      1. 在礼拜堂找吉伯尔教区长接任务
      
      2. 可以和主线的任务 [[Database/Quest/Main Quest#^geng-huan-huai-diao-de-lu-deng|更换坏掉的路灯]] 一起接
      
      3. 到大市集的弗林特药局找弗林特老人拿「熊爪草」
      
      4. 再向西凯尔迪克街道2的农家保罗拿「皇帝红萝卜」
      
      5. 回去报告

    Bonus:
      - "[[Database/Item/Potion#^zhong-hui-fu-yao|中回复药]]"
      - "[[Database/Item/Potion#^sheng-ling-yao|圣灵药]]"
    When: "[[Walkthrough/Chapter 1#^quest-shou-ji-yao-de-cai-liao|第一章 4/24]]"
#--------------------------------------------------------------------------------------------------------------
  - Name: "大市集商人体验"
    ID: "da-shi-ji-shang-ren-ti-yan"
    BasicAP: 3
    ExtraAP: 2
    Steps: |
      
      1. 到大市集左侧找商人莱蒙领取

      > [!tip] 正确选项
      > - 35米拉
      > - 900米拉
      > - 搭配8折的乳酪
      > - 6个60米拉
      
      2. 上述全部选择正确==AP+2==

      3. 结束后获得奖励
    Bonus:
      - "[[Database/Item/Accessory#^shan-hu-shou-huan|珊瑚手环]]"
    When: "[[Walkthrough/Chapter 1#^quest-da-shi-ji-shang-ren-ti-yan|第一章 4/24]]"
#--------------------------------------------------------------------------------------------------------------
  - Name: "遗失的钱包"
    ID: "yi-shi-de-qian-bao"
    BasicAP: 4
    ExtraAP: 0
    Steps: |
      
      1. 到大市集右侧的陶器店找商人莉琪领取
      
      2. 到凯尔迪克车站找店员询问
      
      3. 到我们住的观风亭找老板娘询问
      
      4. 再到大市集的休息处找达布罗询问
      
      5. 最后在教堂上找到失主旅行者安娜贝尔

    Bonus:
      - "[[Database/Item/Accessory#^pi-ka-de-wan-ou|皮卡德玩偶]]"
    When: "[[Walkthrough/Chapter 1#^quest-yi-shi-de-qian-bao|第一章 4/25]]"
#--------------------------------------------------------------------------------------------------------------
  - Name: "西凯尔迪克街道的通缉魔兽"
    ID: "xi-kai-er-di-ke-jie-dao-de-tong-ji-mo-shou"
    BasicAP: 4
    ExtraAP: 0
    Steps: |
      
      1. 凯尔迪克·总馆房间内奥图总管处领取
      
      2. 前往 [[Database/Location/Location#^xi-kai-er-di-ke-jie-dao-1|西凯尔迪克街道1]] 去解决Boss [[Database/Enemy/Boss#^ren-mian-niao|人面鸟]]
      
      > [!tip] Boss攻略
      > 属于飞行系的，射属性（亚莉莎）攻击有特效
      >
      > Boss攻击强，还要小心它的风属性魔法，驱动挺快
      > 
      > 艾略特做好侦查情报后，要注意恢复
      
      3. 回去报告获得奖励

    Bonus:
      - "[[Database/Item/U-Material|U物质x5]]"
    When: "[[Walkthrough/Chapter 1#^quest-xi-kai-er-di-ke-jie-dao-de-tong-ji-mo-shou|第一章 4/25]]"
#--------------------------------------------------------------------------------------------------------------
###################################
  - Name: ""
    ID: ""
    BasicAP: 4
    ExtraAP: 0
    Steps: |
      - ""
      - ""
      - ""
    Bonus:
      - ""
    When: ""
---
```dataviewjs
const quest = dv.current().Quests[0];
await dv.view('Quest', { quest, type:'Side' });
```
^diu-shi-de-xue-sheng-shou-ce

---

```dataviewjs
const quest = dv.current().Quests[1];
await dv.view('Quest', { quest, type:'Side' });
```
^yong-wan-de-tiao-wei-liao-diao-huo

---

```dataviewjs
const quest = dv.current().Quests[2];
await dv.view('Quest', { quest, type:'Side' });
```
^shou-ji-yao-de-cai-liao

---

```dataviewjs
const quest = dv.current().Quests[3];
await dv.view('Quest', { quest, type:'Side' });
```
^da-shi-ji-shang-ren-ti-yan

---

```dataviewjs
const quest = dv.current().Quests[4];
await dv.view('Quest', { quest, type:'Side' });
```
^yi-shi-de-qian-bao

---

```dataviewjs
const quest = dv.current().Quests[5];
await dv.view('Quest', { quest, type:'Side' });
```
^xi-kai-er-di-ke-jie-dao-de-tong-ji-mo-shou

---