/**
* 首充獎勵  739977676 
**/
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
var tt = "#fEffect/CharacterEff/1082565/0/0#"; //餅干兔子
// 每個階段禮包所需的充值數
var condition = Array(100);
// 禮包內容
var reward = new Array(
// 100禮包
Array(1, 2431194, 1,"【7天全屬性+500冰棒，Boss傷害、總傷害、無視防禦各50%】") 
);




let sel ="";
sel += tu3;
for(let i = 0;i< 35;i++){
	sel += tu6;
}
sel += tu5;
sel += "\r\n"+star+" #d"+format("剩餘餘額  #r"+getHyPay(1)+"#d 點")+"#d"+star+" "+format("累計贊助  #r"+getHyPay(3)+" #d元")+"";
sel += "\r\n\r\n#d   本服贊助比例：#r1台幣=3餘額\r\n#n#d   如需贊助,請使用自動贊助系統，或請聯系管理員！\r\n";
sel += "   #b當累計贊助金額達到100元便可領取首充禮包，累計充值禮\r\n   包，贊助勛章，以及領取每日贊助福利 破攻 - 金幣 ！\r\n#r   注意：禮包只能領取一次(賬號限制)!#n\r\n";
sel += "#L10086#" + tt + " 返回贊助中心#l\r\n"
if (getEventValue("首充禮包", true) > 0) {
	sel += "#d#L" + 0 + "#" + tt + " [#r已完成#d]首充禮包 #l\r\n";
} else {
	sel += "#d#L" + 0 + "#" + tt + " [未完成]首充禮包 #l\r\n";
}
let selected = npc.askMenu(sel,3003307);
if(selected == 10086){
	player.runScript("AB_贊助中心")
}else{

	sel = "是否領取禮包？\r\n"
	for (var i = 0; i < reward.length; i++) {
		if (reward[i][0] == (selected+1)) {
			//sel += "#i" + reward[i][1] + "# [" + reward[i][2] + "個] "+reward[i][3]+"\r\n";
			sel += "#i" + reward[i][1] + "# #z" + reward[i][1] + "#[#r" + reward[i][2] + "#k個]#b "+reward[i][3]+"\r\n#k";
		}
	}
	let YN = npc.askYesNo(sel,3003307);
	if(YN==1){
		
		//判斷是否已經領取
		if(getEventValue("首充禮包",true)==1){
			npc.say("您的賬號已經領取過該禮包，無法再次領取",3003307);
		}else if (getHyPay(3) < 99) {
			npc.say("金額未達標，無法領取",3003307);
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
				npc.say("包裹空間不足，請確保包裹每個欄位有至少 " + rewardlist.length + " 格空間",3003307);
			}else{
				for (var i = 0; i < rewardlist.length; i++) {
					player.gainItem(rewardlist[i][0], rewardlist[i][1]);
				}
				setEventValue("首充禮包", 1);
				npc.broadcastPlayerNotice(2,"【贊助中心】 : 感謝玩家 " + player.getName() + " 的贊助,特此為你奉上 首充大禮包！ ");
				npc.say("領取成功",3003307);
			}
		}
	}
}
	



function format(val,lenA) {
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
	if(17- len>0){
		for (var j = 17 - len; j > 0; j--) {
			val += " ";
		}
	}
	return val;
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