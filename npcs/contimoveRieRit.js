/*  This is mada by Yanran    
 *
 *  功能：主题副本 - [列娜海峡]传送NPC
 *
 *  @Author Yanran
 */
let warp = Array(Array(141000100, 0, "移动到#e主题副本：列娜海峡#n"), Array(104000000, 800, "移动到金银岛。"));
let text = "你想离开这个地方吗？想去哪里？\r\n\r\n#b";
for (let i = 0; i < warp.length; i++) {
        text += "\r\n#L" + i + "#" + warp[i][2] + "";
}
let selection = npc.askMenu(text);
if (player.hasMesos(warp[selection][1])) {
        player.loseMesos(warp[selection][1]);
        player.changeMap(warp[selection][0], 0);
} else {
        npc.say("手续会收取#r" + warp[selection][1] + "#k金币，有足够的金币在来找我把。");
}