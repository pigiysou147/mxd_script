/*
 脚本功能：披风升级
 更新时间：2015年5月15日 
 */
var a = 0;
var Text;
var PenItemId = 4001006;//注射用道具ID
var Level;
var NeededItem;
var GiveItem;
var Shuxing;
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ttt1="#fMap/MapHelper.img/weather/candy/4#"; 
var ttt2 ="#fMap/MapHelper.img/weather/candy/5#"; 
var ttt3 ="#fMap/MapHelper.img/weather/candy/6#"; 
	var item=player.getInventorySlot(6,1);
	var title =item.getTitle();
	Level = parseInt(title.substring(4, 5));
	if(item.getDataId()==1102729){
		Level=0;
	}
	
	Text = "#r欢迎使用翅膀进阶系统，火焰羽毛各大BOSS均有几率掉落：#k\r\n\r\n\t#b当前背包里有： #r[ " + player.getAmountOfItem("4001006") + " ] #b个 #r#t4001006##v4001006##k\r\n\r\n";
	
	// player.sendOk(Level)
	var energy=Math.abs(player.getPQLog('火焰羽毛能量'));
	if (Level == 0) {
		Text += "#i1102729# #b需要灌注 #B"+energy/getMax(Level)*100+"[%]# "+parseInt(energy/getMax(Level)*100)+"%#b #r(" + energy + "/"+getMax(Level)+")#k\r\n #b能量可升阶至一阶 #i1102451#\r\n\r\n\t\t#d可加成全属性+10点(包含攻击防御命中)\r\n\r\n"
	} else if (Level == 1) {
		Text += "#i1102451# #b需要灌注 #B"+energy/getMax(Level)*100+"[%]# "+parseInt(energy/getMax(Level)*100)+"%#b #r(" + energy + "/"+getMax(Level)+")#k\r\n  #b能量可升阶至二阶 #i1102575#\r\n\r\n\t\t#d可加成全属性+20点(包含攻击防御命中)\r\n\r\n"
	} else if (Level == 2) {
		Text += "#i1102575# #b需要灌注 #B"+energy/getMax(Level)*100+"[%]# "+parseInt(energy/getMax(Level)*100)+"%#b #r(" + energy + "/"+getMax(Level)+")#k\r\n  #b能量可升阶至三阶 #i1102572#\r\n\r\n\t\t#d可加成全属性+30点(包含攻击防御命中)\r\n\r\n"
	} else if (Level == 3) {
		Text += "#i1102572# #b需要灌注 #B"+energy/getMax(Level)*100+"[%]# "+parseInt(energy/getMax(Level)*100)+"%#b #r(" + energy + "/"+getMax(Level)+")#k\r\n  #b能量可升阶至四阶 #i1102624#\r\n\r\n\t\t#d可加成全属性+50点(包含攻击防御命中)\r\n\r\n"
	} else if (Level == 4) {
		Text += "#i1102624# #b需要灌注 #B"+energy/getMax(Level)*100+"[%]# "+parseInt(energy/getMax(Level)*100)+"%#b #r(" + energy + "/"+getMax(Level)+")#k\r\n  #b能量可升阶至五阶 #i1102724#\r\n\r\n\t\t#d可加成全属性+60点(包含攻击防御命中)\r\n\r\n"
	} else if (Level == 5) {
		Text += "#i1102724# #b需要灌注 #B"+energy/getMax(Level)*100+"[%]# "+parseInt(energy/getMax(Level)*100)+"%#b #r(" + energy + "/"+getMax(Level)+")#k\r\n  #b能量可升阶至六阶 #i1102723#\r\n\r\n\t\t#d可加成全属性+80点(包含攻击防御命中)\r\n\r\n"
	} else if (Level == 6) {
		Text += "#i1102723# #b需要灌注 #B"+energy/getMax(Level)*100+"[%]# "+parseInt(energy/getMax(Level)*100)+"%#b #r(" + energy + "/"+getMax(Level)+")#k\r\n  #b能量可升阶至七阶 #i1102798#\r\n\r\n\t\t#d可加成全属性+100点(包含攻击防御命中)\r\n\r\n"
	} else {
		
		npc.say("你已经全部进阶完毕了。")
	}

		Text += "#b#L0# " + ttt1+ " 灌注能量#l #L1#  " + ttt2 + " 翅膀进阶#l #L2#  " + ttt3 + " 进阶介绍#l#k\r\n \r\n";
		let selection =npc.askMenuS(Text);
		var number=0;
		if(selection == 0) {
			 quantity=npc.askNumber("请输入您要注射的火焰羽毛数量。", player.getAmountOfItem("4001006"), 0, getMax(Level)-player.getPQLog('火焰羽毛能量'));
			//输入完数量
			if(quantity > getMax(Level) - Math.abs(player.getPQLog('火焰羽毛能量'))) {
				npc.say("对不起，输入的数量不能超过目前阶数的能量值" + getMax(Level) + "。目前阶段等级" + Level + "，目前能量值：" + Math.abs(player.getPQLog('火焰羽毛能量')) + "点。");
				
			} else {
				if(player.hasItem(PenItemId, quantity)) {
					var count=0;
					for(var i = 0; i < quantity; i++) {
						player.addPQLog('火焰羽毛能量',1,999);
						count++;
					}
					player.loseItem(PenItemId, count);
					if(player.getPQLog('火焰羽毛能量') >= getMax(Level)) {
						npc.say("您已成功注射火焰羽毛能量 " + count + " 点。\r\n您当前阶数所需要的能量值已满。\r\n你可以选择进行进阶了！");
						npc.broadcastNotice( "『火焰羽毛』 : 玩家 " + player.getName() + "  成功给翅膀灌注了 " + quantity + " 点能量！");
						
					} else {
						npc.say("您已成功注射火焰羽毛能量" + count + "点。\r\n您目前的火焰羽毛能量是: " + Math.abs(player.getPQLog('火焰羽毛能量')) + ".");
						npc.broadcastNotice( "『火焰羽毛』 : 玩家 " + player.getName() + "  成功给翅膀灌注了 " + quantity + " 点能量！");
						
					}
				} else {
					npc.say("请确认您的背包有 #b#t" + PenItemId + "##k？");
					
				}
			}
		
		
		} else if(selection == 1) { //进阶
			NeededItem = EquipItemNeededAndGive(Level)[0];
			GiveItem = EquipItemNeededAndGive(Level)[1];
			Shuxing = EquipItemNeededAndGive(Level)[2];
			a = 2;
			npc.askYesNo("此次合成需要如下要求：\r\n1、#i" + NeededItem + "# #t" + NeededItem + "# x1\r\n\r\n2、灌注能量" + getMax(Level) + "点，目前为" + Math.abs(player.getPQLog('火焰羽毛能量')) + "点。#b#e\r\n  点击按钮 #r是#k#b 来进行披风进阶！");
			
			//点击是
			if(player.getPQLog('火焰羽毛能量') >= getMax(Level)) {
				var item = player.getInventorySlot(6,1);
				if(item == null) {
					npc.say("请将#b翅膀#k放在装备栏的第一栏！");
					
				} else if(Level != 0 && item.getTitle() != "火焰羽毛" + (parseInt(Level)) + "阶") {
					npc.say("只有进行过进阶的道具才能进阶！" + "火焰羽毛" + (parseInt(Level)) + "阶");
					
				}else if(item.getDataId()!=NeededItem){
					npc.say("进化的装备不符合要求"+NeededItem);
				} else {
					var oStr = item.getTotalStr();
					var oDex = item.getTotalDex();
					var oInt = item.getTotalInt();
					var oLuk = item.getTotalLuk();
					var oPad = item.getTotalPAD();
					var oMad = item.getTotalMAD();
					if(Level>=6){
						item.setStr(100);
						item.setDex(100);
						item.setInt(100);
						item.setLuk(100);
						item.setPad(100);
						item.setMad(100);
						item.setJump(100);
						item.setSpeed(100);
					}else{
						item.setStr(oStr+15);
						item.setDex(oDex+15);
						item.setInt(oInt+15);
						item.setLuk(oInt+15);
						item.setPad(oPad+15);
						item.setMad(oMad+15);
						
						item.setJump(Level*15);
						item.setSpeed(Level*15);
					}
					item.setTitle("火焰羽毛" + (parseInt(Level + 1)) + "阶");
					item.setItemId(GiveItem);
					player.updateItem(1,item);
					player.resetPQLog('火焰羽毛能量'); //清空
					player.addPQLog('披风进阶',1,999); //进阶1
					//cm.getMap().startMapEffect("强大的玩家 " + player.getName() + " 翅膀升级到 " + (1 + (parseInt(Level))) + " 阶了！", 5120008);
					npc.broadcastGachaponMsgEx("『翅膀进阶』 : 玩家 " + player.getName() + " 的翅膀在火焰羽毛的灌注下升级到 " + (1 + (parseInt(Level))) + " 阶了！",item);
					npc.say("进阶成功!");
					
				}
			} else {
				npc.say("你还没有满足所需要的物品。");
				
			}
		
		
		
		} else { //介绍
			npc.say("\t\t#e#b翅膀进阶全属性预览#k#n\r\n\r\n\r\n#r#z1102451#            一阶 全属性+10\r\n#z1102575#          二阶 全属性+20\r\n#z1102572#        三阶 全属性+30\r\n#z1102624#          四阶 全属性+50\r\n#z1102724#            五阶 全属性+60\r\n#z1102723#            六阶 全属性+80\r\n#z1102798#              七阶 全属性+100");
			
		}

function getMax(Level) {
	switch(Level) {
		case 0:
			return 100;
			break;
		case 1:
			return 200;
			break;
		case 2:
			return 300;
			break;
		case 3:
			return 500;
			break;
		case 4:
			return 700;
			break;
		case 5:
			return 800;
			break;
		case 6:
			return 1000;
			break;
		default:
			return 55;
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

