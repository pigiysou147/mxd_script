/*  This is mada by Yanran   
 *  This source is made by Funms Team
 *  
 *  功能：转职相关
 *  
 *  @Author Yanran
 */

npc.sayNext("木材全部收集来了吗？\r\n\r\n#i4030022##b#t4030022##k\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 26609 exp");
npc.say("谢谢你，勇士。看样子你对乘船有点天赋，我这下放心了。....#b(和弗坦对话，开始执行正式的任务。）");
player.loseItem(4030022);
npc.completeQuest();
player.completeQuest(32164, 1510005);
player.completeQuest(32165, 1510005);
player.completeQuest(32166, 1510005);
