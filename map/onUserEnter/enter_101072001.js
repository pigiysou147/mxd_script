/*  This is mada by Yanran    
 *
 *  功能：[妖精学院艾利涅]妖精学院的和平
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
////npc.setDelay(1000);
npc.sayNextNoEsc("老师！", 1500003);
////npc.setDelay(1000);
npc.sayNextNoEsc("想死你了！", 1500004);
npc.sayNextNoEsc("吓死我了。", 1500005);
npc.sayNextNoEsc("我错了。下次再也不会去危险的地方了。", 1500006);
npc.sayNextNoEsc("不，是我不好！我当初没有批评你们的话，也就……以后我会尊重你们的兴趣！", 1500002);
npc.sayNextNoEsc("啊啊，多么美好的场面啊。对吧，#b#ho##k？", 1500000);
npc.sayNextNoEsc("呵呵……如果没有各位的帮忙，根本无法找到孩子们。", 1500001);//校长伊瓦纳
npc.sayNextNoEsc("对于我的误会，再次表示歉意，魔法师库迪。要说报答的话，我想给你一个建议。", 1500002);
player.removeAdditionalEffect();
player.changeMap(101072002, 0);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);

