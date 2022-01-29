var text = "";
text = "\t\t\t\t\t[元宵充值排行榜]\r\n";
text += "·该充值排行榜只统计2020年2月8号0点开始到2020年2月15号晚上12点截止.\r\n";

var 勋章 = "#fCharacter/Accessory/01143012.img/info/icon#"
text = "      " + 勋章 + " #回忆岛 #b/ #b元宵充值排行榜" + 勋章 + "\r\n\r\n";
text += "#d#e注:排行榜每登录角色即刷新,计算方式为现金非余额!#k\r\n#e";
text += "#d#e注:排行榜更新计算为当前充值账号登录的角色名.!#k\r\n#e";
text += "#d#e注:意思为登录该账号的其他角色,排名不变,角色名变.!#k\r\n#e";
//text += "   #e名次\t      玩家名字\t        累计#n"

//等级排行
	var sql = "SELECT * FROM hypay ORDER BY paihangbang  DESC LIMIT 60";
	var resultList = player.customSqlResult(sql);
	var 勋章 = "#fCharacter/Accessory/01143012.img/info/icon#"
	text = "      " + 勋章 + " #r蘑菇冒险岛 #b/ #b五一充值排行榜" + 勋章 + "\r\n\r\n";
	text += "#d#e注:排行榜每登录角色即刷新,计算方式为现金非余额!#k\r\n#e";
	text += "#d#e注:排行榜更新计算为当前充值账号登录的角色名.!#k\r\n#e";
	text += "#d#e注:意思为登录该账号的其他角色,排名不变,角色名变.!#k\r\n#e";
	text += "#e#fs12#  名次          玩家姓名           累计 \r\n";	
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
		text+=nbsp10(result.get("name"));
		text+="\t\t\t";
		text+=nbsp10(parseInt(result.get("paihangbang")*0.35));
		text += "\r\n";
	}
	npc.say(text);

npc.say(text);

function chkstrlen(str) {　
	var strlen = 0;　
	for(var i = 0; i < str.length; i++) {　
		if(str.charCodeAt(i) > 255) //如果是汉字，则字符串长度加2
			　　 strlen += 2;　　
		else　　　　 strlen++;　
	}　
	return strlen;
}

function nbsp10(str) {
	var str = str + "";
	var nbspStr = "";
	if(chkstrlen(str) < 10) {
		for(var i = 0; i < 10 - chkstrlen(str); i++) {
			nbspStr += " ";
		}
	}

	return str + nbspStr;
}


function FormatString(c, length, content) { //排名格式調整
	var str = "";
	var cs = "";
	if(content.toString().length > length) {
		str = content;
	} else {
		for(var j = 0; j < length - content.toString().getBytes("GB2312").length; j++) {
			cs = cs + c;
		}
	}
	str = content + cs;
	return str;
}