/**
* 师徒系统 CC 835456564 
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

let cat1="#fItem/Pet/5000000.img/alert/0#";
let cat2="#fItem/Pet/5000000.img/fly/0#";
let cat3="#fItem/Pet/5000000.img/cry/0#";
let tu1 = "#fItem/Cash/0501.img/05010045/effect/stand1/1#"
let tu2 = "#fItem/Cash/0501.img/05010002/effect/default/7#"
let tu3 = "#fUI/NameTag/medal/758/w#"
let tu4 = "#fEffect/SetEff.img/245/effect/28#"
let tu5 = "#fUI/NameTag/medal/758/e#"
let tu6 = "#fUI/NameTag/medal/758/c#"
let fy = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/1#";
let fy1 = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/2#";
let dz = "#fUI/GuildMark/Mark/Etc/00009020/1#";
let dz1 = "#fEffect/CharacterEff/1003393/1/0#";
let star = "#fEffect/CharacterEff/1051294/1/1#"
//玩家最多可以带的”未出师“的数量
var maxNoGra = 10;
//拜师等级
var minLevel = 200;
var maxLevel = 260;

//每个阶段需要的出师数量
var upLevelNum = [2,5,10,15,20,25];
//每个阶段的称号
var upLevelTitle = ["初为人师","为人师表","循循善诱","诲人不倦","厚得树人","桃李天下"];
//师傅每日奖励
var myScore=player.customSqlResult("select * from zz_totalscore where characterid="+player.getId()).get(0).get("总评分");;
var scoreLimit=80000;

//解除关系需要的冒险币
var byeMoney = 100000000;
//出师等级
var graduateLevel = 262;


var nowLevelIndex = -1;

var myStudentInfo = getStudentInfo();
var myTeacherInfo = getTeacherInfo();

			
var text ="";

text = text.substring(0,text.length-2) + "\r\n";
if(myStudentInfo != null){
	for(var i=upLevelNum.length-1;i>=0;i--){
		if(parseInt(myStudentInfo.get(0).get("graduatedNum").toString()) >= upLevelNum[i]){
			nowLevelIndex = i;
			break;
		}
	}
	text += "#d" + wi3 + " 教学等级 [ #r"+(nowLevelIndex+1)+"#d ]\r\n";
	text += "#d" + wi3 + " 您当前有 [ #r"+myStudentInfo.size()+"#d ] 位徒弟";
	text += "   #d" + wi3 + " 已出师数 [ #r"+myStudentInfo.get(0).get("graduatedNum")+"#d ] 位徒弟\r\n";
}else{
	text += "#d" + wi3 + " 您目前还没有收徒哦！";
}
if(myTeacherInfo != null){
	text += "#d" + wi3 + " 你的师父 [ #r" + myTeacherInfo.get(0).get("teacherName") + "#d ] #d" + wi3 + " 出师状态 [ #r" + (myTeacherInfo.get(0).get("graduated")==0?"未出师":"已出师") + "#d ] \r\n";
}else{
	text += "#d" + wi3 + " 你目前还没有拜师哦！\r\n";
}
text += "#b#L0#" + wi2 + "怎样拜师或收徒？\t#b#l\r\n\r\n";
text += "  #e#d我是师傅              我是徒弟#n\r\n";
text += "#b#L1#" + wi1 + " 我来带徒弟拜师#l     " + "#L5#" + wi1 + " 我要进行出师仪式#l\r\n";
text += "#L2#" + wi1 + " 我想查看/清理徒弟#l  " + "#L6#" + wi1 + " 我想离开师门#l\r\n";
if(myStudentInfo != null){
	
text += "#L3#" + wi1 + " 我想领取师傅奖励#l  "
}

var selected = npc.askMenu(text,9900000);
if(selected == 10086){
	player.runScript("百宝功能")
}else{
	switch (selected){
		case 0:
			//怎样拜师或收徒？
			
			text = head;
			text += icon + " #d#e如何拜师？#n#k\r\n";
			text += "\t等级 "+minLevel+"~"+maxLevel+" 级的玩家与符合收徒的玩家组队，由师傅担任队长，在我这里进行拜师仪式，徒弟只能同时拜一位玩家为师，如果自行取消师徒关系，需要 #r1#k 天后才能拜新的师傅。\r\n";
			text += icon + " #d#e如何收徒？#n#k\r\n";
			text += "\t等级大于 #r250#k 级的玩家与符合拜师的玩家组队，由师傅担任队长，在我这里进行拜师仪式，每位师傅同时最多可收取 #r5#k 名徒弟。\r\n";
			text += icon + " #d#e如何出师？#n#k\r\n";
			text += "\t玩家等级大于 #r"+graduateLevel+"#k 级并且评分大于"+scoreLimit+"时，可以#b#e单人#n#k在我这里进行出师仪式。出师后，玩家将获得出师奖励。\r\n";
			text += icon + " #d#e什么是师徒奖励？#n#k\r\n";
			text += "\t出师的时候，徒弟玩家可以获得200个进化币。师傅可以获得一个快乐源泉哦~\r\n";
			npc.say(text,9900000);
			player.runScript("师徒系统")
			break;
		case 1:
			if(player.getLevel() >= 250 &&( myStudentInfo == null || (myStudentInfo.size() - parseInt(myStudentInfo.get(0).get("graduatedNum").toString())) < maxNoGra)){
				//带人拜师
				if (party == null || player.getId() != party.getLeader() || party.getLocalMembers().length != 2) {
					npc.say("请满足以下条件再来找我吧！\r\n#d1.您需要与您想收的徒弟进行组队！\r\n2.队伍只有你们两人\r\n3.需要您是队长！\r\n4.徒弟等级为 #r" + minLevel + " ~ " + maxLevel,9900000);
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
					var YN = npc.askYesNo("#d您是否确定想收 #r"+members[studentIndex].getName()+" #d为徒？",9900000);
					if(YN == 1){
						if(members[studentIndex].getLevel() >= minLevel && members[studentIndex].getLevel() <= maxLevel){
							
							//需要查询目标玩家是否有师傅
							var sql = "select * from jili_teacher where studentName = '" + members[studentIndex].getName() + "'";
							var push = player.customSqlResult(sql);
							if(push.size() > 0){;
								npc.say("#d你想要收 #r"+members[studentIndex].getName()+" #d为徒,首先得问问他的师傅的意见吧？",9900000);
							}else{
								npc.broadcastNoticeWithoutPrefix("[师徒系统]: 祝贺 "+members[studentIndex].getName()+" 拜入 "+members[myIndex].getName()+" 门下");
								player.customSqlInsert("INSERT INTO `jili_teacher` (`teacherName`, `studentName`,`graduated`,`status`) VALUES ('" + members[myIndex].getName()+ "', '" + members[studentIndex].getName() + "','0',0)");
								npc.say("成功拜师！",9900000);
							}
							
						}else{
							npc.say("#d对方等级不满足#r(" + minLevel + " ~ " + maxLevel+")#d！无法拜师！",9900000);
						}
					}else{
						npc.say("真遗憾，想好了再来吧！",9900000);
					}
					
				}
			}else{
				npc.say("#d您无法收徒弟！原因可能：\r\n1.最多同时带 #r"+maxNoGra+" #d个未出师徒弟！\r\n2.您的等级未到250级",9900000);
			}
			break;
		case 2:
			//清理查看门户
			text = "#d以下是你的徒弟信息(如果需要清理门户,请点击对应徒弟):\r\n\r\n"
			try{
				for(var i = 0;i<myStudentInfo.size();i++){
					text += "#L"+i+"# #d" + myStudentInfo.get(i).get("studentName") + " #b等级:"+myStudentInfo.get(i).get("studentLevel") + " "+(myStudentInfo.get(i).get("graduated") == 0?" #r未出师":" #g已出师") +" \r\n"
				}
				selected = npc.askMenu(text,9900000);
				if(myStudentInfo.get(selected).get("graduated") == 1){
					npc.say("不能与已出师的徒弟解除关系哦！",9900000);
				}else{
					var YN = npc.askYesNo("#b你是否确认与 #r"+myStudentInfo.get(selected).get("studentName")+" #b解除师徒关系？\r\n需要花费冒险币 #r"+byeMoney,9900000);
					if(YN == 1){
						if(player.hasMesos(byeMoney)){
							player.loseMesos(byeMoney);
							player.customSqlUpdate ("delete from jili_teacher where studentName = '"+myStudentInfo.get(selected).get("studentName")+"'");
							npc.broadcastNoticeWithoutPrefix("[师徒系统]: "+myStudentInfo.get(selected).get("studentName")+" 练功不勤！被 "+player.getName()+" 逐出师门！");
							npc.say(myStudentInfo.get(selected).get("studentName")+"已离开师门",9900000);
						}else{
							npc.say("你的钱不够哦！",9900000);
						}
					}else{
						npc.say("再想想吧！",9900000);
					}
				}
			}catch(e){
				npc.say("没有找到徒弟信息");
			}
			
			break;
		case 3:
			//老师奖励
			
			var ttt= "#r#e你每一个出师的徒弟都会给你有一份出师奖励，奖励内容为：5000W突破（100E以上可以获得4E突破），快乐源泉X1\r\n\r\n";
			for(var i=0;i<myStudentInfo.size();i++){
				ttt+="#L"+i+"#";
				if(myStudentInfo.get(i).get("status")=="1"){
					ttt+="#r#e【已领取】#k";
				}else{
					ttt+="#g#b【未领取】#k";
				}
				ttt+="#r徒弟 :#b"+myStudentInfo.get(i).get("studentName")+"#k 出师状态: ";
				if(myStudentInfo.get(i).get("graduated")=="1"){
					ttt+="#r#e已经出师#k";
				}else{
					ttt+="#g#e未出师#k";
				}
				
				ttt+="#l\r\n\r\n";
			}
			let studentSel=npc.askMenu(ttt);
			var item=player.getInventorySlot(-1,-11);
				
			if (parseInt(myStudentInfo.get(studentSel).get("graduated"))==0){
				npc.say("该徒弟未出师，不能获得奖励");
			
			}else if(parseInt(myStudentInfo.get(studentSel).get("status"))>0){
				npc.say("该徒弟的出师奖励已经领取过了");
			}else if(item==null){
				npc.say("请携带武器");
			}else if(getEventCount("师傅奖励")>0){
				npc.say("请明天再来，每天只能领取一次师傅奖励哦~");
			}else{
				var str = "#b恭喜你获得徒弟出师带来的福利\r\n";
				
				player.gainItem(2436298,1);
				
				if(item.getLimitBreak()>=10000000000){
					item.setLimitBreak(item.getLimitBreak()+50000000*8);
					str+="获得了4E突破";
				}else{
					str+="获得了5000W突破";
					item.setLimitBreak(item.getLimitBreak()+50000000*1);
				}
				player.updateItem(-11,item);

				
				player.customSqlUpdate ("update jili_teacher set status = 1 where studentName = '"+myStudentInfo.get(studentSel).get("studentName")+"'");
				setEventCount("师傅奖励",1,1);
				
				npc.say(str,9900000);
			}
			
			
			break;
		
		case 5:
			//出师
			if(myTeacherInfo == null){
				npc.say("#b你连师傅都没有，谈什么出师？",9900000);
			}else if(player.getLevel() < graduateLevel || scoreLimit>myScore){
				npc.say("#b加油修炼吧！达到 #r"+graduateLevel+" #b级并且战斗力达到"+scoreLimit+",就可以出师获得奖励啦！",9900000);
			}else if(myTeacherInfo.get(0).get("graduated")==1 || player.getPQLog("出师奖励")){
				npc.say("#b你已经进行了出师礼仪，并且领取了奖励，不可再次领取！",9900000);
			}else {
				//领奖
				var ttt = "#b恭喜你出师!这是你师傅给你准备的礼物！\r\n";
				ttt += "#v2433418##z2433418#（强混3次均10小暴君） x 4\r\n"
				ttt += "#v4310060##z4310060#（白嫖套装强化币） x 200\r\n"
				player.gainItem(2433418,4);
				player.gainItem(4310060,200);
				
				player.addPQLog("出师奖励",10,1500);
				player.customSqlUpdate ("update jili_teacher set graduated = 1 where studentName = '"+player.getName()+"'");
				npc.broadcastNoticeWithoutPrefix("[师徒系统]: "+myTeacherInfo.get(0).get("teacherName")+" 的徒弟 "+player.getName()+" 刻苦修炼！成功出师！");
				npc.say(ttt,9900000);
			}
			
			break;
		case 6:
			//离开师门
			if(myTeacherInfo != null){
				if(myTeacherInfo.get(0).get("graduated")==0){
					text = "#d是否确定离开你的师父 [ #r" + myTeacherInfo.get(0).get("teacherName") + "#d ] #r(需要金币:"+byeMoney+")?\r\n";
					var YN = npc.askYesNo(text,9900000);
					if(YN == 1){
						if(player.hasMesos(byeMoney)){
							player.loseMesos(byeMoney);
							player.customSqlUpdate ("delete from jili_teacher where studentName = '"+player.getName()+"'");
							npc.broadcastNoticeWithoutPrefix("[师徒系统]: "+myTeacherInfo.get(0).get("teacherName")+" 误人子弟！ "+player.getName()+" 愤愤的离开了师门！");
							npc.say("已离开师门",9900000);
						}else{
							npc.say("你的钱不够哦！",9900000);
						}
					}else{
						npc.say("好好考虑清楚吧！",9900000);
					}
				}else{
					text = myTeacherInfo.get(0).get("teacherName") + "教导你毕业，可不能忘本哦！"
					npc.say(text,9900000);
				}
			}else{
				text = "#d你目前还没有拜师哦！\r\n";
				npc.say(text,9900000);
			}
			break;
		
	}
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

function getEventCount(eventName) {
    var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";
    var result = player.customSqlResult(sql, player.getAccountId(), eventName);
    if(result.size() > 0) {
        if(result.get(0) != null) {
            return result.get(0).get("value");
        }
    } else {
        var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";
        var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
        return 0;
    }
}
function setEventCount(eventName, type, value) {
    var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";
    var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);
}