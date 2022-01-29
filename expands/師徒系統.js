/**
* 師徒系統  739977676 
**/
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var ttt1 = "#fEffect/BasicEff/MainNotice/maple9th/Appear/9#";
var wi1 = "#fUI/SoulUI.img/DungeonMinimap/BtMaxi/pressed/0#";
var wi2 = "#fUI/RunnerGame.img/RunnerGameUI/UI/BtClose/normal/0#";
var wi3 = "#fUI/piggyBarMinigame.img/crunch/1#";
var eff1 = "#fEffect/CharacterEff/1112924/0/0#";
var eff2 = "#fEffect/CharacterEff/1112925/0/0#";
var eff3 = "#fEffect/CharacterEff/1112924/0/0#";

//玩家最多可以帶的”未出師“的數量
var maxNoGra = 10;
//拜師等級
var minLevel = 10;
var maxLevel = 275;

//每個階段需要的出師數量
var upLevelNum = [1,2,3,4,5,6];
//每個階段的稱號
var upLevelTitle = ["初為人師","為人師表","循循善誘","誨人不倦","厚得樹人","桃李天下"];
//師傅每日獎勵
var teacherItemList = Array(
	Array(
		Array(4000000,1),
		Array(4000001,1)
	),
	Array(
		Array(4000001,1),
		Array(4000002,1)
	),
	Array(
		Array(4000000,1),
		Array(4000001,1)
	),
	Array(
		Array(4000003,1),
		Array(4000004,1)
	),
	Array(
		Array(4000005,1),
		Array(4000006,1)
	),
	Array(
		Array(4000007,1),
		Array(4000008,1)
	)
);

//解除關係需要的冒險幣
var byeMoney = 1000000;
//出師等級
var graduateLevel = 250;
var graduateReward = Array(
		Array(4000003,1),
		Array(4000004,1)
);

var nowLevelIndex = -1;

var myStudentInfo = getStudentInfo();
var myTeacherInfo = getTeacherInfo();

			
var text = "#fs16##e#r"+ eff1 + eff2 + eff2 + eff2 + eff2 + eff2 +  "   師徒情誼   " + eff2 + eff2 + eff2 + eff2 + eff2 +  eff1 +"#fs12#\r\n";
text += "\t#g#nBecause of your support, we will do better!\r\n"
text += "#d" + wi3 + " 升級所需出師人數為：";
for(var i = 0;i<upLevelNum.length;i++){
	text += "#r"+upLevelNum[i] + "#d - ";
}
text = text.substring(0,text.length-2) + "\r\n";
if(myStudentInfo != null){
	for(var i=upLevelNum.length-1;i>=0;i--){
		if(parseInt(myStudentInfo.get(0).get("graduatedNum").toString()) >= upLevelNum[i]){
			nowLevelIndex = i;
			break;
		}
	}
	text += "#d" + wi3 + " 教學等級 [ #r"+(nowLevelIndex+1)+"#d ]，稱謂 [ #r"+upLevelTitle[nowLevelIndex]+"#d ]\r\n";
	text += "#d" + wi3 + " 您當前有 [ #r"+myStudentInfo.size()+"#d ] 位徒弟";
	text += "   #d" + wi3 + " 已出師數 [ #r"+myStudentInfo.get(0).get("graduatedNum")+"#d ] 位徒弟\r\n";
}else{
	text += "#d" + wi3 + " 您目前還沒有收徒哦！";
}
if(myTeacherInfo != null){
	text += "#d" + wi3 + " 你的師父 [ #r" + myTeacherInfo.get(0).get("teacherName") + "#d ] #d" + wi3 + " 出師狀態 [ #r" + (myTeacherInfo.get(0).get("graduated")==0?"未出師":"已出師") + "#d ] \r\n";
}else{
	text += "#d" + wi3 + " 你目前還沒有拜師哦！\r\n";
}
text += "#b#L0#" + wi2 + "怎樣拜師或收徒？\t#b#L4#" + wi2 + "師傅成就獎勵表查看#l\r\n\r\n";
text += "  #e#d我是師傅              我是徒弟#n\r\n";
text += "#b#L1#" + wi1 + " 我來帶徒弟拜師#l     " + "#L5#" + wi1 + " 我要進行出師儀式#l\r\n";
text += "#L2#" + wi1 + " 我想查看/清理徒弟#l  " + "#L6#" + wi1 + " 我想離開師門#l\r\n";
text += "#L3#" + wi1 + " 我想領取師傅獎勵#l\r\n";

var selected = npc.askMenu(text);
switch (selected){
	case 0:
		//怎樣拜師或收徒？
		
		text = head;
		text += icon + " #d#e如何拜師？#n#k\r\n";
		text += "\t等級小于 #r220#k 級的玩家與符合收徒的玩家組隊，由師傅擔任隊長，在我這裡進行拜師儀式，徒弟只能同時拜一位玩家為師，如果自行取消師徒關係，需要 #r1#k 天后才能拜新的師傅。\r\n";
		text += icon + " #d#e如何收徒？#n#k\r\n";
		text += "\t等級大于 #r250#k 級的玩家與符合拜師的玩家組隊，由師傅擔任隊長，在我這裡進行拜師儀式，每位師傅同時最多可收取 #r5#k 名徒弟。\r\n";
		text += icon + " #d#e如何出師？#n#k\r\n";
		text += "\t玩家等級大于 #r250#k 級時，可以#b#e單人#n#k在我這裡進行出師儀式。出師后，玩家將獲得出師獎勵。\r\n";
		text += icon + " #d#e什麼是師徒獎勵？#n#k\r\n";
		text += "\t當徒弟等級處于 #r250#k 級時，可由師傅擔任隊長，帶領徒弟在我這裡領取相應師徒獎勵。\r\n";
		text += icon + " #d#e什麼是良師值？#n#k\r\n";
		text += "\t當徒弟出師時，師傅將獲得一定的良師值，良師值越高，師傅可獲得的師徒獎勵越多。\r\n";
		npc.say(text);
		break;
	case 1:
		//先判斷未出師的是否大于定義的
		if(myStudentInfo == null || (myStudentInfo.size() - parseInt(myStudentInfo.get(0).get("graduatedNum").toString())) < maxNoGra){
			//帶人拜師
			if (party == null || player.getId() != party.getLeader() || party.getLocalMembers().length != 2) {
				npc.say("請滿足以下條件再來找我吧！\r\n#d1.您需要與您想收的徒弟進行組隊！\r\n2.隊伍只有你們兩人\r\n3.需要您是隊長！\r\n4.徒弟等級為 #r" + minLevel + " ~ " + maxLevel);
			}else{
				var members = party.getLocalMembers();
				var myIndex = -1;
				var studentIndex = -1;
				for (var i = 0; i < members.length; i++) {
					if(members[i].getId() == player.getId()){
						myIndex = i;
						break;
					}
				}
				if(myIndex == 0){
					studentIndex = 1;
				}else{
					studentIndex = 0;
				}
				//studentIndex = 0;
				var YN = npc.askYesNo("#d您是否確定想收 #r"+members[studentIndex].getName()+" #d為徒？");
				if(YN == 1){
					if(members[studentIndex].getLevel() >= minLevel && members[studentIndex].getLevel() <= maxLevel){
						
						//需要查詢目標玩家是否有師傅
						var sql = "select * from jili_teacher where studentName = '" + members[studentIndex].getName() + "'";
						var push = player.customSqlResult(sql);
						if(push.size() > 0){;
							npc.say("#d你想要收 #r"+members[studentIndex].getName()+" #d為徒,首先得問問他的師傅的意見吧？");
						}else{
							npc.broadcastNoticeWithoutPrefix("[師徒系統]: 祝賀 "+members[studentIndex].getName()+" 拜入 "+members[myIndex].getName()+" 門下");
							player.customSqlInsert("INSERT INTO `jili_teacher` (`teacherName`, `studentName`,`graduated`) VALUES ('" + members[myIndex].getName()+ "', '" + members[studentIndex].getName() + "','0')");
							npc.say("成功拜師！");
						}
						
					}else{
						npc.say("#d對方等級不滿足#r(" + minLevel + " ~ " + maxLevel+")#d！無法拜師！");
					}
				}else{
					npc.say("真遺憾，想好了再來吧！");
				}
				
			}
		}else{
			npc.say("#d您無法再收徒弟了！最多同時帶 #r"+maxNoGra+" #d個未出師徒弟！");
		}
		break;
	case 2:
		//清理查看門戶
		text = "#d以下是你的徒弟信息(如果需要清理門戶,請點擊對應徒弟):\r\n\r\n"
		for(var i = 0;i<myStudentInfo.size();i++){
			text += "#L"+i+"# #d" + myStudentInfo.get(i).get("studentName") + " #b等級:"+myStudentInfo.get(i).get("studentLevel") + " "+(myStudentInfo.get(i).get("graduated") == 0?" #r未出師":" #g已出師") +" \r\n"
		}
		selected = npc.askMenu(text);
		if(myStudentInfo.get(selected).get("graduated") == 1){
			npc.say("不能與已出師的徒弟解除關係哦！");
		}else{
			var YN = npc.askYesNo("#b你是否確認與 #r"+myStudentInfo.get(selected).get("studentName")+" #b解除師徒關係？\r\n需要花費冒險幣 #r"+byeMoney);
			if(YN == 1){
				if(player.hasMesos(byeMoney)){
					player.loseMesos(byeMoney);
					player.customSqlUpdate ("devare from jili_teacher where studentName = '"+myStudentInfo.get(selected).get("studentName")+"'");
					npc.broadcastNoticeWithoutPrefix("[師徒系統]: "+myStudentInfo.get(selected).get("studentName")+" 練功不勤！被 "+player.getName()+" 逐出師門！");
					npc.say(myStudentInfo.get(selected).get("studentName")+"已離開師門");
				}else{
					npc.say("你的錢不夠哦！");
				}
			}else{
				npc.say("再想想吧！");
			}
		}
		
		break;
	case 3:
		//老師每日獎勵
		if (player.getFreeSlots(1) < teacherItemList[nowLevelIndex].length || player.getFreeSlots(2) < teacherItemList[nowLevelIndex].length || player.getFreeSlots(3) < teacherItemList[nowLevelIndex].length || player.getFreeSlots(4) < teacherItemList[nowLevelIndex].length || player.getFreeSlots(5) < teacherItemList[nowLevelIndex].length) {
			npc.say("請清理背包");
		}else if(player.getPQLog("老師每日福利")>0){
			npc.say("你今天已經領過了！");
		}else{
			var str = "#b恭喜你獲得今日#r【"+upLevelTitle[nowLevelIndex]+"】#b教師福利：\r\n";
			for(var i = 0; i < teacherItemList[nowLevelIndex].length ;i++){
				str += "\r\n#v"+teacherItemList[nowLevelIndex][i][0]+"# x "+teacherItemList[nowLevelIndex][i][1]+"\r\n"
				player.gainItem(teacherItemList[nowLevelIndex][i][0],teacherItemList[nowLevelIndex][i][1]);
			}
			player.addPQLog("老師每日福利",1,1);
			npc.say(str);
		}
		break;
	case 4:
		//老師每日獎勵查看
		text = head;
		//text = icon + " #d#e#n#k\r\n";
		text += icon + " #r#e[初為人師]：#b";
		for(var i = 0; i<teacherItemList[0].length;i++){
			text += " #v"+teacherItemList[0][i][0]+"# x " + teacherItemList[0][i][1] ;
		}
		text += "\r\n";
		text += icon + " #r#e[為人師表]：#b";
		for(var i = 0; i<teacherItemList[1].length;i++){
			text += " #v"+teacherItemList[1][i][0]+"# x " + teacherItemList[1][i][1] ;
		}
		text += "\r\n";
		
		text += icon + " #r#e[循循善誘]：#b";
		for(var i = 0; i<teacherItemList[2].length;i++){
			text += " #v"+teacherItemList[2][i][0]+"# x " + teacherItemList[2][i][1] ;
		}
		text += "\r\n";

		text += icon + " #r#e[誨人不倦]：#b";
		for(var i = 0; i<teacherItemList[3].length;i++){
			text += " #v"+teacherItemList[3][i][0]+"# x " + teacherItemList[3][i][1] ;
		}
		text += "\r\n";

		text += icon + " #r#e[厚得樹人]：#b";
		for(var i = 0; i<teacherItemList[4].length;i++){
			text += " #v"+teacherItemList[4][i][0]+"# x " + teacherItemList[4][i][1] ;
		}
		text += "\r\n";

		text += icon + " #r#e[桃李天下]：#b";
		for(var i = 0; i<teacherItemList[5].length;i++){
			text += " #v"+teacherItemList[5][i][0]+"# x " + teacherItemList[5][i][1] ;
		}
		text += "\r\n";
		text += "\r\n";
		npc.say(text);
		break;
	case 5:
		//出師
		if(myTeacherInfo == null){
			npc.say("#b你連師傅都沒有，談什麼出師？");
		}else if(player.getLevel() < graduateLevel){
			npc.say("#b加油修煉吧！達到 #r"+graduateLevel+" #b級,就可以出師獲得獎勵啦！");
		}else if(myTeacherInfo.get(0).get("graduated")==1 || player.getPQLog("出師獎勵")){
			npc.say("#b你已經進行了出師禮儀，並且領取了獎勵，不可再次領取！");
		}else if (player.getFreeSlots(1) < graduateReward.length || player.getFreeSlots(2) < graduateReward.length || player.getFreeSlots(3) < graduateReward.length || player.getFreeSlots(4) < graduateReward.length || player.getFreeSlots(5) < graduateReward.length) {
			npc.say("#b請清理背包,至少需要 "+graduateReward.length +" 格空余。");
		}else {
			//領獎
			var ttt = "#b恭喜你出師!這是你師傅給你準備的禮物！\r\n";
			for(var i = 0;i<graduateReward.length;i++){
				player.gainItem(graduateReward[i][0],graduateReward[i][1]);
				ttt += "#v"+graduateReward[i][0]+"##z"+graduateReward[i][0]+"# x "+graduateReward[i][1]+"\r\n"
			}
			player.addPQLog("出師獎勵",10,1500);
			player.customSqlUpdate ("update jili_teacher set graduated = 1 where studentName = '"+player.getName()+"'");
			npc.broadcastNoticeWithoutPrefix("[師徒系統]: "+myTeacherInfo.get(0).get("teacherName")+" 的徒弟 "+player.getName()+" 刻苦修煉！成功出師！");
			npc.say(ttt);
		}
		
		break;
	case 6:
		//離開師門
		if(myTeacherInfo != null){
			if(myTeacherInfo.get(0).get("graduated")==0){
				text = "#d是否確定離開你的師父 [ #r" + myTeacherInfo.get(0).get("teacherName") + "#d ] #r(需要金幣:"+byeMoney+")?\r\n";
				var YN = npc.askYesNo(text);
				if(YN == 1){
					if(player.hasMesos(byeMoney)){
						player.loseMesos(byeMoney);
						player.customSqlUpdate ("devare from jili_teacher where studentName = '"+player.getName()+"'");
						npc.broadcastNoticeWithoutPrefix("[師徒系統]: "+myTeacherInfo.get(0).get("teacherName")+" 誤人子弟！ "+player.getName()+" 憤憤的離開了師門！");
						npc.say("已離開師門");
					}else{
						npc.say("你的錢不夠哦！");
					}
				}else{
					npc.say("好好考慮清楚吧！");
				}
			}else{
				text = myTeacherInfo.get(0).get("teacherName") + "教導你畢業，可不能忘本哦！"
				npc.say(text);
			}
		}else{
			text = "#d你目前還沒有拜師哦！\r\n";
			npc.say(text);
		}
		break;
	
}






function getTeacherInfo(){
    var sql = "select * from jili_teacher where studentName = '" + player.getName() + "'";
    var push = player.customSqlResult(sql);
	if(push.size() > 0){;
		return push;
	}else{
		return null;
	}
}
function getStudentInfo(){
	var sql = "select jt.*,c.level as studentLevel,(select count(0) from jili_teacher where teacherName = '" + player.getName() + "' and graduated = 1) as graduatedNum from jili_teacher jt left join characters c on studentName = c.`name`  where jt.teacherName = '" + player.getName() + "'"
    var push = player.customSqlResult(sql);
	if(push.size() > 0){
		return push;
	}else{
		return null;
	}
}