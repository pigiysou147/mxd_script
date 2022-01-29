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
	1202027,
	1202031,
	1202035,
	1202023,
	1202173,
	1202174,
	1202260,
	1202261,
	1202262,
	1202193,
	1202175
);
var need = 4310105;
var count=8;
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

avail += "#b这里是【图腾】强化中心:\r\n\r\n#k";
avail += "提升属性需要#v" + need + "#一颗，通关高校可获得\r\n";
for(var i = 0; i < ItemList.length; i++) {
	avail+="#v"+ItemList[i]+"#"
}

avail += "\r\n #L0##b我要强化图腾！#l#k\r\n#k";
let selection = npc.askMenuS(avail);
if(selection == 0) {
	equip = player.getInventorySlot(1, 1); //获得装备栏 的第一个格子的道具 实例 

	if(!player.hasItem(need,count)) {
		npc.say("你并没有#v" + need + "# X"+count+"，所以不能开启");

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

				
					if(player.getAmountOfItem(need) < count) {
						npc.say("你的材料不够 需要#v" + need + "# X"+count+"");

					} else {
						
						if(times < 50) {
							var chance = Math.floor(Math.random() * 100);
							player.loseItem(need, count);
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
								equip.setStr(STR + 4);
								//敏捷
								equip.setDex(DEX + 4);
								//智力
								equip.setInt(INT + 4);
								//运气
								equip.setLuk(LUK + 4);
								//攻击
								equip.setPad(PAD + 4);
								//魔法攻击
								equip.setMad(MAD + 4);
								times++;
								equip.setTitle("图腾强化+" + times);
								player.updateItem(1, equip);
								npc.broadcastGachaponMsgEx("【图腾强化】 : 玩家 " + player.getName() + " 强化了装备["+equip.getItemName()+"]+"+times+"羡慕我吧？", equip);
		
								npc.say("强化成功");
							}else if(chance<20){
								//失败且掉星
								STR = equip.getStr();
								DEX = equip.getDex();
								INT = equip.getInt();
								LUK = equip.getLuk();
								PAD = equip.getPad(); //物理伤害
								MAD = equip.getMad(); //魔法伤害
								//替换掉属性
								//力量
								equip.setStr(STR - 4);
								//敏捷
								equip.setDex(DEX - 4);
								//智力
								equip.setInt(INT - 4);
								//运气
								equip.setLuk(LUK - 4);
								//攻击
								equip.setPad(PAD - 4);
								//魔法攻击
								equip.setMad(MAD - 4);
								times--;
								equip.setTitle("图腾强化+" + times);
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
				npc.say("请确认你的第一格装备是否为可以强化的图腾");

			}
		}
	}

}