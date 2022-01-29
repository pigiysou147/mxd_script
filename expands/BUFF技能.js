
var eff1 = "#fEffect/CharacterEff/1112924/0/0#"
var eff2 = "#fEffect/CharacterEff/1112925/0/0#";
var eff3 = "#fEffect/CharacterEff/1112924/0/0#";

var itemlist = Array(
	2436243,
	2436247,
	2436248,
	2436249,
	2436246


);

var avail = "#fs16##e#r"+ eff1 + eff2 + eff2 + eff2 + eff2 + eff2 +  "   "+"BUFF獲得"+"   " + eff2 + eff2 + eff2 + eff2 + eff2 +  eff1 +"#fs12#\r\n";
avail += "\t\t\t#n#gBUFF技能,隨心使用!#b\r\n"
avail += "#v2436243# BUFF技能 -#r【  魔法盾  】#b僅限用於4轉后支持的職業 \r\n"
avail += "#v2436246# BUFF技能 -#r【  霰彈炮  】#b僅限用於龍神第八次 英雄 冰雷魔法師 喚靈斗師 炎術士 弩箭神 蒼龍 船長 隱月 \r\n"
avail += "#v2436247# BUFF技能 -#r【 交叉鎖鏈 】#b僅限用於雙弩精靈 冰雷魔法師 夜光法師 喚靈斗師 俠盜 尖兵 凱內 爆拳槍神\r\n"
avail += "#v2436248# BUFF技能 -#r【小精靈祝福】#b僅限用於弩箭神 箭神 火槍手 船長 隱月 蒼龍 劍豪\r\n"
avail += "#v2436249# BUFF技能 -#r【 月光灑落 】#b僅限用於職業 神射手 精靈  幻影 夜光 凱內\r\n\r\n"

let YN = npc.askYesNo(avail);
if(YN == 1){
	for(var i = 0; i < itemlist.length;i++){
		player.gainItem(itemlist[i],1);
	}
}