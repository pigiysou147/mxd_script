var tz12 = "#fEffect/CharacterEff/1112905/0/1#"; //黄星

var kkkbak1 = "#fMap/MapHelper.img/weather/rose/0#"; ////美化2
var bk1 = "#fEffect/ItemEff.img/1004532/effect/default/4#"
var bk2 = "#fEffect/ItemEff.img/1004475/effect/jump/0#"
var bk3 = "#fEffect/ItemEff.img/1004435/effect/alert/0#"
var bk4 = "#fEffect/ItemEff.img/1004477/effect/prone/1#"
var bk5 = "#fEffect/ItemEff.img/1004436/effect/default/3#"
var bk6 = "#fEffect/ItemEff.img/1004437/effect/walk1/0#"
var sg1 = "#fEffect/ItemEff.img/2022109/1#"
var sg2 = "#fEffect/ItemEff.img/2022109/2#"
var zx = "#fEffect/ItemEff.img/1003492/effect/default/1#"
var lj = "#fEffect/ItemEff.img/1003493/effect/default/1#"
var dq = "#fEffect/ItemEff.img/1003494/effect/default/1#"
var ye = "#fEffect/ItemEff.img/1003495/effect/default/0#"
var fg = "#fEffect/ItemEff.img/1004124/effect/ladder/1#"
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var xtb1 = "#fEffect/CharacterEff.img/1003249/0/0#" //第一排
var xtb2 = "#fEffect/CharacterEff.img/1003249/1/0#" //第二排
var xtb3 = "#fEffect/CharacterEff.img/1003252/0/0#" //第三排
var xtb4 = "#fEffect/CharacterEff.img/1112900/3/1#" //第四排
var zzz = "#fUI/UIWindowGL.img/FeedbackSystem/backgrnd3#"
var 黄星 = "#fEffect/CharacterEff/1112924/0/0#"
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#"
var hii = "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"
var a1 = "#fEffect/ItemEff/1070069/effect/walk1/0#"
var a2 = "#fEffect/ItemEff/1070069/effect/walk1/1#"
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
var a4 = "#fEffect/ItemEff/1070069/effect/walk1/3#"
var a5 = "#fEffect/ItemEff/1070069/effect/walk1/4#"
var a6 = "#fEffect/ItemEff/1070069/effect/walk1/5#"
var a7 = "#fEffect/ItemEff/1070069/effect/walk1/6#"
var a8 = "#fEffect/ItemEff/1070069/effect/walk1/7#"
var ee = "#fEffect/CharacterEff/1003252/1/0#";
var eff1 = "#fEffect/CharacterEff/1112905/0/1#"; //小红心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系

var s1 = "#fUI/CashShop.img/CSEffect/number/1#"; //数字 后面改数字0-9
var s2 = "#fUI/CashShop.img/CSEffect/number/2#"; //数字 后面改数字0-9
var s3 = "#fUI/CashShop.img/CSEffect/number/3#"; //数字 后面改数字0-9
var s4 = "#fUI/CashShop.img/CSEffect/number/4#"; //数字 后面改数字0-9
var s5 = "#fUI/CashShop.img/CSEffect/number/5#"; //数字 后面改数字0-9
var s6 = "#fUI/CashShop.img/CSEffect/number/6#"; //数字 后面改数字0-9
var s7 = "#fUI/CashShop.img/CSEffect/number/7#"; //数字 后面改数字0-9
var s8 = "#fUI/CashShop.img/CSEffect/number/8#"; //数字 后面改数字0-9
var s9 = "#fUI/CashShop.img/CSEffect/number/9#"; //数字 后面改数字0-9
var txt = "\t\t#v3994074##v3994059##v3994072##v3994062##v3994059#  \r\n\r\n";
var lower = getMylower();
txt += "#e这里是推广中心\r\n您的邀请ID为:#r" + player.getAccountId() + "#k\r\n";
txt += "#b你在游戏里面已经遨游了#r"+getDays()+"#k#b天,见证过#r"+lower.size()+"#k#b位玩家在回忆岛成长#k\r\n";
txt += "#L0#" + s1 + " #b填写招募人ID #k#l\r\n";
txt += "#L1#" + s2 + " #r领取奖励（新老玩家领奖处）#k#l\r\n";
txt += "#L2#" + s3 + " #b查看我推荐过来的萌新们#k#l\r\n";
txt += "#L3#" + s4 + " #b推荐大使排行榜#k#l\r\n";
txt += "#L4#" + s5 + " #r领取我的推荐累计奖励#k#l\r\n";
txt += "#L5#" + s5 + " #r登记我的推广信息（否则无法使用自己的推广码）#k#l\r\n";
if(player.isGm()){
	
	txt += "#L6#" + s5 + " #r管理员审核推广信息#k#l\r\n";	
}
let selection = npc.askMenuS(txt);
if(selection == 0) {
	
	if(player.getLevel()>=270){
		npc.say("220级以上就不能成为被招募人了哦~");
	}else if(getEventCount("招募人登记")>0){
		npc.say("你的账号已经有角色登记成为招募人了哦~");
	}else{
		//填写招募人ID
		let oldid = npc.askNumber("#b请填写老玩家的推广ID#k:\r\n #r推广的ID可以去问老玩家获得哦~", 0, 0, 999999);
		var tuiList = getAccountById(oldid);
		if(tuiList.size() >= 1) {
			//如果存在
			
			let sel = npc.askYesNo("确认要成为该推广码的推广玩家吗?");
			if(sel == 1) {
				if(getEventCount("推广新玩家登记") > 0) {
					npc.say("你已经绑定过一个招募人了，请不要重复绑定");
				} else if(player.getAccountId() == oldid) {
					npc.say("不可以填自己的推广ID哦~");
				} else {
					setEventCount("推广新玩家登记", 0, 1);
					player.customSqlInsert("insert into tuiguang(old_accountid,old_charactername,new_accountid,new_charactername,thisstatus) values(?,?,?,?,?)", tuiList.get(0).get("accountid"), tuiList.get(0).get("charactername"), player.getAccountId(), player.getName(), 0);
					npc.say("你已经成为该推广码的推广玩家了哦~");
				}

			}

		} else {
			npc.say("输入的推广码不存在~请核实之后在输入哦~");
		}
	}
	
	
} else if(selection == 1) {

	var sql = "select id,old_accountid,old_charactername,new_accountid,new_charactername,thisstatus from tuiguang where (old_accountid=" + player.getAccountId() + " or new_accountid=" + player.getAccountId() + " )and thisstatus <4 ";
	var resultList = player.customSqlResult(sql);
	if(resultList.size() != 0) {
		var txt = "#e以下是与你有关的推广信息\r\n";
		for(var i = 0; i < resultList.size(); i++) {
			txt += "#b#L" + i + "# 老玩家:" + resultList.get(i).get("old_charactername") + " 新玩家:" + resultList.get(i).get("new_charactername");
			if(resultList.get(i).get("thisstatus") == 0) {
				txt += "(#g待新玩家确认完成任务#k)#l";
			} else if(resultList.get(i).get("thisstatus") == 1) {
				txt += "(#g待GM审核通过#k)#l";
			} else if(resultList.get(i).get("thisstatus") >= 2) {
				txt += "(#r可领取奖励#k)#l";
			}
			txt += "\r\n"
		}
		let pos = npc.askMenu(txt);
		var detail = resultList.get(pos).get("thisstatus");
		var oldid = resultList.get(pos).get("old_accountid");
		var tid = resultList.get(pos).get("id");
		if(detail == 0) {
			//新玩家未完成
			if(player.getAccountId() == oldid) {
				npc.say("请等待新玩家完成任务哦");
			} else {
				if(player.getLevel() >= 220 && getEventCount("萌新推广任务")<1) {
					//完成任务 ，改变该条状态为1
					setEventCount("萌新任务", 0, 1)
					player.customSqlUpdate("update tuiguang set thisstatus=thisstatus+1 where id ="+tid);
					npc.say("你已经完成了新手任务，请耐心等待GM审核哦");
				}else{
					npc.say("你还不满足完成推广任务的条件哦.\r\n #r条件为 ：\r\n 1.220级以上");
				}
			}
		} else if(detail == 1) {
			//新玩家已经完成
			npc.say("#bGM还未审核，无法领取#k \r\n #r如果新快速领取奖励，请将新老玩家的游戏账号和QQ号码私聊发送给群主通过审核#k");
		} else if(detail >= 2) {
			//GM已经审核
			if(getEventCount("推广" + tid) > 0) {
				npc.say("你已经领取过该条任务的奖励了~");
			} else {
				//领取奖励
				setEventCount("推广" + tid, 0, 1)
				//该条任务thisstatus+1
				player.customSqlUpdate("update tuiguang set thisstatus=thisstatus+1 where id ="+tid);
				if(player.getAccountId() == oldid) {
					//老玩家奖励
					player.gainItem(2432683,1);
					npc.say("老玩家奖励领取成功" );
				} else {
					//新玩家奖励
					player.gainItem(2432683,1);
					npc.say("新玩家奖励领取成功" );
				}
			}

		}
	} else {
		npc.say("没有与你有关的推广信息哦~");
	}
} else if(selection == 2) {
	var txt = "";
	
	if(lower.size() > 0) {
		var x = 0;
		 txt += "您目前推广的玩家如下:\r\n #r";
		for(var i = 0; i < lower.size(); i++) {
			var result = lower.get(i);
				if(result!=null){
					txt += (i + 1) + ":" + result.get("new_charactername")
				if(x == 4) {
					txt += "\r\n";
				} else {
					txt += "\t";
				}
				x++;
			}
			

		}
	
	} else {
		txt += "#r小老弟，你目前的推广人数为0哦  快去推广新玩家进来玩玩吧，有丰厚的奖励给您哦";
	}

	npc.say(txt);

} else if(selection == 3) {
	var resultList = getAllLower();
	var text = "\t\t\t\t#e#d★ 推广人数排行榜 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t#e玩家昵称#n\t\t\t#e推广人数#n\t\t #e #n\r\n";
	for(var i = 0; i < resultList.size(); i++) {
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
		text += result.get("old_charactername");
		for(var j = 18 - result.get("old_charactername").length; j > 0; j--) {
			text += " ";
		}
		text += "\t " + (result.get("count") ) + " 人";
		text += "\r\n";
	}
	npc.say(text);
} else if(selection == 4) {
	player.runScript("推广累计");
} else if(selection == 5) {
	if(player.getLevel()<250){
		npc.say("#r只有达到250级的强力玩家才可以登记成为招募者哦#k");
	}else{
		
		var sql = "select accountid,charactername from tuiguangren where accountid=" + player.getAccountId() + " ";
		var result = player.customSqlResult(sql);
		if(result.size() != 0) {
			npc.say("您的账号已经登记过了，请不要重复登记哦。");
		} else {
			setEventCount("招募人登记", 0, 1);
			player.customSqlInsert("insert into tuiguangren (accountid,charactername) values('" + player.getAccountId() + "','" + player.getName() + "')");
			npc.say("登记成功，你的推广码已经可以使用了。");
		}
	}
}else if(selection == 6) {
	var sql = "select id,old_accountid,old_charactername,new_accountid,new_charactername,thisstatus from tuiguang where  thisstatus =1 ";
	var resultList = player.customSqlResult(sql);
	if(resultList.size() != 0) {
		var txt = "#e以下是等待审核的推广信息\r\n";
		for(var i = 0; i < resultList.size(); i++) {
			txt += "#b#L" + i + "# 老玩家:" + resultList.get(i).get("old_charactername") + " 新玩家:" + resultList.get(i).get("new_charactername");
			 if(resultList.get(i).get("thisstatus") == 1) {
				txt += "(#g待GM审核通过#k)#l";
			}
			txt += "\r\n"
		}
		let pos = npc.askMenu(txt);
		var detail = resultList.get(pos).get("thisstatus");
		var oldid = resultList.get(pos).get("old_accountid");
		var tid = resultList.get(pos).get("id");
		let cho =npc.askYesNo("确定要通过审核吗？");
		if(cho==1){
			player.customSqlUpdate("update tuiguang set thisstatus=thisstatus+1 where id ="+tid);
			
			npc.say("审核成功~");
		}
		
	} else {
		npc.say("没有待审核的推广信息哦~");
	}
}


function getDays(){
	var sql = "select createdat from accounts where id=?";

	var result = player.customSqlResult(sql, player.getAccountId());
	regTime = java.sql.Timestamp.valueOf(result.get(0).get("createdat")).getTime();
	var days =parseInt((new Date().getTime() - regTime) / 86400000);
	if(days<1){
		return 1;
	}else{
		return days ;
	}
	
}

function getAccountById(accountid) {
	var sql = "select accountid,charactername from tuiguangren where accountid=" + accountid + " ";
	var result = player.customSqlResult(sql);

	return result;

}

function getMylower() {

	var sql = "select * from tuiguang where old_accountid=? and thisstatus>=2 ";
	var result = player.customSqlResult(sql,player.getAccountId());
	return result;

}

function getAllLower() {

	var sql = "select lower.old_accountid,lower.count,lower.old_charactername from (select count(id) count ,old_accountid,old_charactername from tuiguang where thisstatus>=2 group by old_accountid) as lower   ";
	var result = player.customSqlResult(sql);
	return result;
}

function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
		return 0;
	}

}

function setEventCount(eventName, type, value) {

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}