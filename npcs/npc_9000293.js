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
	1114312,
	
	1113056,
	1032201,
	1122259,
	1113074,
	1012414,
	1022195,
	1113075,
	1132246,
	1122267,
	1032223
);
var need = 4033298;
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

var avail = "";

avail += "#b首饰强化\r\n\r\n#k#r";

avail += "1、提升各种顶级首饰\r\n";
avail +="支持的首饰有:";
for(var i=0;i<ItemList.length;i++){
	avail+="#v"+ItemList[i]+"#";
}
avail +="\r\n";
avail += "2、提升属性需要#v" + need + "#X1 ，5余额 金币3000W 点券1W\r\n\r\n";
avail += "3、#r注意：把要提升的首饰放在装备栏的第一个位置！\r\n#k";
avail += "#L0##b我要强化我的首饰！#l#k\r\n#k";

let selection = npc.askMenu(avail, 9000293);
if(selection == 0) {
	var equip = player.getInventorySlot(1, 1); //获得装备栏 的第一个格子的道具 实例 

	if(equip == null) {
		npc.say("请在装备栏第一个位置放上装备！");

	} else {

		var itemid = equip.getDataId();
		var flag = 0;

		for(var i = 0; i < ItemList.length; i++) {
			if(itemid == ItemList[i]) {
				flag = 1;
			}
		}
		if(flag == 1) {
			//进行强化

			var str = equip.getTitle();
			
			if(str != null) {
				if(str.length > 0) {
					if(str.length>5){
						//强化了的
						str = str.substring(5, str.length);
						times = parseInt(str);
					}else{
						times = 0;
					}
					
				} else {
					times = 0;
				}

			}

			let sel = npc.askYesNo("当前装备强化等级为+#r" + times + "#k\r\n是否要进行强化把装备强化成+#r" + (times + 1) + "#k呢？");

			if(sel == 1) {
				if(!player.hasMesos(30000000)) {
					npc.say("你的材料不够 需要 30000000 金币");

				} else if(!player.hasItem(need, 1)) {
					npc.say("你的材料不够 需要#v" + need + "# X1");

				} else if(player.getCashShopCurrency(1)<10000) {
					npc.say("你的点券不够 需要10000点券 ");

				}else if(getHyPay()<5){
					npc.say("你的余额不够，需要5余额 ");
				} else {
					var random = Math.floor(Math.random() * 100);
					if(times < 100) {
						player.loseItem(need, 1);
						var value=2;
						if(times<70){
							random=100;
						}else{
							value=4;
						}
						player.modifyCashShopCurrency(1,-10000);
						player.loseMesos(30000000);
						addHyPay(5);
						if(random >= 50) { //判断概率
							var random = Math.floor(Math.random() * 100);
							
								
							
								STR = equip.getStr();
								DEX = equip.getDex();
								INT = equip.getInt();
								LUK = equip.getLuk();
								PAD = equip.getPad(); //物理伤害
								MAD = equip.getMad(); //魔法伤害

								//替换掉属性
								//力量
								equip.setStr(STR + value);
								//敏捷
								equip.setDex(DEX + value);
								//智力
								equip.setInt(INT + value);
								//运气
								equip.setLuk(LUK + value);
								//攻击
								equip.setPad(PAD + value);
								//魔法攻击
								equip.setMad(MAD + value);
								//BOSS伤害
								
								//equip.setBossDamageR(equip.getBossDamageR() + 1);
								times++;
								equip.setTitle("无双饰品+" + times);
								player.updateItem(1, equip);
								npc.broadcastGachaponMsgEx("【首饰强化】 : 玩家 " + player.getName() + " 强化了【"+equip.getItemName()+"】  强化首饰真的强", equip);

								npc.say("强化成功");
							
						} else {
							npc.say("强化失败");
						}
					} else {
						npc.say("强化次数已经到达上限,目前强化只开放到100次哦~");

						
					}

				}

			}

		} else {
			npc.say("请确认你的第一格装备是否为可强化的首饰");

		}

	}

}

function getHyPay() {
	var sql = "select pay from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("pay");
		}
	} else {
		return 0;
	}

}

function addHyPay(price) {
	var sql = "update hypay set pay=pay-?,payused=payused+" + price + " where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}