/*  
* 成就系統 幾里 315342975 
 */
 
var tz13 = "#fEffect/CharacterEff/1112925/0/0#";  //藍星
var tz11 = "#fEffect/CharacterEff/1112904/0/0#";  //彩心
var eff1 = "#fEffect/CharacterEff/1112924/0/0#";
var eff2 = "#fEffect/CharacterEff/1112925/0/0#";

function start() {
    action(1, 0, 0);
}

var sql = "select characterName as name , sum(taskPoint) as level from jili_task_character where rewardYn = 1 GROUP BY characterName order by `level` desc limit 20;";
var resultList = player.customSqlResult(sql);

var text = "#fs16##e#r"+ eff1 + eff2 + eff2 + eff2 + eff2 + eff2 +  "   成就天梯   " + eff2 + eff2 + eff2 + eff2 + eff2 +  eff1 +"#fs12#\r\n\r\n";
text += "\t#e名次#n\t#e玩家昵稱#n\t\t\t#e成就積分#n\t\t #e #n\r\n";
for (var i = 0; i < resultList.size(); i++) {
	var rank = i + 1;
	var result = resultList.get(i);
	if (result == null) {
		break;
	}
	if (rank == 1) {
		text += "#r";
	} else if (rank == 2) {
		text += "#g";
	} else if (rank == 3) {
		text += "#b";
	}
	text += "\t " + rank + "\t\t ";

	// 填充名字空格
	var name = result.get("name").toString();
	text += name;
	for (var j = 15 - getByteLen(name); j > 0; j--) {
		text += " ";
	}
	
	text += "\t      " + result.get("level");

	//text += "\t\t\t " + result.getString("reborns1")+"#k";

	text += "\r\n";
}
npc.say(text);
player.runScript("成就系統");

function getByteLen(val) {
	var len = 0;
	for (var i = 0; i < val.length; i++) {
		var a = val.charAt(i);
		if (a.match("/[^\x00-\xff]/ig") != null) {
			len += 2;
		}
		else {
			len += 1;
		}
	}
	return len;
}