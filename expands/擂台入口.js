/**
 *	副本：擂台 作者：幾里 QQ：315342975
 **/
let npcModel = 2042005;
let minPlayers = 2;
let maxPlayers = 6;
let minLevel = [220];
let maxLevel = [300];
let maxenter = [50];
let BossName = ["擂台"];
let PQLog = ["JILI_JNH"];
let event = ["JILI_JNH"];
let onlyOne = true;
let startmap = 980030000;
let useTicket = 0;//是否需要入場券 (寫0不需要) 是否消耗請在事件里改
if (map.getId() == startmap) {
    let text = "";
    for (let i = 0; i < BossName.length; i++) {
        text += "\r\n#b#L" + i + "#申請進入到#r<娛樂副本：" + BossName[i] + " > #b剩餘次數<#r"+(maxenter[0]-player.getPQLog(PQLog[0]))+"#b>#b#l#k";
    }

    let sel = npc.askMenu("#e<娛樂副本：擂台>#n\r\n\r\n#b副本介紹：#r系統將會將您的隊伍隨機分成兩組。\r\n#b勝利者：#r可獲得#v2435153#星力強化道具*2、500萬楓幣\r\n並且有機會抽到#v4000038#*1\r\n#b失敗者：#r可獲得100萬楓幣\r\n#b雙方平局：#r可獲得#v2435153#星力強化道具*1、300萬楓幣" + text, npcModel);
    if (party == null || player.getId() != party.getLeader()) {
        npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍,\r\n那麼請讓你的組隊長和我對話吧!", npcModel);
    } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", npcModel);
    } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
        npc.say("你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍!請確認!", npcModel);
    } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
        npc.say("你隊員#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]).getName() + "#n#k次數已經達到上限了。", npcModel);
    } else if (useTicket != 0 && !party.isAllMembersHasItem(useTicket, 1)) {
			npc.say("你隊員#r#e" + party.getNotHasItemMember(useTicket, 1) + "#n#k沒有#i" + useTicket + "##t" + useTicket + "#,請確認!\r\n需前往餘額商城購買1張#v2435212#，購買以後進場不會消耗掉，可永久使用。每日在線獎勵以及次元入侵都有贈送餘額哦！", npcModel);
	} else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
        npc.say("已經有隊伍在進行了,請更換其他頻道嘗試。", npcModel);
    }
} else {
    let ret = npc.askYesNo("#e<娛樂副本：擂台>#n\r\n\r\n你想要現在就離開這裡嗎？", npcModel);
    if (ret == 1) {
        player.changeMap(startmap);
    }
}