
if (map.getId() == 610030500) {
    npc.say("令人难以置信的力量和权力,任何人都可以实现。但是战士什么特别之处是他们的钢铁意志。不管的,一个真正的战士推直到胜利是有保证的。因此,战士室是一个残酷的道路,房间本身就是对你不利,以及超强的怪物。使用你的技能来摆脱效果和击败怪物在到达武士雕像和索赔主剑。好运！");
} else if (map.getId()== 610030000) {
	npc.say("传奇家族的英雄,从 Vrisiens Stormcasters最初的创始人。家庭是独一无二的,因为每个儿子或女儿继承了祖先的全部战斗技巧。这种能力已经被证明是非常有用,因为它允许几乎无限的策略,即兴创作和战术击败所有的敌人。一个真正的家庭几代人。");
} else if (map.getId() == 610030510) {
	if (map.getEventMobCount()== 0) {
		if (!player.hasItem(4001259,1)) {
			player.gainItem(4001259,1);
		}
		player.changeMap(610030500,0);
	} else {
		npc.say("消除所有的深红色的怪物。"+map.getEventMobCount());
	} 
}
