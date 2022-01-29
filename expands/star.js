/*  This is Wdefa by Jackson    
 *  This source is Wdefe by Funms Team
 *  
 *  功能:Custom Force Stars 
 *  
 *  @Author Jackson 
 */

/* global npc, player */

var epp = "#fEffect/SetItemInfoEff/100/9#"; //飘带
var ax = "#fEffect/CharacterEff/1112902/0/1#"; //红色爱心
var xxx = "#fEffect/CharacterEff/1032054/0/0#"; //选项两边
var hg = "#fUI/UIWindow4/PQRank/rank/gold#";
var aaa = "#fUI/UIWindow4/PQRank/rank/gold#";
var Star = "#fEffect/CharacterEff/1112904/2/1#";
var status = -1;
var need = 3992025;
var count = 1;
var prop = -1;
var cash = 0;
var slot = -1;

var selStr1 = Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + "\r\n";
	selStr1 += "1.当你的装备强化到20星以上的时候,你可以来找我进行进一步的强化.#n\r\n";
	selStr1 += "2.提升属性需要#v3992025#一颗(星之力越高,所消耗的星星数量也会提高).大星可以在【#r组队点数商店#d#n】【#d#r传说枫叶币商店#d#n】中获取。#d\r\n\r\n";//#v3992025#
	selStr1 += "3.#r注意：这里强化上星，装备不会爆炸哦~#d。#n#b\r\n\r\n";
	selStr1 +="#L0#选择第一个格子的装备进行强化#l";
	selStr1 +="#L1#选择武器进行强化#l";
	
let ss= npc.askMenu(selStr1);
slot = -1;
prop = -1;
cash = 0;
var item = player.getInventorySlot(1, 1);
if(ss==1){
	item=player.getInventorySlot(-1,-11);
}
if(item == null) {
	npc.say("请把要强化的装备放在对应的位置哦哦~");
} else {
	if(item.getItemId()==1202193){
		npc.say("轮回不可以上星");

	}else{
		while(true){
		
			var num = 15;
			count=1;
			var text = "\t\t#e-你要强化的装备为 -#n\r\n\r\n#b";
			text += "#v" + item.getDataId() + "##z" + item.getDataId() + "#";
			 npc.sayNext(text );
		
			var nCHUC = item.getCHUC(); //获得装备星之力
			var nRUC = item.getRUC(); //剩余升级次数
			if(nCHUC < 20) { //判断星之力是否达到要求
				npc.say("当前所选装备#v" + item.getDataId() + "##t" + item.getDataId() + "# 无法使用此功能！");
		
			} else if(nRUC > 0) { //判断是否可以使用星之力！ 需要把可升级次数使用完毕
				npc.say("当前所选装备还无法使用星之力强化！请把装备剩余升级次数使用完毕才能使用！");
		
			} else if(nCHUC >= 25) { //判断装备是否达到最高的星之力。
				npc.say("当前所选装备#v" + item.getDataId() + "##t" + item.getDataId() + "# 星之力已经达到最高，无法再进行星之力强化！");
		
			} else {
				
				cash = (nCHUC + 1) * 3000; //计算点卷消耗量
				prop = (25 - nCHUC) * 5 + 5;
				
				for(var i = 18; i < 25; i++) {
		
					if(i == nCHUC) {
						if(i == 18) {
							num -= 3;
						} else if(i == 19) {
							num -= 2;
						} else {
							num += (i - 20) * 2;
							count += (i - 20);
						}
		
					}
				}
				var info = "当前选择的是：#v" + item.getDataId() + "##t" + item.getDataId() + "#\r\n当前六维属性如下：";
				info += "\r\n#b星之力:#r" + nCHUC;
				info += "\r\n#b力  量:#r" + item.getTotalStr();
				info += "\r\n#b敏  捷:#r" + item.getTotalDex();
				info += "\r\n#b智  力:#r" + item.getTotalInt();
				info += "\r\n#b运  气:#r" + item.getTotalLuk();
				info += "\r\n#b攻  击:#r" + item.getTotalPAD();
				info += "\r\n#b魔  力:#r" + item.getTotalMAD();
				info += "\r\n#k当前强化成功概率为：#r" + prop + "%#k";
				info += "\r\n#k当前强化需要#v" + need + "##rX" + count + "#k";
				info += "\r\n\r\n是否进行星之力强化？";
				npc.sayNext(info);
				//选择是
				if(!player.hasItem(need, count)) {
							npc.say("当前强化需要#v" + need + "# X #r" + count + "#k,请确认你有足够的#v" + need + "#！");
							
						} else if(player.getCashShopCurrency(1) < cash) {
							npc.say("当前强化需要 #r" + cash + "#k点券,请确认你有足够的点券哦！");
							
						} else {
							var oCHUC = nCHUC;
							var random = Math.floor(Math.random() * 100)+3;
							player.loseItem(need,count);
							player.modifyCashShopCurrency(1,-cash);
							if(random < prop) { //判断概率
								//开始处理六维属性加成
								var oStr = item.getTotalStr();
								var oDex = item.getTotalDex();
								var oInt = item.getTotalInt();
								var oLuk = item.getTotalLuk();
								var oPad = item.getTotalPAD();
								var oMad = item.getTotalMAD();
		
								//六维属性增加量
		
								nCHUC = nCHUC + 1;
								
		
								//设置新的六维属性
								// item.setStr(nStr);
								// item.setDex(nDex);
								// item.setInt(nInt);
								// item.setLuk(nLuk);
								// item.setPad(nPad);
								// item.setMad(nMad);
		
								item.setCHUC(nCHUC); //设置新的星之力等级
								player.updateItem(1,item);
								var nStr = item.getTotalStr();
								var nDex = item.getTotalDex();
								var nInt = item.getTotalInt();
								var nLuk = item.getTotalLuk();
		
								var nPad = item.getTotalPAD();
								var nMad = item.getTotalMAD();
								var info = "装备：#v" + item.getDataId() + "##t" + item.getDataId() + "#\r\n强化成功啦！当前星级如下：";
								info += "\r\n#b星之力:#k" + oCHUC + " #g-> #r" + nCHUC +" 增加值："+(nCHUC-oCHUC);
								info += "\r\n#b力  量:#k" + oStr + " #g-> #r" + nStr+" 增加值："+(nStr-oStr);
								info += "\r\n#b敏  捷:#k" + oDex + " #g-> #r" + nDex+" 增加值："+(nDex-oDex);
								info += "\r\n#b智  力:#k" + oInt + " #g-> #r" + nInt+" 增加值："+(nInt-oInt);
								info += "\r\n#b运  气:#k" + oLuk + " #g-> #r" + nLuk+" 增加值："+(nLuk-oLuk);
								info += "\r\n#b攻  击:#k" + oPad + " #g-> #r" + nPad+" 增加值："+(nPad-oPad);
								info += "\r\n#b魔  力:#k" + oMad + " #g-> #r" + nMad+" 增加值："+(nMad-oMad);
								npc.broadcastGachaponMsgEx("[25星强化系统]: 恭喜玩家"+player.getName()+"把装备强化到了   "+nCHUC+"星~鼓掌鼓掌~~~",item);
								npc.broadcastWeatherEffectNotice(1,"[25星强化系统]：恭喜玩家"+player.getName()+"把装备强化到了   "+nCHUC+"星~鼓掌鼓掌~~~",10000);
								npc.say(info);
							} else {
								//player.loseItem(need,count);
								npc.say("强化失败了。。。");
							}
						}
				}
			}
	}
	
}