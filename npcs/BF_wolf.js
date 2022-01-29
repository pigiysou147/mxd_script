/**
 *	副本：經驗副本 作者： QQ:739977676
 **/

let npcModal = 9310060;
let minPlayers = 1;
let maxPlayers = 1;
let minLevel = [120];
let maxLevel = [250];
let maxenter = [2];
let BossName = ["經驗副本"];
let PQLog = ["經驗副本"];
let event = ["Event_Exp"];
let onlyOne = true;
while(true){
	let text = "";
	text += "\r\n#b#L0#開始經驗副本挑戰！(剩余 #r"+(maxenter[0]-player.getPQLog(PQLog[0]))+" #b次)#b#l#k";
	let sel = npc.askMenu("#e<單人副本極限挑戰 - 經驗副本>#n\r\n\r\n#b#h0# \n\#k準備好迎接挑戰吧！#b\r\n" + text, npcModal);
	if(sel == 0){
		if (party == null || player.getId() != party.getLeader()) {
			npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍,\r\n那麼請讓你的組隊長和我對話吧!", npcModal);
		} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
			npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", npcModal);
		} else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
			npc.say("你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍!請確認!", npcModal);
		} else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
			npc.say("你隊員#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k次數已經達到上限了。", npcModal);
		} else if (npc.makeEvent(event[sel], onlyOne, player) == null) {
			npc.say("已經有隊伍在進行了,請更換其他頻道嘗試。", npcModal);
		} else{
			break;
		}
	}
}