var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化

var epp = "#fUI/GuildMark/Mark/Etc/00009001/1#"; //彩光
var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var xx = "#fEffect/CharacterEff/1082565/4/0#"; //兔子

var xxx = "#fUI/GuildMark/Mark/Etc/00009020/2#"; //星系



var list = Array(
	Array("道具制作", 2100001, "daoju"),
	Array("25星强化", 2100001, "star"),
	//Array("破攻转移", 2100001, "pgzy"),
	//Array("属性继承", 2100001, "sxjc"),
	Array("翅膀进化", 9330127, "chibang"),
	Array("怪物符号", 2100001, "dwxt"),
	Array("武器破功", 2100001, "wq"),
	Array("最强口袋", 2100001, "kdxt"),
	Array("蜡笔系统", 2100001, "labi"),
	Array("银河强化", 9310380, "yhqh"),
	Array("洗血系统", 2100001, "xixue"),
	Array("机器潜能", 9310380, "jqrqn"),
	Array("榜单排行", 9310380, "rank")

);


	var text = "				#e "+xx+"#b变强中心#k#d#e"+xx+"\r\n";
	text +=  epp + epp +  epp+epp+epp+epp+epp+epp+epp+epp+epp+epp+epp+epp+epp+epp+epp+epp+epp+epp+epp+"\r\n";
	for(var i = 0; i < list.length; i++) {
		text += "#r#e#L" + i + "#" + xxx + list[i][0] + "#l#d#e";
		if(i==2 || i==5 || i==8){
			text+="\r\n\r\n";
		}else{
			text+="\t"
		}
	}
	text += "#r#e#L100#" + xxx + "装备强化" + "#l#d#e\r\n\r\n\r\n";
	let selection=npc.askMenuS(text);

	 if(selection==100){
		player.changeMap(940204140);
	} else {
		player.runScript( list[selection][2]);

	}

	

