var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化

var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //红星

var iconK = "#fUI/UIWindow3/Study/Fever/1#";//狂熱

var a1 = "#fEffect/ItemEff/1070069/effect/walk1/0#"
var st="#fUI/piggyBarMinigame/crunch/5#";
var list = Array(
	Array("自选点装", 9310380, "zxdz"),
	Array("自选发型", 9310380, "发型"),
	Array("战斗力评分系统", 9310380, "装备评分"),
	Array("花园种植", 9310380, "hyzz")

);


var text = "" +  "#v3994074##v3994059##v3994072##v3994062##v3994059#  #v3994071##v3994059##v3994074##v3994070##v3994063#" +  "\r\n\r\n";

text += "#r#e#L101#" + st + "抽奖地图#l#d#e\t\t";
text += "#r#e#L102#" + st + "自选点装#l#d#e\r\n\r\n";
text += "#r#e#L103#" + st + "自选发型#l#d#e\t\t";
text += "#r#e#L104#" + st + "花园种植#l#d#e\r\n\r\n";
text += "#r#e#L105#" + st + "战力排行#l#d#e\t\t";
text += "#r#e#L106#" + st + "武陵道场#l#d#e\r\n\r\n";
text += "#r#e#L100#" + iconK + "特色酒店(可得技能buff)#l#d#e\r\n\r\n";
let selection =npc.askMenuS(text);
if(selection == 100) {
	player.changeMap(105000010);
} else if(selection == 101) {
	player.changeMap(993027000);
} else if(selection == 102) {
	player.runScript("zxdz");
	
} else if(selection == 103) {
	
	player.runScript("发型");
	//player.changeMap(925020000);
} else if(selection==105){
	player.runScript("装备评分");
} else if(selection==104){
	player.runScript("hyzz");
}else if(selection ==106){
	player.changeMap(925020000);
}
