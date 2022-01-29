/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：168推文獎勵
 *  
 *  @Author Jackson 
 */

/* global cm */

var open = false;
var accounts = -1;
let tz15 = "#fEffect/ItemEff/1070069/effect/walk1/1#";
let head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#";
var itemList = new Array(
    Array(2431026, 1),
	Array(2436277, 6)
);
var sql = "select * from log_168";
var resultList = player.customSqlResult(sql);
	for (var i = 0; i < resultList.size(); i++) {
                var result = resultList.get(i);
                if (getAccountName() == result.get("account")) {
                    accounts = result.get("account")
                    open = true;
                    break;
                } else {
                    open = true;
                }
            }
var menuList = Array(
	Array("#b點擊我打開推文鏈接" , 1),
	Array("#b點擊我領取推文獎勵" , 2)
        );
let selStr =  "#fn微軟正黑體#           #e" + tz15 + "#r168推文獎勵 " + tz15 + "#n\r\n\r\n";
	selStr += "#e#b推文留言ID :　『　#r" + player.getAccountId() + "#b　』#n\r\n\r\n";
	selStr += "#r領取一次推文獎勵後需要隔【#e72小時#r#n】後再推才能再次領取\r\n";
	selStr += "#r推文獎勵:\r\n\r\n";
	selStr += "#r#v2431026#＊1－隨機10~30餘額\r\n";
	selStr += "#r#v2436277#＊6－隨機實用道具#b(可抽深淵、暴君、168戒指、V捲、X捲。";
	
for(var i = 0; i < menuList.length ; i++){
	if(i%4 == 0){
		selStr += "";
	}
	selStr += "\r\n#L" + menuList[i][1] + "#" + menuList[i][0] + "#l" + "  ";
}
let selected = npc.askMenu(selStr);

switch (selected){
	case 1:
		if ((new Date().getTime() - getDate().getTime()) < 1000 * 60 * 60 * 24 * 3) {
			npc.say("#b距離下次發帖時間還有 : " + SecondToDate(parseInt(((getDate().getTime() + 1000 * 60 * 60 * 24 * 3) - new Date().getTime()) / 60000) * 60));
                }
			player.openURL("http://www.168gamer.com/thread-606198-1-1.html#pad")
		break;
	case 2:
		if (open == true) {
			if(getIpCount()){
				npc.say("当前IP今日已领取奖励")
			}else{
				if (getCount() > 0) {
					UpdateCount()
					for (var key in itemList) {
						player.gainItem(itemList[key][0], itemList[key][1]);
					}
					npc.say("領取推文禮包成功！感恩");
				} else {
					npc.say("你已經領取過了168推文獎勵哦...\r\n請在" + SecondToDate(parseInt(((getDate().getTime() + 1000 * 60 * 60 * 24 * 3) - new Date().getTime()) / 60000) * 60) + " 後繼續發推文就可以領取獎勵了哦!!");
				}
			}
		} else {
			npc.say("您的賬號尚未登記,或帳號不符合資格")
		}
		break;
}
	
function getAccountIp() {
    let i = -1;
    let sql = "select * from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    let push = player.customSqlResult(sql);
	let name = "";
    if (push.size() > 0) {
        let result = push.get(0);
        name = result.get("recentip");
    }
    return name;
}	
		
function getIpCount(){
	
    var sql = "select * from log_168 where ip='" + getAccountIp() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
		return true;
    } else {
		return false;
    }
}

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
            pay = result.get("Cumulative");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return pay;
}

function gainHyPay(count) {
    let sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";   
    player.customSqlUpdate(sql, count);
}

function SecondToDate(msd) {
    var time = msd
    if (null != time && "" != time) {
        if (time > 60 && time < 60 * 60) {
            time = parseInt(time / 60.0) + "分鐘" + parseInt((parseFloat(time / 60.0) -
                parseInt(time / 60.0)) * 60) + "秒";
        }
        else if (time >= 60 * 60 && time < 60 * 60 * 24) {
            time = parseInt(time / 3600.0) + "小時" + parseInt((parseFloat(time / 3600.0) -
                parseInt(time / 3600.0)) * 60) + "分鐘" +
                parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                    parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
        } else if (time >= 60 * 60 * 24) {
            time = parseInt(time / 3600.0 / 24) + "天" + parseInt((parseFloat(time / 3600.0 / 24) -
                parseInt(time / 3600.0 / 24)) * 24) + "小時" + parseInt((parseFloat(time / 3600.0) -
                    parseInt(time / 3600.0)) * 60) + "分鐘" +
                parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                    parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
        }
        else {
            time = parseInt(time) + "秒";
        }
    }
    return time;
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

function getAccountId() {
    var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
	var id = -1;
    if (push.size() > 0) {
        var result = push.get(0);
        id = result.get("id");
    }
    return id;
}

function getMessage(type) {//1.註冊日期,2網卡地址,3.機器碼
	var Message = -1;
	var sql = "select createdat,macs,dlqComputer from accounts where name = '" +getAccountName() + "'";
	var push = cm.customSqlResult(sql);
	if (push.size() > 0) {
		var result = push.get(0);
		if (type == 1) {
			Message = result.get("createdat");
		} else if (type == 2) {
			Message = result.get("macs");
		} else if (type == 3) {
			Message = result.get("dlqComputer");
		}
	}
	return Message;
}

function getCount() {
    var sql = "select * from log_168 where account='" + getAccountName() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("count");
    } else {
        player.customSqlInsert("INSERT INTO log_168(account,count,date,ip) VALUES ('" +getAccountName() + "',0,now(),'"+getAccountIp()+"')");
        return getCount();
    }
    return name;
}
function UpdateCount() {
    var sql = "update log_168 set count = count - 1,ip = '"+getAccountIp()+"' where account = '" + getAccountName() + "';";
    player.customSqlUpdate(sql);
}
function getDate() {
    var sql = "select * from log_168 where account='" + getAccountName() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var date = result.get("date");
    } else {
        player.customSqlInsert("INSERT INTO log_168(account,count,date) VALUES ('" + getAccountName() + "',0,'2000-01-01 00:00:00.0')");
        return getDate();
    }
    return date;
}