/**
* 領取成就獎勵 幾里 315342975 
**/
var tt = "#fEffect/CharacterEff/1082565/0/0#"; //餅干兔子
// 每個階段禮包所需的數
var condition = new Array(1, 5, 7, 15, 20, 25, 30, 35, 40, 45);
// 禮包內容
var reward = new Array(
// 100禮包
Array(1, 2433028, 1,""),     //140副手
// 300禮包
Array(2, 2434007, 1,""),  	 //ffn武器箱  
// 500禮包
Array(3, 1122267, 1,""),     //最高級貝勒德吊墜
// 1000禮包 
Array(4, 2431715, 1,"as"),     //黑色武器箱
// 1500禮包
Array(5, 2431715, 1,"as"), 
// 2500禮包
Array(6, 2431715, 2,"as"), 
// 5000禮包
Array(7, 2433418, 3,""),     //暴君防具交換卷 
// 7500禮包
Array(8, 2436114, 1,"神秘武器"),     //神秘箱子
// 10000禮包 
Array(9, 2436114, 1,"神秘武器"),     //神秘箱子
// 15000禮包 
Array(10, 2436114, 2,"神秘武器")
);



let sel = "成就禮包，當前成就積分 #r"+getTaskPoint()+"\r\n";
for (var i = 0; i < condition.length; i++) {
	if (player.getPQLog("成就積分禮包"+ i) > 0) {
		sel += "#d#L" + (i) + "#" + tt + " [#r已完成#d]成就積分福利 #r\t\t\t" + condition[i] + "#l\r\n";
	} else {
		sel += "#d#L" + (i) + "#" + tt + " [未完成]成就積分福利 #r\t\t\t" + condition[i] + "#l\r\n";
	}
}
let selected = npc.askMenu(sel);

sel = "是否領取 #r"+condition[selected]+" #k檔次成就禮包？\r\n"
for (var i = 0; i < reward.length; i++) {
	if (reward[i][0] == (selected+1)) {
		sel += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "個] "+reward[i][3]+"\r\n";
	}
}
let YN = npc.askYesNo(sel)
if(YN==1){
	
	//判斷是否已經領取
	if(player.getPQLog("成就積分禮包"+selected)==1){
		npc.say("您已經領取過該禮包，無法再次領取");
	}else if (getTaskPoint() < condition[selected]) {
		npc.say("成就積分未達標，無法領取");
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
			npc.broadcastPlayerNotice(15,"【成就系統】 : 恭喜玩家 " + player.getName() + " 領取了 <" + condition[selected]+"> 成就積分禮包！");
			player.addPQLog("成就積分禮包"+selected,1,1500);
			npc.say("領取成功");
		}
	}
}
	



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