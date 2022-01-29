/* global cm */

var status = -1;
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var tz11 = "#fEffect/CharacterEff/1112904/0/0#"; //彩心

var text = "#e#b         ┏   " + tz13 + "《榜上有名》" + tz13 + "   ┓ #r\r\n";
//text += "\t\t\t#r#L7#" + tz11 + "装备评分(核心竞争)" + tz11 + "#l\r\n\r\n";
text += "\t\t\t#r#L6#" + tz11 + "Boss击杀竞速榜" + tz11 + "#l\r\n\r\n";
text += "\t\t\t#L2#" + tz11 + "全服充值排行榜" + tz11 + "#l\r\n\r\n";
text += "\t\t\t#L0#" + tz11 + "世界等级排行榜" + tz11 + "#l\r\n\r\n";
text += "\t\t\t#L4#" + tz11 + "世界富豪排行榜" + tz11 + "#l\r\n\r\n";
text += "\t\t\t#L5#" + tz11 + "种植高手排行榜" + tz11 + "#l\r\n\r\n";
text += "\t\t\t#L3#" + tz11 + "武器突破排行" + tz11 + "#l\r\n";
text += "\r\n#e#b         ┗                      ┛\r\n";
let selection =npc.askMenuS(text);
if(selection == 0) {
	//等级排行
	var sql = "select name,level,gender from characters where gm<=0 order by level desc limit 100;";
	var resultList = player.customSqlResult(sql);
	var txt = "\t\t\t\t#e#d★ 个人等级排行 ★#k#n\r\n\r\n";
	txt += "\t#e名次#n\t#e玩家昵称#n\t\t\t#e等级#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			txt += "#r";
		} else if(rank == 2) {
			txt += "#g";
		} else if(rank == 3) {
			txt += "#b";
		}
		txt += "\t " + rank + "\t\t ";
		// 填充名字空格
		txt += result.get("name");
		for(var j = 18 - result.get("name").length; j > 0; j--) {
			txt += " ";
		}
		txt += "\t " + result.get("level");
		txt += "\r\n";
		
	}
	
	npc.say(txt,2091010);

}else if(selection==7){
	player.runScript("评分入口");
} else if(selection == 4) {
	//财富排行
	var sql = "select name,meso,gender from characters where gm<=0 order by meso desc, exp desc limit 1500;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 个人财富排行 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t#e玩家昵称#n\t\t\t#e金币#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t " + rank + "\t\t ";
		// 填充名字空格
		text += result.get("name");
		for(var j = 18 - result.get("name").length; j > 0; j--) {
			text += " ";
		}
		text += "\t " + (result.get("meso") / 100000000) + "亿";
		text += "\r\n";
	}
	npc.say(text,2091010);

} else if(selection == 2) {
	//财富排行
	var sql = "select name,leiji from hypay where accountid <>25  order by leiji desc limit 588;";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 充值总排行 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t#e玩家昵称#n\t\t\t#e充值金额#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t " + rank + "\t\t ";
		// 填充名字空格
		text += result.get("name");
		var name =result.get("name");
		for(var j = 18 - name.length; j > 0; j--) {
			text += " ";
		}
		if(name.length<5)
		text +="\t";
		text += "" + parseInt(result.get("leiji")*0.35);
		text += "\r\n";
	}
	npc.say(text,2091010);

} else if(selection == 5) {
	//花园
	var sql = "select g.`level` level,c.`name` name from zcustom_garden as g ,characters as c where g.charid=c.id order by g.`level` desc limit 500";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 种植高手排行 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t#e玩家昵称#n\t\t\t#e花园等级#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t " + rank + "\t\t ";
		// 填充名字空格
		text += result.get("name");
		for(var j = 18 - result.get("name").length; j > 0; j--) {
			text += " ";
		}
		text += "\t " + result.get("level");
		text += "\r\n";
	}
	npc.say(text,2091010);

} else if(selection == 6) {

	player.runScript( "bossrank");
} else if(selection == 1) {
	var sql = "SELECT ii.limitbreak,i.itemid, c.name FROM inventoryitems i  , inventoryitems_equip ii, characters c WHERE c.id = i.characters_id AND ii.inventoryitems_id = i.inventoryitems_id AND limitbreak > 0 AND gm<=0 ORDER BY limitbreak DESC LIMIT 0, 50";
	var rs = player.customSqlResult(sql);
	rankingData = new Array();
	for(var i in rs) {
		var signle = rs[i];
		var data = {};
		data.name = signle.get("name");
		data.itemid = signle.get("itemid");
		data.limitbreak = signle.get("limitbreak");
		rankingData.push(data);
	}

} else if(selection == 3) {
	//财富排行
	var sql = "SELECT info.name,eq.limitBreak,eq.itemid FROM zz_totalscore info,zz_inventoryitems_equip as eq where info.characterid<>22 and eq.id=info.`id武器` ORDER BY eq.limitBreak desc";
	var resultList = player.customSqlResult(sql);
	var text = "\t\t\t\t#e#d★ 武器突破总排行 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t#e玩家昵称#n\t\t\t#e突破#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var rank = i + 1;
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(rank == 1) {
			text += "#r";
		} else if(rank == 2) {
			text += "#g";
		} else if(rank == 3) {
			text += "#b";
		}
		text += "\t " + rank + "\t\t ";
		// 填充名字空格
		text += result.get("name");
		for(var j = 9 - result.get("name").length; j > 0; j--) {
			text += " ";
		}
		text += "#v" + result.get("itemid")+"#";
		text += "\t " + Math.round(result.get("limitBreak")/100000000)+" 亿";
		text += "\r\n";
	}
	npc.say(text,2091010);

}