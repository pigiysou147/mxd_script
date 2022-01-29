
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化
var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var xp = "#fItem/PetCapsule/Training/4/symbol/s#";
var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var aaa = "#fUI/UIWindow4/PQRank/rank/gold#";


var list = Array(
	Array("老自由市场",910000000),
	Array("老市场1洞", 910000001),
	Array("老市场8洞",  910000008),
	Array("老市场18洞", 910000018)

);


		var text = "\t\t\t\t#e#r" + xp + "[特殊地图传送]" + xp + "\r\n\r\n"
		for(var i = 0; i < list.length; i++) {
			text += "#r#e#L" + i + "#" + z1 + list[i][0] + "#l#d#e";
			text += "\r\n\r\n";
		}
		let selection =npc.askMenu(text);

		
		player.changeMap(list[selection][1]);
		

	

