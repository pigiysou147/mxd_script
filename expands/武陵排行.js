/**
* 排行榜 幾里 315342975 
 */
 
let cat1="#fItem/Pet/5000000.img/alert/0#";
let cat2="#fItem/Pet/5000000.img/fly/0#";
let cat3="#fItem/Pet/5000000.img/cry/0#";
let tu1 = "#fItem/Cash/0501.img/05010045/effect/stand1/1#"
let tu2 = "#fItem/Cash/0501.img/05010002/effect/default/7#"
let tu3 = "#fUI/NameTag/medal/758/w#"
let tu4 = "#fEffect/SetEff.img/245/effect/28#"
let tu5 = "#fUI/NameTag/medal/758/e#"
let tu6 = "#fUI/NameTag/medal/758/c#"
let fy = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/1#";
let fy1 = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/2#";
let dz = "#fUI/GuildMark/Mark/Etc/00009020/1#";
let dz1 = "#fEffect/CharacterEff/1003393/1/0#";
let star = "#fEffect/CharacterEff/1051294/1/1#"
let eff2 = "#fEffect/CharacterEff/1112925/0/0#";
var eff1 = "#fEffect/CharacterEff/1112924/0/0#";
let title = "";
let clumn = "";
let data;
let sql;
title = "武陵排行"
clumn = "時間"
sql = "select `character` as name,`second` as `value` from jili_dojang_rank ORDER BY `second` asc limit 20";


var resultList = player.customSqlResult(sql);
var text = "#b#e   名次#n\t\t\t#e玩家昵稱#n  \t\t\t#e"+clumn+"#n\r\n";

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
	text += "\t " + rank + "\t\t\t\t";

	// 填充名字空格
	var name = result.get("name").toString()+"";
	text += name;

	for (var j = 20 - getByteLen(name); j > 0; j--) {
		text += " ";
	}
	let usedTime =  parseInt(result.get("value"));
	
	let min = Math.floor(usedTime / 60);
	let sc = usedTime % 60;
	
	
	text += min+"分"+sc+"秒";

	text += "\r\n";
}
npc.say(text,2091011);


function getByteLen(val) {
	var str = new String(val);  
	var bytesCount = 0;  
	for (var i = 0 ,n = str.length; i < n; i++) {  
		var c = str.charCodeAt(i);  
		if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {  
			bytesCount += 1;  
		} else {  
			bytesCount += 2;  
		}  
	}  
	return bytesCount;  
}