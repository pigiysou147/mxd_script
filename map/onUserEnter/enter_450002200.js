/*  This is mada by Yanran    
 *
 *  功能：[啾啾岛]首次进入 - 河道上
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, false, false, false);
//player.setStandAloneMode(true);
player.useSkillEffect(80002204, 1);
////npc.setDelay(30);
npc.sayNextENoEsc("嗬！这是…！\r\n#b飞…飞鱼？！#k 是你救了我吗？", true);
////npc.setDelay(1000);
npc.sayNextENoEsc("看来卡奥所说的那个#b帮助我的人#k就是你吧？", true);
////npc.setDelay(1000);
npc.sayNextENoEsc("很好！现在随着激流，向着#r黑魔法师#k飞过去....不对，游过去吧！", true);
////npc.setDelay(1000);
npc.sayNextENoEsc("嗯？飞鱼，你怎么突然停下来了？", true);
////npc.setDelay(1000);
npc.sayNextENoEsc("没时间说这些了，快去#b神秘河#k尽头看看！你不会肚子痛吧？", true);
////npc.setDelay(1000);
npc.sayNextENoEsc("噢…噢？？！", true);
player.cancelSkillEffect(80002204);
player.changeMap(450002201, 0);
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(false, false, false, false);