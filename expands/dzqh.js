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


var needList = Array(

	Array(4000313, 60),
	Array(4033356, 20)
);
var need = 4023026;
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
var equip;
var times = 0;

var avail = "";

var selStr = "#e#r只要你给我以下材料:#l\r\n";
for(var i = 0; i < needList.length; i++) {
	selStr += "#v" + needList[i][0] + "#x" + needList[i][1];
}
selStr += "\r\n#e#r,我可以帮您的指定装备的指定位置加上一条随机的潜能。\r\n\r\n";
selStr += "\r\n#e#r,目前可以使用该功能的机器人有:\r\n\r\n";
for(var i = 0; i < itemIdList.length; i++) {
	selStr+="#v" + itemIdList[i] + "#"
}

let selection = npc.askMenuS(selStr);
if(selection == 0) {
	equip = player.getInventorySlot(1, 1); //获得装备栏 的第一个格子的道具 实例 

	if(!player.hasItem(need,1)) {
		npc.say("你并没有#z" + need + "#，所以不能开启");

	} else if(equip == null) {
		npc.say("请在装备栏第一个位置放上装备！");

	} else {
		
		var itemid = equip.getDataId();
		var flag = 1;
		
		if(flag == 1) {
			//进行强化
			
			var str = equip.getTitle();
			if(str != null) {
				if(str.length > 0) {
					//强化了的
					str = str.substring(5, str.length);
					times = parseInt(str);
				} else {
					times = 0;
				}

			}

			let sel = npc.askYesNo("当前装备强化等级为+#r" + times + "#k\r\n是否要进行强化把装备强化成+#r" + (times + 1) + "#k呢？");

			if(sel == 1) {
				if(player.getAmountOfItem(need) < 1) {
					npc.say("你的材料不够 需要#v" + need + "# X1");

				} else {
					if(times < 30) {
						STR = equip.getStr();
						DEX = equip.getDex();
						INT = equip.getInt();
						LUK = equip.getLuk();
						PAD = equip.getPad(); //物理伤害
						MAD = equip.getMad(); //魔法伤害
						player.loseItem(need, 1);
						//替换掉属性
						//力量
						equip.setStr(STR + 3);
						//敏捷
						equip.setDex(DEX + 3);
						//智力
						equip.setInt(INT + 3);
						//运气
						equip.setLuk(LUK + 3);
						//攻击
						equip.setPad(PAD + 3);
						//魔法攻击
						equip.setMad(MAD + 3);
						times++;
						equip.setTitle("淬炼银河+" + times);
						player.updateItem(1, equip);
						npc.broadcastGachaponMsgEx("【淬炼银河副手】: 玩家 " + player.getName() + " 强化了装备[银河副手]羡慕我吧？", equip);

						npc.say("强化成功");
					} else {
						npc.say("强化次数已经到达上限,目前强化只开放到30次哦~");
					}

				}

			}

		} else {
			npc.say("请确认你的第一格装备是否为银河副手");

		}

	}

}