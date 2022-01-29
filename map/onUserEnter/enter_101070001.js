/*  This is mada by Jackson    
 *
 *  功能：NPC 进入 仲夏夜森林 初次与猫对话
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
////npc.setDelay(1000);
npc.sayNextSNoEsc("我操，差点被淹死。");
npc.sayNextNoEsc("草，我又没害你。", 1040002);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
//player.startQuest(32135,"1");
player.startQuest(32135, 1500010, "1");
//player.gainExp(4748);
player.changeMap(101070000, 0);
player.startQuest(32135, 1500010, "0");
player.completeQuest(32102, 1040002);