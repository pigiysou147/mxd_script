/**
 *	副本：无限火力 作者： QQ:739977676
 **/

let npcModal = 9310060;
let minPlayers = 1;
let maxPlayers = 1;
let minLevel = [120];
let maxLevel = [300];
let maxenter = [2];
let BossName = ["无限火力"];
let PQLog = ["wxhl2019"];
let event = ["wxhl"];
let onlyOne = true;
while(true){
	let text = "";
	text += "\r\n#b#L0#开始无限火力挑战！(剩余 #r"+(maxenter[0]-player.getPQLog(PQLog[0]))+" #b次)#b#l#k";
	text += "\r\n#b#L1#查看无限火力排行榜#b#l#k";
	let sel = npc.askMenu("#e<单人副本极限挑战 - 无限火力>#n\r\n\r\n#b#h0# \n\#k准备好迎接挑战吧！#b\r\n" + text, npcModal);
	if(sel == 0){
		if (party == null || player.getId() != party.getLeader()) {
			npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[sel] + "~" + maxLevel[sel] + "范围,\r\n那麽请让你的组队长和我对话吧!", npcModal);
		} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
			npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", npcModal);
		} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
			npc.say("你队员的等级要在" + minLevel[sel] + "~" + maxLevel[sel] + "范围!请确认!", npcModal);
		} else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
			npc.say("你队员#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k次数已经达到上限了。", npcModal);
		} else if (npc.makeEvent(event[sel], onlyOne, player) == null) {
			npc.say("已经有队伍在进行了,请更换其他频道尝试。", npcModal);
		} else{
			break;
		}
	}else{
		
		let sql = "SELECT name,level,passDate from wxhl order by passDate desc";
		let push = player.customSqlResult(sql);
		
		text = "\t\t\t\t#e#d★ 无限火力排行 ★#k#n\r\n\r\n";
		text += "\t#e名次#n\t#e玩家昵称#n\t  #e关数#n\t   #e日期#n\r\n";
		for (let i = 0; i < push.size(); i++) {
			let signle = push.get(i);
			if (i == 0) {
				text += "#r";
			} else if (i == 1) {
				text += "#g";
			} else if (i == 2) {
				text += "#b";
			}
			text += "\r\n\t " + parseInt(i + 1) + "\t\t "; 
			// 填充名字空格
			text += signle.get("name");
			for (var j = 16 - signle.get("name").getBytes().length; j > 0; j--) {
				text += " ";
			}
			text += "" + signle.get("level");
			text += "\t   " + signle.get("passDate").toString().substring(0,10);
		}
		npc.say(text);
	}
}