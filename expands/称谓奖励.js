var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge="#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var jfLevel = [ 	
[1000,"新手"],	
[2000,"冒险家"],	
[3000,"战士"],	
[4000,"勇士"],	
[5000,"英雄"],	
[6000,"龙骑士"],	
[7000,"战神"],	
[8000,"傲世战神"],	
[10000,"巅峰王者"]

];
// 礼包内容
var reward = new Array(
	// 礼包50
	[
		[4440300,10],
		[4441300,10],
		[4442300,10],
		[4443300,10],
	],
	[
		[4440300,15],
		[4441300,15],
		[4442300,15],
		[4443300,15],
	],
	[
		[4440300,20],
		[4441300,20],
		[4442300,20],
		[4443300,20],
	],
	[
		[4440300,25],
		[4441300,25],
		[4442300,25],
		[4443300,25],
	],
	[
		[4440300,30],
		[4441300,30],
		[4442300,30],
		[4443300,30],
	],
	[
		[4440300,35],
		[4441300,35],
		[4442300,35],
		[4443300,35],
	],
	[
		[4440300,40],
		[4441300,40],
		[4442300,40],
		[4443300,40],
	],
	[
		[4440300,45],
		[4441300,45],
		[4442300,45],
		[4443300,45],
	],
	[
		[4440300,50],
		[4441300,50],
		[4442300,50],
		[4443300,50],
	]
);


var ljname;
var myLevel=0;
var score=player.customSqlResult("select score from characters where id = "+player.getId()).get(0).get("score");

//识别会员等级操作
for(var i=0;i<jfLevel.length;i++){
	if(score>=jfLevel[i][0]){
		myLevel++;
	}else{
		break;
	}
}

var text = "\t\t\t#v4031569# #ePK积分奖励中心#k#n #v4031569#\r\n\r\n";
text +="#e#b当前称谓为: "+jfLevel[myLevel][1]+"  总积分： #r" + score + " #d \r\n";
var txt = "";


for(var i = 0; i < jfLevel.length ; i++) {
	var count=getEventCount("称谓奖励" + jfLevel[i][0]);
	if(count == 1) {
		txt = "[#r已领取#d]";
	} else {
		if(count == 0 && score>=jfLevel[i][0]){
			txt = "[#b待领取#d]";
		}else if(count == 0 && score<jfLevel[i][0]){
			txt = "[#g未达标#d]";
		}
		
	}
	text += "#d#L" + i + "#" + tt + txt + jfLevel[i][1]+" 专属奖励 #r\t\t\t" + jfLevel[i][0] + "#l\r\n\r\n\r\n";
	for(var j=0;j<reward[i].length;j++){
		text += "#v"+reward[i][j][0]+"# X "+reward[i][j][1]+" ";
	}
	text+="\r\n"
	
	
	
}
text += "#k";
let selection = npc.askMenu(text);

text = "\t\t\t#e#r- " + jfLevel[selection][1] + " 称谓福利 -#k#n\r\n\r\n";
for(var i = 0; i < reward[selection].length; i++) {
	text += "\t\t#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] ;
	
	text+=	"#[" + reward[selection][i][1] + "个]";
	if(reward[selection][i].length>2){
		if(selection>=9){
			text +="\r\n\t\t"
		}
		text+="[#r"+reward[selection][i][2]+"#k]\r\n";
	}else{
		text+="\r\n";
	}
}
text +="\r\n#r#e点‘ 是 ’ 确认领取，点‘ 否 ’可以返回上一层\r\n";
let sel = npc.askYesNo(text);
if(sel == 1) {
	if(getEventCount("称谓奖励" + jfLevel[selection][0]) == 1) {
		npc.say("#e#r\r\n\r\n\t\t这个奖励您已经领取过了");
	} else if(score < jfLevel[selection][0]) {
		npc.say("称谓等级未达标！");
	} else if(player.getFreeSlots(1) < 10 || player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
		npc.say("每个栏位至少要保持10个空位以上才能领取哦~");
	} else {

		for(var i = 0; i < reward[selection].length; i++) {
			player.gainItem(reward[selection][i][0], reward[selection][i][1]);
		}
		setEventCount("称谓奖励" + jfLevel[selection][0], 0, 1);
		//npc.broadcastNotice("≡累计充值≡　　恭喜玩家 " + player.getName() + " 领取了累计充值 " + jfLevel[selection ] + " 元的福利礼包！！！");
	
		npc.say("领取成功");
	}
}


function getLevel(number){
	var level=0;
	for(var i=0;i<jfLevel.length;i++){
		if(number>=jfLevel[i]){
			level++;
		}else{
			break;
		}
	}
	if(level>10 && level <20){
		return "#v3991021##v3990000##v"+(3990000+level-11)+"#";
	}else if(level ==10){
		return "#v3991021##v3990000##v3990009#";
	}else if(level ==20){
		return "#v3991021##v3990001##v3990009#";
	}else{
		return "#v3991021##v"+(3990000+level-1)+"#";
	}
}

function getHyPay() {

	var sql = "select score from hypay where accountid = ? ";

	var result = player.customSqlResult(sql, player.getAccountId());

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("score");
		}
	} else {
		return 0;
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