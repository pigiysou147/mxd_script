/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：武陵道场 NPC 萧公
 *  
 *  @Author Jackson 
 */

/* global cm */

var status = -1;
var sel = -1;
var normLimit = 2;
var rankLimit = 2;
var open = true;

let minPlayers = 1;
let maxPlayers = 6;
let minLevel = [180];
let maxLevel = [300];
let maxenter = [100];
let BossName = ["武陵"];
let PQLog = ["pq_dojang"];
let event = ["pq_dojang"];
var count=100;
let onlyOne = true;
let startmap = 221030900;
if(map.getId()!=925020001){
	var selection =npc.askYesNo("是否出去？");
	if(selection ==1){
		player.changeMap(925020001,0);
	}
}else{
	
		let text = "";
		for(let i = 0; i < BossName.length; i++) {
			text += "\r\n#b#L" + i + "#申请进入<Boss：" + BossName[i] + "> 进行入场申请#l#k";
		}
		let sel = npc.askMenu("#e<个人副本：武陵塔>#n\r\n\r\n特别的闯关模式哦，要不要来试试看！\r\n#L1##r购买武陵道场专用药#k#l\r\n #b" + text);
		if(sel==1){
			
			npc.sayNext("每天你有机会在我这里领取10瓶#v2438124##z2438124#，用于在武陵道场冲关的时候进行补给~");
			
			if(player.getPQLog("武陵药水")<1){
				player.addPQLog("武陵药水",1,1);
				player.gainItem(2438124,10);
				npc.say("领取成功");
			}
			
			
		}else{
			if(party == null || player.getId() != party.getLeader() ) {
					npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[sel] + "~" + maxLevel[sel] + "范围,\r\n那么请让你的组队长和我对话吧!");
			} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
                npc.sayNextE("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", true);
			}
			//  else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
			// 	npc.say("好像有队员在其他地方，请把队员都召集到这里！");
			// }
			 else if(player.getPQLog(PQLog)>=count){
				npc.say("武陵道场一天之内进入"+count+"次哦");
			}else if(npc.makeEvent(event[0], onlyOne, party) == null) {
				npc.say("已经有队伍在进行了,请更换其他频道尝试。");
			} else {
				if(!player.isQuestStarted(7214)) {
					player.startQuest(7214,0);
					player.updateQuestRecordEx(14981, "PCAdvantage", "0");
					player.updateQuestRecordEx(3847, "Result", "complete");
					player.updateQuestRecordEx(3848, "Floor", "0");
					player.updateQuestRecordEx(3848, "Time", "0");
					player.updateQuestRecordEx(3849, "Floor", "0");
					player.updateQuestRecordEx(3849, "Time", "0");
				}
				player.updateQuestRecordEx(3847, "Result", "start");
			}
		}
		

	
	
}