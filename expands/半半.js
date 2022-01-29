
/**
 * 
 *  半半 QQ:739977676
 */
let npcM = 9900000;
let minPlayers = 1;
let maxPlayers = 6;
let minLevel = [220];
let maxLevel = [300];
let maxenter = [2];
let BossName = ["半半"];
let PQLog = ["半半"];
let event = ["JILI_Banban"];
let onlyOne = true;
let startmap = 105200000;
let useTicket = 4033611; //是否需要入場券 (寫0不需要) 是否消耗請在事件里改

if (map.getId() == startmap) {
        let text = "";
        for (let i = 0; i < BossName.length; i++) {
                text += "\r\n#b#L" + i + "#申請進入<Boss：" + BossName[i] + "> #r<剩余次數 "+(maxenter[i]-player.getPQLog(PQLog[i]))+">#l#k         ";
        }
        let sel = npc.askMenu("#e<Boss：半半>#n\r\n\r\n#b \n\#k如果不阻攔半半，將會發生很可怕的事情.#b\r\n" + text,npcM);
        if (party == null || player.getId() != party.getLeader()) {
                npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍,\r\n那麼請讓你的組隊長和我對話吧!",npcM);
        } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
                npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!",npcM);
        } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
                npc.say("你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍!請確認!",npcM);
        } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
                npc.say("你隊員#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]).getName() + "#n#k次數已經達到上限了。",npcM);
        } else if (useTicket != 0 && !party.isAllMembersHasItem(useTicket, 1)) {
			npc.say("你隊員#r#e" + party.getNotHasItemMember(useTicket, 1) + "#n#k沒有#i" + useTicket + "##t" + useTicket + "#,請確認!\r\n需前往余額商城購買1張#v2435212#，購買以後進場不會消耗掉，可永久使用。每日在線獎勵以及次元入侵都有贈送余額哦！", 2143004);
		} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
                npc.say("已經有隊伍在進行了,請更換其他頻道嘗試。",npcM);
        }
}