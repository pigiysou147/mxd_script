/**
* 新端腳本-臉飾升級 幾里 315342975 
**/
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon1 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var Icon = Array(
		Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
		Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
		Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
		Array("骷髏", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
		Array("紅心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
		Array("白臉", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
		Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
		Array("紅燈", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
		Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
		Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
		Array("紅旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
		Array("紅心", "#fEffect/CharacterEff/1112905/0/0#"),
		Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
		Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
		Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
		Array("黃鴨", "#fEffect/ItemEff/1004122/effect/default/8#"),
		Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
		Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
		Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
		Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
		Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
		Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
		Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
		Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
		Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
		Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
		Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
		Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
		Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
		Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
		Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
		Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
		Array("條件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
		Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
		Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
		Array("鉆石", "#fUI/NameTag/medal/556/w#"),
		Array("鉆石", "#fUI/NameTag/medal/556/c#"),
		Array("鉆石", "#fUI/NameTag/medal/556/e#"),
		Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
		Array("藍點", "#fUI/piggyBarMinigame/crunch/1#"),
		Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
		Array("拇指", "#fUI/NameTag/medal/10/w#"),
		Array("拇指", "#fUI/NameTag/medal/10/c#"),
		Array("拇指", "#fUI/NameTag/medal/10/e#"),
		Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
		Array("失敗", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
		Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
		Array("藍星", "#fEffect/CharacterEff/1003393/1/0#"),
		Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
		Array("藍星", "#fEffect/CharacterEff/1003393/0/0#"),
		Array("淡星", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
		Array("花朵", "#fEffect/CharacterEff/1051294/1/0#"),
		Array("花朵", "#fEffect/CharacterEff/1051296/1/0#"),
		Array("金菇", "#fUI/NameTag/medal/74/w#"),
		Array("金菇", "#fUI/NameTag/medal/74/c#"),
		Array("金菇", "#fUI/NameTag/medal/74/e#"),
		Array("蛋糕", "#fUI/NameTag/medal/758/w#"),
		Array("蛋糕", "#fUI/NameTag/medal/758/c#"),
		Array("蛋糕", "#fUI/NameTag/medal/758/e#"),
		Array("胡子", "#fUI/NameTag/124/w#"),
		Array("胡子", "#fUI/NameTag/124/c#"),
		Array("胡子", "#fUI/NameTag/124/e#"),
		Array("帽子", "#fUI/NameTag/nick/312/w#"),
		Array("帽子", "#fUI/NameTag/nick/312/c#"),
		Array("帽子", "#fUI/NameTag/nick/312/e#"),
		Array("圣誕", "#fUI/NameTag/medal/728/w#"),
		Array("圣誕", "#fUI/NameTag/medal/728/c#"),
		Array("圣誕", "#fUI/NameTag/medal/728/e#"),
		Array("紅鉆", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
		Array("王冠", "#fUI/NameTag/medal/468/w#"),
		Array("王冠", "#fUI/NameTag/medal/468/c#"),
		Array("王冠", "#fUI/NameTag/medal/468/e#"),
		Array("確認", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
		Array("幽靈", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
		Array("幽靈", "#fEffect/ItemEff/1004738/effect/default/7#"),
		Array("幽靈", "#fEffect/ItemEff/1004738/effect/walk1/3#"),
		Array("幽靈", "#fEffect/ItemEff/1004738/effect/jump/0#"),
		Array("音符", "#fEffect/ItemEff/1112811/0/0#"),
		Array("十字", "#fUI/GuildMark/Mark/Pattern/00004002/1#"),
		Array("幽靈", "#fEffect/ItemEff/1004738/effect/default/0#"),
		Array("幽靈", "#fEffect/ItemEff/1004738/effect/default/1#"),
		Array("幽靈", "#fEffect/ItemEff/1004738/effect/default/2#"),
		Array("幽靈", "#fEffect/ItemEff/1004738/effect/default/3#"),
		Array("彩虹", "#fEffect/ItemEff/1102877/effect/default/0#"),
		Array("開始", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
		Array("貓咪", "#fUI/NameTag/190/w#"),
		Array("貓咪", "#fUI/NameTag/190/c#"),
		Array("貓咪", "#fUI/NameTag/190/e#"),
		Array("蝗蟲", "#fUI/NameTag/188/w#"),
		Array("蝗蟲", "#fUI/NameTag/188/c#"),
		Array("蝗蟲", "#fUI/NameTag/188/e#"),
		Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/0#"),
		Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/1#"),
		Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/2#"),
		Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/3#"),
		Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/4#"),
		Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/5#"),
		Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/6#"),
		Array("彩虹", "#fEffect/ItemEff/1070069/effect/walk1/7#"),
		Array("外星人", "#fEffect/ItemEff/1102875/effect/walk1/3#"),
		Array("翅膀", "#fEffect/ItemEff/1102511/effect/ladder/0#"),
		Array("金人", "#fEffect/ItemEff/1102616/effect/stabO1/5#")
		);
var menuList = Array(
	Array("#r系統說明" , 1),
	Array("#b購買臉飾" , 2),
	Array("#r臉飾升級" , 3)
        );
		
var nowLevel = 0; //當前臉飾階段

var chibangList = Array(
	// 階段 裝備代碼 屬性值 材料ID 材料數量 成功率
	Array(1 ,1012023,0  ,2433057,0,100),
	Array(2 ,1012029,25 ,2433057,1,50),
	Array(3 ,1012134,35 ,2433057,1,25),
	Array(4 ,1012208,50 ,2433057,1,12),
	Array(5 ,1012553,70 ,2433057,1,10),
	Array(6 ,1012289,99 ,2433057,1,5)
);
		
let selStr = "";
	selStr += "　" + Icon[92][1] + "#b#e　　 歡迎光臨臉飾強化中心#k#n　　" + Icon[92][1] + "\r\n\r\n";
	selStr += head + "#e提交#v2433057##t2433057#，可以進化以下臉飾！#k#n\r\n";
	selStr += "(#t1012023#請至 遊戲商店->功能道具 購買)\r\n";
	selStr += "#d#e" + Icon[39][1] + " #v1012023# #t1012023##r(50%機率成功)#k#n\r\n";
	selStr += "#d#e" + Icon[39][1] + " #v1012029# #t1012029##r(25%機率成功)#k#n\r\n";
	selStr += "#d#e" + Icon[39][1] + " #v1012134# #t1012134##r(12%機率成功)#k#n\r\n";
	selStr += "#d#e" + Icon[39][1] + " #v1012208# #t1012208##r(10%機率成功)#k#n\r\n\r\n";
	selStr += "#d#e" + Icon[39][1] + " #v1012289# #t1012289##r(5%機率成功)#k#n\r\n\r\n";
for(var i = 0; i < menuList.length ; i++){
	if(i%4 == 0){
		selStr += "\r\n";
	}
	selStr += "#L" + menuList[i][1] + "#" + menuList[i][0] + "#l" + "  ";
}

let selected = npc.askMenu(selStr);

switch (selected){
	case 1:
		var ddd = "";
		ddd += "\t#g#n各階段臉飾屬性，升級所需材料如下\r\n"
		ddd += "#r1. #v"+chibangList[0][1]+"# "+chibangList[0][0]+"  階臉飾 "+chibangList[0][2]+" %屬性 ,免費領取\r\n";
		for(let i = 1; i<chibangList.length ;i++){
			ddd += "#r"+(i+1)+". #v"+chibangList[i][1]+"# "+chibangList[i][0]+"  階臉飾 "+chibangList[i][2]+" %屬性 ,所需#v"+chibangList[i][3]+"# x"+chibangList[i][4]+" 成功率("+chibangList[i][5]+"%)\r\n";
		}
		npc.say(ddd);
		break;
	case 2:
		player.runScript("AS_功能道具")
		break;
	case 3:
		//獲取第一格裝備
		var toDrop = player.getInventorySlot(1, 1);
		//判斷第一格裝備是否存在
		if(toDrop.getDataId() == 1012023){
			toDrop.setTitle("1階臉飾")
		}
		if(toDrop == null){
			npc.say("請將您的臉飾放到第一格！");
		}else if(toDrop.getTitle().indexOf("階臉飾") == -1){
			//判斷是否是臉飾
			npc.say("您的第一格裝備不是該系統所需臉飾");
		}else{
			//判斷階段
			nowLevel = parseInt(toDrop.getTitle().substring(0,toDrop.getTitle().length-3));//獲取階段
			if(nowLevel >= chibangList.length ){
				npc.say("已頂級，無法繼續升級！");
			}else{
				//通知玩家需要材料
				let ttt = "您的臉飾當前處于第 #r"+nowLevel+" #k階#v"+chibangList[nowLevel-1][1]+"#\r\n升級到 #r"+(nowLevel+1)+" #k階#v"+chibangList[nowLevel][1]+"#,需要#v"+chibangList[nowLevel][3]+"# x"+chibangList[nowLevel][4]+"\r\n成功率"+chibangList[nowLevel][5]+"%";
				let YN = npc.askYesNo(ttt);
				if(YN == 1){
					if(player.hasItem(chibangList[nowLevel][3], chibangList[nowLevel][4])){
						
						player.loseItem(chibangList[nowLevel][3], chibangList[nowLevel][4]);
						//計算成功率
						var rand = Math.random() * 100;
						if(rand < chibangList[nowLevel][5]){
						
							toDrop.setTitle((nowLevel+1)+"階臉飾");
							
							toDrop.setStatR(chibangList[nowLevel][2])
							
							toDrop.setItemId(chibangList[nowLevel][1]);
							player.updateItem(1, toDrop);
							
							npc.broadcastNoticeWithoutPrefix(player.getName() + "：我成功將臉飾進化到 階段" + (nowLevel+1));
							npc.say("升級成功");
						}else{
							
							npc.say("#v"+chibangList[nowLevel][1]+"#很遺憾 升級失敗");
						}
						
					}else{
						npc.say("您的材料不足，無法升級");
					}
				}
			}
		}
		break;
}
