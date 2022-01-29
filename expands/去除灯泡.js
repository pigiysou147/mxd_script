/**
 
**/
var status = 0;
var random = Math.floor(Math.random() * 4);
var eff = "#fEffect/CharacterEff/1082565/2/0#";
var vvv = "#fUI/Basic/BtHide3/mouseOver/0#";
var sss = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/ItemEff/1112811/0/0#"; //黄金音符
var z5 = "#fEffect/CharacterEff/1112904/2/1#"; //五角花
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var icon6 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#"; //大笑
var sss = "#fUI/UIWindow4/PQRank/rank/gold#";//皇冠
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var tz12 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var tz21 = "#fUI/Basic.img/BtCoin/normal/0#";// 
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var a = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#";////金左指标
var b = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#";////金右指标

let selStr = "#d#L1#"+sss+"去除灯泡#l\r\n\r\n";





let selected = npc.askMenu(selStr);

switch (selected){
	case 1://副本组队
	if(player.getPQLog("去灯泡")<2){
		player.addPQLog("去灯泡",1,999);
	
		var Care = [63351,58513,63521,63832,61155,56553,16909,16880,64011,64010,34901,23220,22603,22602,22300,62241,7107,19018, 35057, 35056, 16018, 16020, 16022, 16024, 16026, 16028, 29900, 29901, 29902, 29903, 36102, 2646, 17035,34965, 32240, 32241, 32242, 32243, 32244, 32245, 32246];
              for (var ii in Care) {
			  player.completeQuest(Care[ii],0); 
			  }
                      
			  npc.say("已帮您消除灯泡！");
              break;
	}else{
		npc.say("不可以重复去除");
	}
}