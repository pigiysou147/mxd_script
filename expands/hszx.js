var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化

var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //红星


var list = Array(
	Array("装备删除",9310380, "yjsc"),
	Array("物品分解",2100001, "yjhg"),
	Array("装备删除",9310380, "wpzh")
	
);


var text ="\r\n";
let sel=npc.askMenu("\r\n#L0##v3994059# #r装备删除#k#l\t#L1##v3994060##r物品分解#k#l\r\n\r\n#L2##v3994060##r物品整合#k#l");

	player.runScript(list[sel][2]);

