---
ID: "Quest.Main-Quest"
Quests:
  - Name: "配送导力器"
    ID: "pei-song-dao-li-qi"
    BasicAP: 4
    ExtraAP: 0
    Steps:
      - "到技术栋乔治领取任务，分别要去三个地点"
      - "到主校舍2楼的家庭料理室，在这里还能获得「料理手册」，之后可以开始做料理了"
      - "到小镇的当铺《密休特》，以后可以在这里兑换不错的道具"
      - "到小镇西南地图的广播台"
      - "完成后，回去乔治交任务。"
    Bonus:
    When: ""

  - Name: "调查旧校舍"
    ID: "diao-cha-jiu-xiao-she"
    BasicAP: 5
    ExtraAP: 0
    Steps:
      - "到主校舍1楼学院长处领任务"
      - "到旧校舍，呼叫同伴，目前只能呼叫艾略特和盖乌斯"
      - "此时link链接可以用了"
      - "到达终点，解決boss即可"
    Bonus:
      - "[[Database/Quartz/Fire N#^feng-ji-zhi-ren|封技之刃]]"
    When: "[[Walkthrough/Chapter 1#^quest-diao-cha-jiu-xiao-she|第一章 4/18]]"

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

```dataviewjs
const quest = dv.current().Quests[1];
await dv.view('Quest/Main Quest', { quest });
```
^diao-cha-jiu-xiao-she