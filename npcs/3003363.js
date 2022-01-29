
/**
 * 
 * @author 调和精灵 CC
 */
let npcM = 3003363;
let minPlayers = 1;
let maxPlayers = 1;
let minLevel = [250];
let maxLevel = [300];
let maxenter = [3];
let BossName = ["调和精灵"];
let PQLog = ["JILI_THJL"];
let event = ["JILI_THJL"];
let onlyOne = true;
let startmap = 940200330;
let useTicket = 0; //是否需要入场券 (写0不需要) 是否消耗请在事件里改

if (map.getId() == startmap) {//player.isGm() &&  
        let text = "";
        for (let i = 0; i < BossName.length; i++) {
                text += "\r\n#b#L" + i + "#申请进入<单人副本:" + BossName[i] + "> #r<剩余次数 "+(maxenter[i]-player.getPQLog(PQLog[i]))+">#l#k         ";
        }
        let sel = npc.askMenu("#e<单人副本：调和精灵>#n\r\n\r\n#b\n\#k如果不阻拦调和精灵，将会发生很可怕的事情.#r\r\n注意:#k该副本需要#r神秘之力#k达到#r360#k以上才能流畅通过！\r\n#r注意:每个账号一天只能领取一次奖励！" + text,npcM);
        if (party != null) {
			npc.say("你只能单人进去，不能组队哦！", npcM);
		} else if (player.getLevel() < minLevel[0]) {
			npc.say("你必须达到250级以上才可以挑战", npcM);
		} else if (player.getPQLog(PQLog[0])  >= maxenter[0]) {
			npc.say("进入次数已经达到上限了。", npcM);
		} else if (useTicket!=0 &&!player.hasItem(useTicket,1)){
			npc.say("你没有#v"+useTicket+"#,请确认!\r\n需前往余额商城购买1张#v2435212#，购买以后进场不会消耗掉，可永久使用。每日在线奖励以及次元入侵都有赠送余额哦！", npcM);
		} else if (npc.makeEvent(event[sel], onlyOne, player) == null) {
			npc.say("已经有队伍在进行了,请更换其他频道尝试。", npcM);
		}
} else {
    let ret = npc.askYesNo("#e<单人副本:调和精灵>#n\r\n\r\n你想要现在就离开这里吗？", npcM);
    if (ret == 1) {
        player.changeMap(startmap);
    }
}