/**
 *	副本：枫之高校 作者： QQ:739977676
 **/
let npcModel = 9330165;
let minPlayers = 1;
let maxPlayers = 6;
let minLevel = [220];
let maxLevel = [300];
let maxenter = [3];
let BossName = ["枫之高校"];
let PQLog = ["FSchool"];
let event = ["JILI_FSchool"];
let onlyOne = true;
let startmap = 744000000;
if (map.getId() == startmap) {
    let text = "";
    for (let i = 0; i < BossName.length; i++) {
        text += "\r\n#fs12##n#b#L" + i + "#申请进入到#r<图腾副本：" + BossName[i] + " > #b剩馀次数<#r"+(maxenter[0]-player.getPQLog(PQLog[0]))+"#b>#b#l#k";
    }
    let sel = npc.askMenu("#e<图腾副本:枫之高校>#n\r\n\r\n#b你现在想重回学生时代吗?\r\n#r通关可获得#v4310105#(5-10个)！\r\n#v4310105#可以在右边#b<保管箱>#r兑换和升级图腾\r\n\r\n#r#e#fs14#注意本副本怪物血量很厚\r\n输出不够者请跟人一起组队来打。" + text, npcModel);
    if (party == null || player.getId() != party.getLeader()) {
        npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[sel] + "~" + maxLevel[sel] + "范围,\r\n那麽请让你的组队长和我对话吧!", npcModel);
    } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
        npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", npcModel);
    } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
        npc.say("你队员的等级要在" + minLevel[sel] + "~" + maxLevel[sel] + "范围!请确认!", npcModel);
    } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
        npc.say("你队员#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]).getName() + "#n#k次数已经达到上限了。", npcModel);
    } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
        npc.say("已经有队伍在进行了,请更换其他频道尝试。", npcModel);
    }
} else {
    let ret = npc.askYesNo("#e<图腾副本:枫之高校>#n\r\n\r\n你想要现在就离开这裡吗？", npcModel);
    if (ret == 1) {
        player.changeMap(startmap);
    }
}