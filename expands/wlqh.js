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
	1182182,
	1182136,
	1182017
);
var need = 4001620;

var count=1000;
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

var txt = "";
	txt += "好吧， 不管你是从哪里打听到流星的下落的， 只要你能通关老夫开的道场， 并且攒齐足够的证物老夫就可以强化你的徽章\r\n";
	txt += "每次强化后可以拥有力量 / 敏捷 / 智力 / 运气 / 攻击力 / 魔法力全部 + 5 的 无视 + 1 % boss + 1 总伤 + 1 % 的属性\r\n";
	txt += "提升属性需要老服的证物#v"+need+"# x "+count+" 个， 该物品从武陵道场掉落。\r\n";
	txt += "最高强化50次，30次之后每级材料递增500\r\n";
	txt += "把要提升的";
	for(var i=0;i<ItemList.length;i++){
		txt+="#v"+ItemList[i]+"#";
	}
	txt += "放在装备栏的第一个位置， 不然会浪费证物！！\r\n";
while(true){
npc.sayNext(txt,9310514);

	equip = player.getInventorySlot(1, 1); //获得装备栏 的第一个格子的道具 实例 

	if(!player.hasItem(need,1)) {
		npc.say("你并没有#z" + need + "#，所以不能开启",9310514);

	} else if(equip == null) {
		npc.say("请在装备栏第一个位置放上装备！",9310514);

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
					npc.say("不能再强化了",9310514);
				}else{
				 //需求材料
				 count=1000;
				 if(times>=30){
					 
					count=count+(times-29)*500;
				 }
				 
				 npc.sayNext("当前装备强化等级为+#r" + times + "#k\r\n是否要进行强化把装备强化成+#r" + (times + 1) + "#k呢？,需要扣除"+count+"个#v"+need+"#",9310514);
					
				
					if(player.getAmountOfItem(need) < count) {
						npc.say("你的材料不够 需要#v" + need + "# X"+count,9310514);

					} else {
						
						if(times < 50) {
							var chance = Math.floor(Math.random() * 100);
							player.loseItem(need, count);
							if(times<10){
								chance=100;
							}
							
							//成功
							STR = equip.getStr();
							DEX = equip.getDex();
							INT = equip.getInt();
							LUK = equip.getLuk();
							PAD = equip.getPad(); //物理伤害
							MAD = equip.getMad(); //魔法伤害
							
							//替换掉属性
							//力量
							equip.setStr(STR + 5);
							//敏捷
							equip.setDex(DEX + 5);
							//智力
							equip.setInt(INT + 5);
							//运气
							equip.setLuk(LUK + 5);
							//攻击
							equip.setPad(PAD + 5);
							//魔法攻击
							equip.setMad(MAD + 5);
							times++;
							equip.setBossDamageR(times);
							equip.setIgnorePDR(times);
							
							equip.setTitle("武陵强化+" + times);
							player.updateItem(1, equip);
							npc.broadcastGachaponMsgEx("【武陵强化】 : 玩家 " + player.getName() + " 强化了装备["+equip.getItemName()+"]+"+times+"羡慕我吧？", equip);
	
							npc.say("强化成功",9310514);
							
							
						} else {
							npc.say("强化次数已经到达上限,目前强化只开放到50次哦~",9310514);
						}

					}
				}

			} else {
				npc.say("请确认你的第一格装备是否正确",9310514);

			}
		}
	}

}