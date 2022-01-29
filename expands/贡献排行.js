/*
 * 2016年7月11日 08:07:33
 * 門派系統（門派管理）
 */

/*
 - menpaiMember
 id,mpid,charid,charName,points,type,date
 id - index
 mpid - 外鍵mpid
 mpid = 1  飞龙在天
 mpid = 2  虎啸九天
 charid - 角色id
 charname - 角色名字
 points - 角色貢獻度
 type - 角色在門派中扮演的角色
 type = 0 普通成員
 type = 1 門派老大
 date - 角色門派加入時間
 */
var status;
var p;
var eff = "#fEffect/CharacterEff/1051296/1/0#";
var wi8 = "#fUI/StarCityUI.img/Board_GameRank/user/myrank#";  //黄色条
var eventid = 16711;//活動ID
var menpaiboss = false;
var mpid;
var Reward = Array(
        Array(5062009, 10),
        Array(5062010, 10),
        Array(4001714, 1)
        );//門派成員福利領取（一生只能領取一次）
var RewardEveryDay = Array(
        Array(5062009, 10),
        Array(5062010, 10),
        Array(4001714, 1)
        );//門派成員福利領取（每日領取一次）

       
	mpid =getMenpaiId();
	var mppp;
	if (mpid == 1) {
		mppp = 2091133;
	} else if (mpid == 2) {
		mppp = 2091134;
	} else {
		mppp = 0;
	}
	var text = "#e  名次\t\t\玩家名称\t\t\t\t贡献度\r\n#n"
	var resultList = player.customSqlResult("SELECT * FROM menpaiMember where mpid = " + mpid + " ORDER BY points DESC LIMIT 50");
	var max = 50;
	
	for (var i = 0; i <max; i++) {
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
		text += result.get("charname");
		
		text += "\t\t\t\t " + result.get("points");
		text += "\r\n";


	}
	npc.say(text,mppp);




function RankingNew(mpid) {
    
    return text;
}
 function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}
 function getMenpaiId() {//得到角色门派的ID
        var i = 0;
        var data = player.customSqlResult("SELECT mpid FROM menpaiMember where charid = " + player.getId() + ""); // 查询数据
        if (data.size() > 0) {
            i = data.get(0).get("mpid");//得到家族id
        }
        return i;
    }