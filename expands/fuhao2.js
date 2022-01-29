var needList = Array(
	Array(4001618, 30),
	Array(4000000, 3000),
	Array(4000016, 3000),
	Array(4021016, 50),
	Array(4000124, 50),
	Array(4000313, 60),
	Array(1190401, 1),
	Array(4033356, 20)
);

var selStr = "#e#r只要你给我以下材料:#l\r\n";
for(var i = 0; i < needList.length; i++) {
	selStr += "#v" + needList[i][0] + "#x" + needList[i][1]+"\r\n";
}
selStr += "#e#r,我可以帮您升级到#v1190402##z1190401#\r\n\r\n";
selStr += "请把#v1190401#放在装备栏的第一格。";
let selection = npc.askYesNo(selStr);
if(selection == 1) {
	var item = player.getInventorySlot(1, 1);
	if(item == null) {
		npc.say("请把#v1190401#放在装备栏的第一格。");
	} else if(item.getDataId() != 1190401) {
		npc.say("请把#v1190401#放在装备栏的第一格。");
	} else {
		var flag = 1;
		for(var i = 0; i < needList.length; i++) {
			if(!player.hasItem(needList[i][0], needList[i][1]))
				flag = 0
		}
		if(flag == 1) {
			

			var toDrop = player.makeItemWithId(1190402);

			//设置潜能等级
			toDrop.setGrade(item.getGrade());
			//设置潜能
			toDrop.setOption( 1, item.getOption(1,false),false);
			toDrop.setOption( 2,item.getOption(2,false), false);
			toDrop.setOption( 3, item.getOption(3,false),false);
			toDrop.setOption( 1,item.getOption(1,true), true);
			toDrop.setOption( 2, item.getOption(2,true),true);
			toDrop.setOption( 3, item.getOption(3,true),true);
			

			toDrop.setStr(20); //装备力量
			toDrop.setDex(20); //装备敏捷
			toDrop.setInt(20); //装备智力
			toDrop.setLuk(20); //装备运气
			toDrop.setPad(20); //魔法攻击
			toDrop.setMad(20); //物理攻击 
			toDrop.setTitle("B等级BOSS");
			player.loseInvSlot(1, 1); //移除物品栏第一格的物品
			player.gainItem(toDrop)
			for(var i = 0; i < needList.length; i++) {
				player.loseItem(needList[i][0],needList[i][1]);
			}
			
			player.gainMesos(100000000);
			
			player.gainItem(2340000,30);       //zhufu 
			player.gainItem(4001839,3000);     //xingxing
			player.gainItem(5220040,20);       //zhuandan
			player.gainItem(2049116,30);       //强混
			player.gainItem(2049604,3);        //还原
			player.gainItem(5062503,30);       //附加记忆
			
			npc.say("成功升级到B等级BOSS竞技场徽章。");
			npc.broadcastGachaponMsgEx( "[符号升级] : 恭喜 " + player.getName() + " 升级到<B等级BOSS竞技场徽章>获得全属性+20的符号证明.",toDrop);
		} else {
			npc.say("你的材料不够哦,请检查一下！");
		}
	}

}