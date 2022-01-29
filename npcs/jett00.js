/**
 *	副本：外星訪客 作者： QQ:739977676
 **/
let npcModal = 9390008;
let minPlayers = 1;
let maxPlayers = 6;
let minLevel = [120];
let maxLevel = [300];
let maxenter = [2];
let BossName = ["外星訪客"];
let PQLog = ["wxfk"];
let event = ["JILI_WXFK"];
let onlyOne = true;
let startmap = 861000000;
if (map.getId() == startmap) {
    let text = "";
    for (let i = 0; i < BossName.length; i++) {
        text += "\r\n#b#L" + i + "#申請進入移動到#r<楓幣副本：" + BossName[i] + " > #b剩余次數<#r"+(maxenter[0]-player.getPQLog(PQLog[0]))+"#b>#b#l#k";
    }
    let sel = npc.askMenu("#e<楓幣副本:外星訪客>#n\r\n\r\n#r可以2~4人進入，通關會獲得大量楓幣哦！\r\n請保證背包'消耗欄','其他欄'有空間#b\r\n" + text, npcModal);
    if (party == null || player.getId() != party.getLeader()) {
        npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.並且等級在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍,\r\n那麽請讓你的組隊長和我對話吧!", npcModal);
    } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.say("你需要有一個#r" + minPlayers + "~" + maxPlayers + "#k人的隊伍.!", npcModal);
    } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) != party.getMembersCount()) {
        npc.say("你隊員的等級要在" + minLevel[sel] + "~" + maxLevel[sel] + "範圍!請確認!", npcModal);
    }else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) != party.getMembersCount() ) {
        npc.say("你有隊員不在地圖內。", npcModal);
    } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
        npc.say("你隊員#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k次數已經達到上限了。", npcModal);
    } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
        npc.say("已經有隊伍在進行了,請更換其他頻道嘗試。", npcModal);
    }
} else {
    let ret = npc.askYesNo("#e<楓幣副本:外星訪客>#n\r\n\r\n你想要現在就離開這裏嗎？", npcModal);
    if (ret == 1) {
        player.changeMap(910000000);
    }
}