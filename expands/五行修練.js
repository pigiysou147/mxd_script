/**
* 新端腳本-五行修煉，原諒我用中文編碼 幾里 315342975 
* 備注 階段用的是裝備名來判斷，請確保裝備名稱不會損壞
**/

let 修煉裝備 = Array(
	//裝備名 這類裝備的IDs 升級的裝備按照順序排 
	Array("青龍",
1004234,1052804,1102713,1152149,1082613,1072972,
1004235,1052805,1102714,1152150,1082614,1072973,
1004236,1052806,1102715,1152151,1082615,1072974,
1004237,1052807,1102716,1152152,1082616,1072975,
1004238,1052808,1102717,1152116,1082617,1072976,
1302316,
1402237,
1312186,
1412179,
1322237,
1422186,
1432201,
1442255,
1232096,
1382246,
1372208,
1452239,
1462226,
1342099,
1332261,
1472248,
1492213,
1482203,
1532131,
1362122,
1272012,
1552103,
1542102,
1252087,
1212102,
1522125,
1242103,
1262014,
1282012,
1222096,
1592013,
1582014
),
	Array("白虎",
1003172,1052314,1102275,1152108,1082295,1072485,
1003173,1052315,1102276,1152110,1082296,1072486,
1003174,1052316,1102277,1152111,1082297,1072487,
1003175,1052317,1102278,1152112,1082298,1072488,
1003176,1052318,1102279,1152113,1082299,1072489,
1302152,
1402095,
1312065,
1412065,
1322096,
1422066,
1432086,
1442116,
1232014,
1382104,
1372084,
1452111,
1462099,
1342036,
1332130,
1472122,
1492085,
1482084,
1532018,
1362019,
1272014,
1552015,
1542015,
1252014,
1212014,
1522018,
1242042,
1262015,
1282014,
1222014,
1592015,
1582015
),
	Array("朱雀",
1003601,1052509,1102456,1152094,1082472,1072711,
1003603,1052511,1102458,1152096,1082474,1072713,
1003602,1052510,1102457,1152095,1082473,1072712,
1003604,1052512,1102459,1152097,1082475,1072714,
1003605,1052513,1102460,1152098,1082476,1072715,
1302349,
1402265,
1312209,
1412186,
1322261,
1422194,
1432224,
1442282,
1232119,
1382271,
1372234,
1452263,
1462249,
1342109,
1332286,
1472271,
1492241,
1482229,
1532154,
1362146,
1272030,
1552126,
1542124,
1252102,
1212126,
1522149,
1242134,
1262046,
1282030,
1222119,
1592018,
1582037
	),
	Array("玄武",
1004422,1052882,1102775,1152174,1082636,1073030,
1004423,1052887,1102794,1152176,1082637,1073032,
1004424,1052888,1102795,1152177,1082638,1073033,
1004425,1052889,1102796,1152178,1082639,1073034,
1004426,1052890,1102797,1152179,1082640,1073035,
1302333,
1402251,
1312199,
1412177,
1322250,
1422184,
1432214,
1442268,
1232109,
1382259,
1372222,
1452252,
1462239,
1342101,
1332274,
1472261,
1492231,
1482216,
1532144,
1362135,
1272016,
1552110,
1542108,
1252093,
1212115,
1522138,
1242120,
1262017,
1282016,
1222109,
1592019,
1582017
	),
	Array("麒麟",
1004808,1053063,1102940,1152196,1082695,1073158,
1004809,1053064,1102941,1152197,1082696,1073159,
1004810,1053065,1102942,1152198,1082697,1073160,
1004811,1053066,1102943,1152199,1082698,1073161,
1004812,1053067,1102944,1152200,1082699,1073162,
1302343,
1402259,
1312203,
1412181,
1322255,
1422189,
1432218,
1442274,
1232113,
1382265,
1372228,
1452257,
1462243,
1342104,
1332279,
1472265,
1492235,
1482221,
1532150,
1362140,
1272017,
1552119,
1542117,
1252098,
1212120,
1522143,
1242122,
1262039,
1282017,
1222113,
1592020,
1582023
	)
);
let 修煉屬性 = Array(
	//四維 攻擊力
	Array(10,10),//青龍
	Array(15,15),//白虎
	Array(20,20),//朱雀
	Array(25,25),//玄武
	Array(30,30)//麒麟
)

let jobs = Array(
	//力量職業0
	Array("力量",112,122,132,3712,2112,4112,5112,6112,3112,512,1512,2512,532,10100,3122,1112),
	//智力職業1
	Array("智力",14212,15212,2217,212,222,232,1212,2712,3212,4212,11212,15512),
	//敏捷職業2
	Array("敏捷",312,322,332,3312,2312,1312,522,3512,6512,572),
	//運氣職業3
	Array("運氣",412,422,434,1412,2412,6412)
);

let 寶石 = Array(
	//寶石從低等級到高等級 修煉裝備有幾個階段就要幾個寶石
	//力量職業0
	Array(4008000,4440300,4440200,4440100,4440000),
	//智力職業1
	Array(4008002,4442300,4442200,4442100,4442000),
	//敏捷職業2
	Array(4008003,4443300,4443200,4443100,4443000),
	//運氣職業3
	Array(4008001,4441300,4441200,4441100,4441000)
);
let 所需卷軸 = Array(
	//仙族
	Array(2046913,2046996,2613050,2613064,2613066),
	//魔族
	Array(2046914,2046997,2613051,2613065,2613067)
);
let 通用材料 = Array(
	//青龍
	Array(
		Array(4310143,1),  //復古幣
		Array(4310205,50)
	),
	//白虎
	Array(
		Array(4310143,2),  //復古幣
		Array(4310205,100)
	),
	//朱雀
	Array(
		Array(4310143,3),  //復古幣
		Array(4310205,150)
	),
	//玄武
	Array(
		Array(4310143,4),  //復古幣
		Array(4310205,200)
	),
	//麒麟
	Array(
		Array(4310143,5),  //復古幣
		Array(4310205,250)
	)
);
let changeLevel = 10; //下一階段等級
let needEquipNum = 1; //需要7次升級到changeLevel才能進階

let QUEST_ID = 19099;

let campInfo = getInitCamp();
let camp = campInfo.get("camp");
let juanzhouF = (camp == "仙" ? 所需卷軸[0]:所需卷軸[1]);
let baoshiF = null;
let job = player.getJob();
let jobSelected = -1;

//判斷目標職業
for(let i = 0;i<jobs.length;i++){
	if(jobs[i].indexOf(job) != -1){
		jobSelected = i;
		baoshiF = 寶石[i];
		break;
	}
}


while(true){

	let str = "尊敬的玩家，歡迎來到本服極具創意特色的裝備 #r五行修煉 #k法\r\n";
    str += "五行 顧名思義就是5個階段的修煉，每個階段的提升都會疊加\r\n";
    str += "同時【神器上星】提升的星之力屬性加成以及潛能都完美繼承\r\n";
    str += "五行 階段分別為：#g青龍   #d白虎   #r朱雀   #d玄武   #g麒麟\r\n\r\n";
	str += "#d特別注意： #r尖兵 #d和 #r神之子 #d職業無法使用該系統提升！\r\n";
	str += "#d每個階段的7件裝備都必須修煉+10，方可進入下一階段的修煉#k\r\n";
    /*
    str += "【#g青龍#k】套裝是：#v1004234# #v1052804# #v1102713# #v1152149# #v1082613# #v1072972#\r\n";
    str += "【#d白虎#k】套裝是：#v1003172# #v1052314# #v1102275# #v1152108# #v1082295# #v1072485#\r\n";
    str += "【#r朱雀#k】套裝是：#v1003601# #v1052509# #v1102456# #v1152094# #v1082472# #v1072711#\r\n";
    str += "【#d玄武#k】套裝是：#v1004422# #v1052882# #v1102775# #v1152174# #v1082636# #v1073030#\r\n";
    str += "【#g麒麟#k】套裝是：#v1004808# #v1053063# #v1102940# #v1152196# #v1082695# #v1073158#\r\n";
    */
    str += "    #b#L0# 查看五行套裝 #l     #r#L1# #e進行五行修煉 #l";
	let selected = npc.askMenu(str,3003307);
	if(selected == 0){
		str = "五行 顧名思義就是5個階段的修煉，每個階段的提升都會疊加\r\n";
		str += "同時【神器上星】提升的星之力屬性加成以及潛能都完美繼承\r\n";
		str += "五行 階段分別為：#g青龍   #d白虎   #r朱雀   #d玄武   #g麒麟#k\r\n";
		
		str += "【#g青龍#k】套裝是：#v1004234# #v1052804# #v1102713# #v1152149# #v1082613# #v1072972#\r\n";
		str += "【#d白虎#k】套裝是：#v1003172# #v1052314# #v1102275# #v1152108# #v1082295# #v1072485#\r\n";
		str += "【#r朱雀#k】套裝是：#v1003601# #v1052509# #v1102456# #v1152094# #v1082472# #v1072711#\r\n";
		str += "【#d玄武#k】套裝是：#v1004422# #v1052882# #v1102775# #v1152174# #v1082636# #v1073030#\r\n";
		str += "【#g麒麟#k】套裝是：#v1004808# #v1053063# #v1102940# #v1152196# #v1082695# #v1073158#\r\n";
		npc.say(str,3003307);
	}else{
		if(jobSelected == -1){
			npc.say("#b您還沒有進行#r四轉#b,無法進行#r五行修煉",3003307);
			player.runScript("修煉中心");
			break;
		}else{
			//獲取第一格裝備
			let toDrop = player.getInventorySlot(1, 1);
			//toDrop.setTitle("青龍+1");     //這兩行代碼寫出來只是為了給裝備上名字 上完了名字就把他注釋了
			//player.updateItem(1, toDrop);  //這兩行代碼寫出來只是為了給裝備上名字 上完了名字就把他注釋了
			if(toDrop == null){
				npc.say("#r您的第一格沒有裝備，無法使用",3003307);
				break;
			}else{
				//判斷目標裝備
				let equipSelected = -1;
				for(let i = 0;i<修煉裝備.length;i++){
					if(toDrop.getTitle().indexOf(修煉裝備[i][0]) != -1){
						equipSelected = i;
						break;
					}
				}
				if(equipSelected != -1){
					
					
					//從數據庫中獲取修煉數據
					let jieduanCount = parseInt(player.getQuestRecordEx(QUEST_ID,修煉裝備[equipSelected][0]));//滿級裝備幾次
					if(jieduanCount == null  || isNaN(jieduanCount)){
						player.updateQuestRecordEx(QUEST_ID, 修煉裝備[equipSelected][0], "0");
						jieduanCount = parseInt(player.getQuestRecordEx(QUEST_ID,修煉裝備[equipSelected][0]));
					}
									
					
					let nowLevel = parseInt(toDrop.getTitle().substring(3));
					let nextItem = null;
					str = "#b請確定您需要修煉的裝備信息:\r\n裝備:#v"+toDrop.getDataId()+"# #r("+修煉裝備[equipSelected][0]+") #b當前階段:#r "+nowLevel;
					//如果是第changeLevel階段 裝備會升級
					if(nowLevel >= changeLevel){
						if(equipSelected >= (修煉裝備.length - 1)){
							//最終階段
							str += "\r\n#e#b~哇.點個贊！恭喜您~\r\n您的裝備已經通過#r五行修煉#b達到最高級別了哦！\r\n"
							npc.say(str,3003307);
							break;
						}else{
							if(jieduanCount >= needEquipNum){
								nextItem = 修煉裝備[equipSelected+1][修煉裝備[equipSelected].indexOf(toDrop.getDataId())];
								str += "\r\n#e#b您在#r "+修煉裝備[equipSelected][0]+" #b階,已經將 #r"+jieduanCount+" #b件裝備修煉完畢\r\n#b現在您可以將這些裝備進行進階操作\r\n進階為 #v"+nextItem+"# #r"+修煉裝備[equipSelected+1][0]+" 階段:1"
								equipSelected++;
							}else{
								str += "\r\n#e#b您在#r "+修煉裝備[equipSelected][0]+" #b階,已經將 #r"+jieduanCount+" #b件裝備修煉完畢\r\n#b還需要將 #r"+(needEquipNum - jieduanCount)+" #b件裝備進行提升完畢才可以進行進階操作"
								npc.say(str,3003307);
								break;
							}
							
						}
					}
					//所需材料
					str += "#n\r\n#b所需必備修煉物品:\r\n"
					str += "#r寶石:#v"+baoshiF[equipSelected]+"# x 1"
					str += "\r\n#b所需輔助修煉物品:\r\n" 
					let PD = true;
					let PDStr = "#b您的以下物品不滿足修煉條件:\r\n";
					for(let i = 0;i<通用材料[equipSelected].length;i++){
						str += "#r#v"+通用材料[equipSelected][i][0]+"# x "+通用材料[equipSelected][i][1]+" "
						if(!player.hasItem(通用材料[equipSelected][i][0],通用材料[equipSelected][i][1])){
							PDStr += "#v"+通用材料[equipSelected][i][0]+"#不足 "
							PD = false;
						}
					}
					
					str += "\r\n#b修煉后提升屬性:\r\n"
					str += "#r四維:+"+修煉屬性[equipSelected][0]+" 攻擊力/魔法力:+"+修煉屬性[equipSelected][1];
					
					str += "\r\n\r\n   \t\t\t\t\t\t\t  #e是否確定修煉？"
					YN = npc.askYesNo(str,3003307);
					if(YN == 1){
						//判斷各項材料
						if(!player.hasItem(baoshiF[equipSelected],1)){
							PD = false;PDStr
							PDStr += "#v"+baoshiF[equipSelected]+"#不足 "
						}
						if(PD){
							
							for(let i = 0;i<通用材料[equipSelected].length;i++){
								player.loseItem(通用材料[equipSelected][i][0],通用材料[equipSelected][i][1]);
							}
							player.loseItem(baoshiF[equipSelected],1);
									
							//分為兩種修煉 
							if(nowLevel >= changeLevel){
								//進階
								//計算所有屬性
								let allSx = 0;
								let allGj = 0;
								for(let i = 0; i < equipSelected; i++ ){
									allSx += 修煉屬性[i][0] * changeLevel;
									allGj += 修煉屬性[i][1] * changeLevel;
								}
								
								let newDrop = player.makeItemWithId(nextItem);
								let oldDrop = player.makeItemWithId(toDrop.getDataId());
								
								toDrop.setStr(newDrop.getStr() + toDrop.getStr() - oldDrop.getStr() + 修煉屬性[equipSelected][0]); 
								toDrop.setDex(newDrop.getDex() + toDrop.getDex() - oldDrop.getDex() + 修煉屬性[equipSelected][0]); 
								toDrop.setInt(newDrop.getInt() + toDrop.getInt() - oldDrop.getInt() + 修煉屬性[equipSelected][0]); 
								toDrop.setLuk(newDrop.getLuk() + toDrop.getLuk() - oldDrop.getLuk() + 修煉屬性[equipSelected][0]); 
								toDrop.setMad(newDrop.getMad() + toDrop.getMad() - oldDrop.getMad() + 修煉屬性[equipSelected][1]);
								toDrop.setPad(newDrop.getPad() + toDrop.getPad() - oldDrop.getPad() + 修煉屬性[equipSelected][1]);
								/**
								toDrop.setStr(newDrop.getStr() + allSx + 修煉屬性[equipSelected][0]); 
								toDrop.setDex(newDrop.getDex() + allSx + 修煉屬性[equipSelected][0]); 
								toDrop.setInt(newDrop.getInt() + allSx + 修煉屬性[equipSelected][0]); 
								toDrop.setLuk(newDrop.getLuk() + allSx + 修煉屬性[equipSelected][0]); 
								toDrop.setMad(newDrop.getMad() + allGj + 修煉屬性[equipSelected][1]);
								toDrop.setPad(newDrop.getPad() + allGj + 修煉屬性[equipSelected][1]);
								**/
								toDrop.setStatR(newDrop.getStatR() + toDrop.getStatR() - oldDrop.getStatR());
								toDrop.setBossDamageR(newDrop.getBossDamageR() + toDrop.getBossDamageR() - oldDrop.getBossDamageR());
								toDrop.setIgnorePDR(newDrop.getIgnorePDR() + toDrop.getIgnorePDR() - oldDrop.getIgnorePDR());
								toDrop.setDamR(newDrop.getDamR() + toDrop.getDamR() - oldDrop.getDamR()); 
								
								toDrop.setTitle(修煉裝備[equipSelected][0]+"+1");
								toDrop.setItemId(nextItem);
								//toDrop.setAttribute(1);
								player.updateItem(1, toDrop);
								npc.broadcastGachaponMsgEx("[五行修煉]:恭喜玩家 【"+player.getName()+"】 完成五行修煉進階,神器階段上升為‘"+修煉裝備[equipSelected][0]+"’！",toDrop);
								npc.say("#r進階成功！",3003307);
							}else{
								//普通修煉
								toDrop.setStr(toDrop.getStr() + 修煉屬性[equipSelected][0]); 
								toDrop.setDex(toDrop.getDex() + 修煉屬性[equipSelected][0]); 
								toDrop.setInt(toDrop.getInt() + 修煉屬性[equipSelected][0]); 
								toDrop.setLuk(toDrop.getLuk() + 修煉屬性[equipSelected][0]); 
								toDrop.setMad(toDrop.getMad() + 修煉屬性[equipSelected][1]);
								toDrop.setPad(toDrop.getPad() + 修煉屬性[equipSelected][1]);
								toDrop.setTitle(修煉裝備[equipSelected][0]+"+"+(nowLevel+1));
								//toDrop.setAttribute(1);
								player.updateItem(1, toDrop);
								
								if((nowLevel+1) >= changeLevel){
									player.updateQuestRecordEx(QUEST_ID, 修煉裝備[equipSelected][0], (jieduanCount+1));								
									npc.broadcastGachaponMsgEx("[五行修煉]:恭喜玩家 【"+player.getName()+"】 完成五行修煉任務,裝備四維屬性+"+修煉屬性[equipSelected][0]+",攻擊力/魔法力+"+修煉屬性[equipSelected][1]+"！",toDrop);
								}else{
									npc.broadcastGachaponMsgEx("[五行修煉]:恭喜玩家 【"+player.getName()+"】 完成五行修煉任務,裝備四維屬性+"+修煉屬性[equipSelected][0]+",攻擊力/魔法力+"+修煉屬性[equipSelected][1],toDrop);
								}
								
								npc.say("#r修煉成功！#b目標裝備四維屬性+"+修煉屬性[equipSelected][0]+",攻擊力/魔法力+"+修煉屬性[equipSelected][1],3003307);
							}
							
							
						}else{
							npc.say(PDStr,3003307);
							break;
						}
					}else{
						break;
					}
				}else{
					npc.say("#r您的第一格裝備不是目標裝備,無法使用",3003307);
					break;
				}
			}
		}
	}
}


//得到角色仙魔陣營信息
function getInitCamp(camp) {
    let sql = "select * from jili_camp where character_id = '" + player.getId() + "'";
    let push = player.customSqlResult(sql);
    if (push.size() > 0) {
		return push.get(0);
    } else {
        player.customSqlInsert("INSERT INTO `jili_camp` (`character_id`, `account_id`,`character_name`,`point`,`camp`) VALUES ('"+player.getId()+"','" + player.getAccountId() + "', '" + player.getName() + "','0','"+camp+"')");
        return getInitCamp("");
    }
}