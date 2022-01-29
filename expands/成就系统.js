/**
* 成就系統 幾里 315342975 
**/

var eff1 = "#fEffect/CharacterEff/1112924/0/0#"
var eff2 = "#fEffect/CharacterEff/1112925/0/0#";

var menuList = Array(
	Array(eff2+"#r未完成成就" , 1),
	Array(eff1+"#b已完成成就" , 2),
	Array(eff2+"#r成就天梯榜" , 3)
        );




resetTaskInfo();

var selStr = "#fs16##e#r"+ eff1 + eff2 + eff2 + eff2 + eff2 + eff2 +  "   成就天梯   " + eff2 + eff2 + eff2 + eff2 + eff2 +  eff1 +"#fs12#\r\n";
selStr += "\t\t   #g#n挑戰更多內容，攀登成就之巔!\r\n\t\t"

selStr += formatStr("#b成就點數:#r" + getTaskPoint(), 22);
selStr += formatStr("#b成就進度:#r" + getTaskPercent(), 22);
selStr += "\r\n"
for(var i = 0; i < menuList.length ; i++){
	if(i%3 == 0){
		selStr += "\r\n";
	}
	selStr += "#L" + menuList[i][1] + "#" + menuList[i][0] + "#l" + "  ";
}

selStr += "\r\n \r\n     #L4#"+eff1+"#g領取成就獎勵#l  #L5#"+eff1+"#g領取成就勛章#l";

selStr += "\r\n\r\n                  #r#L10086#返回主頁面#l";

var selection = npc.askMenu(selStr);
switch (selection) {
	case 1:
		player.runScript("未完成成就");
		break;
	case 2:
		player.runScript("已完成成就");
		break;
	case 3:
		player.runScript("成就天梯榜");
		break;
	case 4:
		player.runScript("領取成就獎勵");
		break;
	case 5:
		player.runScript("成就稱號");
		break;
	case 10086:
		player.runScript("萬能NPC");
		break;
	default:
		player.sendOk("該功能正在緊張進行制作中，請耐心等待。");
		break;
}
 
function formatStr(str , length){
	if(str.length < length){
		for(var i = str.length; i < length ; i++){
			str += " ";
		}
	}
	return str;
}

/****初始化成就 start******/
function resetTaskInfo(){
    var sql = "select * from jili_task_character_yn where characterId = '" + player.getId() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
    } else {
		//下次不再初始化
        player.customSqlInsert("INSERT INTO `jili_task_character_yn` (`characterId`) VALUES ('" + player.getId() + "')");
		
		//初始化，查詢當前所有成就ID
		sql = "select * from jili_task_list";
		push = player.customSqlResult(sql);
		var i = 0;
		while(i < push.size()){
			var taskId = push.get(i).get("id");
			var taskName = push.get(i).get("taskName");
			var taskContent = push.get(i).get("taskContent");
			var taskMax = push.get(i).get("taskMax");
			var taskPoint = push.get(i).get("taskPoint");
			//查找該用戶是否存在這個成就記錄
			var sql_1 = "select * from jili_task_character where characterId = '" + player.getId() + "' and taskId = '" + taskId + "'";
			var push_1 = player.customSqlResult(sql_1);
			if (push_1.size() > 0) {
			}else{
				var sql_insert = "INSERT INTO `jili_task_character` (`characterId`,`characterName`,`taskCount`,`rewardYn`,`taskId`,`taskName`,`taskContent`,`taskMax`,`taskPoint`)";
				sql_insert += "VALUES ('" + player.getId() + "','" + player.getName() + "',0,0,'"+taskId+"','"+taskName+"','"+taskContent+"','"+taskMax+"','"+taskPoint+"')";
				player.customSqlInsert(sql_insert);
			}
			i++;
		}
		
    }
}
/****初始化成就 end******/

/****獲取成就積分 start******/
function getTaskPoint(){
    var sql = "select sum(`taskPoint`) as total from jili_task_character where characterId = '" + player.getId() + "' and rewardYn = 1";
    var push = player.customSqlResult(sql);
	var total = push.get(0).get("total");
	if(total == null){
		total = 0;
	}
    return total;
}
/****獲取成就積分 end******/

/****獲取成就進度 start******/
function getTaskPercent(){
    var sql = "select count(0) as total from jili_task_character where characterId = '" + player.getId() + "' and rewardYn = 1";
    var push = player.customSqlResult(sql);
	var total = push.get(0).get("total");
	if(total == null){
		total = 0;
	}
    var sql1 = "select count(0) as total from jili_task_character where characterId = '" + player.getId() + "'";
    var push1 = player.customSqlResult(sql1);
	var total1 = push1.get(0).get("total");
	if(total1 == null){
		total1 = 0;
	}
	
	
    return total + "/" + total1;
}
/****獲取成就積分 end******/

