/**
* 链接NPC  QQ:739977676 
**/
let 圖示1 ="#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
let 圖示2 ="#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#";
let 圖示3 ="#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#";
var iconA = "#fEffect/CharacterEff/1050312/2/0#";
var iconB = "#fEffect/CharacterEff.img/1082312/0/0#"
var iconC = "#fEffect/CharacterEff.img/1082312/1/0#"
var iconD = "#fEffect/CharacterEff.img/1082700/0/0#"
var iconE = "#fEffect/CharacterEff.img/1082700/0/0#"
var menuList = Array(
	Array("#bFB禮包登記" , 1),
	Array("#b紅包系統" , 2),
	Array("#b發放全服福利" , 3),
	Array("#b音效播放" , 4),
	Array("#b在地圖上顯示倒數時間" , 5),
	Array("#b發送地圖天氣廣播" , 6),
	Array("#b將目前地圖玩家傳送至另一張地圖" , 7),
	Array("#b顯示特效" , 8)
        );
		
let selStr = "";
	selStr += "#fs16##r#e服主專用活動工具組#fs12##b#n\r\n";
for(var i = 0; i < menuList.length ; i++){
	if(i%1 == 0){
	selStr += "\r\n"
	}
	selStr += iconE+"#L" + menuList[i][1] + "#" + menuList[i][0] + "#l" + "  ";
}


let selected = npc.askMenu(selStr);

switch (selected){
	case 1:
		player.runScript("FB禮包登記")
		break;
	case 2:
		player.runScript("搶紅包")
		break;
	case 3:
		player.runScript("全服福利")
		break;
	case 4:
		player.runScript("音效播放")
		break;
	case 5:
		var time = npc.askNumber("請輸入秒數，最大6000秒","",0,6000);
		map.showTimer(time);
		break;
	case 6:
		var 公告 = npc.askText("請輸入您要公告的事項","",0,999);
		map.blowWeather(5120043,公告);
		break;
	case 7:
		var time = npc.askNumber("請輸入將目前地圖玩家傳送至的地圖ID","",0,999999999);
		map.transferPlayers(time);
		break;
	case 8:
		player.runScript("特效顯示")
		break;
}