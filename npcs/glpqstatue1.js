/* @Author SharpAceX
*/

 
	switch(map.getId()) {
		case 610030500:
        		npc.say("传奇生物被称为主监护人等着你。这是一个深红色的监护人,里德利曾经尝试,导致其成为高度抵抗魔法攻击,矛,钉头槌,一切——除了箭发射与非凡的力量。弓箭手和女人!作为无可争议的弓和箭的主人,你必须使用你的最强大的攻击——从扫射到飓风穿刺箭摧毁这个强大的生物,到达鲍曼雕像的祖先鞠躬!好运！");
			break;
		case 610030000:
			npc.say("唯一的已知的神圣的弓箭手,Lockewood是保持最著名的英雄之一。特别要注意的是他的定制的白色和金色的战斗barb,据说强大的女神的祝福。他的目标是长distanes非常准确。害怕和尊重为他“创世纪箭”和“厄运凤凰”,他曾经杀了六大喇叭谷的英雄。");
			break;
		case 610030540:
			if (map.getEventMobCount()== 0) {
				if (!player.hasItem(4001258,1)) {
					player.gainItem(4001258,1);
				}
				player.changeMap(610030500,0);
			} else {
				npc.say("消除所有的深红色的怪物。"+map.getEventMobCount());
			} 
			break;
	} 
