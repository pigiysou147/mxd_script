/**
** 点装搜索代码 新端脚本 几里315342975
**/

let boxId = 2431307; //所需盒子
let banItems = Array(
	//手动ban物品
    1033000,//路西德耳环
    1113228,//内面暴风
    1032261,//內面耀光
	1003889,//原来我被控制了
    1122296,//死神的项链
    1113220,//幽暗戒指
    1112918, //羁绊之翼
    1102963, //羁绊之翼
    1003843, //奇怪的狐狸面具
    1082553, //红色十字架手套
    1032234, //蓝色桃心耳环
    1012553, //咬紧牙关的面罩
    1702472, //万圣节的命运
    1102724, //黑暗天使羽翼
    1102723, //光明天使羽翼
    1115014, //MVP对话框戒指（钻石）
    1115102, //MVP名片戒指（钻石）
    1115012, //MVP对话框戒指（白银） 等级要求：0
    1115013, //MVP对话框戒指（黄金） 等级要求：0
    1115100, //MVP名片戒指（白银） 等级要求：0
    1115101, //MVP名片戒指（黄金） 等级要求：0
    1102965, //萤火虫之舞 等级要求：0
    1112244, //蝙蝠聊天戒指
    1102604, //蒼穹之翼
    1112966, //灵魂密友友情戒指
    1112968, //灵魂密友友情戒指
    1102873, //永恒初心者
    1102872//闪耀初心者
);
let autoBan = true; //是否开启自动ban物品 （带4围的就ban掉） true开启 false关闭

let text = "#h0#，欢迎来到#e#r点装商城自选#n#k\r\n#b您需要输入装备代码进行搜索\r\n#r#1.请你确保您输入的代码正确无误\r\n#2.必须是现金装备才可以购买\r\n#3.点击“是”使用功能,点击“否”返回上一级\r\n";
let YN = npc.askYesNo(text,9900000);
if(YN == 1){
	while(true){
		let selectText = npc.askNumber("请输入您要搜索的点装代码",0, 1000000, 1999999);
		let toDrop = player.makeItemWithId(selectText);
		if(banItems.indexOf(selectText) != -1){
			npc.say("该装备已被管理员拉入小黑屋，不可购买！",9900000);
		}else if(null == toDrop){
			npc.say("您输入的代码不存在，请重新输入",9900000);
		}else{
			if(toDrop.getInventoryId()!=-1){
				if(autoBan && (toDrop.getStr() > 0 || toDrop.getDex() > 0 || toDrop.getInt() > 0 || toDrop.getLuk() > 0 || toDrop.getMad() > 0|| toDrop.getPad() > 0)){
					npc.say("#v"+selectText+"# 该装备存在属性,不可购买！",9900000);
				}else{
					let ss = "#e#b您是否想使用#v"+boxId+"#,换取这个时装的  #v"+selectText+"# ？";
					YN = npc.askYesNo(ss,9900000);
					if(YN == 1){
						if(!player.hasItem(boxId,1)){
							npc.say("你没有#v" + boxId + "#",9900000);	
						}else if(!player.canGainItem(selectText,1)){
							npc.say("请清理背包",9900000);	
						}else{
							
							let newItem = player.makeItemWithId(selectText);
						//	newItem.setStr(100); //装备力量
							//newItem.setDex(100); //装备敏捷
							//newItem.setInt(100); //装备智力
							//newItem.setLuk(100); //装备运气

							//newItem.setMad(100);
							//newItem.setPad(100);

							//newItem.setStatR(newerEquips[i][5]);// 所有属性
							//newItem.setTitle(newerEquips[i][1]);// 所有属性
							//newItem.setBossDamageR(newerEquips[i][4]);// BOSS伤 
							//newItem.setIgnorePDR(newerEquips[i][6]);// 无视防御
							//newItem.setAttribute(1);
							player.gainItem(newItem);
						
							player.loseItem(boxId,1);
							npc.say("购买成功!欢迎继续选购！",9900000);
						}
					}else{
						npc.say("找错了？那么请继续选购吧！",9900000);
					}
				}
			}else{
				npc.say("您输入的不是现金装备代码！请重新输入",9900000);
			}
		
		}
		
	}
}
