/* @Author SharpAceX
*/

 
	switch(map.getId()) {
		case 610030500:
        		npc.say("每个飞侠都知道,最好的攻击是一个你永远不会看到。来说明这,你会在与平台和室壁板以匆忙,你只能得到,以及洞悉一切的眼睛,你的匕首或爪必须关闭,永久。毕竟洞悉一切的眼睛已经消除,让ti小偷雕像,声称原始爪!好运！");
			break;
		case 610030000:
			npc.say("一旦被称为“影子的王子”,大师亮拥有最高速度和力量与短程的匕首和连锁爪。兼职Bosshunters份子,他reowned融入骑士本身无与伦比的能力。他的传说长大与深红色炎时,他感动得太迅速,炎的攻击只有空气。偶尔也表现良“检索”对那些比他更不幸。");
			break;
		case 610030530:
			var event = npc.getEvent("CWKPQ"); 
			if (event != null) {
				if (parseInt(event.getVariable("glpq5_1"))== 5 && !player.hasItem(4001256, 1)) {
						player.gainItem(4001256,1);
						npc.say("恭喜你完成任务！");
					} else {
						npc.say("现在就去清理掉所有警惕的眼睛。当你完成任务的时候再来找我。"+parseInt(event.getVariable("glpq5_1")));
					}
			}
			break;
	} 
