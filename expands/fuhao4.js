var needList = Array(
	Array(4001618, 60),
	Array(4000000, 6000),
	Array(4000016, 6000),
	Array(4021016, 100),
	Array(4000124, 100),
	Array(4000313, 500),
	Array(4033356, 100)
);

var selStr = "#e#r只要你给我以下材料:#l\r\n";
for(var i = 0; i < needList.length; i++) {
	selStr += "#v" + needList[i][0] + "#x" + needList[i][1]+"\r\n";
}
selStr += "#e#r,我可以帮您升级到#v1190407##z1190407#\r\n\r\n";
selStr += "请把#v1190405#放在装备栏的第一格。";
let selection = npc.askYesNo(selStr);
if(selection == 1) {
	var item = player.getInventorySlot(1, 1);
	if(item == null) {
		npc.say("请把#v1190405#放在装备栏的第一格。");
	} else if(item.getDataId() != 1190405) {
		npc.say("请把#v1190405#放在装备栏的第一格。");
	} else {
		var flag = 1;
		for(var i = 0; i < needList.length; i++) {
			if(!player.hasItem(needList[i][0], needList[i][1])){
				flag = 0;
			}
				
		}
		if(flag == 1) {
			

			var toDrop = player.makeItemWithId(1190407);

			//设置潜能等级
			toDrop.setGrade(item.getGrade());
			//设置潜能
			toDrop.setOption( 1, item.getOption(1,false),false);
			toDrop.setOption( 2,item.getOption(2,false), false);
			toDrop.setOption( 3, item.getOption(3,false),false);
			toDrop.setOption( 1,item.getOption(1,true), true);
			toDrop.setOption( 2, item.getOption(2,true),true);
			toDrop.setOption( 3, item.getOption(3,true),true);
			

			toDrop.setStr(40); //装备力量
			toDrop.setDex(40); //装备敏捷
			toDrop.setInt(40); //装备智力
			toDrop.setLuk(40); //装备运气
			toDrop.setPad(40); //魔法攻击
			toDrop.setMad(40); //物理攻击 
			toDrop.setTitle("S等级BOSS");
			player.loseInvSlot(1, 1); //移除物品栏第一格的物品
			player.gainItem(toDrop)
			for(var i = 0; i < needList.length; i++) {
				player.loseItem(needList[i][0],needList[i][1]);
			}
			
			player.gainMesos(200000000);
			
			player.gainItem(2340000,88);     //祝福卷轴
			player.gainItem(4001839,10000);  //星星
			player.gainItem(5220040,40);     //转蛋卷
			player.gainItem(2049116,88);     //强混
			player.gainItem(2049604,8);      //还原
			player.gainItem(5062503,88);     //附加记忆魔方
			
			
			npc.say("成功升级到S等级BOSS竞技场徽章。");
			npc.broadcastGachaponMsgEx( "[符号升级] : 恭喜 " + player.getName() + " 升级到<S等级BOSS竞技场徽章>获得全属性+40的符号证明.",toDrop);
		} else {
			npc.say("你的材料不够哦,请检查一下！");
		}
	}

}