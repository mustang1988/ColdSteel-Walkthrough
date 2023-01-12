---
ID: "Craft.Craft"
Crafts:
# 黎恩 -------------------------------------------------------------------
  - Name: "红叶切"
    ID: "hong-ye-qie"
    Description: "在与敌人擦身而过的瞬间加以斩击, 造成失衡机率+10%"
    Type: "攻击(威力C)"
    Range: "圆S(指定地点)"
    Effects:
      - "解除驱动"
      - "延迟+15"
    Cost: "CP-20"
    Character: "[[Database/Character/Rean Schwarzer#^li-en|黎恩]]"
    How: "初始习得"
  - Name: "激励"
    ID: "ji-li"
    Description: "以能够点燃内心之火的声援让伙伴奋起"
    Type: "辅助"
    Range: "圆LL(自身中心)"
    Effects:
      - "STR+25%"
      - "CP+10"
    Cost: "CP-30"
    Character: "[[Database/Character/Rean Schwarzer#^li-en|黎恩]]"  
    How: "LV5习得"
  - Name: "弧影斩"
    ID: "hu-ying-zhan"
    Description: "放出沿直线飞行的弧状斩击, 能有效造成失衡"
    Type: "攻击(威力B)"
    Range: "直线S(指定地点)"
    Effects:
      - "延迟+30"
    Cost: "CP-30"
    Character: "[[Database/Character/Rean Schwarzer#^li-en|黎恩]]"
    How: "LV15习得"
  - Name: "疾风"
    ID: "ji-feng"
    Description: "以神速斩击敌方群体, 造成失衡机率+20%"
    Type: "攻击(威力A)"
    Range: "圆L"
    Effects:
      - "[[Database/Status/Seal|封技]] 50%"
    Cost: "CP-35"
    Character: "[[Database/Character/Rean Schwarzer#^li-en|黎恩]]"
    How: "LV35习得"
  - Name: "业炎击"
    ID: "ye-yan-ji"
    Description: "以浑身之力使出带有业火的斜劈斩, 造成失衡机率+30%"
    Type: "攻击(威力S+)"
    Range: "圆S(指定地点)"
    Effects:
      - "[[Database/Status/Burn|炎伤]] 50%"
      - "[[Database/Status/Faint|气绝]] 50%"
    Cost: "CP-35"
    Character: "[[Database/Character/Rean Schwarzer#^li-en|黎恩]]"
    How: "LV55习得"
# 艾玛 -------------------------------------------------------------------
  - Name: "识破弱点"
    ID: "shi-po-ruo-dian"
    Description: "看穿敌人的弱点, 使我方更加容易使其失衡"
    Type: "辅助"
    Range: "单体"
    Effects:
      - "[[Database/Art/Mirage#^qing-bao-jie-xi|情报解析]]"
      - "打乱平衡"
    Cost: "CP-20"
    Character: "[[Database/Character/Emma Millstein#^ai-ma|艾玛]]"
    How: "初始习得"
  - Name: "月之气息"
    ID: "yue-zhi-qi-xi"
    Description: "以月之祝福赋予1名伙伴生命的气息"
    Type: "回复"
    Range: "单体"
    Effects:
      - "解除「战斗不能」"
      - "回复50%HP"
      - "CP+20"
    Cost: "CP-30"
    Character: "[[Database/Character/Emma Millstein#^ai-ma|艾玛]]"
    How: "初始习得"
  - Name: "虚界之刃"
    ID: "xu-jie-zhi-ren"
    Description: "射出神秘的利刃, 造成失衡机率+10%"
    Type: "魔法攻击(威力B)"
    Range: "直线M(指定地点)"
    Effects:
      - "ATS-50%"
    Cost: "CP-30"
    Character: "[[Database/Character/Emma Millstein#^ai-ma|艾玛]]"
    How: "LV6习得"
  - Name: "新月护罩"
    ID: "xin-yue-hu-zhao"
    Description: "以新月之力巩固防守, 反弹魔法攻击"
    Type: "辅助"
    Range: "圆M"
    Effects:
      - "DEF+50%"
      - "[[Database/Status/Art Reflect|魔法反弹]]"
    Cost: "CP-30"
    Character: "[[Database/Character/Emma Millstein#^ai-ma|艾玛]]"
    How: "LV25习得"
  - Name: "苍紫之焰"
    ID: "cang-zi-zhi-yan"
    Description: "以能够扰乱认知能力的苍蓝之焰烧尽敌人"
    Type: "魔法攻击(威力A)"
    Range: "圆L"
    Effects:
      - "[[Database/Status/Burn|炎伤]] 30%"
      - "[[Database/Status/Confuse|混乱]] 30%"
    Cost: "CP-40"
    Character: "[[Database/Character/Emma Millstein#^ai-ma|艾玛]]"
    How: "LV48习得"
# 菲 -------------------------------------------------------------------
  - Name: "扫荡"
    ID: "sao-dang"
    Description: "以成对的枪剑同时进行扫射, 能有效造成失衡"
    Type: "攻击(威力B)"
    Range: "圆M"
    Effects:
      - "解除驱动"
      - "SPD-25%"
    Cost: "CP-30"
    Character: "[[Database/Character/Fie Claussell#^fei|菲]]"
    How: "初始习得"
  - Name: "闪光手榴弹"
    ID: "shan-guang-shou-liu-dan"
    Description: "投掷闪光手榴弹"
    Type: "攻击(威力D)"
    Range: "圆L"
    Effects:
      - "[[Database/Status/Blind|黑暗]] 30%"
      - "[[Database/Status/Seal|封技]] 30%"
    Cost: "CP-35"
    Character: "[[Database/Character/Fie Claussell#^fei|菲]]"
    How: "LV17习得"
  - Name: "疾风割裂"
    ID: "ji-feng-ge-lie"
    Description: "以旋风之势攻击敌人的要害, 造成失衡机率+20%"
    Type: "攻击(威力A)"
    Range: "直线S(指定地点)"
    Effects:
      - "[[Database/Status/Faint|气绝]] 30%"
      - "[[Database/Status/Death|即死]] 30%"
    Cost: "CP-30"
    Character: "[[Database/Character/Fie Claussell#^fei|菲]]"
    How: "LV33习得"
  - Name: "极限旋风"
    ID: "ji-xian-xuan-feng"
    Description: "突破极限的连续攻击, 造成失衡机率+30%"
    Type: "攻击(威力S+)"
    Range: "圆M"
    Effects:
      - "[[Database/Status/Seal|封技]] 50%"
      - "[[Database/Status/Delay|延迟]] +35"
    Cost: "CP-40"
    Character: "[[Database/Character/Fie Claussell#^fei|菲]]"
    How: "LV56习得"
# 艾略特 -------------------------------------------------------------------
  - Name: "识破弱点"
    ID: "shi-po-ruo-dian-2"
    Description: "看穿敌人的弱点, 使我方更加容易使其失衡"
    Type: "辅助"
    Range: "单体"
    Effects:
      - "[[Database/Art/Mirage#^qing-bao-jie-xi|情报解析]]"
      - "打乱平衡"
    Cost: "CP-20"
    Character: "[[Database/Character/Elliot Craig#^ai-lve-te|艾略特]]"
    How: "LV9习得"
  - Name: "回音节奏"
    ID: "hui-yin-jie-zou"
    Description: "赋予范围内右方DEF+25%与每回合回复30%HP的效果"
    Type: "辅助"
    Range: "圆M(指定地点)"
    Effects:
      - "DEF+25%"
      - "逐渐回复HP"
    Cost: "CP-20"
    Character: "[[Database/Character/Elliot Craig#^ai-lve-te|艾略特]]"
    How: "初始习得"
  - Name: "蓝色摇篮曲"
    ID: "lan-se-yao-lan-qu"
    Description: "发出伴随着清爽音色的水泡诱使敌人陷入沉眠"
    Type: "魔法攻击(威力C)"
    Range: "圆M(指定地点)"
    Effects:
      - "[[Database/Status/Sleep|睡眠]] 30%"
    Cost: "CP-30"
    Character: "[[Database/Character/Elliot Craig#^ai-lve-te|艾略特]]"
    How: "LV6习得"
  - Name: "圣歌"
    ID: "sheng-ge"
    Description: "以神圣的曲调净化范围内的友方"
    Type: "回复"
    Range: "圆L(自身中心)"
    Effects:
      - "HP中回复"
      - "解除所有异常状态·能力降低"
    Cost: "CP-30"
    Character: "[[Database/Character/Elliot Craig#^ai-lve-te|艾略特]]"
    How: "LV31习得"
  - Name: "暗夜钟声"
    ID: "an-ye-zhong-sheng"
    Description: "以在暗夜中闪耀着的白银之钟夺走敌人的意识"
    Type: "魔法攻击(威力A)"
    Range: "圆L(指定地点)"
    Effects:
      - "[[Database/Status/Sleep|睡眠]] 50%"
      - "[[Database/Status/Nightmare|恶梦]] 50%"
    Cost: "CP-40"
    Character: "[[Database/Character/Elliot Craig#^ai-lve-te|艾略特]]"
    How: "LV57习得"
# 劳拉 -------------------------------------------------------------------
  - Name: "铁碎刃"
    ID: "tie-sui-ren"
    Description: "用豪迈的一击使敌人的装甲剥落, 造成失衡几率+30%"
    Type: "攻击(威力A+)"
    Range: "单体"
    Effects:
      - "DEF-25%"
      - "[[Database/Status/Seal|封技]] 30%"
    Cost: "CP-25"
    Character: "[[Database/Character/Laura S Arseid|劳拉]]"
    How: "初始习得"
  - Name: "地裂斩"
    ID: "di-lie-zhan"
    Description: "用使地面崩裂的的斩击使敌人无处可站, 造成失衡几率+10%"
    Type: "攻击(威力B)"
    Range: "直线M(指定地点)"
    Effects:
      - "MOV-50%"
    Cost: "CP-30"
    Character: "[[Database/Character/Laura S Arseid|劳拉]]"
    How: "LV9习得"
  - Name: "洸圆牙"
    ID: "guang-yuan-ya"
    Description: "以光之漩涡吸近敌人, 一口气将其砍倒, 能有效造成失衡"
    Type: "攻击(威力S)"
    Range: "圆L(指定地点)"
    Effects:
      - "吸近"
      - "[[Database/Status/Faint|气绝]] 30%"
    Cost: "CP-45"
    Character: "[[Database/Character/Laura S Arseid|劳拉]]"
    How: "LV36习得"
  - Name: "洸翼阵"
    ID: "guang-yi-zhen"
    Description: "牺牲魔力, 提升自己的身体能力"
    Type: "辅助"
    Range: "自身"
    Effects:
      - "STR·DEF+50%"
      - "[[Database/Status/Insight|心眼]]"
      - "ATS·ADF+50%"
    Cost: "CP-30"
    Character: "[[Database/Character/Laura S Arseid|劳拉]]"
    How: "LV45习得"
# 尤西斯 -------------------------------------------------------------------
  - Name: "快速突刺"
    ID: "kuai-su-tu-ci"
    Description: "快速而激烈的三段攻击, 造成失衡几率+20%"
    Type: "攻击(威力A)"
    Range: "单体"
    Effects:
      - "解除驱动"
      - "延迟+30"
    Cost: "CP-20"
    Character: "[[Database/Character/Jusis Albarea|尤西斯]]"
    How: "初始习得"
  - Name: "符文锐锋"
    ID: "fu-wen-rui-feng"
    Description: "以散发冷光的魔力之剑斩断敌人"
    Type: "攻击(威力B)"
    Range: "圆M"
    Effects:
      - "ADF-50%"
    Cost: "CP-30"
    Character: "[[Database/Character/Jusis Albarea|尤西斯]]"
    How: "LV16习得"
  - Name: "贵族号令"
    ID: "gui-zu-hao-ling"
    Description: "以毅然决然的呼喊激起伙伴们的士气"
    Type: "辅助"
    Range: "圆LL(自身中心)"
    Effects:
      - "STR·ATS·SPD +25%"
    Cost: "CP-25"
    Character: "[[Database/Character/Jusis Albarea|尤西斯]]"
    How: "LV26习得"
  - Name: "名贵剑击"
    ID: "ming-gui-jian-ji"
    Description: "以冰冻气息封住敌人, 再将其粉碎, 造成失衡几率+20%"
    Type: "攻击(威力A)"
    Range: "圆M(指定地点)"
    Effects:
      - "[[Database/Status/Seal|封技]] 50%"
      - "[[Database/Status/Freeze|冻结]] 50%"
    Cost: "CP-40"
    Character: "[[Database/Character/Jusis Albarea|尤西斯]]"
    How: "LV46习得"
# 马奇亚斯 -------------------------------------------------------------------
  - Name: "穿甲射击"
    ID: "chuan-jia-she-ji"
    Description: "以穿甲弹破坏敌人装甲, 造成失衡几率+20%"
    Type: "攻击(威力A)"
    Range: "单体"
    Effects:
      - "解除驱动"
      - "DEF-25%"
    Cost: "CP-20"
    Character: "[[Database/Character/Machias Regnitz|马奇亚斯]]"
    How: "初始习得"
  - Name: "能源弹"
    ID: "neng-yuan-dan"
    Description: "发射填充了能源的特殊回复弹"
    Type: "回复"
    Range: "圆M"
    Effects:
      - "回复25% HP·EP"
    Cost: "CP-30"
    Character: "[[Database/Character/Machias Regnitz|马奇亚斯]]"
    How: "LV17习得"
  - Name: "固态弹夹"
    ID: "gu-tai-dan-jia"
    Description: "装填石化弹后射出, 能有效造成失衡"
    Type: "攻击(威力B)"
    Range: "圆L"
    Effects:
      - "[[Database/Status/Petrify|石化]] 50%"
    Cost: "CP-30"
    Character: "[[Database/Character/Machias Regnitz|马奇亚斯]]"
    How: "LV34习得"
  - Name: "爆发驱动"
    ID: "bao-fa-qu-dong"
    Description: "射穿时间的结界, 提前友方的行动顺序"
    Type: "辅助"
    Range: "圆M"
    Effects:
      - "加速"
    Cost: "CP-35"
    Character: "[[Database/Character/Machias Regnitz|马奇亚斯]]"
    How: "LV57习得"
# 亚莉莎 -------------------------------------------------------------------
  - Name: "焰刃箭"
    ID: "yan-ren-jian"
    Description: "用炽热的箭矢贯穿敌人, 造成失衡几率+20%"
    Type: "攻击(威力B)"
    Range: "单体"
    Effects:
      - "解除驱动"
      - "[[Database/Status/Burn|炎伤]] 50%"
    Cost: "CP-20"
    Character: "[[Database/Character/Alisa Reinford|亚莉莎]]"
    How: "初始习得"
  - Name: "神圣疗愈"
    ID: "shen-sheng-liao-yu"
    Description: "施放祝福之箭, 治愈范围内友方"
    Type: "回复"
    Range: "圆S(指定地点)"
    Effects:
      - "HP小回复"
      - "CP+40"
    Cost: "CP-40"
    Character: "[[Database/Character/Alisa Reinford|亚莉莎]]"
    How: "LV8习得"
  - Name: "熔焰之雨"
    ID: "rong-yan-zhi-yu"
    Description: "将灼热的箭矢施放至上空, 使其如雨般降下, 能有效造成失衡"
    Type: "攻击(威力C)"
    Range: "圆L(指定地点)"
    Effects:
    Cost: "CP-35"
    Character: "[[Database/Character/Alisa Reinford|亚莉莎]]"
    How: "LV24习得"
  - Name: "天堂赠礼"
    ID: "tian-tang-zeng-li"
    Description: "赋予范围内友方[[Database/Status/Insight|心眼]]效果, 且每回合CP+20"
    Type: "辅助"
    Range: "圆M(指定地点)"
    Effects:
      - "[[Database/Status/Insight|心眼]]"
      - "CP逐渐上升"
    Cost: "CP-50"
    Character: "[[Database/Character/Alisa Reinford|亚莉莎]]"
    How: "LV52习得"
# 盖乌斯 -------------------------------------------------------------------
  - Name: "疾风旋刺"
    ID: "ji-feng-xuan-ci"
    Description: "放出直线状的龙卷风, 能有效造成失衡"
    Type: "攻击(威力C)"
    Range: "直线S(指定地点)"
    Effects:
      - "[[Database/Status/Seal|封技]] 50%"
    Cost: "CP-20"
    Character: "[[Database/Character/Gaius Worzel|盖乌斯]]"
    How: "初始习得"
  - Name: "狂暴涡流"
    ID: "kuang-bao-wo-liu"
    Description: "以乱流吞没敌人, 造成失衡几率+10%"
    Type: "攻击(威力A)"
    Range: "圆M"
    Effects:
      - "[[Database/Status/Blind|黑暗]] 50%"
    Cost: "CP-30"
    Character: "[[Database/Character/Gaius Worzel|盖乌斯]]"
    How: "LV14习得"
  - Name: "野性怒火"
    ID: "ye-xing-nu-huo"
    Description: "爆发野性之怒, 牺牲体力作为代价获得CP"
    Type: "辅助"
    Range: "自身"
    Effects:
      - "HP-30%"
      - "CP+50"
    Cost: "CP-0"
    Character: "[[Database/Character/Gaius Worzel|盖乌斯]]"
    How: "LV25习得"
  - Name: "蛮荒之牙"
    ID: "man-huang-zhi-ya"
    Description: "以破竹之势贯穿敌人, 造成失衡几率+20%"
    Type: "攻击(威力S+)"
    Range: "圆M(指定地点)"
    Effects:
      - "MOV-50%"
      - "延迟+35"
    Cost: "CP-40"
    Character: "[[Database/Character/Gaius Worzel|盖乌斯]]"
    How: "LV47习得"
# 米莉亚姆 -------------------------------------------------------------------
  - Name: "破坏拳击"
    ID: "po-huai-quan-ji"
    Description: "命令银臂使出浑身解数的一击, 造成失衡几率+20%"
    Type: "攻击(威力B)"
    Range: "圆M"
    Effects:
      - "解除驱动"
      - "[[Database/Status/Faint|气绝]] 50%"
    Cost: "CP-30"
    Character: "[[Database/Character/Millium Orion|米莉亚姆]]"
    How: "初始习得"
  - Name: "究极防护"
    ID: "jiu-ji-fang-hu"
    Description: "展开银之屏障, 完全防御一次物理攻击"
    Type: "辅助"
    Range: "自身"
    Effects:
      - "[[Database/Status/Craft Guard|物理防御]]"
    Cost: "CP-20"
    Character: "[[Database/Character/Millium Orion|米莉亚姆]]"
    How: "初始习得"
  - Name: "镇暴光线"
    ID: "zhen-bao-guang-xian"
    Description: "命令银臂射出光线"
    Type: "攻击(威力A)"
    Range: "直线M(指定地点)"
    Effects:
      - "STR-25%"
    Cost: "CP-30"
    Character: "[[Database/Character/Millium Orion|米莉亚姆]]"
    How: "LV42习得"
# 克洛 -------------------------------------------------------------------
  - Name: "迅捷双枪"
    ID: "xun-jie-shuang-qiang"
    Description: "轻快而迅速的连续射击, 能有效造成失衡"
    Type: "攻击(威力C)"
    Range: "圆M(指定地点)"
    Effects:
      - "延迟+15"
    Cost: "CP-20"
    Character: "[[Database/Character/Crow Armbrust|克洛]]"
    How: "初始习得"
  - Name: "冷冻弹"
    ID: "leng-dong-dan"
    Description: "射出蕴含着冰冻气息的没法子弹"
    Type: "魔法攻击(威力C)"
    Range: "圆M(指定地点)"
    Effects:
      - "[[Database/Status/Freeze|冻结]] 50%"
    Cost: "CP-30"
    Character: "[[Database/Character/Crow Armbrust|克洛]]"
    How: "初始习得"
  - Name: "万用王牌"
    ID: "wan-yong-wang-pai"
    Description: "将一切交给运气的最终王牌, 会发生什么要等用了才知道♪"
    Type: "辅助"
    Range: "单体"
    Effects:
      - "对敌人或伙伴发动随机效果"
    Cost: "CP-5"
    Character: "[[Database/Character/Crow Armbrust|克洛]]"
    How: "LV42习得"
  - Name: "混沌扳机"
    ID: "hun-dun-ban-ji"
    Description: "装填内含疯狂气息的特殊弹后射出, 能有效造成失衡"
    Type: "攻击(威力S)"
    Range: "直线M(指定地点)"
    Effects:
      - "[[Database/Status/Confuse|混乱]] 50%"
      - "[[Database/Status/Nightmare|恶梦]] 50%"
    Cost: "CP-45"
    Character: "[[Database/Character/Crow Armbrust|克洛]]"
    How: "LV54习得"
# ?? -------------------------------------------------------------------
  - Name: ""
    ID: ""
    Description: ""
    Type: ""
    Range: ""
    Effects:
      - ""
      - ""
      - ""
    Cost: "CP-"
    Character: "[[Database/Character/Crow Armbrust|克洛]]"
    How: ""
---
```dataviewjs
const craft = dv.current().Crafts[0];
await dv.view('Craft/Craft', { craft });
```
^hong-ye-qie

---

```dataviewjs
const craft = dv.current().Crafts[1];
await dv.view('Craft/Craft', { craft });
```
^ji-li

---

```dataviewjs
const craft = dv.current().Crafts[2];
await dv.view('Craft/Craft', { craft });
```
^ji-lihu-ying-zhan

---

```dataviewjs
const craft = dv.current().Crafts[3];
await dv.view('Craft/Craft', { craft });
```
^ji-feng

---

```dataviewjs
const craft = dv.current().Crafts[4];
await dv.view('Craft/Craft', { craft });
```
^ye-yan-ji

---

```dataviewjs
const craft = dv.current().Crafts[5];
await dv.view('Craft/Craft', { craft });
```
^shi-po-ruo-dian

---

```dataviewjs
const craft = dv.current().Crafts[6];
await dv.view('Craft/Craft', { craft });
```
^yue-zhi-qi-xi

---

```dataviewjs
const craft = dv.current().Crafts[7];
await dv.view('Craft/Craft', { craft });
```
^xu-jie-zhi-ren

---

```dataviewjs
const craft = dv.current().Crafts[8];
await dv.view('Craft/Craft', { craft });
```
^xin-yue-hu-zhao

---

```dataviewjs
const craft = dv.current().Crafts[9];
await dv.view('Craft/Craft', { craft });
```
^cang-zi-zhi-yan

---

```dataviewjs
const craft = dv.current().Crafts[10];
await dv.view('Craft/Craft', { craft });
```
^sao-dang

---

```dataviewjs
const craft = dv.current().Crafts[11];
await dv.view('Craft/Craft', { craft });
```
^shan-guang-shou-liu-dan

---

```dataviewjs
const craft = dv.current().Crafts[12];
await dv.view('Craft/Craft', { craft });
```
^ji-feng-ge-lie

---

```dataviewjs
const craft = dv.current().Crafts[13];
await dv.view('Craft/Craft', { craft });
```
^ji-xian-xuan-feng

---

```dataviewjs
const craft = dv.current().Crafts[14];
await dv.view('Craft/Craft', { craft });
```
^shi-po-ruo-dian-2

---

```dataviewjs
const craft = dv.current().Crafts[15];
await dv.view('Craft/Craft', { craft });
```
^hui-yin-jie-zou

---

```dataviewjs
const craft = dv.current().Crafts[16];
await dv.view('Craft/Craft', { craft });
```
^lan-se-yao-lan-qu

---

```dataviewjs
const craft = dv.current().Crafts[17];
await dv.view('Craft/Craft', { craft });
```
^sheng-ge

---

```dataviewjs
const craft = dv.current().Crafts[18];
await dv.view('Craft/Craft', { craft });
```
^an-ye-zhong-sheng

---

```dataviewjs
const craft = dv.current().Crafts[19];
await dv.view('Craft/Craft', { craft });
```
^tie-sui-ren

---

```dataviewjs
const craft = dv.current().Crafts[20];
await dv.view('Craft/Craft', { craft });
```
^di-lie-zhan

---

```dataviewjs
const craft = dv.current().Crafts[21];
await dv.view('Craft/Craft', { craft });
```
^guang-yuan-ya

---

```dataviewjs
const craft = dv.current().Crafts[22];
await dv.view('Craft/Craft', { craft });
```
^guang-yi-zhen

---

```dataviewjs
const craft = dv.current().Crafts[23];
await dv.view('Craft/Craft', { craft });
```
^kuai-su-tu-ci

---

```dataviewjs
const craft = dv.current().Crafts[24];
await dv.view('Craft/Craft', { craft });
```
^fu-wen-rui-feng

---

```dataviewjs
const craft = dv.current().Crafts[25];
await dv.view('Craft/Craft', { craft });
```
^gui-zu-hao-ling

---

```dataviewjs
const craft = dv.current().Crafts[26];
await dv.view('Craft/Craft', { craft });
```
^ming-gui-jian-ji

---

```dataviewjs
const craft = dv.current().Crafts[27];
await dv.view('Craft/Craft', { craft });
```
^chuan-jia-she-ji

---

```dataviewjs
const craft = dv.current().Crafts[28];
await dv.view('Craft/Craft', { craft });
```
^neng-yuan-dan

---

```dataviewjs
const craft = dv.current().Crafts[29];
await dv.view('Craft/Craft', { craft });
```
^gu-tai-dan-jia

---

```dataviewjs
const craft = dv.current().Crafts[30];
await dv.view('Craft/Craft', { craft });
```
^bao-fa-qu-dong

---

```dataviewjs
const craft = dv.current().Crafts[31];
await dv.view('Craft/Craft', { craft });
```
^yan-ren-jian

---

```dataviewjs
const craft = dv.current().Crafts[32];
await dv.view('Craft/Craft', { craft });
```
^shen-sheng-liao-yu

---

```dataviewjs
const craft = dv.current().Crafts[33];
await dv.view('Craft/Craft', { craft });
```
^rong-yan-zhi-yu

---

```dataviewjs
const craft = dv.current().Crafts[34];
await dv.view('Craft/Craft', { craft });
```
^tian-tang-zeng-li

---

```dataviewjs
const craft = dv.current().Crafts[35];
await dv.view('Craft/Craft', { craft });
```
^ji-feng-xuan-ci

---

```dataviewjs
const craft = dv.current().Crafts[36];
await dv.view('Craft/Craft', { craft });
```
^kuang-bao-wo-liu

---

```dataviewjs
const craft = dv.current().Crafts[37];
await dv.view('Craft/Craft', { craft });
```
^ye-xing-nu-huo

---

```dataviewjs
const craft = dv.current().Crafts[38];
await dv.view('Craft/Craft', { craft });
```
^man-huang-zhi-ya

---

```dataviewjs
const craft = dv.current().Crafts[39];
await dv.view('Craft/Craft', { craft });
```
^po-huai-quan-ji

---

```dataviewjs
const craft = dv.current().Crafts[40];
await dv.view('Craft/Craft', { craft });
```
^jiu-ji-fang-hu

---

```dataviewjs
const craft = dv.current().Crafts[41];
await dv.view('Craft/Craft', { craft });
```
^zhen-bao-guang-xian

---

```dataviewjs
const craft = dv.current().Crafts[42];
await dv.view('Craft/Craft', { craft });
```
^xun-jie-shuang-qiang

---

```dataviewjs
const craft = dv.current().Crafts[43];
await dv.view('Craft/Craft', { craft });
```
^leng-dong-dan

---

```dataviewjs
const craft = dv.current().Crafts[44];
await dv.view('Craft/Craft', { craft });
```
^wan-yong-wang-pai

---

```dataviewjs
const craft = dv.current().Crafts[45];
await dv.view('Craft/Craft', { craft });
```
^hun-dun-ban-ji