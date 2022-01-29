/*  
* 成就系統 幾里 315342975 
 */
 
var eff1 = "#fEffect/CharacterEff/1112924/0/0#";
var eff2 = "#fEffect/CharacterEff/1112925/0/0#";
var list = Array();
var selected;
var selectedIndex;
var taskinfo;
var rewardType;
var rewardNum;
while(true){
	var selStr = "#fs16##e#r"+ eff1 + eff2 + eff2 + eff2 + eff2 + eff2 +  "   成就天梯   " + eff2 + eff2 + eff2 + eff2 + eff2 +  eff1 +"#fs12#\r\n";
	selStr += "\t\t     #g#n以下是您#r 沒有達成 #g的成就!\r\n"

	list = getNotArrivedTask();

	if(list.length > 0){
		for(var i = 0; i < list.length; i++){
			selStr += "#L"+i+"##r"+ (i+1) + ".#b" + list[i].get("taskName")+"";
			
			if(list[i].get("taskMax") == list[i].get("taskCount")){
				selStr += "#g(已達成)";
			}

			
			selStr += "#l\r\n";
		}
	}else{
		selStr += "\r\n\t#r 恭喜您，當前服務器開放的所有成就都完成了！";
	}

	selStr += "\r\n\r\n                  #r#L10086#返回上一頁#l";

	selected = npc.askMenu(selStr);
	if(selected == 10086){
		player.runScript("成就系統");
		break;
	}else{
		selectedIndex = selected;
		var selStr = "#fs16##e#r"+ eff1 + eff2 + eff2 + eff2 + eff2 + eff2 +  "   成就詳情   " + eff2 + eff2 + eff2 + eff2 + eff2 +  eff1 +"#fs12#\r\n\r\n";
		
		selStr += "#n#b成就名稱:\r\n\t#r"+list[selected].get("taskName");
		selStr += "\r\n#b成就點數:\r\n\t#r"+list[selected].get("taskPoint");
		
		//如果玩家這個成就達標 就可以完成
		if(list[selected].get("taskMax") <= list[selected].get("taskCount")){
			selStr += "\r\n#b當前達到:\r\n\t#r"+list[selected].get("taskCount") + " (已達成,請完成成就)";
		}else{
			selStr += "\r\n#b當前達到:\r\n\t#r"+list[selected].get("taskCount") + " (未達成)";
		}
		selStr += "\r\n#b所需數值:\r\n\t#r"+list[selected].get("taskMax");
		selStr += "\r\n#b成就內容:\r\n\t#r"+list[selected].get("taskContent");
		
		//達成獎勵
		taskinfo = getTaskInfo(list[selected].get("taskId"));
		rewardType = parseInt(taskinfo.get("rewardType").toString());
		rewardNum = parseInt(taskinfo.get("rewardNum").toString());
				
		switch (rewardType){
			case 0:
				//金幣獎勵
				selStr += "\r\n#b達成獎勵:\r\n\t#r金幣 x " + rewardNum;
				break;
			case 1:
				//點券獎勵
				selStr += "\r\n#b達成獎勵:\r\n\t#r點券 x " + rewardNum;
				break;
			case 2:
				//抵用獎勵
				selStr += "\r\n#b達成獎勵:\r\n\t#r抵用 x " + rewardNum;
				break;
			case 3:
				//余額獎勵
				selStr += "\r\n#b達成獎勵:\r\n\t#r余額 x " + rewardNum;
				break;
			default:
				//物品獎勵
				selStr += "\r\n#b達成獎勵:\r\n\t#r#v"+rewardType+"##t"+rewardType+"# x " + rewardNum;
				break;
		}
		
		//如果玩家這個成就達標 就可以完成
		if(list[selected].get("taskMax") <= list[selected].get("taskCount")){
			selStr += "\r\n             #g#L100861#"+eff2+"完成該成就#l";
		}
		
		selStr += "\r\n             #n#r#L10086#"+eff1+"返回上一頁#l\r\n";
		
		selected = npc.askMenu(selStr);
		if(selected == 10086){
			continue;
		}else{
			arrivedTask();
			var selStr = "#fs16##e#r"+ eff1 + eff2 + eff2 + eff2 + eff2 + eff2 +  "   成就達成   " + eff2 + eff2 + eff2 + eff2 + eff2 +  eff1 +"#fs12#\r\n\r\n";
			selStr += "\r\n\r\n\t#b#n恭喜您！達成 #r#e" + list[selectedIndex].get("taskName") + " #n#b成就！\r\n";	
			selStr += "\r\n\r\n            #n#r#L100862#返回未完成成就列表#l";
			npc.askMenu(selStr);
		}
	}
}           

/**********獲取未完成成就start**********/
function getNotArrivedTask(){
    var sql = "select * from jili_task_character where characterId = '" + player.getId() + "' and rewardYn = 0";
    var push = player.customSqlResult(sql);
	var list = Array();
	var i = 0;
	while(i < push.size()){
		list.push(push.get(i));
		i++;
	}
	return list;
}
/**********獲取未完成成就end**********/

/**********獲取     成就信息*********/
function getTaskInfo(taskId){
	//獲取獎勵
    var sql = "select * from jili_task_list where id = '" + taskId + "'";
    var push = player.customSqlResult(sql);
	if(push.size()>0){
		return push.get(0);
	}
}
/**********獲取     成就信息*********/


/**********玩家完成成就Start**********/
function arrivedTask(){
	//更改該玩家成就狀態
    player.customSqlUpdate("UPDATE `jili_task_character` SET `rewardYn`= 1 WHERE (`characterId`='" + player.getId() + "' and taskId = '" + list[selectedIndex].get("taskId") +"');");
	
	
	npc.broadcastPlayerNotice(15,"【成就系統】 : 恭喜玩家 " + player.getName() + " 達成成就 " + list[selectedIndex].get("taskName"));
	switch (rewardType){
		case 0:
			//金幣獎勵
			player.gainMesos(rewardNum);
            break;
		case 1:
			//點券獎勵
			player.modifyCashShopCurrency(1,rewardNum);
            break;
		case 2:
			//抵用獎勵
			player.modifyCashShopCurrency(2,rewardNum);
            break;
		case 3:
			//余額獎勵
			gainHyPay(rewardNum);
            break;
		default:
			player.gainItem(rewardType,rewardNum);
			//物品獎勵
			break;
	}
	
	
}
/**********玩家完成成就end  **********/


function getHyPay(type) {
    let sql = "select * from hypay where accname = '" + getAccountName() + "'";
    let push = player.customSqlResult(sql);
	let pay = "";
    if (push.size() > 0) {
        let result = push.get(0);
        if (type == 1) {
            pay = result.get("pay");
        } else if (type == 2) {
            pay = result.get("payUsed");
        } else if (type == 3) {
            pay = result.get("payReward");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return pay;
}
function getAccountName() {
    let i = -1;
    let sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    let push = player.customSqlResult(sql);
	let name = "";
    if (push.size() > 0) {
        let result = push.get(0);
        name = result.get("name");
    }
    return name;
}

function gainHyPay(count) {
    let sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";   
    player.customSqlUpdate(sql, count);
}
