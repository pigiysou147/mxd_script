/*  This is mada by Yanran    
 *  
 *  功能：[列娜海峡]将冰川破坏者一网打尽3
 *  
 *  @Author Yanran  
 */

npc.sayNext("你来了。", 1510007);
npc.sayNextNoEsc("这是#i4030030##v4030030#\r\n这是#z4030030#……这是一种具有极其冷却效果的石头。", 1510007);
npc.sayNextSNoEsc("可怕的敌人居然想用这个东西做事。", false);
npc.completeQuest();
player.changeMap(141050400, 0);