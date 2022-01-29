var text = "";


//等级排行
	var sql = "SELECT hypay.accountid,hypay.name,sum(rmb) total from paylog,hypay where paytime>'2021-12-24' and paytime<'2022-01-05' and paylog.account=hypay.accname GROUP BY account order by total desc";
	var resultList = player.customSqlResult(sql);
	var 勋章 = "#fCharacter/Accessory/01143012.img/info/icon#"
	text = "      " + 勋章 + " #r回忆岛 #b/ #b元旦充值排行榜" + 勋章 + "\r\n\r\n";
	text += "#d#e注:排行榜每登录角色即刷新,计算方式为现金非余额!#k\r\n#e";
	text += "#d#e注:排行榜更新计算为当前充值账号登录的角色名.!#k\r\n#e";
	text += "#d#e注:意思为登录该账号的其他角色,排名不变,角色名变.!#k\r\n#e";
    
	text += "#L0##r#e活动说明：1.4日0点会公布一名充值全返的幸运玩家(点击查看结果)#l\r\n\r\n\r\n";

	text += "#d#e#fs12#  名次          玩家姓名             累计 \r\n";	
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
		text += "\t " + rank + "\t\t\t ";
		// 填充名字空格
		text+=nbsp10(result.get("name"));
		text+="\t\t\t";
		text+=nbsp10(parseInt(result.get("total")*1));
		text += "\r\n";
	}
	let selection =npc.askMenu(text);
    if(selection==0){

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
            if(result.get("accountid")==223){
                text="#r#e中奖的幸运玩家为(#b请该玩家私聊GM领取奖励哦#r): \r\n\r\n";
                text += "#d#e#fs12#     名次        玩家姓名           累计 \r\n";	
                text += "\t " + rank + "\t\t\t ";
                // 填充名字空格
                text+=nbsp10(result.get("name"));
                text+="\t\t\t";
                text+=nbsp10(parseInt(result.get("total")*1));
                text += "\r\n";
            }
            
        }
        npc.say(text);

    }

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