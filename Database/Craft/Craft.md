---
ID: "Craft.Craft"
Crafts:
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
#
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
#
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
#
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
#########
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
    Character: "[[Database/Character/Elliot Craig#^ai-lve-te|艾略特]]"
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