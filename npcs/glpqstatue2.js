/* @Author SharpAceX
*/

 
	switch(map.getId()) {
		case 610030500:
        		npc.say("作为一个强大的精英法师,骑知道情报的价值,一个向导的质量标志。因此,法师室是一个扭曲的迷宫的狡猾的概念——传送技能是唯一的技能可以使用内部解决,和魔法爪是唯一的技巧,将打破雕像。你也必须杀死无数的怪物。解决迷宫和击败所有敌人后,推断这法师雕像隐藏了员工的第一个魔法和把它打开声称它!好运！");
			break;
		case 610030000:
			npc.say("一个名字永远记得,拉斐尔是异常熟练的魔法师,和最重要的主精神魔法的力量,心灵遥感和心灵感应。除此之外,他是一个“精英法师谁掌握了所有的元素。他最后一次露面是在寻找“寺庙的元素来扭转入侵Krakian军队……");
			break;
		case 610030521:
			if (map.getEventMobCount()== 0) {
				if (!player.hasItem(4001257,1)) {
					player.gainItem(4001257,1);
				}
				player.changeMap(610030500,0);
			} else {
				npc.say("消除所有的深红色的怪物。"+map.getEventMobCount());
			} 
			break;
	} 
