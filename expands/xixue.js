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


let sel=npc.askMenu("\r\n#L0##v3994059# #r增加血量上限#k#l\t\t#L1##v3994060# #r增加蓝量上限#k#l\r\n\r\n#L2##v3994061# #b降低血量上限#k#l\t\t#L3##v3994062# #b降低蓝量上限#k#l");
if(sel==0){
	player.runScript("hyhp");
}else if(sel==1){
	player.runScript("hymp");
}else if(sel==2){
	player.runScript("hyhp1");
}else{
	player.runScript("hymp1");
}