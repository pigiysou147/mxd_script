/**
 *	副本：外星访客 作者： QQ:739977676
 **/
let npcModal = 9390008;
let minPlayers = 1;
let maxPlayers = 3;
let minLevel = [50];
let maxLevel = [300];
let maxenter = [30];
let BossName = ["外星访客"];
let PQLog = ["wxfk"];
let event = ["JILI_WXFK"];
let onlyOne = true;
let startmap = 861000000;
if (map.getId() == startmap) {
    let text = "";
    for (let i = 0; i < BossName.length; i++) {
        text += "\r\n#b#L" + i + "#申请进入移动到#r<技能书副本：" + BossName[i] + " > #b剩余次数<#r"+(maxenter[0]-player.getPQLog(PQLog[0]))+"#b>#b#l#k";
    }
    let sel = npc.askMenu("#e<技能书副本:外星访客>#n\r\n\r\n#r只能一个人进入，通关会获得大量技能书哦！\r\n请保证背包'消耗栏','其他栏'有空余#b\r\n" + text, npcModal);
    if (party == null || player.getId() != party.getLeader()) {
        npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[sel] + "~" + maxLevel[sel] + "范围,\r\n那么请让你的组队长和我对话吧!", npcModal);
    } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", npcModal);
    } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
        npc.say("你队员的等级要在" + minLevel[sel] + "~" + maxLevel[sel] + "范围!请确认!", npcModal);
    } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
        npc.say("你队员#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]).getName() + "#n#k次数已经达到上限了。", npcModal);
    } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
        npc.say("已经有队伍在进行了,请更换其他频道尝试。", npcModal);
    }
} else {
    let ret = npc.askYesNo("#e<技能书副本:外星访客>#n\r\n\r\n你想要现在就离开这里吗？", npcModal);
    if (ret == 1) {
        player.changeMap(startmap);
    }
}