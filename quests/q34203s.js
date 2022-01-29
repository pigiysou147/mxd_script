/*  This is mada by Yanran    
 *  
 *  功能：[啾啾岛]顶级大厨舔舔的秘制料理
 *  
 *  @Author Yanran
 */


npc.sayNext("#ho#！如果要制作出让穆托满意的#r它特色料理#k，我需要#b#v4034942:##z4034942:#20个#k！哈！");
let selection = npc.askYesNo("你能速去速回吗？");
if (selection == 1) {
        npc.sayNext("#b#v4034942:##z4034942:#可以去狩猎在村庄左侧的#b五色花园#k地区的#b菠萝鹿#k获得！");
        npc.say("没有时间了，快去！");
        npc.startQuest();
}