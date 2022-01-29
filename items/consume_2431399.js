/* 
 *礼包脚本
 */


var eff = "#fEffect/ItemEff/1102877/effect/default/1#"; //云朵
var text = "";
text += "\t\t\t#v4009025##e#r航海限时礼包#k#n#v4009025#\r\n\r\n";
text += "#r#e#fs18#\t\t超值900%返利！！！#fs12#\r\n";
text += "#b";
text += "请选择要购买的礼包，只能选其中一个哦\r\n";

text += "#L0##r#e航海限时礼包1,购买价格为:200直冲点#l\r\n";
text += "#L1##r#e航海限时礼包2,购买价格为:300直冲点#l\r\n";
let selection =npc.askMenu(text);
if(selection==0){
	player.runScript("航海200礼包");
}else if(selection==1){
	player.runScript("航海300礼包");
}