/*
 脚本功能：披风升级
 更新时间：2015年5月15日 
 */
var a = 0;
var Text;
var PenItemId = 4033911; //注射用道具ID
var Level;
var NeededItem;
var GiveItem;
var Shuxing;
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ttt1 = "#fMap/MapHelper.img/weather/candy/4#";
var ttt2 = "#fMap/MapHelper.img/weather/candy/5#";
var ttt3 = "#fMap/MapHelper.img/weather/candy/6#";
var ttt4 = "#fMap/MapHelper.img/weather/candy/3#";
var item = player.getInventorySlot(1, 1);
if(item==null){
	npc.say("请把永久勋章或者门派徽章放在装备栏的第一个格子进行进阶哦");
}else{
	

var itemId = item.getDataId();
var title = item.getTitle();
Level = item.getCraft();
//npc.say(title);1142745 1142746
if(title.indexOf("永久会员")!=-1 ||itemId==1142745 ||itemId==1142746 || title.indexOf("年费会员")!=-1) {
	
	Text = "#r欢迎使用奖杯进阶系统，#v4033911#在远征BOSS通关时候获得：#k\r\n\t#b当前背包里有： #r[ " + player.getAmountOfItem(4033911) + " ] #b个 #r#t4033911##v4033911##k\r\n\r\n";
	if(Level == 0) {
		Text += "#i" + itemId + "# #b需要灌注 #r(" + Math.abs(player.getPQLog('奖杯能量')) + "/20)#k #b灌注进阶满阶之后增加的属性为  BOSS伤害55%  无视防御55%  总伤害50%  攻击力200  魔法力200\r\n\r\n"
	} else if(Level == 1) {
		Text += "#i" + itemId + "# #b需要灌注 #r(" + Math.abs(player.getPQLog('奖杯能量')) + "/40)#k #b灌注进阶满阶之后增加的属性为  BOSS伤害55%  无视防御55%  总伤害50%  攻击力200  魔法力200\r\n\r\n"
	} else if(Level == 2) {
		Text += "#i" + itemId + "# #b需要灌注 #r(" + Math.abs(player.getPQLog('奖杯能量')) + "/60)#k #b灌注进阶满阶之后增加的属性为  BOSS伤害55%  无视防御55%  总伤害50%  攻击力200  魔法力200\r\n\r\n"
	} else if(Level == 3) {
		Text += "#i" + itemId + "# #b需要灌注 #r(" + Math.abs(player.getPQLog('奖杯能量')) + "/80)#k #b灌注进阶满阶之后增加的属性为  BOSS伤害55%  无视防御55%  总伤害50%  攻击力200  魔法力200\r\n\r\n"
	} else if(Level == 4) {
		Text += "#i" + itemId + "# #b需要灌注 #r(" + Math.abs(player.getPQLog('奖杯能量')) + "/100)#k #b灌注进阶满阶之后增加的属性为  BOSS伤害55%  无视防御55%  总伤害50%  攻击力200  魔法力200\r\n\r\n"
	} else if(Level == 5) {
		Text += "#i" + itemId + "# #b需要灌注 #r(" + Math.abs(player.getPQLog('奖杯能量')) + "/120)#k #b灌注进阶满阶之后增加的属性为  BOSS伤害55%  无视防御55%  总伤害50%  攻击力200  魔法力200\r\n\r\n"
	} else if(Level == 6) {
		Text += "#i" + itemId + "# #b需要灌注 #r(" + Math.abs(player.getPQLog('奖杯能量')) + "/140)#k #b灌注进阶满阶之后增加的属性为  BOSS伤害55%  无视防御55%  总伤害50%  攻击力200  魔法力200\r\n\r\n"
	} else if(Level == 7) {
		Text += "#i" + itemId + "# #b需要灌注 #r(" + Math.abs(player.getPQLog('奖杯能量')) + "/160)#k #b灌注进阶满阶之后增加的属性为  BOSS伤害55%  无视防御55%  总伤害50%  攻击力200  魔法力200\r\n\r\n"
	} else if(Level == 8) {
		Text += "#i" + itemId + "# #b需要灌注 #r(" + Math.abs(player.getPQLog('奖杯能量')) + "/180)#k #b灌注进阶满阶之后增加的属性为  BOSS伤害55%  无视防御55%  总伤害50%  攻击力200  魔法力200\r\n\r\n"
	} else if(Level == 9) {
		Text += "#i" + itemId + "# #b需要灌注 #r(" + Math.abs(player.getPQLog('奖杯能量')) + "/200)#k #b灌注进阶满阶之后增加的属性为  BOSS伤害55%  无视防御55%  总伤害50%  攻击力200  魔法力200\r\n\r\n"
	} else {
		npc.say("你已经全部进阶完毕了。")
	}

	Text += "#b#L0# " + ttt1 + " 灌注能量#l #L1#  " + ttt2 + " 勋章进阶#l  #L2#  " + ttt3 + " 进阶介绍#l#k\r\n\r\n#L3#  " + ttt4 + " 能量兑换#l#k";
	let selection = npc.askMenuS(Text);
	var number = 0;
	if(selection == 0) {
		quantity = npc.askNumber("请输入您要注射的时间能量数量。", player.getAmountOfItem("4033911"), 0, getMax(Level) - player.getPQLog('奖杯能量'));
		//输入完数量
		if(quantity > getMax(Level) - Math.abs(player.getPQLog('奖杯能量'))) {
			npc.say("对不起，输入的数量不能超过目前阶数的能量值" + getMax(Level) + "。目前阶段等级" + Level + "，目前能量值：" + Math.abs(player.getPQLog('奖杯能量')) + "点。");

		} else {
			if(player.hasItem(PenItemId, quantity)) {
				var count = 0;
				for(var i = 0; i < quantity; i++) {
					player.addPQLog('奖杯能量', 1, 365);
					player.addPQLog('奖杯能量记录', 1, 365);
					count++;
				}
				player.loseItem(PenItemId, count);
				if(player.getPQLog('奖杯能量') >= getMax(Level)) {
					npc.say("您已成功注射奖杯能量 " + count + " 点。\r\n您当前阶数所需要的能量值已满。\r\n你可以选择进行进阶了！");
					//npc.broadcastNotice("『时间能量』 : 玩家 " + player.getName() + "  成功给翅膀灌注了 " + quantity + " 点能量！");

				} else {
					npc.say("您已成功注射奖杯能量" + count + "点。\r\n您目前的奖杯能量是: " + Math.abs(player.getPQLog('奖杯能量')) + ".");
					//npc.broadcastNotice("『时间能量』 : 玩家 " + player.getName() + "  成功给翅膀灌注了 " + quantity + " 点能量！");

				}
			} else {
				npc.say("请确认您的背包有 #b#t" + PenItemId + "##k？");
			}
		}
	} else if(selection == 1) { //进阶
		
		a = 2;
		npc.askYesNo("此次合成需要如下要求：\r\n1、灌注能量" + getMax(Level) + "点，目前为" + Math.abs(player.getPQLog('奖杯能量')) + "点。#b#e\r\n  点击按钮 #r是#k#b 来进行进阶！");

		//点击是
		if(player.getPQLog('奖杯能量') >= getMax(Level)) {
			var item = player.getInventorySlot(1, 1);
			if(item == null) {
				npc.say("请将#b奖杯#k放在装备栏的第一栏！");

			}  else if(item.getTitle().indexOf("年费会员")==-1 && item.getTitle().indexOf("永久会员")==-1  && itemId!=1142745 && itemId!=1142746) {
				npc.say("进化的装备不符合要求");
			} else {
				//无视
				item.setIgnorePDR(item.getIgnorePDR()+ Level+1);
				//BOSS伤害
				item.setBossDamageR(item.getBossDamageR() + Level+1);
				item.setPad(item.getPad() + 20);
				item.setMad(item.getMad() + 20);
				item.setDamR(5+Level*5);
				item.setCraft(item.getCraft()+1);
				player.updateItem(1, item);
				player.resetPQLog('奖杯能量'); //清空
				player.addPQLog('奖杯进阶', 1, 365); //进阶1
				//cm.getMap().startMapEffect("强大的玩家 " + player.getName() + " 翅膀升级到 " + (1 + (parseInt(Level))) + " 阶了！", 5120008);
				npc.broadcastGachaponMsgEx("『奖杯进阶』: 玩家 " + player.getName() + " 的会员奖杯在时间能量的灌注下升级到 " + (1 + (parseInt(Level))) + " 阶了！", item);
				npc.say("进阶成功!");

			}
		} else {
			npc.say("能量不足。");
		}
	} else if(selection==2) { //介绍
	var text="\t\t#e#b勋章进阶全属性预览#k#n\r\n\r\n\r\n#e#r";
		text+="一阶 boss伤害、无视、+1% 攻击力,魔法力+20, 伤害5%\r\n";
		text+="二阶 boss伤害、无视、+2% 攻击力,魔法力+20, 伤害5%\r\n";
		text+="三阶 boss伤害、无视、+3% 攻击力,魔法力+20, 伤害5%\r\n";
		text+="四阶 boss伤害、无视、+4% 攻击力,魔法力+20, 伤害5%\r\n";
		text+="五阶 boss伤害、无视、+5% 攻击力,魔法力+20, 伤害5%\r\n";
		text+="六阶 boss伤害、无视、+6% 攻击力,魔法力+20, 伤害5%\r\n";
		text+="七阶 boss伤害、无视、+7% 攻击力,魔法力+20, 伤害5%\r\n";
		text+="八阶 boss伤害、无视、+8% 攻击力,魔法力+20, 伤害5%\r\n";
		text+="九阶 boss伤害、无视、+9% 攻击力,魔法力+20, 伤害5%\r\n";
		text+="十阶 boss伤害、无视、+10% 攻击力,魔法力+20, 伤害5%\r\n";
		npc.say(text);
	}else if(selection==3){
		player.runScript("能量商店");
	}
} else {
	
	npc.say("请把永久勋章或者门派徽章放在装备栏的第一个格子进行进阶哦");
}
}
function getMax(Level) {
	switch(Level) {
		case 0:
			return 20;
			break;
		case 1:
			return 40;
			break;
		case 2:
			return 60;
			break;
		case 3:
			return 80;
			break;
		case 4:
			return 100;
			break;
		case 5:
			return 120;
			break;
		case 6:
			return 140;
			break;
		case 7:
			return 160;
			break;
		case 8:
			return 180;
			break;
		case 9:
			return 200;
			break;
		default:
			return 200;
			break;
	}
}

function EquipItemNeededAndGive(Level) {
	var Item = new Array();
	switch(Level) {
		case 0:
			Item.push(1102729); //所需
			Item.push(1102451); //所得
			Item.push(10); //全属性
			return Item;
			break;
		case 1:
			Item.push(1102451); //所需
			Item.push(1102575); //所得
			Item.push(20); //全属性
			return Item;
			break;
		case 2:
			Item.push(1102575); //所需
			Item.push(1102572); //所得
			Item.push(30); //全属性
			return Item;
			break;
		case 3:
			Item.push(1102572); //所需
			Item.push(1102624); //所得
			Item.push(50); //全属性
			return Item;
			break;
		case 4:
			Item.push(1102624); //所需
			Item.push(1102724); //所得
			Item.push(60); //全属性
			return Item;
			break;
		case 5:
			Item.push(1102724); //所需
			Item.push(1102723); //所得
			Item.push(80); //全属性
			return Item;
			break;
		case 6:
			Item.push(1102723); //所需
			Item.push(1102798); //所得
			Item.push(100); //全属性
			return Item;
			break;
		default:
			return 0;
			break;
	}
}