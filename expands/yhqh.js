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
	1353606,
	1354017,
	1099015,
	1354007,
	1099011,
	1099012,
	1342095,
	1352009,
	1353505,
	1352109,
	1098009,
	1352206,
	1352216,
	1352226,
	1353807,
	1352236,
	1352246,
	1352256,
	1352266,
	1352276,
	1352286,
	1352296,
	1352406,
	1352506,
	1352606,
	1352707,
	1352815,
	1353707,
	1352906,
	1352916,
	1352928,
	1352935,
	1352945,
	1352957,
	1352967,
	1352975,
	1353006,
	1353105,
	1353405,
	1353706,
	1352807,
	1352824,
	1098006,
	1353306
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

avail += "#b这里是【银河副手】强化中心:\r\n\r\n#k";
avail += "提升属性需要#v" + need + "#一颗，该物品在分解装备中获得\r\n";
avail += " #L0##b我要强化银河副手！#l#k\r\n#k";
let selection = npc.askMenuS(avail);
if(selection == 0) {
	equip = player.getInventorySlot(1, 1); //获得装备栏 的第一个格子的道具 实例 

	if(!player.hasItem(need,1)) {
		npc.say("你并没有#z" + need + "#，所以不能开启");

	} else if(equip == null) {
		npc.say("请在装备栏第一个位置放上装备！");

	} else {
		while(true){
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
						//强化了的
						str = str.substring(5, str.length);
						times = parseInt(str);
					} else {
						times = 0;
					}

				}
				if(times==50){
					npc.say("不能再强化了");
				}else{

				 npc.sayNext("当前装备强化等级为+#r" + times + "#k\r\n是否要进行强化把装备强化成+#r" + (times + 1) + "#k呢？");

				
					if(player.getAmountOfItem(need) < 1) {
						npc.say("你的材料不够 需要#v" + need + "# X1");

					} else {
						
						if(times < 50) {
							var chance = Math.floor(Math.random() * 100);
							player.loseItem(need, 1);
							if(times<10){
								chance=100;
							}
							if(chance>=50){
								//成功
								STR = equip.getStr();
								DEX = equip.getDex();
								INT = equip.getInt();
								LUK = equip.getLuk();
								PAD = equip.getPad(); //物理伤害
								MAD = equip.getMad(); //魔法伤害
								
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
								npc.broadcastGachaponMsgEx("【淬炼银河副手】 : 玩家 " + player.getName() + " 强化了装备[银河副手]+"+times+"羡慕我吧？", equip);
		
								npc.say("强化成功");
							}else if(chance<15){
								//失败且掉星
								STR = equip.getStr();
								DEX = equip.getDex();
								INT = equip.getInt();
								LUK = equip.getLuk();
								PAD = equip.getPad(); //物理伤害
								MAD = equip.getMad(); //魔法伤害
								player.loseItem(need, 1);
								//替换掉属性
								//力量
								equip.setStr(STR - 3);
								//敏捷
								equip.setDex(DEX - 3);
								//智力
								equip.setInt(INT - 3);
								//运气
								equip.setLuk(LUK - 3);
								//攻击
								equip.setPad(PAD - 3);
								//魔法攻击
								equip.setMad(MAD - 3);
								times--;
								equip.setTitle("淬炼银河+" + times);
								player.updateItem(1, equip);
		
								npc.say("强化失败，等级下降1");
							}else{
								//失败不掉星
								npc.say("强化失败，但是等级没有下降");
							}
							
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

}