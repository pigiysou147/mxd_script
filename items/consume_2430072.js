/**
 *	副本：無限火力 作者： QQ:739977676
 **/

let npcModal = 9310060;
let minPlayers = 1;
let maxPlayers = 1;
let minLevel = [120];
let maxLevel = [300];
let maxenter = [1];
let BossName = ["無限火力"];
let PQLog = ["wxhl2019"];
let event = ["wxhl"];
let onlyOne = true;
while(true){
	player.resetPQLog(PQLog)
	let text = "";
	text += "\r\n#b#L0#開始無限火力挑戰！(剩余 #r"+(maxenter[0]-player.getPQLog(PQLog[0]))+" #b次)#b#l#k";
	text += "\r\n#b#L1#查看無限火力排行榜#b#l#k";
	let sel = npc.askMenu("#e<單人副本極限挑戰 - 無限火力>#n\r\n\r\n#b#h0# \n\#k準備好迎接挑戰吧！#b\r\n" + text, npcModal);
	if(sel == 0){
		if (party == null || player.getId() != party.getLeader()) {
			npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍,\r\n那麼請讓你的組隊長和我對話吧!", npcModal);
		} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
			npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", npcModal);
		} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
			npc.say("你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍!請確認!", npcModal);
		} else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
			npc.say("你隊員#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]).getName() + "#n#k次數已經達到上限了。", npcModal);
		} else if (npc.makeEvent(event[sel], onlyOne, player) == null) {
			npc.say("已經有隊伍在進行了,請更換其他頻道嘗試。", npcModal);
		} else{
			break;
		}
	}else{
		
		let sql = "SELECT wxhl.id, wxhl.`name`, wxhl.`level`, wxhl.passDate FROM wxhl RIGHT JOIN characters ON characters.`name` = wxhl.`name` WHERE characters.gm = 0 AND wxhl.id IS NOT NULL order by level desc";
		let push = player.customSqlResult(sql);
		
		text = "\t\t\t\t#e#d★ 無限火力排行 ★#k#n\r\n\r\n";
		text += "\t#e名次#n\t#e玩家昵稱#n\t  #e關數#n\t   #e日期#n\r\n";
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
			for (var j = 16 - signle.get("name").length; j > 0; j--) {
				text += " ";
			}
			text += "" + signle.get("level");
			text += "\t   " + signle.get("passDate").toString().substring(0,10);
		}
		npc.say(text);
	}
}