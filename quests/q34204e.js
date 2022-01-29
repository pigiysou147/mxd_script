/*  This is mada by Yanran    
 *  
 *  功能：[啾啾岛]这个味道是？！
 *  
 *  @Author Yanran
 */

npc.sayNext("#ho#！噢！你这么快就搜集到材料啦！好的，那现在来完成我的#r特制料理#k吧？！");
npc.sayNext("我很快就能做好了，你稍后再来找我吧！哈！");
player.loseItem(4034942, 20);
npc.completeQuest();
player.gainExp(300000000);
