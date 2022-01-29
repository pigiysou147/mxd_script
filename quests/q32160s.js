/*  This is mada by Yanran    
 *
 *  功能：主题副本 - [列娜海峡]列娜海峡的邀请
 *
 *  @Author Yanran
 */

npc.sayNext("被冰川覆盖的里恩地区的环境正在发生变化。看样子是出了什么不寻常的事情。");
npc.sayNext("……");
let selection = npc.askAccept("我想将此次事件的解决权交给你，你能不能现在来这里？\r\n\r\n#b#e(接受后自动前往里恩。)#n#k");
if (selection == 1) {
        npc.sayNext("我会在里恩等你。");
        player.changeMap(140000000, 0);
        npc.startQuest();
} else {
        npc.sayNext("你太懒了吧？");
}