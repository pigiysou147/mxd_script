/*
武器屬性提升範本
大宝贝
QQ : 423283141
*/

var ax1 = "#fMap/MapHelper.img/minimap/match#";
var ax2 = "#fEffect/CharacterEff/1042176/2/0#";
var hd = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/8#";
var zb = "#fMap/MapHelper.img/weather/birthday/2#";
var yb = "#fMap/MapHelper.img/weather/birthday/5#";
var ItemList = Array(
	Array(1212129,1212120), //神秘之影双头杖 //创世双头杖
	Array(1222122,1222113), //神秘之影灵魂手铳//创世灵魂手铳
	Array(1232122,1232113), //神秘之影亡命剑 //创世亡命剑
	Array(1242139,1242121), //神秘之影能量剑 //创世聚能锁链剑
	Array(1242141,1242122), //神秘之影能量剑 //创世聚能锁链剑
	Array(1252106,1252098),	//神秘之影魔法槌//创世权杖
	Array(1262051,1262039), //神秘之影ESP限制器 //创世ESP限制器
	Array(1272040,1272017), //神秘之影锁链 //创世锁链
	Array(1282040,1282017), //神秘之影魔力手套 //创世魔力手套
	Array(1292022,1292018),//神秘之影草扇 //创世扇
	Array(1302355,1302343), //神秘之影单手剑//创世军刀
	Array(1312213,1312203), //神秘之影斧//创世斧
	Array(1322264,1322255), //神秘之影锤 //创世锤
	Array(1332289,1332279), //神秘之影匕首//创世短刀
	Array(1362149,1362140), //神秘之影手杖 //创世手杖
	Array(1372237,1372228), //神秘之影短杖 //创世短杖
	Array(1382274,1382265), //神秘之影长杖 //创世长杖
	Array(1402268,1402259), //神秘之影双手剑 //创世双手剑
	Array(1412189,1412181), //神秘之影双手战斧 //创世双手战斧
	Array(1422197,1422189), //神秘之影双手锤 //创世双手锤
	Array(1432227,1442274), //神秘之影矛 //创世枪
	Array(1442285,1432218), //神秘之影长枪 //创世长戟
	Array(1452266,1452257),	//神秘之影弓//创世弓
	Array(1462252,1462243), //神秘之影弩 //创世弩
	Array(1472275,1472265), //神秘之影拳套 //创世斗拳
	Array(1482232,1482221), //神秘之影指节 //创世拳爪
	Array(1492245,1492235), //神秘之影短枪//创世手铳
	Array(1522152,1522143), //神秘之影双弩枪//创世双弩枪
	Array(1532157,1532150), //神秘之影攻城炮 //创世攻城炮
	Array(1542128,1542117), //神秘之影武士刀 //创世武士刀
	Array(1552130,1552119), //神秘之影折扇 //创世扇子
	Array(1582044,1582023), //神秘之影机甲枪 //创世机甲枪
	Array(1592022,1592020) //神秘远古弓 //创世远古弓
);

//对应的神秘武器的列表
var smList ;
var need = 4033911;
var need_b = 4036457;
var SN;
var STR;
var DEX;
var INT;
var LUK;
var PAD; //物理伤害
var MAD; //魔法伤害
var BOSS;
var WS;
var HP;
var MP;
var times = 0;
var equip1 = player.getInventorySlot(1, 1); //获得装备栏 的第一个格子的道具 实例
var equip2 = player.getInventorySlot(1, 2); //获得装备栏 的第一个格子的道具 实例
var equip3 = player.getInventorySlot(1, 3); //获得装备栏 的第一个格子的道具 实例
if(equip1==null){

	npc.say("请在第一个格子放上装备");
}else{


var avail = "";
avail += "#b\t\t\t\t#v1442285#创世归一#v1442285#\r\n#k";
avail += "#fUI/Basic/LevelNo/1#"+"#r创世武器作为毕业武器，能够在基础属性再加上爆炸的属性\r\n";
avail += "#fUI/Basic/LevelNo/2#"+"创世归一需要相同创世武器一把或者10把同类种的神秘武器\r\n  才可进行归一.\r\n";
avail += "#fUI/Basic/LevelNo/3#"+"#r注意：把要合成的2把武器放在前2个格子里面！\r\n#k";
avail += "#fUI/Basic/LevelNo/4#"+"#b注意：第一个武器是强化的强化满了的主武器！\r\n#k";
var flag = 0;
var index = 0;
var itemid1 = equip1.getDataId();
	
for(var i = 0; i < ItemList.length; i++) {
	//同为神秘
	if(itemid1 == ItemList[i][0]) {
		index = i;
		flag++;
	}
}
if(equip1 != null) {
	avail += "第一格.#v" + equip1.getDataId() + "#";
	if(equip1.getCraft()==1){
		if(flag>0){
			avail+="#r已经进行过神秘归一#k";
		}else{
			avail+="#g装备不符合条件#k";
		}
		
	}else{
		avail+="#g尚未进行过神秘归一#k";
	}
}
if(equip2 != null) {
	avail += "第二格.#v" + equip2.getDataId() + "#";

}

if(equip1 != null) {
	if(equip1.getCraft()==1){
		if(flag>0){
			avail += "\r\n#L0##b我要合成创世武器！#l#k\r\n#k";
		}
		
	}else{
		avail += "\r\n#L1##b我要创世武器补充神秘归一！#l#k\r\n#k";
	}
}

let selection = npc.askMenu(avail, 3003757);


if(equip1 == null) {
	npc.say("请在装备栏第一个位置放上装备！");

} else {
	
	var smItem = ItemList[index][1];
	var needId = 0;
	var needCont = 1;
	if(equip2 == null) {
		needId = smItem;
		count = 10;
	}
	if(flag == 1) {
		if(selection==0){
		let sel = npc.askMenu("#b\t\t\t\t#v1442285#创世归一#v1442285#\r\n#k\r\n#e#r#L0#选择使用相同类种创世武器1把#v"+equip1.getDataId()+"#进行创世归一#l\r\n#L1#选择使用10把相同类种神秘武器#v"+ needId+"#进行创世归一#l\r\n\r\n\r\n");
				if(sel==0){
					if(equip2 != null) {
						if(equip2.getDataId() == equip1.getDataId() ) {
							if(equip1.getTitle()=="黑暗创世+50"){
								if(player.getAmountOfItem(need)<100){
									npc.say("需要材料#v"+need+"#X100");
								}else if(!player.hasMesos(50000000000)){
									npc.say("需要金币500E");
								}else {
									player.loseMesos(50000000000);
									player.loseItem(need,100);
									var random = Math.floor(Math.random() * 100);
									STR = equip1.getStr();
									DEX = equip1.getDex();
									INT = equip1.getInt();
									LUK = equip1.getLuk();
									PAD = equip1.getPad(); //物理伤害
									MAD = equip1.getMad(); //魔法伤害
									//替换掉属性
									//力量
									equip1.setStr(STR + 588);
									//敏捷
									equip1.setDex(DEX + 588);
									//智力
									equip1.setInt(INT + 588);
									//运气
									equip1.setLuk(LUK + 588);
									//攻击
									equip1.setPad(PAD + 588);
									//魔法攻击
									equip1.setMad(MAD + 588);
									equip1.setTitle("创世归一");
									player.loseInvSlot(1, 2);
									player.updateItem(1, equip1);
									npc.broadcastWeatherEffectNotice(0x6, "【创世归一】:  玩家 " + player.getName() + " 对创世武器进行了创世归一  ps:如果归一才是最终的归宿. 那么这把武器我也要归一!!!",15000);
									npc.broadcastGachaponMsgEx("【创世归一】 : 玩家 " + player.getName() + " 对创世武器进行了创世归一  ps:如果归一才是最终的归宿. 那么这把武器我也要归一!!!", equip1);
									npc.say("强化成功");
								}
							}else{
								npc.say("您的武器不符合归一条件哦.");
							}
							
						} else {
							npc.say("你需要把#v" + equip1.getDataId() + "# 放在装备格的第二个");
						}

					} else {
						npc.say("你需要把祭品#v" + equip1.getDataId() + "# 放在装备格的第二个");
					}
				}else if(sel==1){
					if(player.getAmountOfItem(smItem) < 10) {
						npc.say("请你准备好10把#v" + smItem + "# 之后再来找我吧");
					}else if( equip1.getTitle()!="黑暗创世+50"){
						npc.say("第一个格子的武器必须为强化满了的创世武器。");
					}else if(player.getAmountOfItem(need)<100){
						npc.say("需要材料#v"+need+"#X100");
					}else if(!player.hasMesos(50000000000)){
						npc.say("需要金币500E");
					}else {
						player.loseMesos(50000000000);
                        player.loseItem(need,100);
						var random = Math.floor(Math.random() * 100);
						STR = equip1.getStr();
						DEX = equip1.getDex();
						INT = equip1.getInt();
						LUK = equip1.getLuk();
						PAD = equip1.getPad(); //物理伤害
						MAD = equip1.getMad(); //魔法伤害
						//替换掉属性
						//力量
						equip1.setStr(STR + 588);
						//敏捷
						equip1.setDex(DEX + 588);
						//智力
						equip1.setInt(INT + 588);
						//运气
						equip1.setLuk(LUK + 588);
						//攻击
						equip1.setPad(PAD + 588);
						//魔法攻击
						equip1.setMad(MAD + 588);
						equip1.setTitle("创世归一");
						player.loseItem(smItem, 10);
						player.updateItem(1, equip1);
						npc.broadcastWeatherEffectNotice(0x6, "【创世归一】  玩家 " + player.getName() + " 对创世武器进行了创世归一  ps:如果归一才是最终的归宿. 那么这把武器我也要归一!!!",15000);
								
						npc.broadcastGachaponMsgEx("【创世归一】  玩家 " + player.getName() + " 对创世武器进行了创世归一  ps:如果归一才是最终的归宿. 那么这把武器我也要归一!!!", equip1);
						npc.say("强化成功");
					}
				}
		}else if(selection==1){
			//进行强化
			let sel = npc.askYesNo("#e#r是否需要进行神秘归一呢?神秘归一需求材料#v"+need+"#30个 以及 金币100E. \r\n\r\n如果需要请点是");
			if(sel == 1) {
				if(equip1.getTitle() != "黑暗创世+50") {
					npc.say("第一个格子的武器必须为强化满了的创世武器。");
				} else if(equip1.getCraft() < 1) {

					npc.sayNext("#e#r第一个格子必须为神秘继承的创世武器,且没有进行过神秘归一的创世武器才可以进行补充神秘归一. 现在为你进行神秘归一.");

					npc.sayNext("#e#r你需要3把#v" + smItem + "#来完成神秘归一,现在将识别背包内是否有3把相对应的武器");
					if(player.getAmountOfItem(smItem) < 3) {
						npc.say("请你准备好3把#v" + smItem + "# 之后再来找我吧");
					} else if(player.getAmountOfItem(need)<30){
						npc.say("需要材料#v"+need+"#X30");
					}else if(!player.hasMesos(10000000000)){
						npc.say("需要金币100E");
					}else {
						player.loseMesos(10000000000);
                        player.loseItem(need,30);
						STR = equip1.getStr();
						DEX = equip1.getDex();
						INT = equip1.getInt();
						LUK = equip1.getLuk();
						PAD = equip1.getPad(); //物理伤害
						MAD = equip1.getMad(); //魔法伤害

						//替换掉属性
						//力量
						equip1.setStr(STR + 188);
						//敏捷
						equip1.setDex(DEX + 188);
						//智力
						equip1.setInt(INT + 188);
						//运气
						equip1.setLuk(LUK + 188);
						//攻击
						equip1.setPad(PAD + 188);
						//魔法攻击
						equip1.setMad(MAD + 188);
						equip1.setCraft(1);
						player.loseItem(smItem, 3);
						player.updateItem(1, equip1);
						npc.broadcastWeatherEffectNotice(0x6, "【神秘归一】  玩家 " + player.getName() + " 对神秘武器进行了神秘归一  ps:如果归一才是最终的归宿. 那么这把武器我也要归一!!!",15000);
						
						npc.broadcastGachaponMsgEx("【神秘归一】 : 玩家 " + player.getName() + " 对神秘武器进行了神秘归一  ps:如果归一才是最终的归宿. 那么这把武器我也要归一!!!", equip1);
						npc.say("强化成功");
					}

				} else {
					
					npc.say("请不要重复操作");
				}
			}
		}
		
	} else {
		npc.say("第一个格子的装备不符合强化要求");
	}
}

}