var Option = Array(
		Array("12%力量", 40041),
		Array("12%敏捷", 40042),
		Array("9%敏捷", 30042),
		Array("12%智力", 40043),
		Array("12%運氣", 40044),
		Array("12%maxHP", 40045),
		Array("12%maxMp", 40046),
		Array("12%攻擊力", 40051),
		Array("12%魔法攻擊力", 40052),
		Array("12%暴擊率", 40055),
		Array("40%BOSS傷害", 40603),
		Array("40%攻擊時，無視怪物的防御力", 40292),
		Array("12%總傷", 60001),
		Array("6%所有屬性", 30086),
		Array("9%所有屬性", 42087)
		);

var sel = "";
var 道具ID = npc.askNumber("請輸入道具ID","",0,99999999)
var 第一條 = npc.askNumber("請輸入淺能ID","",0,99999999)
//var 全屬 = npc.askNumber("請輸入屬性","",0,32767)
/*sel = "請選擇第一條潛能屬性";
			for (var i = 0; i < Option.length; i++) {
				sel += "\r\n#L" + Option[i][1] + "##b#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#" + Option[i][0] + "#k#l";
			}
			var 第一條 = npc.askMenu(sel);
sel = "請選擇第二條潛能屬性";
			for (var i = 0; i < Option.length; i++) {
				sel += "\r\n#L" + Option[i][1] + "##b#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#" + Option[i][0] + "#k#l";
			}
			var 第二條 = npc.askMenu(sel);
sel = "請選擇第三條潛能屬性";
			for (var i = 0; i < Option.length; i++) {
				sel += "\r\n#L" + Option[i][1] + "##b#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#" + Option[i][0] + "#k#l";
			}
			var 第三條 = npc.askMenu(sel);
sel = "請選擇第四條潛能屬性";
			for (var i = 0; i < Option.length; i++) {
				sel += "\r\n#L" + Option[i][1] + "##b#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#" + Option[i][0] + "#k#l";
			}
			var 第四條 = npc.askMenu(sel);
sel = "請選擇第五條潛能屬性";
			for (var i = 0; i < Option.length; i++) {
				sel += "\r\n#L" + Option[i][1] + "##b#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#" + Option[i][0] + "#k#l";
			}
			var 第五條 = npc.askMenu(sel);
sel = "請選擇第六條潛能屬性";
			for (var i = 0; i < Option.length; i++) {
				sel += "\r\n#L" + Option[i][1] + "##b#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#" + Option[i][0] + "#k#l";
			}
			var 第六條 = npc.askMenu(sel);*/
var	text = "以下是你要製作的裝備\r\n"
		text += "#v"+道具ID+"#\r\n"
		/*text += "#b力量：#r"+全屬+"\r\n"
		text += "#b敏捷：#r"+全屬+"\r\n"
		text += "#b智力：#r"+全屬+"\r\n"
		text += "#b幸運：#r"+全屬+"\r\n"
		text += "#b物攻：#r"+全屬+"\r\n"
		text += "#b魔攻：#r"+全屬+"\r\n"*/
		text += "潛能1：" + getName(第一條) + "\r\n"
	/*	text += "潛能2：" + getName(第二條) + "\r\n"
		text += "潛能3：" + getName(第三條) + "\r\n"
		text += "附加潛能1：" + getName(第四條) + "\r\n"
		text += "附加潛能2：" + getName(第五條) + "\r\n"
		text += "附加潛能3：" + getName(第六條) + "\r\n"*/
var YN = npc.askYesNo(text)
if(YN ==1){
	var toDrop = player.makeItemWithId(道具ID); // 生成一个Equip类
				/*toDrop.setStr(全屬);//力量
				toDrop.setDex(全屬);//敏捷
				toDrop.setInt(全屬);//智力
				toDrop.setLuk(全屬);//幸運				
				toDrop.setPad(全屬);//AD
				toDrop.setMad(全屬);//AP*/
				toDrop.setOption(1,第一條,false);
				toDrop.setOption(2,第一條,false);
				toDrop.setOption(3,第一條,false);
				toDrop.setOption(1,第一條,true);
				toDrop.setOption(2,第一條,true);
				toDrop.setOption(3,第一條,true);
				player.gainItem(toDrop)
}else{
	npc.say("下次見")
}
function getName(id) {
	for (var i = 0; i < Option.length; i++) {
		if (id = Option[i][1]) {
			var Name = Option[i][0]
		}else{
			var Name = null
		}
	}
	return Name;
}