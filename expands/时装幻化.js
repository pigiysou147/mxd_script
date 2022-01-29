/**
** 点装搜索代码 新端脚本 几里315342975
**/

let needMoney = 100000; //所需点券
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
var item =player.getInventorySlot(6,1);
let text = "#r#h0##k欢迎来到#e#r时装幻化（10W点卷一件）#n#k\r\n";
text+="#b你可以把需要改变外形的点装放在装备栏的第一个格子。然后设置新的外形进行更换#k\r\n";
text+="请点击下方的代码查询网站进行查询！\r\n";
text+="#1.请你确保您输入的代码正确无误\r\n";
text+="#2.必须是现金装备才可以进行更换\r\n";
text+="#b#L0#进行更换外形#l\r\n#L1#打开代码查询网网①#l\r\n";
let YN = npc.askMenu(text,9010061);
if(YN == 0){
		if(item==null){
			npc.say("请在第一个格子上放上你要更换外形的点装。");
		}else{
			if(!item.getData().isCash()){
				npc.say("该物品不是点装物品，不可以进行操作。");
			}else if(item.getTitle().indexOf("火焰羽毛") !=-1 ){
				npc.say("该物品不是可以转换外形的物品，不可以进行操作。");
			}else if( parseInt(item.getDataId()/100000)==18){
					npc.say("该装备已被管理员拉入小黑屋，不可以更换外形！",9010061);
			}else{
				let selectText = npc.askNumber("请输入您要替换的点装代码"+item.getDataId()/100000,0, 1000000, 1999999);
				let toDrop = player.makeItemWithId(selectText);
				if(banItems.indexOf(selectText) != -1 || parseInt(selectText/100000)==18){
					npc.say("该装备已被管理员拉入小黑屋，不可购买！",9010061);
				}else if(null == toDrop){
					npc.say("您输入的代码不存在，请重新输入",9010061);
				}else{
					if(toDrop.getData().isCash()){
						
						
						let ss = "#b您是否想花费 #r"+needMoney+" #b点券购买 #v"+selectText+"#";
						YN = npc.askYesNo(ss,9010061);
						if(YN == 1){
							if(player.getCashShopCurrency(1) < needMoney){
								npc.say("你没有" + needMoney + " 点卷",9010061);	
							}else if(!player.canGainItem(selectText,1)){
								npc.say("请清理背包",9010061);	
							}else{
								item.setItemId(selectText);
								player.updateItem(1,item);
								player.modifyCashShopCurrency(1,-needMoney);
								npc.say("时装幻化成功！",9010061);
							}
						}else{
							npc.say("找错了？那么请继续选购吧！",9010061);
						}
						
					}else{
						npc.say("您输入的不是现金装备代码！请重新输入",9010061);
					}
				
				}
			}
		}
		
		
		
		
		
	
}else if(YN == 1){
	player.openURL("http://www.mxdcode.com");
	player.runScript("zxdz")
}