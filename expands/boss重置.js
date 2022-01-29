var nameList1 = Array(
	// -  PQ名字       限定次数   需要的余额------
	Array("品克缤", "Pinkbeen", 1),
	Array("混沌品克缤", "Pinkbeen_Chaos", 1),
	Array("森兰丸", "Ranmaru_Crazy", 1),
	Array("浓姬", "浓姬", 1),
	Array("希纳斯", "Shinas", 1),
	Array("普通血腥女王", "Bloody", 2),
	Array("进阶血腥女王", "Bloody_CHAOS", 1),
	Array("普通皮埃尔", "Pierre", 2),
	Array("进阶皮埃尔", "Pierre_CHAOS", 1),
	Array("普通半半", "Banban", 2),
	Array("进阶半半", "Banban_CHAOS", 1),
	Array("普通贝伦", "Bellum", 2),
	Array("进阶贝伦", "Bellum_CHAOS", 1),
	//Array("贝勒德", "Beidler", 2),
	Array("卡雄", "Caoong", 1),
	Array("阿勒玛", "阿勒玛", 50),
	Array("调和精灵", "调和精灵", 50)

);

var nameList2 = Array(

	Array("困难麦格纳斯", "Magnus_Hard", 50),
	Array("斯乌", "Siwu", 50),
	Array("困难斯乌", "Siwu_Chaos", 50),
	Array("乌鲁斯", "乌鲁斯", 50),
	Array("戴米安", "Demian", 50),
	Array("困难路西德", "Lucid_Hard", 80),
	Array("敦凯尔", "Dunkel", 80),
	Array("威尔", "Will", 80),
	Array("至暗魔晶", "Dusk", 80),
	Array("觉醒西拉", "JinHillah", 80),
	Array("黑魔法师", "BlackMage", 80)

);

var txt = "\r\n欢迎来到BOSS重置中心。\r\n\r\n";
txt += "#L0#重置普通BOSS（#r免费#k）\r\n\r\n";
txt += "#L1#重置进阶BOSS（#r高级BOSS#k）";
var name ="";
let selection = npc.askMenuS(txt);
if(selection == 0) {
	txt="";
	for(var i = 0; i < nameList1.length; i++) {
			name = nameList1[i][1];
			//player.resetPQLog(name);
			txt += "副本：#b"+nameList1[i][0] + "#k 已进入次数 ：#r"+player.getPQLog(nameList1[i][1])+" #k\r\n";
	}
	
	let sel= npc.askYesNo("是否免费重置以下副本：（#r一天之内只能重置1次哦#k）\r\n"+txt);
	
	if(sel==1){
		if(player.getPQLog("普通副本重置") < 1) { //副本重置
			var name = "";
			var txt = "";
	
			for(var i = 0; i < nameList1.length; i++) {
				name = nameList1[i][1];
				player.resetPQLog(nameList1[i][1]);
			}
			player.addPQLog("普通副本重置");
			npc.broadcastNotice("『理财服务』 ：玩家 " + player.getName() + " 在随身NPC里重置了全部副本任务。");
			npc.say("恭喜您使用理财服务的重置了以下副本\r\n\r\n");	
		} else {
			npc.say("您已经重置过普通副本了，请明日再来。");
	
		}
	}
	
} else {
	txt="";
	for(var i = 0; i < nameList2.length; i++) {
			
		txt += "#L"+i+"#副本：#b"+nameList2[i][0] + "#k 已进入次数 ：#r"+player.getPQLog(nameList2[i][1])+" #k消耗余额 ：#r"+nameList2[i][2]+" #k#l\r\n";
	}
	let choo = npc.askMenuS(txt);
	name = nameList2[choo][0];
	var pay =nameList2[choo][2];
	let sel= npc.askYesNo("是否消耗 #b"+pay+"#k 余额重置副本："+name+"（#r一天之内只能重置1次哦#k）\r\n");
	
	if(sel==1){
		if(player.getPQLog(name+"重置") > 1) { //副本重置
			npc.say("您已经重置过"+name+"副本了，请明日再来。");	
			
		}else if(getHyPay()<pay){
			npc.say("余额不足");
		} else {
			addHyPay(pay);
			var txt = "";
			player.resetPQLog(nameList2[choo][1]);
			setEventCount(nameList2[choo][1],1,1);
			
			setEventCount(nameList2[choo][1]+"today",3,1);
			
			player.addPQLog(name+"重置");
			npc.broadcastNotice("『理财服务』 ：玩家 " + player.getName() + " 在随身NPC里花费"+pay+"余额重置了"+name+"副本。");
			npc.say("恭喜您使用理财服务的重置了"+name+"副本\r\n\r\n");	
	
		}
	}
}
function getHyPay() {
	var sql = "select pay from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("pay");
		}
	} else {
		return 0;
	}

}

function addHyPay(price) {
	var sql = "update hypay set pay=pay-?,payused=payused+"+price+" where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}
function setEventCount(eventName, type, value) {

	var sql = "update accounts_event set type=?,value=value-? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value,player.getAccountId() , eventName);

}