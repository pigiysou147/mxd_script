 
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
// 100      -- 帽子
// 100_101_102_103_104_105_106_107_108_109_110_111 -- 非武器
// 100_101_102_103_104_105_106_107_108_109_110_111_12_13_14_15_17 -- 所有道具
// 101_102_103 -- 首饰
// 104_105 -- 上衣套服
// 105_106 -- 套服裤裙
// 107 -- 鞋子
// 108 -- 手套
// 100_104_105_106 -- 盔甲
// 12_13_14_15_17 -- 武器

var newicon0= "#fUI/UIWindow3/Scenario/list/icon/icon5/0#";//"+z+"//美化
var newicon1= "#fUI/UIWindow3/Scenario/list/icon/icon5/1#";//"+z+"//美化
var newicon2= "#fUI/UIWindow3/Scenario/list/icon/icon5/2#";//"+z+"//美化

var basic= "#fUI/UIWindowString/Scenario/quest_info/scene/summary_icon/basic#";//"+z+"//美化
var summary= "#fUI/UIWindowString/Scenario/quest_info/scene/summary_icon/summary#";//"+z+"//美化
var startcondition= "#fUI/UIWindowString/Scenario/quest_info/scene/summary_icon/startcondition#";//"+z+"//美化

var selecticon= "#fUI/UIWindowString/Scenario/quest_info/scene/summary_icon/select#";//"+z+"//美化


var clear= "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/clear/7#";//"+z+"//成功
var fail= "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#";//"+z+"//成功


var unlock= "#fUI/UIWindow7/pvp_main/unlock/pressed/0#";//"+z+"//新增
var upgrade= "#fUI/UIWindow7/pvp_main/upgrade/mouseOver/0#";//"+z+"//强化
var rollback= "#fUI/UIWindow7/pvp_main/button:rollback/pressed/0#";//"+z+"//复原


var Star2= "#fUI/UIWindow/ToolTip/Equip/Star/Star2#";//"+z+"//复原

var item = 4033911;
var socketList=new Array(
	
	//Array(3064282, "6%暴击伤害 星岩S级",35),
	Array(3064221, "6%攻击力 星岩S级",35),
	Array(3064431,  "35%BOSS伤害 S级星岩",40),
	Array(3064311,  "全属性6%的 星岩魔方",30),
	Array(3064291,  "8%伤害的 星岩魔方",50),
	Array(3064231,  "魔法力6% 星岩魔方",35)
	
);

var mess = "设置栏第一格子非星岩道具";

var material = Array(
	new Array(1,1,30,1),
	new Array(2,2,40,3),
	new Array(3,3,50,5)
)

var sel = -1;
var selTree = -1;
var selTr3 = -1;
var sn = 0;
var sn1 = 0;
var sn2 = 0;
 
	 
var selStr = summary+"#e#r星岩系统说明：\r\n";
selStr +="每件装备可以开3孔\r\n";
selStr +="请将装备放置#r#e装备栏#k#n第一格子\r\n";
selStr +="需要镶嵌的星岩放置在#r#e设置栏#k#n第一格子#r\r\n";

selStr += "#r#e#L0##v"+item+"#时间瓶子兑换极品星岩#l\r\n\r\n";
selStr += "#L1#"+unlock+"装备开孔#l\r\n\r\n";
selStr += "#L2#"+upgrade+"装备镶嵌#l\r\n\r\n";
selStr += "#L3#"+rollback+"摘除镶嵌#l\r\n\r\n";
var selTree = npc.askMenu(selStr);
if(selTree==0){
	var txt="#e#r请选择要兑换的星岩:#k#k\r\n";
	for(var i=0;i<socketList.length;i++){
		txt+="#e#r#L"+i+"##v"+socketList[i][0]+"##z"+socketList[i][0]+"# X1 需要#k #b"+socketList[i][2]+"个#k#v"+item+"#\r\n";
	}
	let sel =npc.askMenu(txt);
	var itemId=socketList[sel][0];
	var needCount=socketList[sel][2];
	let ye = npc.askYesNo("#e#r是否要兑换#v"+itemId+"##z"+itemId+"# X1 \r\n需要#k #b"+socketList[sel][2]+"个#k#v"+item+"#");
	if(ye==1){
		if(player.getAmountOfItem(item)<needCount){
			npc.say("你的#v"+itemId+"# 不足"+needCount+"个");
		}else{
			player.gainItem(itemId,1);
			player.loseItem(item,needCount);
			npc.say("兑换成功");
		}
	}
}else if(selTree==1){
	var equip =  player.getInventorySlot(1, 1);
	if(null == equip){
		npc.say(fail+"\r\n您的装备栏第一格是空的,请放入需要开孔的装备.");
	}else{
		if(getItemType(equip.getDataId()) && !equip.getData().isCash()){
			var sel = 0;
			var text = ""+summary+"\r\n\t\t#v"+equip.getDataId()+"##t"+equip.getDataId()+"#\r\n";
			if(equip.getSocket(1) == 0 || equip.getSocket(2) == 0 || equip.getSocket(3) == 0){
				npc.say(fail+"\r\n您的装备已经开孔,请镶嵌后再继续开后面的孔！");
				
			}else if(equip.getSocket(1)==-1){
				text+= "#L1#"+basic+"#e#r开启第一孔#k#n#l\r\n\r\n\r\n";
				text+= "\t"+startcondition+(equip.getSocket(2)==-1?"开启第二孔(需先开一孔)\r\n":"#v"+equip.getSocket(2)+"##t"+equip.getSocket(2)+"#")+"\r\n";
				text+= "\t"+startcondition+(equip.getSocket(3)==-1?"开启第三孔(需先开二孔)\r\n":"#v"+equip.getSocket(3)+"##t"+equip.getSocket(3)+"#")+"\r\n";
				sel = npc.askMenu(text);
			}else if(equip.getSocket(2)==-1){
				text+= "#v"+equip.getSocket(1)+"##t"+equip.getSocket(1)+"#"+"\r\n\r\n\r\n";
				text+= "#L2#"+basic+"#e#r开启第二孔#k#n#l\r\n\r\n\r\n";
				text+= "\t"+startcondition+(equip.getSocket(3)==-1?"开启第三孔(需先开二孔)\r\n":"#v"+equip.getSocket(3)+"##t"+equip.getSocket(3)+"#")+"\r\n\r\n";
				sel = npc.askMenu(text);
			}else if(equip.getSocket(3)==-1){
				text+= "#v"+equip.getSocket(1)+"##t"+equip.getSocket(1)+"#"+"\r\n\r\n";
				text+= "#v"+equip.getSocket(2)+"##t"+equip.getSocket(2)+"#"+"\r\n\r\n";
				text+= "#L3#"+basic+"#e#r开启第三孔#k#n#l\r\n\r\n";
				sel = npc.askMenu(text);
			}else{
				
				text+= "#v"+equip.getSocket(1)+"##t"+equip.getSocket(1)+"#"+"\r\n\r\n";
				text+= "#v"+equip.getSocket(2)+"##t"+equip.getSocket(2)+"#"+"\r\n\r\n";
				text+= "#v"+equip.getSocket(3)+"##t"+equip.getSocket(3)+"#"+"\r\n\r\n";
				text+= "\t\t\t#r#e已开启3孔无需操作"+"\r\n";
				text+= "\t\t"+Star2+""+Star2+""+Star2+Star2+""+Star2+""+Star2;
				npc.say(text);
				
			}
			if(sel>0){
				var equip =  player.getInventorySlot(1,1);
				var needCount=material[sel-1][1];
				var meso=material[sel-1][3];
				var text  = "#e#r开启第"+sel+"孔,需要"+needCount+"个#v"+item+"#.\r\n\r\n"
					text +="需要"+meso+"E金币.\r\n\r\n"
					text += basic+"成功率:"+material[sel-1][2]+"%"+"\r\n\r\n";
					text += "您是否要对#v"+equip.getDataId()+"#开启第"+sel+"孔?\r\n";
				var yes  = npc.askYesNo(text);
				if(yes == 1){
					if(player.getAmountOfItem(item)<needCount){
						npc.say(fail+"\r\n对不起,您的#v"+item+"#少于"+needCount+"个,无法继续使用。");
						
					}else if(!player.hasMesos(meso*100000000)){
						npc.say(fail+"\r\n对不起,您的金币少于"+meso+"E,无法继续使用。");
					}else{
						var rand = Math.floor ( Math.random ( ) * 100 );
						//player.dropMessage(1,"随机数"+(rand+10));
						
						player.loseMesos(meso*100000000);
						if(rand> material[sel-1][2]-10){
							//失败
							player.loseItem(item,material[sel-1][1]);
							status = -1;
							
							npc.say(fail+"\r\n非常遗憾,开孔失败!请不要气馁,继续努力!");
						}else{
							player.loseItem(item,needCount);
							switch(sel){
								case 1:
									equip.setSocket(1,0);
									//player.gainItem(equip.getSocket(1,0),1);
								break;
								case 2:
									equip.setSocket(2,0);
									//player.gainItem(equip.getSocket(2,0),1);
								break;
								case 3:
									equip.setSocket(3,0);
									//player.gainItem(equip.getSocket(3,0),1);
								break;
							}
							player.updateItem(1,equip); 
							npc.broadcastGachaponMsgEx("〖星岩系统〗:【"+ player.getName() + "】人品大爆发!成功开启第"+sel+"孔,大家恭喜他/她！！！！", equip );
							npc.broadcastWeatherEffectNotice(0x4, "〖星岩系统〗:【"+ player.getName() + "】人品大爆发!成功开启第"+sel+"孔,大家恭喜他/她！！！！",15000);
							npc.broadcastWeatherEffectNotice(0x4, "〖星岩系统〗:【"+ player.getName() + "】人品大爆发!成功开启第"+sel+"孔,大家恭喜他/她！！！！",15000);
							npc.broadcastWeatherEffectNotice(0x4, "〖星岩系统〗:【"+ player.getName() + "】人品大爆发!成功开启第"+sel+"孔,大家恭喜他/她！！！！",15000);
							
							npc.say(clear+"\r\n恭喜！您开孔成功了！");
						}
					}
				}
			}
			
		}else{
			npc.say(fail+"\r\n装备类型不能进行扩展星岩镶嵌孔。");
			
		}
	}
}else if(selTree==2){
	var equip =  player.getInventorySlot(1,1);
	
	var txt="\r\n请选择要镶嵌的星岩:\r\n\r\n";
	for(var i=0;i<socketList.length;i++){
		txt+="#L"+i+"##v"+socketList[i][0]+"# #t"+socketList[i][0]+"##l\r\n";
	}
	let socketSel=npc.askMenu(txt);
	var rockitem =socketList[socketSel][0];
	if(null == equip){
		npc.say(fail+"\r\n您的装备栏第一格是空的,请放入需要镶嵌星岩的装备.");
		
	}else if(player.getAmountOfItem(rockitem)<1){
		npc.say(fail+"\r\n你的#v"+rockitem+"#不足.");
	}else{ 
		
		var text = ""+summary+"\r\n\t镶嵌的武器：#v"+equip.getDataId()+"##t"+equip.getDataId()+"#\r\n";
		text += "\t镶嵌的星岩：#r#e#v"+rockitem+"##t"+rockitem+"#\r\n";
		text += "\r\n\t"+selecticon+"\r\n";
		if(equip.getSocket(1)==0){
			text+= "\t\t#L1#选择镶嵌第一孔#l\r\n";
		}
		if(equip.getSocket(2)==0){
			text+= "\t\t#L2#选择镶嵌第二孔#l\r\n";
		}
		if(equip.getSocket(3)==0){
			text+= "\t\t#L3#选择镶嵌第三孔#l\r\n";
		}
		
		text+= "\t\r\n";
		var selection = npc.askMenu(text);
		
		text  = "#e#r镶嵌第"+selection+"孔,需要"+selection+"个#v"+item+"#.\r\n\r\n"
		text +="需要"+selection+"E金币.\r\n\r\n"
		text += "您是否要对#v"+equip.getDataId()+"#第"+selection+"孔进行镶嵌?\r\n";
		let sel = npc.askYesNo(text);	
			
		if(equip.getSocket(selection)!=0){
			npc.say(fail+"\r\n您要镶嵌的装备没有空白孔无法镶嵌.");
			
		}else if(player.getAmountOfItem(item)<selection){
			npc.say(fail+"\r\n对不起,您的#v"+item+"#少于"+selection+"个,无法继续使用。");
			
		}else if(!player.hasMesos(selection*100000000)){
			npc.say(fail+"\r\n对不起,您的金币少于"+selection+"E,无法继续使用。");
		}else{
			player.loseItem(item,selection);
			player.loseMesos(selection*100000000);
			equip.setSocket(selection,rockitem);
			player.updateItem(1,equip); 
			player.loseItem(rockitem, 1);
			npc.broadcastWeatherEffectNotice(0x4, "〖星岩系统〗:【"+ player.getName() + "】镶嵌星岩"+socketList[socketSel][1]+"成功！！！！",15000);
			npc.broadcastGachaponMsgEx("〖星岩系统〗:【"+ player.getName() + "】镶嵌星岩  "+socketList[socketSel][1]+"  成功！！！！", equip );
			npc.say(clear+"\r\n装备#i"+equip.getDataId()+"#,第"+selection+"孔成功镶嵌#i"+rockitem+"##t"+rockitem+"#.");
			
		} 
		
		
	}
	
}else if(selTree==3){
	var text = selecticon+"\r\n\t请选择要摘除的星岩,摘除后星岩消失!\r\n"
	var equip =  player.getInventorySlot(1,1);
	if(null == equip){
		npc.say("您的装备栏第一格是空的,请放入需要摘除星岩的装备.");
		
	}else{

		if(equip.getSocket(1)<1&& equip.getSocket(2)<1&& equip.getSocket(3)<1){
			npc.say(fail+"\r\n#v"+equip.getDataId()+"#没有可以摘除的星岩.");
			
		}else{
			if(equip.getSocket(1)>1){
				text+= "#L1##v"+equip.getSocket(1)+"##t"+equip.getSocket(1)+"#"+"#l\r\n\r\n";
			}
			if(equip.getSocket(2)>1){
				text+= "#L2##v"+equip.getSocket(2)+"##t"+equip.getSocket(2)+"#"+"#l\r\n\r\n";
			}
			if(equip.getSocket(3)>1){
				text+= "#L3##v"+equip.getSocket(3)+"##t"+equip.getSocket(3)+"#"+"#l\r\n\r\n";
			}
			var selTr3 =npc.askMenu(text);
			var yes = npc.askYesNo("是否要清除#v"+equip.getDataId()+"#上第"+selTr3+"孔上的#v"+equip.getSocket(selTr3)+"#星岩?");
			if(yes == 1){
				player.gainItem(equip.getSocket(selTr3),1);
				equip.setSocket(selTr3,0);
				player.updateItem(1,equip); 
				npc.say(clear+"\r\n清除第"+selTr3+"孔星岩,您可以重新镶嵌了!");
			}
		}
		
	}
}
		  

function isCashItem(itemid){
	return player.makeItemWithId(itemid).getSn()>-1;
}


//获取商店列表
function getHave(itemid,types,equip) {
	var sql = " select  * from zz_rock where `itemid` = " + itemid + " and  `types` like  '%"+types+"%' ";
	var resultList = player.customSqlResult(sql);
	var flag = "设置栏第一格子非星岩道具";
	for (var i = 0; i < resultList.size(); i++) {
    var rs = resultList.get(i);
		if(null != rs){
			flag = "正确";//rs.get("desc");
		}
	}
	
	if(flag=="设置栏第一格子非星岩道具"){
		var sql1 = " select  * from zz_rock where `itemid` = " + itemid + " ";
		var resultList = player.customSqlResult(sql1);
		if(null!=resultList){
			for (var i = 0; i < resultList.length; i++) {
				var rs = resultList.get(i);
				if(null != rs){
					flag = "错误！#v"+itemid+"#"+rs.get("desc")+" \r\n#v"+equip+"#不是该类型装备。";
				}
				break;
			}
		}
	}
	return flag;
}



//饰品包括 101_102_103
//获取装备类型
function getTypeNum(itemid) {
	var type = Math.floor(itemid/10000);
	switch (type) {
		case 100: //帽子
		case 101: //前额
		case 102: //眼饰
		case 103: //耳饰
		case 104: //上衣
		case 105: //套服
		case 106: //裤裙
		case 107: //鞋子
		case 108: //手套
		case 109: //副手
		case 110: //披风
		case 111: //戒指
		case 112: //项链
		case 113: //腰带
		case 114: //奖杯
		case 115: //护肩
		case 116: //口袋
		case 118: //徽章
		case 119: //怪物符号
		case 166: //机器人
		case 167: //心脏
		case 168: //心脏
		case 169: //心脏
			return type;
		break;
		case 171:
			return false;
		default:
			var type=Math.floor(type/10);
			if (type==12 || type==13 || type==14 || type==15 || type==17) {
				return type;  //武器
			}
			return 10000;
	}
}


//饰品包括 101_102_103
//获取装备类型
function getItemType(itemid) {
	var type = Math.floor(itemid/10000);
	switch (type) {
		case 100: //帽子
		case 101: //前额
		case 102: //眼饰
		case 103: //耳饰
		case 104: //上衣
		case 105: //套服
		case 106: //裤裙
		case 107: //鞋子
		case 108: //手套
		case 109: //副手
		case 110: //披风
		case 111: //戒指
		case 112: //项链
		case 113: //腰带
		case 114: //奖杯
		case 115: //护肩
		case 116: //口袋
		case 118: //徽章
		case 119: //怪物符号
		case 166: //机器人
		case 167: //心脏
		case 168: //心脏
		case 169: //心脏
			return true;
		break;
		case 171:
			return false;
		default:
			var type=Math.floor(type/10);
			if (type==12 || type==13 || type==14 || type==15 || type==17) {
				if(player.makeItemWithId(itemid).getItemName().indexOf("图腾")>-1 || player.makeItemWithId(itemid).getItemName().indexOf("石碑")>-1){
					return false;
				}
				return true;  //武器
			}
			return false;
	}
}




function askNumber(str,def,min,max){
	if(player.getQuestInfo(9601)==0){
		player.askNumberE(str,def,min,max);
	}else{
		player.askNumber(str,def,min,max);
	}
}


function sendNext(selStr){
 	if(player.getQuestInfo(9601)==0){
		player.sendNextE(selStr);
	}else{
		player.sendNext(selStr);
	}
}

function asktext(selStr,min,max){
	if(player.getQuestInfo(9601)==0){
		player.askTextE(selStr,min,max);
	}else{
		player.askText(selStr,min,max);
	}
}

function ask(selStr){
	if(player.getQuestInfo(9601)==0){
		npc.askMenuA(selStr,true);
	}else{
		npc.askMenu(selStr,true);
	}
}


function sendOk(text){
		if(player.getQuestInfo(9601)==0){
  		npc.sayE(text);
		}else{
			npc.say(text);
		}
		
}

function askYesNo(text){
		if(player.getQuestInfo(9601)==0){
  		npc.askYesNoE(text);
		}else{
			npc.askYesNo(text);
		}
}