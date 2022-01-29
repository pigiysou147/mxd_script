var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化

var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
function start() {
	status = -1;
	action(1, 0, 0);
}
var dalabi = 4001332;

var suipian = Array(
	Array(3994424, 6, 4001332),
	Array(3994416, 3, 3994425),

	Array(3994425, 4, 4001326),
	Array(3994425, 4, 4001327),
	Array(3994425, 4, 4001328),
	Array(3994425, 4, 4001329),
	Array(3994425, 4, 4001330),
	Array(3994425, 4, 4001331)

);
var number = 0;
var sel = 0;
var txt="#r#L1##v3994059#大蜡笔系统#l #L2##v3994060#小蜡笔系统#l#L3##v3994061#爆伤系统#k#l";
var text = "#r#e#L1#" + z1 + "大蜡笔系统#l#d#e\r\n\r\n";
text += "#r#e#L2#" + z1 + "小蜡笔系统#l#d#e\r\n\r\n";
text += "#r#e#L3#" + z1 + "爆伤系统#l#d#e\r\n\r\n";
let selection = npc.askMenuS(txt);

if(selection == 1) {

	player.runScript("dalabi");
} else if(selection == 2) {

	player.runScript("xiaolabi");
} else if(selection == 3) {

	player.runScript("终极潜能");
}