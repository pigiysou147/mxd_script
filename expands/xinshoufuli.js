var status = 0;
var typed = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化

var epp = "#fUI/GuildMark/Mark/Etc/00009001/1#"; //彩光
var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var xx = "#fEffect/CharacterEff/1082565/4/0#"; //兔子

var xxx = "#fUI/GuildMark/Mark/Etc/00009020/2#"; //星系
var str= "\r\n\t\t\t\r\n\r\n";
//var str= "\r\n\t\t\t#L0##r#e【 新 手 引 导 攻 略】#l:\r\n\r\n";
str += "#L1##v3994059##r#b新手礼包#l";
str += "#L2##v3994060##r#b等级奖励#l";
str += "#L6##v3994061##r#b学习技能#l\r\n\r\n";
str += "#L7##v3994062##r#b新手任务#l";
str += "#L8##v3994063##r#b新手强化#l";
str += "#L9##v3994064##r#b消除灯泡#l\r\n\r\n";
str += "#L5##v3994065##r#b新手戒指#l";

str += "#L10##v3994066##r#b副手操作#l";
str += "#L11##v3994067##r#b卡片联盟#l\r\n\r\n";

 str += "#L12# #v3994068##r#e新手满阶材料包#l";
 str += "#L13# #v3994069##r#e新手武器突破转移#l";
let selection=npc.askMenuS(str);

if(selection == 1) {
	
	player.runScript("xinshou");

} else if(selection == 2) {

	
	player.runScript( "dengji1001");

} else if(selection == 5) {

	player.runScript( "rqjzcz");
	
} else if(selection == 6) {

	
	player.runScript( "xuegoujineng");
	
} else if(selection == 7) {

	player.runScript( "xinshourenwu");
	
} else if(selection == 8) {
	
	player.runScript( "xsqh");
	
} else if(selection == 9) {
	
	player.runScript( "去除灯泡");
	
} else if(selection == 10) {
	
	player.runScript( "删除副手");
	
} else if(selection == 11) {
	
	player.runScript( "card");
	
} else if(selection == 12) {
	
	player.runScript( "新手材料");
	
}else if(selection==13){
	player.runScript("新手突破");
}