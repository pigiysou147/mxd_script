/*  This is mada by Yanran   
 *
 *  功能：[列娜海峡]列娜海峡的勇士，地图谈话【过去的芭芭拉】。
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, true, false, false);
player.setVansheeMode(true); //隐身
////npc.setDelay(1500);
npc.sayNextNoEsc("小家伙们……肚子饿不？", 1514003);
npc.sayNextNoEsc("汪汪！", 1514005);
npc.sayNextNoEsc("呱呱呱呱！", 1514004);
npc.sayNextNoEsc("这些稚嫩的小家伙那么渴望生存……都大张着嘴等着食物。", 1514003);
////npc.setDelay(1500);
npc.sayNextNoEsc("唔唔！", 1514006);
npc.sayNextNoEsc("叽叽……", 1514004);
npc.sayNextNoEsc("喵……", 1514006);
npc.sayNextNoEsc("嗡嗡？", 1514005);
npc.sayNextNoEsc("好，好，知道了。我这就给你们找吃的。我想想，这附近有没有好钓到鱼的地方呢？", 1514003);
player.changeMap(141040003, 1);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
player.setVansheeMode(false); //隐身