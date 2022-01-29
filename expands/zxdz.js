/**
** 点装搜索代码 新端脚本 几里315342975
**/

let needMoney = 1000; //所需点券
let banItems = Array(
	//手动ban物品
	5000964,
	1113220, 
	1053159, 
	1112001, 
	1112918, //羁绊之翼
	1112965, //梦境蝴蝶
	1102963, //羁绊之翼
	1003843, //奇怪的狐狸面具
	1082553, //红色十字架手套
	1032234, //蓝色桃心耳环
	1012553, //咬紧牙关的面罩
	1702472, //万圣节的命运
	1102724, //黑暗天使羽翼
	1102723, //光明天使羽翼
	2438391,
	1033000,
	//1115014, //MVP对话框戒指（钻石）
	//1115102, //MVP名片戒指（钻石）
	////1115012, //MVP对话框戒指（白银） 等级要求：0
	//1115013, //MVP对话框戒指（黄金） 等级要求：0
	//1115100, //MVP名片戒指（白银） 等级要求：0
	//1115101, //MVP名片戒指（黄金） 等级要求：0
	1102965, //萤火虫之舞 等级要求：0
	1112244, //蝙蝠聊天戒指
	1004472, //饿狼传说帽子
	1102604, //蒼穹之翼
	1112966, //灵魂密友友情戒指
	1112968, //灵魂密友友情戒指
	1102873, //永恒初心者
	1102872,//闪耀初心者
	1802682,
	5000094,
	1802082,
	1102872//闪耀初心者
);
let autoBan = true; //是否开启自动ban物品 （带4围的就ban掉） true开启 false关闭
let text = "#r#h0##k 欢迎来到#e#r自选点装商城（1000点卷一件）#n#k\r\n#k您需要输入点装代码进行搜索,如果不知道点装代码\r\n请点击下方的代码查询网站进行查询！\r\n#1.请你确保您输入的代码正确无误\r\n#2.必须是现金装备才可以购买\r\n#b#L0#开始自选点装#l\r\n#L1#打开代码查询网网①#l\r\n";
let YN = npc.askMenu(text,9010061);
if(YN == 0){
	while(true){
		let selectText = npc.askNumber("请输入您要搜索的点装代码",0, 1000000, 1999999);
		let toDrop = player.makeItemWithId(selectText);
		if(banItems.indexOf(selectText) != -1){
			npc.say("该装备已被管理员拉入小黑屋，不可购买！",9010061);
		}else if(null == toDrop){
			npc.say("您输入的代码不存在，请重新输入",9010061);
		}else{
			if(toDrop.getData().isCash()){
				if(autoBan && (toDrop.getStr() > 0 || toDrop.getDex() > 0 || toDrop.getInt() > 0 || toDrop.getLuk() > 0 || toDrop.getMad() > 0|| toDrop.getPad() > 0)){
					npc.say("#v"+selectText+"# 该装备存在属性,不可购买！",9010061);
				}else{
					let ss = "#b您是否想花费 #r"+needMoney+" #b点券购买 #v"+selectText+"#";
					YN = npc.askYesNo(ss,9010061);
					if(YN == 1){
						if(player.getCashShopCurrency(1) < needMoney){
							npc.say("你没有" + needMoney + " 点卷",9010061);	
						}else if(!player.canGainItem(selectText,1)){
							npc.say("请清理背包",9010061);	
						}else{
							player.gainItem(selectText,1);
							player.modifyCashShopCurrency(1,-needMoney);
							npc.say("购买成功!欢迎继续选购！",9010061);
						}
					}else{
						npc.say("找错了？那么请继续选购吧！",9010061);
					}
				}
			}else{
				npc.say("您输入的不是现金装备代码！请重新输入",9010061);
			}
		
		}
		
	}
}else if(YN == 1){
	player.openURL("http://www.mxdcode.com");
	player.runScript("zxdz")
}