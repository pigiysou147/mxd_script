/*  This is mada by Yanran    
 *
 *  功能：[消亡旅途]安息洞穴 - 阿勒玛洞穴
 *
 *  @Author Yanran
 */

let event = npc.getEvent("boss_alema");
if (event != null && event.getVariable("boss1") == null) {
	let boss = map.makeMob(8641010);
	event.setVariable("boss1", false);
	boss.changeBaseHp(1500000000000);
	map.spawnMob(boss, 708, 177);

}
