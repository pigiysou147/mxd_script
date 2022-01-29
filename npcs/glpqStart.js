let minPlayers = 1;
let maxPlayers = 6;
var minLevel = [230];
var maxLevel = [300];
let maxenter = [1111]; 
var PQLog = ["绯红组队任务"];
let event = ["CWKPQ"];
let onlyOne = true;
 //开始的地图
 let checkLimit = 0;
let warn = false;
 //开始的地图
var startmap = 610030020;
var text = "";
for (var i = 0; i < PQLog.length; i++) {
	text += "\r\n#b#L" + i + "#挑战" + PQLog[i] + "   "+player.getPQLog(PQLog[i])+"/"+maxenter[i]+"#l";
}
text += "\r\n\r\n#r#L1#购买任务物品#l";
let sel = npc.askMenu("#e<Boss - " + PQLog[0] + ">#n\r\n\r\n#b#h0# \n\#k你现在想和队友一起挑战这个BOSS副本吗?\r\n" + text);
if(sel==1){
	var itemList = Array(
		4001256,
		4001257,
		4001258,
		4001259,
		4001260
		);
		text="\r\n\r\n以下是任务需要的物品。每样5000点券一个大甩卖~\r\nPS:任务需要以下物品各一个哦\r\n"
	for(var i=0;i<itemList.length;i++){
		text+="#L"+i+"##v"+itemList[i]+"##z"+itemList[i]+"##l\r\n";
	}
	let selection =npc.askMenuS(text);
	if(player.getCashShopCurrency(1)<5000){
		npc.say("点券不够，需要5000点券才能购买");
	}else{
		player.modifyCashShopCurrency(1,-5000);
		player.gainItem(itemList[selection],1);
		npc.say("#v"+itemList[selection]+"#购买成功。");
	}
}else{
	
	if (party == null || player.getId() != party.getLeader()) {
		npc.sayNext("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[sel] + "~" + maxLevel[sel] + "范围,\r\n那么请让你的组队长和我对话吧!", true);
	}else if(checkLimitBreak()!=0){
		if(checkLimitBreak() ==1){
			npc.say("此副本需要检查破功值,请佩戴好武器.");
		}else if(checkLimitBreak() ==2){
			npc.say("此副本需要破攻上限值为:"+checkLimit+"才能进入副本.");
		}
	}else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
			npc.sayNext("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", true);
	} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
			npc.sayNext("你队员的等级要在" + minLevel[sel] + "~" + maxLevel[sel] + "范围!请确认!", true);
	}else if(party.numberOfMembersInChannel() < party.getMembersCount()){
			npc.say("好像你有队员在其他地方,请把队员都召集到这里!");
	} else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
			npc.sayNext("你队员#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]).getName() + "#n#k次数已经达到上限了。", true);
	} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
			npc.sayNext("已经有队伍在进行了,请更换其他频道尝试。", true);
	}else{
		if(warn){
			npc.broadcastPlayerNotice(8,"[BOSS提示] : " + player.getName() + " 队伍人数："+party.getMembersCount()+" 进入了 ["+PQLog[sel]+"]副本。");
		}
	}
}	

 //返回 0 正常 1没有佩戴武器 2破攻上限不够
function checkLimitBreak(){
	var flag = 0;
	if(checkLimit!=0){
		var item = player.getInventorySlot(-1, -11);
		if(item==null){
			flag = 1;
		}else if(item.getLimitBreak()<checkLimit){
			flag = 2;
		}
	}
	return flag;
} 
	 
 