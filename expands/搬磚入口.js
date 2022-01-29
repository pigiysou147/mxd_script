/**
 *	副本：搬磚副本 作者： QQ:739977676
 **/

let npcModal = 9310060;
let minPlayers = 1;
let maxPlayers = 1;
let minLevel = [120,120];
let maxLevel = [300,300];
let maxenter = [200,200];
let BossName = ["搬磚副本1","搬磚副本2"];
let PQLog = ["banzhuan1","banzhuan2"];
let event = ["JILI_BZ11","JILI_BZ21"];
let onlyOne = true;
let text = "";

for (let i = 0; i < BossName.length; i++) {
	text += "\r\n#b#L" + i + "#申請進入移動到#r< 搬磚副本：" + BossName[i] + "> #b剩余次數:#r"+(maxenter[i]-player.getPQLog(PQLog[i]))+"#b#l#k";
}
let sel = npc.askMenu("#e<個人副本 - 搬磚副本>#n\r\n\r\n#b#h0# \n\#k思考如何使用有限的時間獲取最大的利益！#b\r\n" + text, npcModal);
let ran = Math.floor(Math.random() * 8999 + 1000);
let num = npc.askNumber("#b請輸入密碼(防掛機)\r\n#r密碼:"+ran,"1",1,9999999);
if(num == ran){
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
	}
}else{
	npc.say("密碼輸入錯誤，無法進入！");
}