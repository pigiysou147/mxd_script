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
	1132178,
	1132177,
	1132176,
	1132175,
	1132174,
	1072747,
	1072746,
	1072745,
	1072744,
	1072743,
	1082547,
	1082546,
	1082545,
	1082544,
	1082543,
	1082547,
	1082546,
	1082545,
	1082544,
	1082543,
	1102485,
	1102484,
	1102483,
	1102482,
	1102481
);
var randList = Array(
	Math.floor(Math.random() * 8 + 7), //str
	Math.floor(Math.random() * 8+7), //dex
	Math.floor(Math.random() * 8+7), //inte
	Math.floor(Math.random() * 8+7), //luk
	Math.floor(Math.random() * 8+7), //pad
	Math.floor(Math.random() * 8+7), //mad
	Math.floor(Math.random() * 2 + 1), //boss
	Math.floor(Math.random() * 3 + 1), //wushi
	Math.floor(Math.random() * 500 + 1), //hp
	Math.floor(Math.random() * 500 + 1) //mp

);
var need = 4023025;
var need_b=4023026;

var result;
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

		avail+="#b这里是暴君防具属性提升中心:#v1102484##v1102483##v1102482##v1102481#\r\n\r\n#k";
		avail += "#b1、暴君做为本服次顶级装备，能够强化15次。每次7-15点全属性+攻击 1-3%BOSS 1%无视 1%所有属性#k\r\n";
		avail += "#r2、提升属性需要#v" + need_b + "#X 3 +2E金币，#r无论是否保留属性，都会扣除材料#k 该物品在装备分解中获得#k\r\n";
		avail += "#r3、#r注意：装备不支持增加火花提升的属性\r\n";
		avail += "4、#r注意：提升的时候可以先砸卷后提升\r\n";
		avail += "5、#r注意：把要提升的暴君装备放在装备栏的第一个位置！\r\n#k";
		avail += " #L0##b我要强化暴君装备！#l#k\r\n#k";
		
let selection = npc.askMenuS(avail);
if(selection == 0) {
	equip = player.getInventorySlot(1, 1); //获得装备栏 的第一个格子的道具 实例 

	if(!player.hasItem(need_b,3)) {
		npc.say("你并没有#z" + need_b + "# X3，所以不能开启");

	}  else if(equip == null) {
		npc.say("请在装备栏第一个位置放上装备！");

	}else if(!player.hasMesos(200000000)){
		npc.say("金币不足。需要2E金币");
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
					//强化了的
					str = str.substring(5, str.length);
					times = parseInt(str);
				} else {
					times = 0;
				}

			}
			
			if(times < 15) {
				
				let sel = npc.askYesNoSNoEsc("是否进行强化呢？ 强化操作不可逆哦");
				if(sel==1){
					
				
					var info = "装备：#v" + equip.getDataId() + "##t" + equip.getDataId() + "#\r\n当前六维属性如下：\r\n";
					info += "#r点击‘是’会增加当前显示属性并且强化等级+1 ，点击‘否’可以不要此次属性，属性跟最大值相差较大可以选否。\r\n无论是否保留属性都会消耗一个强化材料#k\r\n"
					//保存更新记录

					info += "\r\n#b强化:#k 最大值#g-> #r本次";
					info += "\r\n#b力量:#k最大值:15 #g-> #r" + randList[0];
					info += "\r\n#b敏捷:#k最大值:15 #g-> #r" + randList[1];
					info += "\r\n#b智力:#k最大值:15 #g-> #r" + randList[2];
					info += "\r\n#b运气:#k最大值:15#g-> #r" + randList[3];
					info += "\r\n#b攻击力:#k最大值:15 #g-> #r" + randList[4];
					info += "\r\n#b魔法力:#k最大值:15 #g-> #r" + randList[5];
					info += "\r\n#bBOSS伤害:#k最大值:3 #g-> #r" + randList[6];
					info += "\r\n#b无视:#k最大值:1 #g-> #r" + 1;
					info += "\r\n#b全属性:#k最大值:1 #g-> #r" + 1;
					
					info += "\r\n#b最大HP:#k最大值:500 #g-> #r" + randList[8];
					info += "\r\n#b最大MP:#k最大值:500 #g-> #r" + randList[9];


					player.loseItem(need_b, 3);
					player.loseMesos(200000000);
				
					STR = equip.getStr();
					DEX = equip.getDex();
					INT = equip.getInt();
					LUK = equip.getLuk();
					PAD = equip.getPad(); //物理伤害
					MAD = equip.getMad(); //魔法伤害
					
					//替换掉属性
					//力量
					equip.setStr(STR + randList[0]);
					//敏捷
					equip.setDex(DEX + randList[1]);
					//智力
					equip.setInt(INT + randList[2]);
					//运气
					equip.setLuk(LUK + randList[3]);
					//攻击
					equip.setPad(PAD + randList[4]);
					//魔法攻击
					equip.setMad(MAD + randList[5]);
					
					equip.setBossDamageR(equip.getBossDamageR() + randList[6]);
					
					equip.setIgnorePDR(equip.getIgnorePDR() + 1);
					equip.setStatR(equip.getStatR()+1);
					//HP
					equip.setMaxHp(equip.getMaxHp() + randList[8]);
					//MP
					equip.setMaxMp(equip.getMaxMp() + randList[9]);
					times++;
					equip.setTitle("暴君强化+" + times);
					player.updateItem(1, equip);
					npc.broadcastGachaponMsgEx("【强化中心】 : 玩家 "+player.getName()+" 强化了暴君装备，获得了强大的力量！！!", equip);
					
					npc.say("强化成功 扣除了你 #v"+need_b+"# X 3 以及2E金币\r\n"+info);
				}
			

				
			} else {
				npc.say("强化次数已经到达上限,目前强化只开放到15次哦~");
			}
			

		} else {
			
			npc.say("请检查装备栏第一个位置是否为暴君装备！");

		}

	}

}
