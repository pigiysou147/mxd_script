/**
* 每日任務-新端腳本  739977676 
**/
let QUEST_ID = 11087; //自定義任務ID
let maxCanDo = 30;//最大完成次數
let maxReset = 20;//最多重置次數
let scriptName = "每日跑環"//腳本名稱 請放到expands 如果需要npc鏈接 請自行寫NPC代碼 player.runScript("");

//每輪固定獎勵
let rewards = Array(
	Array(4310030,1)
);
//每輪金幣
let rewardMoneny = 1000000;
//每輪點券
let rewardDQ = 10000;
//每輪抵用
let rewardDY = 0;

//每幾輪發放雙倍獎勵
let extraNum = 5;
let extraItem = 2430226;//每幾輪發放的額外東西
let extraItemNum = 1;//每幾輪發放的額外東西數量
let chance = 50;//幾率 百分比

let questitems = Array(
		Array(4000082, 50, "聽說冰封雪域廢礦區存在很多的僵尸，掉落的金牙是非常值錢的，請收集20個#v4000082#交給我，我會給你不錯的獎勵哦！",211041800), // 礦山僵尸金牙。
		Array(4000283, 50, "聽說武陵的流浪熊地盤，出現了很多熊貓，爆出的熊掌可以是很有效的藥材，那麼現在去收集#v4000283#給我吧！",250010304), // 藍色藥水 - 青色藥草研磨作成的藥水.\n恢復MP約100.
		Array(4009360, 50, "聽說在#r上海郊外#k有很多農場，你到那兒或許會有所發現。任務提示：收集#v4009360#。",701102000), // 雞爪 - 斗雞的腳,可以交換玉米或糖葫蘆
		Array(4009358, 50, "聽說在#r上海郊外#k有很多農場，你到那兒或許會有所發現。任務提示：收集#v4009358#。",701102000), // 鴨蛋 - 狂暴的鴨子產下的白色鴨蛋。
		Array(4009359, 50, "聽說在#r上海郊外#k有很多農場，你到那兒或許會有所發現。任務提示：收集#v4000252#。",701102000), // 雞肉 - 雞毛都退掉的整理好的雞肉
		Array(4000226, 50, "緊急通知：我需要幫助！神木村出現了好多萊西，好可怕，能不能替我擊殺它們收集#v4000226#給我，維持神木村的和平就靠你了。",240010000), // 半人馬的火花 - 火焰半人馬之力量的來源。
		Array(4000233, 50, "緊急通知：我需要幫助！神木村出現了好多半人馬，好可怕，能不能替我擊殺它們收集#v4000233#給我，維持神木村的和平就靠你了。",240020400), // 半人馬的凈水 - 寒冰半人馬之力量的來源。
		Array(4000229, 50, "緊急通知：我需要幫助！神木村出現了好多萊西，好可怕，能不能替我擊殺它們收集#v4000229#給我，維持神木村的和平就靠你了。",240010100), // 半人馬的骨頭 - 暗黑半人馬之力量的來源。
		Array(4000654, 50, "你知道嗎？在神殿某處出現了未來騎士團，我們懷疑這是黑暗魔法師的陰謀，請前往騎士團殿堂1消滅高級騎士A，收集#v4000654#交給我吧！",271030500), // 藍色藥水 - 青色藥草研磨作成的藥水.\n恢復MP約100.
		Array(4000655, 50, "你知道嗎？在神殿某處出現了未來騎士團，我們懷疑這是黑暗魔法師的陰謀，請前往騎士團殿堂2消滅高級騎士B，收集#v4000655#交給我吧！",271030510), 
		Array(4000656, 50, "你知道嗎？在神殿某處出現了未來騎士團，我們懷疑這是黑暗魔法師的陰謀，請前往騎士團殿堂3消滅高級騎士C，收集#v4000656#交給我吧！",271030520), 
		Array(4000657, 50, "你知道嗎？在神殿某處出現了未來騎士團，我們懷疑這是黑暗魔法師的陰謀，請前往騎士團殿堂4消滅高級騎士D，收集#v4000657#交給我吧！",271030530), 
		Array(4000658, 50, "你知道嗎？在神殿某處出現了未來騎士團，我們懷疑這是黑暗魔法師的陰謀，請前往騎士團殿堂5消滅高級騎士E，收集#v4000658#交給我吧！",271030540),
		Array(4000644, 50, "你喜歡射手村嗎？那是一個很美妙的地方。但是我最近做了一個夢，夢見射手村被破壞了。好像就在神殿的某處，你能不能幫我去看看，順便消滅一些變異的綠大水靈，收集#v4000644#給我做研究。",271010300), 
		Array(4000642, 50, "你喜歡射手村嗎？那是一個很美妙的地方。但是我最近做了一個夢，夢見射手村被破壞了。好像就在神殿的某處，你能不能幫我去看看，順便消滅一些變異的蝸大牛，收集#v4000642#給我做研究。",271010100),
		Array(4000643, 50, "你喜歡射手村嗎？那是一個很美妙的地方。但是我最近做了一個夢，夢見射手村被破壞了。好像就在神殿的某處，你能不能幫我去看看，順便消滅一些變異的花蘑大菇，收集#v4000643#給我做研究。",271020100),
		Array(4000645, 50, "你喜歡射手村嗎？那是一個很美妙的地方。但是我最近做了一個夢，夢見射手村被破壞了。好像就在神殿的某處，你能不能幫我去看看，順便消滅一些變異的漂漂大豬，收集#v4000645#給我做研究。",271010400)
        );
//記錄 參數說明
//completedCounts=完成次數 resetCounts=重置次數 date=時間字符串(20190320) questN=記錄第幾個任務(-1為沒接任務)
//player.updateQuestRecordEx(QUEST_ID, "count", "0");
//player.getQuestRecordEx(QUEST_ID,"date");

let date = player.getQuestRecordEx(QUEST_ID,"date");

//比對時間 如果數據庫記錄的不是今天的日期 則全部刷新
if(date != getNowFormatDate()){
	player.updateQuestRecordEx(QUEST_ID, "completedCounts", "0");
	player.updateQuestRecordEx(QUEST_ID, "resetCounts", "0");
	player.updateQuestRecordEx(QUEST_ID, "date", getNowFormatDate());
	player.updateQuestRecordEx(QUEST_ID, "questN", "-1");
}
let completedCounts = parseInt(player.getQuestRecordEx(QUEST_ID,"completedCounts"));
let resetCounts = parseInt(player.getQuestRecordEx(QUEST_ID,"resetCounts"));
let questN = player.getQuestRecordEx(QUEST_ID,"questN");

let YN = -1;
let str;
if(questN == -1){
	//沒接任務狀態 可以進行接任務操作
	str = "\t\t\t#e日常任務 - 每日任務" + maxCanDo + "環#n\r\n\r\n";
	str += "您今日可完成次數：#r" + (maxCanDo - completedCounts) + "#k 次\r\n";
	str += (maxReset !=0 ?"您今日可重置次數：#r" + (maxReset - resetCounts) + "#k 次\r\n":"");
	str += "獎勵：#b每輪#r"+rewardMoneny+"#b金幣,#r"+rewardDQ+"#b點券,#r"+rewardDY+"#b抵用\r\n";
	for (var i = 0; i < rewards.length; i++) {
		str += "#v"+rewards[i][0]+"# x "+rewards[i][1]+ "#r可以到ARC兌換換取神秘力量喔!\r\n";
	}
	str += "多輪福利：每完成#r"+extraNum+"次,將獲得雙倍獎勵,並且有幾率獲得#v"+extraItem+"##eARC自選箱 x "+extraItemNum+"#b\r\n";
	str += "\r\n是否接任務？"
	YN = npc.askYesNo(str);
	if(YN == 1){
		if(completedCounts >= maxCanDo){
			npc.say("今日無法再繼續做任務了！");
		}else{
			let random = Math.floor(Math.random()*questitems.length);
			//更新參數
			player.updateQuestRecordEx(QUEST_ID, "questN", random);
			player.runScript("每日跑環")
		}
		
	}
}else{
	//接了任務狀態 可以進行重置任務或者交付任務操作
	str = "#e>>> 正在進行第#b " + (completedCounts+1) + " #k環任務：#n\r\n";
	str += "描述："+questitems[questN][2]+"\r\n";
	str += "#e目標：#n收集 #r#z" + questitems[questN][0] + "# " + questitems[questN][1] + "#k 個。\r\n";
	str += "#e進度：#n#b目前擁有 #i" + questitems[questN][0] + "# #r" + player.getAmountOfItem(questitems[questN][0]) + "#b 個\r\n";
	str += "#L0#1.重置任務 可重置次數：#r" + (maxReset - resetCounts) + " 次#l\r\n#L1##b2.完成任務 可完成次數：#r" + (maxCanDo - completedCounts) + " 次#l\r\n#g#L2#3.傳送到目標地圖#l"

	let selected = npc.askMenu(str);
	switch (selected){
		case 0:
			//重置任務
			if((maxReset - resetCounts) > 0){
				player.updateQuestRecordEx(QUEST_ID, "resetCounts", parseInt(resetCounts+1));
				player.updateQuestRecordEx(QUEST_ID, "questN", "-1");
				player.runScript(scriptName)
			}else{
				npc.say("今日無法再重置任務了！");
			}
			break;
		case 1:
			if(player.hasItem(questitems[questN][0],questitems[questN][1])){
				if (player.getFreeSlots(1) < rewards.length || player.getFreeSlots(2) < rewards.length || player.getFreeSlots(3) < rewards.length || player.getFreeSlots(4) < rewards.length || player.getFreeSlots(5) < rewards.length) {
					npc.say("包裹空間不足，請確保包裹每個欄位有至少 " + rewards.length + " 格空間");
				}else{
					player.loseItem(questitems[questN][0],questitems[questN][1]);
					for (var i = 0; i < rewards.length; i++) {
						player.gainItem(rewards[i][0], (parseInt(completedCounts+1)%extraNum==0?(rewards[i][1]*2):rewards[i][1]));
					}
					player.gainMesos((parseInt(completedCounts+1)%extraNum==0?rewardMoneny*2:rewardMoneny));
					player.modifyCashShopCurrency(1,(parseInt(completedCounts+1)%extraNum==0?rewardDQ*2:rewardDQ));
					player.modifyCashShopCurrency(2,(parseInt(completedCounts+1)%extraNum==0?rewardDY*2:rewardDY));
					player.updateQuestRecordEx(QUEST_ID, "completedCounts", parseInt(completedCounts+1));
					player.updateQuestRecordEx(QUEST_ID, "questN", "-1");
					
					let ran = Math.floor(Math.random()*100);
					let ss = "";
					if(parseInt(completedCounts+1)%extraNum==0 && ran < chance){
						player.gainItem(extraItem,extraItemNum);
						ss = "恭喜您獲得額外的#r"+extraItemNum+"個#v"+extraItem+"#！"
					}
					
					npc.say("任務完成！獲取豐厚獎品！\r\n"+ss);
					player.runScript(scriptName)
				}
				
			}else{
				npc.say("材料不足");
			}
			//完成任務
			break;
		case 2:
			//傳送
			player.changeMap(questitems[questN][3]);
			break;
	}
		
}




//獲取當前時間，格式YYYY-MM-DD
function getNowFormatDate() {
	let date = new Date();
	let seperator1 = "";
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	let currentdate = year + seperator1 + month + seperator1 + strDate;
	return currentdate;
}