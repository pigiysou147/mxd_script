/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  
 *  BOSS组队副本: 希拉
 *  
 *  @Author Kent 
 */

/* global cm */

//副本开关 开启、true 关闭、false
var open = true;
//配置文件名称
var PQname = ["exp", "money", "test1"];
//记录次数名称
var PQLog = ["单人经验", "单人金钱", "伤害测试"];
//开始的地图
var startmap = 993017000;
//等级限制
var minLevel = [140, 140, 140];
var maxLevel = [255, 255, 255];
//次数限制
var maxenter = [1, 1, 999];

//限制人数
var minPlayers = 1;
var maxPlayers = 1;
//怪物最大等级设置
var moblevel = 140;
var chs;

var status = -1;

function start() {
	if(cm.getMapId() == startmap) {
		var text = "";
		for(var i = 0; i < PQname.length; i++) {
			text += "\r\n#b#L" + i + "#申请进入移动到#r<副本：" + PQLog[i] + ">#b#l#k\r\n";
		}
		cm.askMenu("#e<单人副本>#n\r\n\r\n#b#h0# \n\#k准备好宠物了吗，地板上各种金银财宝等著你捡呢？副本会随著怪物击杀次数而增加掉落率喔！！ .#b\r\n" + text);
	} else {
		cm.askYesNo("#e<副本：" + PQLog[i] + " >#n\r\n\r\n怎麽？这就想出去了？还有很多有趣的事情呢？");
	}
}

function action(mode, type, selection) {
	switch(mode) {
		case -1: //结束对话
			cm.dispose();
			return;
		case 0: //上一步
			status--;
			break;
		case 1: //下一步
			status++;
			break;
	}
	switch(status) {
		case 0:
			if(cm.getMapId() == startmap) {
				var em = cm.getEventManager(PQname[selection]);
				if(em == null || open == false) {
					cm.sendOk("配置文件不存在,请联系管理员。");
					cm.dispose();
					return;
				}
				if(cm.getChannelNumber() == 4) {
					cm.sendOk("此频道为混吨频道，请更换其他频道在进行尝试!!!");
					cm.dispose();
					return;
				}
				chs = selection;
				var prop = em.getProperty("state");
				var rwpz = "#e<BOSS： " + PQLog[selection] + ">#n\r\n#k\r\n#e#r";
				rwpz += "#n#k#e   副本状态：#n" + (prop == null || prop.equals("0") ? "#e#g空閒#n#k" : "#e#r开启#n#k") + "";
				rwpz += "\r\n#e   推荐人数：" + minPlayers + " - " + maxPlayers + "#n#e    推荐等级：" + minLevel[selection] + "-" + maxLevel[selection] + "#n";
				rwpz += "\r\n#e   已经进行：#r" + cm.getPQLog(PQLog[selection]) + "#k 次";
				rwpz += "     剩馀次数：#r" + (maxenter[selection] - cm.getPQLog(PQLog[selection])) + "#k 次#n#k\r\n\r\n";
				cm.askYesNo(rwpz + "           #b#h0# \n\#k#e是否现在就进入？#n" + PQLog[selection]);
			} else {
				cm.dispose();
				if(selection == 1) {
					cm.warp(startmap, 0);
				}

			}
			break;
		case 1:
			if(selection != 1) {
				cm.dispose();
			} else if(cm.getParty() != null) { //判断组队
				cm.sendOk("请退出组队.");
				cm.dispose();
			} else if(cm.getLevel() <= 140) {
				cm.sendOk("140级以上才能进去哦 ");
				cm.dispose();
			} else if(cm.getPQLog(PQLog[chs]) >= maxenter[chs] || cm.getEventCount(PQLog[chs])>10) {
				cm.sendOk("次数已经用完了 ");
				cm.dispose();
			} else {
				var em = cm.getEventManager(PQname[chs]);
				if(PQname[chs].equals("money")) {
					if(cm.getOnlineTime() < 60) {
						cm.sendOk("需要在线时长60分钟才能进入个人副本哦~");
						cm.dispose();
						return;
					}
				}

				if(em == null || open == false) {
					cm.sendOk("配置文件不存在，请联繫管理员。");
				} else {
					var prop = em.getProperty("state");
					if(prop == null || prop.equals("0")) {
						em.startInstance(cm.getPlayer());
						cm.setPQLog(PQLog[chs], 1);
						cm.setEventCount(PQLog[chs],1)
						cm.dispose();
					} else {
						cm.sendOk("已经有队伍在进行了，请更换其他频道尝试。");
						cm.dispose();
					}
				}
			}
			break;
			default:
			cm.dispose();
			break;
	}
}
