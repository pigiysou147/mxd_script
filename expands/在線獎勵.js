/**
* 在線獎勵禮包  QQ:739977676 
**/
var tt = "#fEffect/CharacterEff/1082565/0/0#"; //餅干兔子
// 每個階段所需的分鐘數
var condition = new Array(60, 120, 300, 420,600);
// 禮包內容
var reward = new Array(
// 60
Array(1, 4001714, 1,""),     //100萬
// 120
Array(2, 4001785, 1,""),  	 //500萬
// 300
Array(3, 4001785, 2,""),     //500萬
// 420
Array(4, 2430209, 1,"15餘額"),     //黑色武器箱
// 600
Array(5, 2432435, 1,"25餘額")     //暴君防具交換卷 
);


while(true){
	let sel = "#b在線獎勵，當前在線時間 #r"+player.getOnlineTime()+" #b分\r\n";
	for (var i = 0; i < condition.length; i++) {
		if (getEventValue("在線獎勵" + i, false) > 0) {
			sel += "#d#L" + (i) + "#" + tt + " [#r已完成#d]在線獎勵 達成#r\t\t\t" + condition[i] + " 分#l\r\n";
		} else {
			sel += "#d#L" + (i) + "#" + tt + " [未完成]在線獎勵 達成#r\t\t\t" + condition[i] + " 分#l\r\n";
		}
	}
	let selected = npc.askMenu(sel);

	sel = "是否領取在線 #r"+condition[selected]+" #k 分鐘禮包？\r\n"
	for (var i = 0; i < reward.length; i++) {
		if (reward[i][0] == (selected+1)) {
			sel += "\t\t\t#b#i" + reward[i][1] + "# #z" + reward[i][1] + "##r[" + reward[i][2] + "個]#b("+reward[i][3]+")\r\n";
		}
	}
	let YN = npc.askYesNo(sel)
	if(YN==1){
		//判斷是否已經領取
		if(getEventValue("在線獎勵"+selected,false)==1){
			npc.say("您的賬號今日已經領取過該禮包，無法再次領取");
		}else if (player.getOnlineTime() < condition[selected]) {
			npc.say("在線時間未達標");
		}else{
			var rewardlist = new Array();
			for (var i = 0; i < reward.length; i++) {
				if (reward[i][0] == (selected+1)) {
					if (reward[i][3] == null)
						reward[i][3] = -1;
					rewardlist.push(new Array(reward[i][1], reward[i][2], reward[i][3]));
				}
			}
			if (player.getFreeSlots(1) < rewardlist.length || player.getFreeSlots(2) < rewardlist.length || player.getFreeSlots(3) < rewardlist.length || player.getFreeSlots(4) < rewardlist.length || player.getFreeSlots(5) < rewardlist.length) {
				npc.say("包裹空間不足，請確保包裹每個欄位有至少 " + rewardlist.length + " 格空間");
			}else{
				for (var i = 0; i < rewardlist.length; i++) {
					player.gainItem(rewardlist[i][0], rewardlist[i][1]);
				}
				setEventValue("在線獎勵" + selected, 1);
				npc.broadcastNoticeWithoutPrefix("[在線獎勵]:玩家 "+player.getName()+" 領取了 在線 "+condition[selected]+" 分禮包！");
				npc.say("領取成功");
			}
		}
	}
}




function getHyPay(type) {
    var sql = "select * from hypay where accname = '" + getAccountName() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        if (type == 1) {
            var pay = result.get("pay");
        } else if (type == 2) {
            var pay = result.get("payUsed");
        } else if (type == 3) {
            var pay = result.get("payReward");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return pay;
}
function getAccountName() {
    var i = -1;
    var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("name");
    }

    return name;
}

//flag = true 查總的不重置
//flag = false 查當天的
function getEventValue(event1,flag){
	var charInfo = getCharInfo();
	if(flag){
		var sql = "select sum(value) as numbe from zz_xr_event where accounts_id = "+parseInt(charInfo.accounts_id)+" and event = '"+event1+"' and world ="+parseInt(charInfo.world)+" "; 
	}else{
		var sql = "select sum(value) as numbe from zz_xr_event where accounts_id = "+parseInt(charInfo.accounts_id)+" and event = '"+event1+"' and world ="+parseInt(charInfo.world)+" AND DATE_FORMAT(time, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d') "; 
	}
	var resultList = player.customSqlResult(sql);
	var count=0;
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		count = result.get("numbe");
		if(count ==null){
			count = 0;
		}
	}
	return parseInt(count);
}

function setEventValue(event1,value1){
	var charInfo = getCharInfo();
	var sql = "insert into zz_xr_event(accounts_id, world, `event`,`value`,time) values("+charInfo.accounts_id+","+charInfo.world+",'"+event1+"',"+value1+",now())";
	player.customSqlInsert(sql);
}

function getCharInfo(){
	var sql = "select accounts_id,world from characters where id = "+player.getId()+"";
	var resultList = player.customSqlResult(sql);
	var charInfo={};
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		charInfo.accounts_id = result.get("accounts_id");
		charInfo.world = result.get("world");
	}
	return charInfo;
}