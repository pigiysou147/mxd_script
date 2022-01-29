/**
* 泡点奖励
**/

var pdnum = 20;//普通泡点数量
var pdmap = [
	910000000,
224000000,
809030000
];//泡点地图

var spMap=[
	//角色名字  地图ID   BGM路径
	
	
   
   ['玲姿0o',809000201,"Bgm00.img/FloralLife"],	
   ['回忆',993176808,"Bgm00.img/FloralLife"],
   ['丧心病狂c',924010300,"Bgm00.img/FloralLife"],	
   ['木槿大魔王',924010300,"Bgm00.img/FloralLife"],	
   ['特仑苏',927020070,"Bgm00.img/FloralLife"],	
   ['吃瓜的兔子',809000101,"Bgm00.img/FloralLife"],	
   
   ['ZUN',800024000,"Bgm00.img/FloralLife"],
   ['无痕公子',101050010,"Bgm00.img/FloralLife"],	
   ['小蘑菇',993176808,""]
];
var flag=0;
//普通泡点地图
for(var i=0;i<pdmap.length;i++){
	if(map.getId()==pdmap[i]){
		flag=1;
		break;
	}
}

for(var i=0;i<spMap.length;i++){
	if(map.getId()==spMap[i][1]){
		flag=2;
		break;
	}
}
if(player.getChannel()!=1){
	flag=0;
}

if(flag==1){
	//泡点地图
	if(player.hasItem(2436363,1)){
		//会员泡点
		player.addPQLog("活力",10,999);
		player.modifyCashShopCurrency(1,pdnum*2);
		player.modifyCashShopCurrency(2,pdnum*2);
		player.showSystemMessage("[会员泡点]: 获得 10 活力！");
		player.showSystemMessage("[会员泡点]: 获得 "+pdnum*2+" 点券！");
		player.showSystemMessage("[会员泡点]: 获得 "+pdnum*2+" 抵用！");
	}else{
		player.addPQLog("活力",5,999);
		player.modifyCashShopCurrency(1,pdnum);
		player.modifyCashShopCurrency(2,pdnum);
		player.showSystemMessage("[泡点]: 获得 5 活力！");
		player.showSystemMessage("[泡点]: 获得 "+pdnum+" 点券！");
		player.showSystemMessage("[泡点]: 获得 "+pdnum+" 抵用！");
	}
	
}else if(flag==2){
	
var potList = Array(
	Array(-1, "帽子", 0),
	Array(-2, "前额", 0),
	Array(-3, "脸饰", 0),
	Array(-4, "耳饰", 0),
	Array(-5, "衣服", 0),
	Array(-6, "短裤", 0),
	Array(-7, "鞋子", 0),
	Array(-8, "手套", 0),
	Array(-9, "披风", 0),
	Array(-29, "腰带", 0),
	Array(-30, "肩部", 0),
	Array(-37, "符号", 0),
	Array(-36, "徽章", 0),
	Array(-26, "奖牌", 0),
	Array(-17, "吊坠", 1),
	Array(-38, "吊坠", 2),
	Array(-10, "副手", 0),
	Array(-11, "武器", 0),
	Array(-12, "戒指", 1),
	Array(-13, "戒指", 2),
	Array(-15, "戒指", 3),
	Array(-16, "戒指", 4),
	Array(-27, "戒指", 5),
	Array(-28, "戒指", 6),
	Array(-33, "口袋", 0),
	Array(-34, "机器", 0),
	Array(-35, "心脏", 0),
	Array(-5000, "图腾", 1),
	Array(-5001, "图腾", 2),
	Array(-5002, "图腾", 3),
	Array(-1600, "神秘", 1),
	Array(-1601, "神秘", 2),
	Array(-1602, "神秘", 3),
	Array(-1603, "神秘", 4),
	Array(-1604, "神秘", 5),
	Array(-1605, "神秘", 6)
);


	//特权地图里面，判定自己的累计充值够不够3W以上
	var leiji =getHyPay();
	var hy=[
		4440300,
		4441300,
		4442300,
		4443300,
		4440300,
		4441300,
		4442300,
		4443300
	];
	var pt=[
		
		4008000,
		4008001,
		4008002,
		4008003,
		4008000,
		4008001,
		4008002,
		4008003
	];
	
	var totalJl=0;
	for(var i=0;i<potList.length;i++){
		var zb =player.getInventorySlot(-1,potList[i][0]);
		if(zb!=null){
			//第1条
			if(zb.getOption(1,false)==40650){
				totalJl+=20;
			}else if(zb.getOption(1,false)==42650){
				totalJl+=5;
			}
			
			//第2条
			if(zb.getOption(2,false)==40650){
				totalJl+=20;
			}else if(zb.getOption(2,false)==42650){
				totalJl+=5;
			}
			
			//第3条
			if(zb.getOption(3,false)==40650){
				totalJl+=20;
			}else if(zb.getOption(3,false)==42650){
				totalJl+=5;
			}
			
			//第1条
			if(zb.getOption(1,true)==40650){
				totalJl+=20;
			}else if(zb.getOption(1,true)==42650){
				totalJl+=5;
			}
			
			//第2条
			if(zb.getOption(2,true)==40650){
				totalJl+=20;
			}else if(zb.getOption(2,true)==42650){
				totalJl+=5;
			}
			
			//第3条
			if(zb.getOption(3,true)==40650){
				totalJl+=20;
			}else if(zb.getOption(3,true)==42650){
				totalJl+=5;
			}

		}
	}

	var bl=1;
	if(totalJl>=400 && totalJl<800){
		bl=1.5;
	}else if(totalJl>=800 && totalJl<1200){
		bl=2;
	}else if(totalJl>=1200 ){
		bl=3;
	}
	if(leiji>=30000){
		//特权玩家本身
		player.gainMesos(250000*bl);
		player.gainItem(2614056,3);
		player.gainItem(hy[ Math.floor(Math.random() * hy.length)],1);
		player.gainExp(1000000000);
		player.showSystemMessage("[至尊特权玩家泡点]: 获得 3W突破 "+(250000*bl)/10000+" W金币以及随机C级能力宝石一个！ 10E经验");
	}else{
		//特权玩家允许共同泡点的普通玩家
		player.gainMesos(80000*bl);
		player.gainItem(2614056,1);
		player.gainItem(pt[ Math.floor(Math.random() * pt.length)],1);
		player.showSystemMessage("[玩家泡点]: 获得 1W突破  "+(250000*bl)/10000+" W金币  以及随机能力宝石粉末一个！");
	}
	
	
}


function getHyPay() {

	var sql = "select leiji from hypay where accountid = ? ";

	var result = player.customSqlResult(sql, player.getAccountId());

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("leiji");
		}
	} else {
		return 0;
	}

}