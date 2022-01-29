/**
* 新端腳本-符文系統  QQ:739977676 
**/
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var eff = "#fEffect/CharacterEff/1112903/0/0#";  //紅心
var hhh1 = "#fEffect/CharacterEff/1082565/2/0#";  //兔子藍
var tz12 = "#fEffect/CharacterEff/1112924/0/0#";  //黃星
var hhh ="#fEffect/CharacterEff/1102232/2/0#";//星星
var menuList = Array(
	Array("#r符文強化系統說明" , 1),
	Array("#b獲得#v1182001#(免費)" , 2),
	Array("#r使用#v2430006#(花費100紙條)強化徽章" , 3)
        );
var 紙條 = 2430006; 
var 數量 = 100; 
var nowLevel = 0; //當前徽章階段

var chibangList = Array(
	// 階段 裝備代碼 屬性值 B傷 機率 總傷
	Array(1 ,1182001,0,0,0),
	Array(2 ,1182002,20	,10, 142,10),
	Array(3 ,1182003,40	,20, 182,20),
	Array(4 ,1182004,80,25,  266,25),
	Array(5 ,1182005,160,30, 400,30),
	Array(6 ,1182051,320,45, 500,45),
	Array(7 ,1182052,640,60, 1000,66 ),
	Array(8 ,1182273,1280,100, 3333,88)
);
let selStr = "";
selStr +="#b#r"+eff+"刷怪物蒐集#v2430006#*100來強化你的徽章吧\r\n";
selStr +="#b#r"+tz12+"初始#v1182001#\r\n";
selStr +="#b#r"+tz12+"#v1182002##v1182003##v1182004#\r\n";
selStr +="#b#r"+tz12+"#v1182005##v1182051##v1182052#\r\n";
selStr +="#b#r"+tz12+"最終階段#v1182273#全屬+1280 B傷100% 總傷害\r\n";
selStr +="#b#r"+tz12+"失敗必定毀損裝備。";
selStr +="#b#r"+hhh+"VIP專屬#v2430078# 無摧毀機率\r\n";
for(var i = 0; i < menuList.length ; i++){
	if(i%1 == 0){
		selStr += "\r\n";
	}
	selStr += "#L" + menuList[i][1] + "#" + menuList[i][0] + "#l" + "  ";
}

let selected = npc.askMenu(selStr);

switch (selected){
	case 1:
		var ddd = "";
		ddd += "\t#g#n各階段徽章屬性，升級所需材料如下\r\n"
		ddd += "#r#v"+chibangList[0][1]+"# "+chibangList[0][0]+"  階徽章#b全屬+"+chibangList[0][2]+",#rBoss傷害+"+chibangList[0][3]+"總傷\r\n"+chibangList[0][4]+"免費領取\r\n";
		for(let i = 1; i<chibangList.length ;i++){
			ddd += "#r#v"+chibangList[i][1]+"# "+chibangList[i][0]+"  階徽章#b全屬+ "+chibangList[i][2]+",#rBoss傷害+"+chibangList[0][3]+"總傷\r\n"+chibangList[i][4]+"%所需#v"+紙條+"# x"+數量+"\r\n";
		}
		npc.say(ddd);
		break;
	case 2:
		//領取初級徽章
		if(player.hasItem(1182001, 1)){
			npc.say("領取失敗，你已經領取過一次，如果丟失，請聯系管理員");
		}else{
			let newItem = player.makeItemWithId(chibangList[0][1]);
			newItem.setTitle("1階徽章");
			newItem.setDex(chibangList[0][2]);
			newItem.setStr(chibangList[0][2]);
			newItem.setInt(chibangList[0][2]);
			newItem.setLuk(chibangList[0][2]);
			newItem.setMad(chibangList[0][2]);
			newItem.setPad(chibangList[0][2]);
			newItem.setBossDamageR(chibangList[0][3]);
			player.gainItem(newItem);
			player.addPQLog("符文系統");
			npc.say("領取成功，如果不慎失去了符文，請聯系管理員獲取");
		}
		break;
	case 3:
		//獲取第一格裝備
		var toDrop = player.getInventorySlot(1, 1);
		//判斷第一格裝備是否存在
		if(toDrop == null){
			npc.say("請將您的徽章放到第一格！");
		}else if(toDrop.getTitle().indexOf("階徽章") == -1){
			//判斷是否是符文
			npc.say("您的第一格裝備不是該系統所需徽章");
		}else{
			//判斷階段
			nowLevel = parseInt(toDrop.getTitle().substring(0,toDrop.getTitle().length-3));//獲取階段
			if(nowLevel >= chibangList.length ){
				npc.say("已頂級，無法繼續升級！");
			}else{
				//通知玩家需要材料
				let ttt = "您的徽章當前處于第 #r"+nowLevel+" #k階#v"+chibangList[nowLevel-1][1]+"#\r\n升級到 #r"+(nowLevel+1)+" #k階#v"+chibangList[nowLevel][1]+"#,需要#v"+紙條+"# x"+數量;
				let YN = npc.askYesNo(ttt);
				var chance = Math.floor(Math.random() * chibangList[nowLevel][4] +1);
				if(YN == 1){
					if(player.hasItem(紙條, 數量)){
						if (chance <= 100) {
						player.loseItem(紙條, 數量);
						toDrop.setTitle((nowLevel+1)+"階徽章");
						toDrop.setDex(chibangList[nowLevel][2]);
						toDrop.setStr(chibangList[nowLevel][2]);
						toDrop.setInt(chibangList[nowLevel][2]);
						toDrop.setLuk(chibangList[nowLevel][2]);
						toDrop.setMad(chibangList[nowLevel][2]);
						toDrop.setPad(chibangList[nowLevel][2]);
						toDrop.setItemId(chibangList[nowLevel][1]);
						toDrop.setBossDamageR(chibangList[nowLevel][3]);//Boss 攻击百分比%
						toDrop.setDamR(chibangList[nowLevel][5]);// 總傷害
						player.updateItem(1, toDrop);
						npc.broadcastGachaponMsgEx("【符文系統】:恭喜 玩家「"+player.getName()+"」 成功將徽章進化到 階段" + (nowLevel+1)+"",toDrop);
						npc.say("升級成功");
						}else{
							player.loseItem(紙條, 數量);
							player.loseItem(chibangList[nowLevel-1][1],1);
							npc.broadcastPlayerNotice(28, "[強化失敗] :  「" + player.getName() + "」嘗試將徽章 提升至" +(nowLevel+1) + "階 失敗");
							npc.say("強化失敗 已摧毀 徽章.");
						}
					}else{
						npc.say("您的材料不足，無法升級");
					}
				}
			}
		}
		break;
}
