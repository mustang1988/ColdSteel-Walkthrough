---
ID: "Quest.Main-Quest"
Quests:
  - Name: "配送导力器"
    ID: "pei-song-dao-li-qi"
    BasicAP: 4
    ExtraAP: 0
    Steps: |
      
      1. 到技术栋乔治领取任务，分别要去三个地点
      
      2. 到主校舍2楼的家庭料理室，在这里还能获得「料理手册」，之后可以开始做料理了
      
      3. 到小镇的当铺《密休特》，以后可以在这里兑换不错的道具
      
      4. 到小镇西南地图的广播台
      
      5. 完成后，回去乔治交任务

    Bonus: 
      - "无"
    When: "[[Walkthrough/Chapter 1#^quest-diao-cha-jiu-xiao-she|第一章 4/18]]"
#------------------------------------------------------------------------------------
  - Name: "调查旧校舍"
    ID: "diao-cha-jiu-xiao-she"
    BasicAP: 5
    ExtraAP: 0
    Steps: |
      
      1. 到主校舍1楼学院长处领任务
      
      2. 到旧校舍，呼叫同伴，目前只能呼叫艾略特和盖乌斯
      
      3. 此时LINK战术链接可以用了
      
      4. 到达终点，解決boss[[Database/Enemy/Boss#^mi-nuo-si-e-mo|米诺斯恶魔]]即可

      > [!tip] Boss攻略
      > 斩和突对这个boss有奇效，建议男主角链接盖乌斯，配合艾略特加防和回复，可以轻松获胜

    Bonus:
      - "[[Database/Quartz/Fire N#^feng-ji-zhi-ren|封技之刃]]"
    When: "[[Walkthrough/Chapter 1#^quest-diao-cha-jiu-xiao-she|第一章 4/18]]"
#------------------------------------------------------------------------------------
  - Name: "更换坏掉的路灯"
    ID: "geng-huan-huai-diao-de-lu-deng"
    BasicAP: 4
    ExtraAP: 1
    Steps: |
      
      1. 在武具·工房《奥德温》领取，前往 [[Database/Location/Location#^xi-kai-er-di-ke-jie-dao-2|西凯尔迪克街道2]] ，找到坏掉的街灯
      
      2. 输入正确的密码：466515, 正确输入==AP+1==
      
      3. 回去武具·工房《奥德温》报告

    Bonus:
      - "[[Database/Quartz/Space R#^tan-zhi|探知]]"
    When: "[[Walkthrough/Chapter 1#^quest-geng-huan-huai-diao-de-lu-deng|第一章 4/24]]"
#------------------------------------------------------------------------------------
  - Name: "东凯尔迪克街道的通缉魔兽"
    ID: "dong-kai-er-di-ke-jie-dao-de-tong-ji-mo-shou"
    BasicAP: 4
    ExtraAP: 0
    Steps: |
      
      1. 到东凯尔迪克街道的农家找赛洛老人领取
      
      2. 与屋内的齐赛尔对话获得料理食谱: [[Database/Recipe/Recipe#^xian-zha-guo-zhi|鲜榨果汁]]
      
      3. 到东凯尔迪克街道2高台处打 通缉魔兽: [[Database/Enemy/Boss#^kong-bu-xi-long|恐怖蜥龙]]
      
      > [!tip] Boss攻略
      > 劳拉实力强大，不止有S技，普通技能对BOSS的削弱也很有用
      > 
      > 此BOSS还会蓄力技，用亚莉莎和黎恩的技能注意下可轻松打过

      4. 打败后回去报告
    Bonus:
      - "[[Database/Item/Food Ingredient#^xin-xian-ji-dan|新鲜鸡蛋]]"
      - "[[Database/Item/Food Ingredient#^xing-xing-mei-guo|星形莓果]]"
      - "[[Database/Item/Food Ingredient#^cu-sui-yan-yan|粗碎岩盐]]"
      - "[[Database/Item/Food Ingredient#^feng-mi-tang-jiang|蜂蜜糖浆]]"
    When: "[[Walkthrough/Chapter 1#^quest-dong-kai-er-di-ke-jie-dao-de-tong-ji-mo-shou|第一章 4/24]]"
#------------------------------------------------------------------------------------


#######################
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
await dv.view('Quest/Main Quest', { quest });
```
^pei-song-dao-li-qi

---

```dataviewjs
const quest = dv.current().Quests[1];
await dv.view('Quest/Main Quest', { quest });
```
^diao-cha-jiu-xiao-she

---

```dataviewjs
const quest = dv.current().Quests[2];
await dv.view('Quest/Main Quest', { quest });
```
^geng-huan-huai-diao-de-lu-deng

---


```dataviewjs
const quest = dv.current().Quests[3];
await dv.view('Quest/Main Quest', { quest });
```
^dong-kai-er-di-ke-jie-dao-de-tong-ji-mo-shou

---
