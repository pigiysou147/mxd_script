/*      

 NPC类型:	综合NPC

 */
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var xx = "#fEffect/CharacterEff/1082565/4/0#";
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var epp = "#fEffect/ItemEff/1102511/effect/ladder/0#"; //蓝色天使翅膀
var ttz = "#fUI/GuildMark/Mark/Animal/00002016/15#"; //白色兔子

var slot = Array(1, 1);
var dsa = "";
var flag = 0;


let sel =npc.askYesNo( "#b会删除掉所有的#v3992025#　兑换成　#v4310028#:\r\n#b" );
if(sel==1){
	

var count =player.getAmountOfItem(3992025);
player.loseItem(3992025);
player.gainItem(4310028,count);
npc.say("兑换成功！");	
}