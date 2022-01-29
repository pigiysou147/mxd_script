/**
* 传送-QQ:739977676
**/
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var n = "#fEffect/CharacterEff.img/1003249/1/0#"
var i = "#fEffect/CharacterEff.img/1112900/3/1#"
	
let str = "\t\t  " + dtb + " #fs15##e#r公　會　傳　送#n " + dtb + "\r\n#fs12#";
	str += "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "";
			str += "\t\t\t\t\t\t#e#d會地傳送#n#b\r\n"
			str += "#fn微軟正黑體##e"
			//str += "#r#L1#DUNNKU#l\r\n\r\n"
			//str += "#r#L2#情趣小铺#l\r\n\r\n"
			//str += "#r#L3#聚赌团#l\r\n\r\n"
			//str += "#r#L4#東京熱#l\r\n\r\n"
			str += "#r#L5#彼岸花#l\r\n\r\n"
			str += "#r#L6#減肥速成班#l\r\n\r\n"
	let selected = npc.askMenu(str);

switch (selected){
	case 1://城鎮
	if(player.getGuildId() != 6){
		npc.say("\t\t#fn微軟正黑體##r#fs24#你不是DUNNKU的人！\r\n#b#fs20#如果要加入公會,請找#r佛系小妹。")
		break;
	}else if (player.getChannel() !=9 ){
		npc.say("\t\t#fn微軟正黑體##fs24##d你的公會地在9頻");
		break;
	}else{
		player.changeMap(910000022);
		break;
	}
	case 2://城鎮
	if(player.getGuildId() != 41){
		npc.say("\t\t#fn微軟正黑體##r#fs24#你不是情趣小铺的人！\r\n#b#fs20#如果要加入公會,請找#r神奇海超人u。")
		break;
	}else if (player.getChannel() !=9 ){
		npc.say("\t\t#fn微軟正黑體##fs24##d你的公會地在9頻");
		break;
	}else{
		player.changeMap(910000020);
		break;
	}
	case 3://城鎮
	if(player.getGuildId() != 77){
		npc.say("\t\t#fn微軟正黑體##r#fs24#你不是聚赌团的人！\r\n#b#fs20#如果要加入公會,請找#rBeta。")
		break;
	}else if (player.getChannel() !=2 ){
		npc.say("\t\t#fn微軟正黑體##fs24##d你的公會地在2頻");
		break;
	}else{
		player.changeMap(706042016);
		break;
	}
	case 4://城鎮
	if(player.getGuildId() != 103){
		npc.say("\t\t#fn微軟正黑體##r#fs24#你不是東京熱的人！\r\n#b#fs20#如果要加入公會,請找#r根本治丈x。")
		break;
	}else if (player.getChannel() !=9 ){
		npc.say("\t\t#fn微軟正黑體##fs24##d你的公會地在2頻");
		break;
	}else{
		player.changeMap(130000000);
		break;
	}
	case 5://城鎮
	if(player.getGuildId() != 135){
		npc.say("\t\t#fn微軟正黑體##r#fs24#你不是彼岸花的人！\r\n#b#fs20#如果要加入公會,請找#rLanguage。")
		break;
	}else if (player.getChannel() !=9 ){
		npc.say("\t\t#fn微軟正黑體##fs24##d你的公會地在9頻");
		break;
	}else{
		player.changeMap(100000200);
		break;
		
	}
	case 6://城鎮
	if(player.getGuildId() != 115){
		npc.say("\t\t#fn微軟正黑體##r#fs24#你不是減肥速成班的人！\r\n#b#fs20#如果要加入公會,請找#r我4福利雄。")
		break;
	}else if (player.getChannel() !=1 ){
		npc.say("\t\t#fn微軟正黑體##fs24##d你的公會地在1頻");
		break;
	}else{
		player.changeMap(100000201);
		break;
		
	}
}
