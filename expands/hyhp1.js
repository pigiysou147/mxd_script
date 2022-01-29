/*
 *兑换
 */
var status = 0;
var need;

var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#"; //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#"; //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#"; //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#"; //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#"; //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#"; //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#"; //兔子粉
var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var playerId = 0;
var job = player.getJob();
var hp = 0;

txt = epp + " " + epp + " " + epp + " " + epp + " " + epp + " " + epp + " " + epp + " " + epp + " " + epp + " " + epp + "\r\n";
txt += "　　#b尊敬的 [ #r#h ##b ] 玩家,这里是降低血量系统\r\n";
txt += "　  #d洗血将扣除您 [ #r血量X20点券的费用白毛是30#d ] #k\r\n";
txt += "您好,欢迎使用点卷购买血量上限\r\n" + tz;
txt += "普通职业点卷血量比率 #e#r20：1#n#k 血量\r\n";
txt += tz + "恶魔复仇者职业点卷血量比率\r\n ";
txt += "#e#r30：1#n#k 血量#v2000013##v2000013##v2000013#\r\n" + tz;
txt += "目前点卷：#r" + player.getCashShopCurrency(1) + " #k点\r\n ";
txt += "#r" + zs + "" + zs + "" + zs + "" + zs + "" + zs + "";
let selection= npc.askNumber(txt, 100, 100, 1000000);
hp = selection;
if(job == 3100 || job == 3101 || job == 3120 || job == 3121 || job == 3122 || job == 3101) {
	need = selection * 20;
} else {
	need = selection * 12;
}
let sel = npc.askYesNo("您好,欢迎使用点卷购买降低血量.\r\n增加 #r" + selection + "#k 血量上限将会使用掉您 #r" + need + " #k点卷\r\n请确认后使用。");
if(sel == 1) {

	if(player.getCashShopCurrency(1) >= need) {
		player.increaseMaxHp(-hp);
		player.modifyCashShopCurrency(1, -need);
		npc.broadcastNotice( "『血量上限』 ：恭喜玩家 " + player.getName() + " 使用 " + need + " 点卷降低了 " + hp + " 血量上限");
		npc.say("恭喜降低了:" + hp + "血量。");
	} else {
		npc.say("您没有足够的点卷,请获取后使用.");
	}
}