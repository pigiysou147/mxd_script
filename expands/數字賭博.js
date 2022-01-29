/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：NPC 功能模版
 *  
 *  @Author Jackson 
 */

/* global cm */
var selStr;
var status = -1;
var winTimes = 0;
var uiFPaper = "#fUI/UIWindow.img/RpsGame/Fpaper#";
var uiFRock = "#fUI/UIWindow.img/RpsGame/Frock#";
var uiFScissor = "#fUI/UIWindow.img/RpsGame/Fscissor#";
var uiPaper = "#fUI/UIWindow.img/RpsGame/paper#";
var uiRock = "#fUI/UIWindow.img/RpsGame/rock#";
var uiScissor = "#fUI/UIWindow.img/RpsGame/scissor#";
var uiWin = "#fUI/UIWindow.img/RpsGame/charWin#";
var uiLose = "#fUI/UIWindow.img/RpsGame/charLose#";
var FpictureArr=Array(uiFRock, uiFScissor, uiFPaper);
var pictureArr=Array(uiRock, uiScissor, uiPaper);
var step = -1;
			selStr = "請輸入下注的賭注\r\n#r#e注意單位萬元\r\n\#b最少1萬，最大1億。小賭怡情，大賭成家立業";
			let money = npc.askNumber(selStr,"", 1, 10000000);
			let once = money*10000
			if (player.hasMesos(once)){
		var playerHand = npc.askNumber("輸入你覺得是你的幸運號碼1~9","", 1, 9);
		var npcHand = Math.floor(Math.random()*3);
		var result =  playerHand - npcHand;
		
		if (result == 0) {
		var win = once * 2
		player.gainMesos(win);
		npc.say("可...可...可惡...居然讓你贏了...恭喜獲得了"+win+"遊戲幣");
		} else {
			//lose
			player.loseMesos(once);
			npc.say(uiLose+"\r\n呵呵呵，你還是太年輕了。\r\n本次數字開出#fs24##r#e"+npcHand+"\r\n");
		}
			}else{
				npc.say("楓幣不足喔~")
			}