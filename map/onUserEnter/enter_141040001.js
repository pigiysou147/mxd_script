/*  This is mada by Yanran   
 *  This source is made by Funms Team
 *
 *  功能：[列娜海峡]列娜海峡的勇士，地图谈话芭芭拉。
 *
 *  @Author Yanran
 */
/* global ms */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, true, false, false);
npc.setCameraMove(false, 300, -300, 0);
////npc.setDelay(3500);
npc.sayNextNoEsc("哎？你们突然一大帮人闯进来，要做什么？", 1510008);
npc.sayNextNoEsc("咳咳……嗯……咳咳。要从哪里说起好呢。", 1510005);
npc.sayNextNoEsc("那个嘛……嗯……", 1510005);
npc.sayNextNoEsc("要说什么就快说！我正忙着要做饭！", 1510008);
npc.sayNextNoEsc("我是来道歉的。很抱歉之前误会了你。", 1510000);
npc.sayNextNoEsc("一切都是场误会。你不是魔女，你既没破坏冰川，也没害得海平面升高。反而还照顾了我们那些失去家园的孩子们。", 1510000);
npc.sayNextNoEsc("真是可笑。我怎么会伤害你们这些我数十年来照顾的孩子呢？", 1510008);
npc.sayNextNoEsc("啊……？", 1510005);
////npc.setDelay(1000);
npc.sayNextNoEsc("我不是这地方的人。在故乡失去丈夫和孩子后……我本不想活了。为了在临死前好好看看我喜欢的雪，才来到这里的。", 1510008);
npc.sayNextNoEsc("可就在那时，我看见了在大海上漂浮的你们。", 1510008);
npc.sayNextNoEsc("一群小家伙眼中带着求生欲望，紧紧抓着我的衣角……我忍不下心不管啊。所以就带回家，自己抚养喽。", 1510008);
player.changeMap(141040002, 1);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);