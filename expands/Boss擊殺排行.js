/**
* boss擊殺排行榜 幾里 315342975 
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

let bossName = ["希納斯","卡雄","麥格納斯★普通","麥格納斯★困難","斯烏★普通","斯烏★困難","戴米安★普通","戴米安★困難","真★希拉幻影","真★希拉","敦凱爾","虛空之眼","路西德★普通","路西德★困難","威爾"]



let whileStage = true;
while(whileStage){
	var selStr = "#fs16##e#r"+ eff1 + eff2 + eff2 + eff2 + eff2 + eff2 +  " BOSS攻略排行 " + eff2 + eff2 + eff2 + eff2 + eff2 +  eff1 +"#fs12##n\r\n";
	
	for(let i = 0;i<bossName.length;i++){
		if(i%3 == 0){
			selStr+= "\r\n"
		}
		var name = bossName[i];
		var str = new String(name);  
		var bytesCount = 0,n;  
		for (var dd = 0 ,n = str.length; dd < n; dd++) {  
			var c = str.charCodeAt(dd);  
			if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {  
				bytesCount += 1;  
			} else {  
				bytesCount += 2;  
			}  
		}
		if(bytesCount < 14){
			for(var ii = 0;ii<14-bytesCount;ii++){
				if(ii % 2 == 0){
					name += " ";
				}else{
					name = " " + name;
				}
			}
		}	
		selStr += "#L"+i+"##b"+name+"#l"
	}
	
	selStr += "\r\n\r\n   "+tu4+"#r#L10086#口袋精靈：返回上一頁#l"


	let selected = npc.askMenu(selStr,3003307);

	switch (selected){
		case 10086:
			//返回
			player.runScript("排行榜")
			whileStage = false;
			continue;
			break;
		default:
			sql  = "select * from jili_boss_log where bossName='"+bossName[selected]+"' order by time asc limit 10 "
			break;
	}

	var resultList = player.customSqlResult(sql);
	var bossName1 = bossName[selected];
	var str = new String(bossName1);  
	var bytesCount = 0,n;  
	for (var dd = 0 ,n = str.length; dd < n; dd++) {  
		var c = str.charCodeAt(dd);  
		if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {  
			bytesCount += 1;  
		} else {  
			bytesCount += 2;  
		}  
	}
	if(bytesCount < 14){
		for(var ii = 0;ii<14-bytesCount;ii++){
			if(ii % 2 == 0){
				bossName1 += " ";
			}else{
				bossName1 = " " + bossName1;
			}
		}
	}	
	var text = "#fs16##e#r"+ eff1 + eff2 + eff2 + eff2 + eff2 + eff2 +  ""+bossName1+"" + eff2 + eff2 + eff2 + eff2 + eff2 +  eff1 +"#fs12#\r\n\r\n";
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		var rank = i + 1;
		
		var m = Math.floor(parseFloat(result.get("time")) / 60);
		var s = Math.floor(parseFloat(result.get("time")) % 60);
		if(rank == 1){
			text += "#e#r第 "+rank+" 名  用時:"+m+"分"+s+"秒\r\n#b成員:"+result.get("playersName")+"\r\n"
		}else if(rank == 2){
			text += "#n#d第 "+rank+" 名  用時:"+m+"分"+s+"秒\r\n#b成員:"+result.get("playersName")+"\r\n"
		}else if(rank == 3){
			text += "#g第 "+rank+" 名  用時:"+m+"分"+s+"秒\r\n#b成員:"+result.get("playersName")+"\r\n"
		}else{
			text += "#k第 "+rank+" 名  用時:"+m+"分"+s+"秒\r\n#b成員:"+result.get("playersName")+"\r\n"
		}
		

	}
	npc.say(text,3003307);
}

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