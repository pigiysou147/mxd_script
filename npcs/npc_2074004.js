

var weaponList = Array(
1403036,//法弗纳拳炮
1212063, //法弗纳魔力源泉杖
1222058, //法弗纳天使手铳
1232057, //法弗纳死亡使者
1242060, //法弗纳精神之刃
1242061, //法弗纳精神之刃
1252015, //法弗纳北极星魔法棒
1262016, //法弗纳ESP限制器
1272015, //法弗纳锁链
1282015, //法弗纳魔力手套
1302275, //法弗纳银槲之剑
1312153, //法弗纳双刃切肉斧
1322203, //法弗纳戈耳迪锤
1332225, //法弗纳大马士革剑
1342082, //法弗纳急速之刃
1362090, //法弗纳洞察手杖
1372177, //法弗纳魔力夺取者
1382208, //法弗纳魔冠之杖
1402196, //法弗纳忏悔之剑
1412135, //法弗纳战斗切肉斧
1422140, //法弗纳闪电锤
1432167, //法弗纳贯雷枪
1442223, //法弗纳半月宽刃斧
1452205, //法弗纳追风者
1462193, //法弗纳风翼弩
1472214, //法弗纳危险之手
1482168, //法弗纳巨狼之爪
1492179, //法弗纳左轮枪
1522094, //法弗纳双风翼弩
1532098, //法弗纳荣耀炮
1542063, //法弗纳皇刀正宗
1552063, //法弗纳煌扇蓝姬
1582016, //法弗纳巨山
1592018  //法弗纳远古弓
);




var txt="如果你有不想要的FFN武器，你可以来我这里换一个自选箱子。\r\n";
txt+="#r把你不想要的FFN武器放在装备栏第一个格子，就可以给你回收换一个自选箱子哦";
npc.sayNext(txt);
var item =player.getInventorySlot(1,1);
if(item==null){
	npc.say("请把武器放在第一个格子里面");
}else{
	var flag=0;
	
	for(var i=0;i<weaponList.length;i++){
		if(weaponList[i]==item.getDataId()){
			flag=1;
		}
	}
	if(flag==1){
		let sel = npc.askYesNo("确定要使用#v"+item.getDataId()+"#来兑换FFN箱子吗？" );
		if(sel==1){
			if(player.canGainItem(2434007,1)){
				player.loseInvSlot(1,1);
				player.gainItem(2434007,1);
				npc.say("兑换成功");
			}else{
				npc.say("请清理包裹~");
			}
			
		}
	}else{
		npc.say("该物品不符合兑换资格。");
	}
}






