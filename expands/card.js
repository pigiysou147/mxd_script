var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化

var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //红星

var list = Array(
	Array("怪怪图鉴", 9310380, "zxdz"),
	Array("冒险联盟", 9310380, "hyzz"),
	Array("冬日卡片", 9310380, "hyzz")

);
if(player.getPQLog("一键任务")<3){
		player.addPQLog("一键任务",1,999);
		player.completeQuest(55433,0);
		player.completeQuest(55434,0);
		player.completeQuest(55435,0);
		player.completeQuest(16013,0);
		
}
var text = "\r\n";
let selection=npc.askMenu(text+"\r\n#L0##v3994059#怪怪图鉴#k#l #L1##v3994060#冒险联盟#k#l #L2##v3994061#冬日卡片#k#l\r\n\r\n");


if(selection == 0) {
	
	player.openUI(0x254); //怪怪
} else if(selection == 1) {
	if (!player.isQuestCompleted(16013)) {
                player.completeQuest(16013, 0);
                player.actionMapleUnion();
                npc.next("你好，#b勇士#k~见到你很高兴~你现在可以开始使用<冒险岛联盟>啦！");
        }
		player.openUI(1148); //联盟
} else if(selection == 2) {
	
	player.openUI(1166); //冬日卡片
}