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

var zyms = "";
zyms = "#b#h0# #r一旦物品删除就无法找回哦.请慎重!!!\r\n";
zyms += "" + epp + "" + epp + "\r\n";
zyms += " #L1##b" + ttz + "删除装备栏道具" + ttz + "#k#l  #L2##b" + ttz + "删除消耗栏道具" + ttz + "#k#l\r\n\r\n";
zyms += " #L3##b" + ttz + "删除设置栏道具" + ttz + "#k#l  #L4##b" + ttz + "删除其他栏道具" + ttz + "#k#l\r\n\r\n";
zyms += " #L5##b" + ttz + "删除特殊栏道具" + ttz + "#k#l  #L6##b" + ttz + "删除装扮栏道具" + ttz + "#k#l\r\n\r\n";
zyms += " #L7##b" + ttz + "物品整理" + ttz + "#k#l\r\n\r\n";
zyms += "" + epp + "" + epp + "\r\n";
let selection=npc.askMenuS(zyms);
if(selection==7){
	player.runScript("wpzh");
}else{
	

	while(true){
	var avail = "";
	var item;
	for(var i = 1; i < 128; i++) {
		item=player.getInventorySlot(selection,i);
		if(item != null) {

			avail += "#L" + item.getDataId() + "#"+item.getDataId()+" #z" + item.getDataId() + "# #i" + item.getDataId() + ":##l\r\n";
		}
	}
		let sel =npc.askMenuS( "#b请选择需要删除的道具:\r\n#b" + avail);
		if(selection==1 || selection ==6){
			for(var i = 1; i < 128; i++) {
				item=player.getInventorySlot(selection,i);
				if(item != null) {
					if(item.getDataId()==sel){
						player.loseInvSlot(selection,i);
					}
				}
			}
		}else{
			player.loseItem(sel);
		}
		
		npc.say("删除成功！");
	}
	
}