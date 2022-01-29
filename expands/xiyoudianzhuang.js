/* 点卷商店 */

var z = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var aaa = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var xx = "#fEffect/CharacterEff/1082565/4/0#"; //兔子
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var txt = z + z + z + z + "\r\n#e#d";
txt += "\t\t\t#L999##r代码自选点装#k#l\r\n\r\n";
txt += "#L16#"+ z +"毕业带属性极品点装"+ z  +"#l\r\n\r\n";
txt += "#L0#" + aaa + " 帽 子 " + aaa + "#l\t";
txt += "#L1#" + xx + " 上 衣 " + xx + "#l\t";
txt += "#L2#" + aaa + " 下 装 " + aaa + "#l\r\n";

txt += "#L3#" + aaa + " 武 器 " + aaa + "#l\t";
txt += "#L4#" + xx + " 手 套 " + xx + "#l\t";
txt += "#L5#" + aaa + " 戒 指 " + aaa + "#l\r\n";

txt += "#L6#" + aaa + " 效 果 " + aaa + "#l\t";
txt += "#L7#" + xx + " 披 风 " + xx + "#l\t";
txt += "#L8#" + aaa + " 鞋 子 " + aaa + "#l\r\n";

txt += "#L12#" + aaa + " 宠 物 " + aaa + "#l\t";
txt += "#L13#" + xx + " 情 侣 " + xx + "#l\t";
txt += "#L15#" + aaa + " 套 装 " + aaa + "#l\t\r\n";
//txt += "\r\n\r\n" + z + z + z + z + "";
let selection = npc.askMenuS(txt);
switch(selection) {
	case 0:

		player.runScript("maozi");
		//cm.openNpc(2490002, 701); //帽子
		break;
	case 999:

		player.runScript("zxdz");
		//cm.openNpc(2490002, 701); //帽子
		break;	
	case 1:

		player.runScript("shangyi");
		//cm.openNpc(2490002, 704); //衣服
		break;
	case 2:

		player.runScript("xiazhuang");
		//cm.openNpc(2490002, 703); //裤裙
		break;
	case 3:

		player.runScript("wuqi");
		// cm.openNpc(2490002, 702); //武器
		break;
	case 4:

		player.runScript("shoutao"); //手套
		//  cm.sendOk("#r#e功能待添加!!请谅解", 1033210);
		break;
	case 5:

		player.runScript("jiezhi");
		//cm.openNpc(2490002, 705); //戒指
		break;
	case 6:

		player.runScript("xiaoguo"); //效果
		//  cm.sendOk("#r#e功能待添加!!请谅解", 1033210);
		break;
	case 7:

		player.runScript("dianjuanpifeng"); //披风
		break;
	case 8:

		player.runScript("xiezi"); //鞋子
		break;

	
	case 12:

		player.runScript("chongwu"); //宠物
		break;
	case 13:

		player.runScript("qinglv"); //情侣
		break;
	case 15:

		player.runScript("sydz"); //闪耀
		break;
	case 16:

	player.runScript("属性点装"); //闪耀
	break;
}