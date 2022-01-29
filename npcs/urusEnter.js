

let minPlayers = 1;
let maxPlayers = 6;
let minLevel = [220];
let maxLevel = [300];
let maxenter = [1];
let BossName = ["乌鲁斯副本"];
let PQLog = ["乌鲁斯"];
let event = ["UrusBOSS1"];
let onlyOne = true;
let startmap = 970072200;


if (map.getId() == startmap) {
	let text = "";
//if (player.hasItem(4031179,1)) {
	for (var i = 0; i < BossName.length; i++) {
            text += "\r\n#b#L" + i + "#"+BossName[i]+"#r#l";
        }
        let sel = npc.askMenu("#e#r请选择进入模式：#n\r\n" + "#b完成记录将在晚12点初始化"+ text);
		
		 if (party == null || player.getId() != party.getLeader()) {
                npc.sayNextE("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[sel] + "~" + maxLevel[sel] + "范围,\r\n那么请让你的组队长和我对话吧!", true);
        } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
                npc.sayNextE("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", true);
        } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
                npc.sayNextE("你队员的等级要在" + minLevel[sel] + "~" + maxLevel[sel] + "范围!请确认!", true);
        } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
                npc.sayNextE("好像有队员在其他地方，请把队员都召集到这里！", true);
        } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
                npc.sayNextE("你队员#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]).getName() + "#n#k次数已经达到上限了。", true);
        } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
                npc.sayNextE("已经有队伍在进行了,请更换其他频道尝试。", true);
        }
//} else {
 //       npc.sayNext("没有#z4031179#是无法进入时间塔的本源！");
//}

} 