/* 符号 648215571*/
var status = 0;

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
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#"; ////美化2
var yun = "#fUI/UIWindow/Quest/icon7/0#"; ////红沙漏
var yun1 = "#fUI/UIWindow/Quest/icon7/10#"; ////红色圆
var yun2 = "#fUI/UIWindow/Quest/icon8/0#"; ////蓝指标
var yun3 = "#fUI/UIWindow/Quest/prob#"; ////机率获得
var yun4 = "#fUI/UIWindow/Quest/reward#"; ////奖励
var yun5 = "#fUI/UIWindow/Quest/summary#"; ////任务简洁
var yun6 = "#fUI/UIWindow/PartySearch2/BtPrev/mouseOver/0#"; ////左指标
var yun7 = "#fUI/UIWindow/PartySearch2/BtNext/mouseOver/0#"; ////右指标
var yun8 = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#"; ////金左指标
var yun9 = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#"; ////金右指标
var yun12 = "#fUI/UIWindow/Megaphone/2#"; ////骷髅
var xiaoyun1 = "#fUI/UIWindow/AriantMatch/characterIcon/0#"; ////红方
var xiaoyun2 = "#fUI/UIWindow/AriantMatch/characterIcon/1#"; ////蓝方
var xiaoyun3 = "#fUI/UIWindow/AriantMatch/characterIcon/2#"; ////绿方
var xiaoyun4 = "#fUI/UIWindow/AriantMatch/characterIcon/3#"; ////黄方
var xiaoyun5 = "#fUI/UIWindow/AriantMatch/characterIcon/4#"; ////紫方
var xiaoyun6 = "#fUI/UIWindow/AriantMatch/characterIcon/5#"; ////橙方
var xiaoyun7 = "#fUI/UIWindow/Minigame/Common/btStart/mouseOver/0#"; ////开始
var xiaoyun8 = "#fUI/UIWindow/Minigame/Common/mark#"; ////冒险岛图标

var selStr = "\t  " + xiaoyun1 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "" + xiaoyun5 + "" + xiaoyun5 + "" + xiaoyun1 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "\r\n";
selStr += "\t  " + xiaoyun1 + "\t\t\t#e#r符号系统\t\t\t  " + xiaoyun5 + "\r\n";
selStr += "\t " + xiaoyun1 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "" + xiaoyun5 + "" + xiaoyun6 + "" + xiaoyun1 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "\r\n";
selStr += "\t\t\t #L0##d" + zs + "符号介绍" + zs + "#l#k\r\n";
selStr += "\t\t\t #d#L4#" + zs1 + "升级符号" + zs1 + "#l\r\n";
selStr += "\t\t #r#L6#  " + zs1 + "基础符号领取" + zs1 + "#l\r\n";
selStr += "\t\t #r#L7#  " + zs1 + "顶级徽章潜能" + zs1 + "#l\r\n";
selStr += "\t\t #r#L8#  " + zs1 + "每日福利领取" + zs1 + "#l";

let selection = npc.askMenuS(selStr);
if(selection == 0) {
	var selStr = "#e#r本服特殊的符号系统，下面是符号的属性介绍以及需要的材料.。\r\n\r\n";
	
	selStr += "#b#z1190401##v1190401# 全属性X10 需要材料:#r" + xiaoyun8 + "#l";
	selStr += "#k#e#r#v4001618# X 10 #v4000000# X 1000 #v4000016# X 1000 #v4021016# X 20 #v4000124# X 20 \r\n\r\n";
	
	selStr += "#b#z1190402##v1190402# 全属性X20 需要材料:#r" + xiaoyun8 + "#l";
	selStr += "#k#e#r#v4001618# X 30 #v4000000# X 3000 #v4000016# X 3000 #v4021016# X 50 #v4000124# X 50 #v4000313# X 60 #v4033356# X 20\r\n\r\n";
	
	selStr += "#b#z1190405##v1190405# 全属性X30 需要材料:#r" + xiaoyun8 + "#l";
	selStr += "#k#e#r#v4001618# X 60 #v4000000# X 5000 #v4000016# X 5000 #v4021016# X 80 #v4000124# X 80 #v4000313# X 120 #v4033356# X 50\r\n\r\n";
	
	selStr += "#b#z1190407##v1190407# 全属性X40 需要材料:#r" + xiaoyun8 + "#l";
	selStr += "#k#e#r#v4001618# X 100 #v4000000# X 6000 #v4000016# X 6000 #v4021016# X 100 #v4000124# X 100 #v4000313# X 500 #v4033356# X 100\r\n\r\n";
	
	selStr += "#b#z1190301##v1190301# 全属性X50 需要材料:#r" + xiaoyun8 + "\r\n#l";
	selStr += "#k#e#r#v4001618# X 150 #v4000000# X 6000 #v4000016# X 6000 #v4021016# X 150 #v4000124# X 150 #v4000313# X 600 #v4033356# X 150\r\n\r\n";
	
	
	npc.say(selStr);
} else if(selection == 4) {
	player.runScript("sjdw");
} else if(selection == 7) {
	player.runScript("hzqn");
} else if(selection == 6) {
	var toDrop = player.makeItemWithId(1190400);

	toDrop.setStr(5); //装备力量
	toDrop.setDex(5); //装备敏捷
	toDrop.setInt(5); //装备智力
	toDrop.setLuk(5); //装备运气
	toDrop.setPad(5); //物理攻击
	toDrop.setMad(5); //魔法攻击 
	toDrop.setTitle("进击的少年");
	player.gainItem(toDrop)
	npc.say("恭喜您获得 #r管理员送出的礼物#k 。");
	npc.broadcastGachaponMsgEx("[符号系统] : 恭喜 " + player.getName() + " 领取BOSS符号.加油升级符号吧！", toDrop);
}else if(selection == 8) {
	player.runScript("dwfl");


}