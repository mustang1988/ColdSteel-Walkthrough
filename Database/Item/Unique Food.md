---
ID: "Item.Food.Unique"
# 独门料理
Foods:
  - Name: "暖呼呼蛋花汤"
    ID: "nuan-hu-hu-dan-hua-tang"
    Range: "单体"
    Effects:
      - "HP+600"
      - "STR+25%, 持续3回合"
      - "解除「冻结」"
  - Name: "白色猫舌饼"
    ID: "bai-se-mao-she-bing"
    Range: "单体"
    Effects:
      - "HP+800"
      - "解除「中毒·炎伤」"
  - Name: "狂野特调"
    ID: "kuang-ye-te-tiao"
    Range: "单体"
    Effects:
      - "HP+1000"
      - "EP+50"
      - "解除「昏厥·混乱」"
  - Name: "必胜猪排三明治"
    ID: "bi-sheng-zhu-pai-san-ming-zhi"
    Range: "单体"
    Effects:
      - "HP+1500"
      - "CP+25"
      - "STR+25%, 持续3回合"
  - Name: "诺尔德茶"
    ID: "nuo-er-de-cha"
    Range: "单体"
    Effects:
      - "HP+1600"
      - "SPD+25%, 持续3回合"
  - Name: "特质香草巧达汤"
    ID: "te-zhi-xiang-cao-qiao-da-tang"
    Range: "单体"
    Effects:
      - "HP+2000"
      - "解除「中毒·黑暗·炎伤·冻结」"
  - Name: "软绵绵生巧克力塔"
    ID: "ruan-mian-mian-sheng-qiao-ke-li-ta"
    Range: "单体"
    Effects:
      - "HP+2400"
      - "解除「冻结·石化」"
  - Name: "真心乳酪燉饭"
    ID: "zhen-xin-ru-lao-dun-fan"
    Range: "单体"
    Effects:
      - "HP+1200"
      - "STR·ATS+25%, 持续5回合"
  - Name: "照烧鸡披萨"
    ID: "zhao-shao-ji-pi-sa"
    Range: "单体"
    Effects:
      - "HP+2400"
      - "CP+25"
      - "DEF·SPD+25%, 持续3回合"
  - Name: "双倍浓缩咖啡"
    ID: "shuang-bei-nong-suo-ka-fei"
    Range: "单体"
    Effects:
      - "HP+2400"
      - "解除「睡眠·噩梦·昏厥·混乱」"
  - Name: "南瓜盅焗烤"
    ID: "nan-gua-zhong-ju-kao"
    Range: "单体"
    Effects:
      - "HP+2000"
      - "CP+25"
      - "ATS+50%, 持续3回合"
  - Name: "一口吃炸物"
    ID: "yi-kou-chi-zha-wu"
    Range: "单体"
    Effects:
      - "HP+3600"
      - "SPD+50%, 持续3回合"
  - Name: "四重奏布丁"
    ID: "si-chong-zou-bu-ding"
    Range: "单体"
    Effects:
      - "HP+1400"
      - "STR·DEF·ATS·ADF+25%, 持续4回合"
  - Name: "特制香草通心粉"
    ID: "te-zhi-xiang-cao-tong-xin-fen"
    Range: "单体"
    Effects:
      - "HP+1800"
      - "EP+100"
      - "解除「所有异常状态」"
  - Name: "酱汁图案蛋包饭"
    ID: "jiang-zhi-tu-an-dan-bao-fan"
    Range: "单体"
    Effects:
      - "HP+3600"
      - "CP+20"
      - "DEF·ADF+50%, 持续3回合"
  - Name: "多汁烤肉串"
    ID: "duo-zhi-kao-rou-chuan"
    Range: "单体"
    Effects:
      - "HP+5200"
      - "STR+50%, 持续5回合"
  - Name: "呛红苏打"
    ID: "qiang-hong-su-da"
    Range: "单体"
    Effects:
      - "HP+2200"
      - "CP+60"
  - Name: "苍水盐冰淇淋"
    ID: "cang-shui-yan-bing-qi-lin"
    Range: "单体"
    Effects:
      - "HP+2500"
      - "EP+50"
      - "CP+25"
      - "解除「战斗不能」"
  - Name: "疾风锅"
    ID: "ji-feng-guo"
    Range: "单体"
    Effects:
      - "HP+2500"
      - "EP+150"
      - "CP+45"
      - "STR·SPD+50%, 持续5回合"
  - Name: "五彩汉堡拼盘"
    ID: "wu-cai-han-bao-pin-pan"
    Range: "单体"
    Effects:
      - "HP+8000"
      - "CP+30"
      - "ATS·ATF+50%, 持续5回合"
---
```dataviewjs
const food = dv.current().Foods[0];
await dv.view('Item/Food/Unique', { food });
```
^nuan-hu-hu-dan-hua-tang

```dataviewjs
const food = dv.current().Foods[1];
await dv.view('Item/Food/Unique', { food });
```
^bai-se-mao-she-bing

```dataviewjs
const food = dv.current().Foods[2];
await dv.view('Item/Food/Unique', { food });
```
^kuang-ye-te-tiao

```dataviewjs
const food = dv.current().Foods[3];
await dv.view('Item/Food/Unique', { food });
```
^bi-sheng-zhu-pai-san-ming-zhi

```dataviewjs
const food = dv.current().Foods[4];
await dv.view('Item/Food/Unique', { food });
```
^nuo-er-de-cha

```dataviewjs
const food = dv.current().Foods[5];
await dv.view('Item/Food/Unique', { food });
```
^te-zhi-xiang-cao-qiao-da-tang

```dataviewjs
const food = dv.current().Foods[6];
await dv.view('Item/Food/Unique', { food });
```
^ruan-mian-mian-sheng-qiao-ke-li-ta

```dataviewjs
const food = dv.current().Foods[7];
await dv.view('Item/Food/Unique', { food });
```
^zhen-xin-ru-lao-dun-fan

```dataviewjs
const food = dv.current().Foods[8];
await dv.view('Item/Food/Unique', { food });
```
^zhao-shao-ji-pi-sa

```dataviewjs
const food = dv.current().Foods[9];
await dv.view('Item/Food/Unique', { food });
```
^shuang-bei-nong-suo-ka-fei

```dataviewjs
const food = dv.current().Foods[10];
await dv.view('Item/Food/Unique', { food });
```
^nan-gua-zhong-ju-kao

```dataviewjs
const food = dv.current().Foods[11];
await dv.view('Item/Food/Unique', { food });
```
^yi-kou-chi-zha-wu

```dataviewjs
const food = dv.current().Foods[12];
await dv.view('Item/Food/Unique', { food });
```
^si-chong-zou-bu-ding

```dataviewjs
const food = dv.current().Foods[13];
await dv.view('Item/Food/Unique', { food });
```
^te-zhi-xiang-cao-tong-xin-fen

```dataviewjs
const food = dv.current().Foods[14];
await dv.view('Item/Food/Unique', { food });
```
^jiang-zhi-tu-an-dan-bao-fan

```dataviewjs
const food = dv.current().Foods[15];
await dv.view('Item/Food/Unique', { food });
```
^duo-zhi-kao-rou-chuan

```dataviewjs
const food = dv.current().Foods[16];
await dv.view('Item/Food/Unique', { food });
```
^qiang-hong-su-da

```dataviewjs
const food = dv.current().Foods[17];
await dv.view('Item/Food/Unique', { food });
```
^cang-shui-yan-bing-qi-lin

```dataviewjs
const food = dv.current().Foods[18];
await dv.view('Item/Food/Unique', { food });
```
^ji-feng-guo

```dataviewjs
const food = dv.current().Foods[19];
await dv.view('Item/Food/Unique', { food });
```
^wu-cai-han-bao-pin-pan