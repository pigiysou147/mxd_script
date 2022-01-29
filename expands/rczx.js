
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化
var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 =  "#fUI/GuildMark/Mark/Etc/00009020/1#"; //星系
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var xp = "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#";
var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var aaa = "#fUI/UIWindow4/PQRank/rank/gold#";


var list = Array(
	Array("#v4001118#活跃奖励", 9310073, "huoyue"),
	Array("#v4031997#在线奖励", 9310073, "zxjl"),
	Array("#v2436256#每日寻宝", 2084001, "每日寻宝"),
	Array("#v4001839#每日跑环", 2470018, "mrph"),
	
	Array("#v2614025#突破任务", 9310073, "tprw"),
	Array("#v1202193#组队任务", 9310073, "zuduirenwu"),
	//Array("沙漠跑商", 9310073, "跑商入口"),
	//Array("骰子大师", 9310073, "dicemaster_start"),
	Array("#v2614025#突破极限", 9310073, "突破副本"),
	Array("#v2614025#绯红组队", 9310073, "突破副本"),
	Array("#v4001119#每日航海", 9310073, "突破副本"),
	Array("#v2436256#金币副本", 9310073, "金币副本入口"),
	Array("#v4001715#金率副本", 9310073, "金率副本入口")
	

);

		var text = "\t\t\t#e#r" + xp + "[任务发布榜]" + xp + "\r\n\r\n"
		for(var i = 0; i < list.length; i++) {
			text += "#r#e#L" + i + "#" +  list[i][0] + "#l#d#e";
			if(i == 2 || i == 5 || i == 8) {
				text += "\r\n\r\n";
			} else {
				text += ""
			}
		}
		let selection =npc.askMenu(text,9270081);
		if(selection == 4) {
			player.changeMap(102000005);
		}else if(selection==7){
			
			player.changeMap(610030020);
		}else if(selection==8){
			
			if(!player.isQuestCompleted(17003)){
				player.startQuest(17003,0);
			}

			if(player.getJob()==10112 && player.getPQLog("神之子任务") ==0 ){
				player.addPQLog("神之子任务",1,999);
				shenzhiz();
			}
			if(player.getJob()==10112 && player.getIntQuestRecordEx(17008,"T")!=2){
				
				player.updateQuestRecordEx(17008, "T", "2");
			}

			player.changeMap(865000001);
			
		} else {
			player.runScript( list[selection][2]);
		}

function shenzhiz(){
		
	player.startQuest(17003,0);
	player.completeQuest(17003,0);

	player.startQuest(17005,0);
	player.completeQuest(17005,0);

	player.startQuest(17006,0);
	player.completeQuest(17006,0);

	player.startQuest(17007,0);
	player.completeQuest(17007,0);

	player.updateQuestRecordEx(17932, "Near=2"); // Quest Name:Unknown
	player.updateQuestRecordEx(17011, "E", "0");
	player.updateQuestRecordEx(17011, "M", "0");
	player.updateQuestRecordEx(17011, "S", "1");
	player.updateQuestRecordEx(17007, "done");
	player.updateQuestRecordEx(17008, "T", "2");
	player.updateQuestRecordEx(17008, "L", "1");

	player.resetPQLog("SAIL_ENERGY");
	player.updateSailBoatInfo();
}
	
