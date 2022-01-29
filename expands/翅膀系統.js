/**
* 新端脚本-翅膀系统  QQ:739977676 
**/
var bts = "#fEffect/ItemEff/1102874/effect/ladder/0#";//藍色天使翅膀
var menuList = Array(
	Array("#r系统說明" , 1),
	Array("#b初階翅膀" , 2),
	Array("#r翅膀升级" , 3)
        );
		
var nowLevel = 0; //当前翅膀階段

var chibangList = Array(
	// 階段 装备代码 属性值 材料ID 材料数量 请按照顺序填写
	Array(1 ,1102293,25  ,4000000,0),
	Array(2 ,1102703,50 ,4000000,188),
	Array(3 ,1102704,75 ,4000000,288),
	Array(4 ,1102700,100,4000000,488),
	Array(5 ,1103019,125,4000000,688),
	Array(6 ,1102385,150,4000000,888),
	Array(7 ,1102699,175,4000000,1088),
	Array(8 ,1102451,200,4000000,1288),
	Array(9 ,1102779,225,4000000,1888),
	Array(10,1102798,250,4000000,2888),
	Array(11,1102724,275,4000000,3888),
	Array(12,1102723,300,4000000,4888),
	Array(13,1102968,325,4000000,5888),
	Array(14,1102730,350,4000000,6888),
	Array(15,1102873,375,4000000,7888),
	Array(16,1102963,400,4000000,8888)
);
		
let selStr = "";
for(var i = 0; i < menuList.length ; i++){
	if(i%4 == 0){
		selStr += ""+bts+"#fs16#翅膀系統#k\r\n";
	}
	selStr += "#L" + menuList[i][1] + "#" + menuList[i][0] + "#l" + "  ";
}

let selected = npc.askMenu(selStr);

switch (selected){
	case 1:
		var ddd = "";
		ddd += "\t#g#n各階段翅膀属性，升级所需材料如下\r\n"
		ddd += "#r\t1. #v"+chibangList[0][1]+"# "+chibangList[0][0]+"  階翅膀 "+chibangList[0][2]+" 属性 ,免费领取\r\n";
		for(let i = 1; i<chibangList.length ;i++){
			ddd += "#r\t"+(i+1)+". #v"+chibangList[i][1]+"# "+chibangList[i][0]+"  階翅膀 "+chibangList[i][2]+" 属性 ,所需#v"+chibangList[i][3]+"# x"+chibangList[i][4]+"\r\n";
		}
		npc.say(ddd);
		break;
	case 2:
		//领取初级翅膀
		if(player.getPQLog("翅膀系统")>0){
			npc.say("领取失败，你已经领取过一次，如果丢失，请联系管理员");
		}else{
			let newItem = player.makeItemWithId(chibangList[0][1]);
			newItem.setTitle("1階翅膀");
			newItem.setDex(chibangList[0][2]);
			newItem.setStr(chibangList[0][2]);
			newItem.setInt(chibangList[0][2]);
			newItem.setLuk(chibangList[0][2]);
			newItem.setMad(chibangList[0][2]);
			newItem.setPad(chibangList[0][2]);
			player.gainItem(newItem);
			player.addPQLog("翅膀系统");
			npc.say("领取成功，如果不慎失去了翅膀，请联系管理员获取");
		}
		break;
	case 3:
		//获取第一格装备
		var toDrop = player.getInventorySlot(1, 1);
		//判断第一格装备是否存在
		if(toDrop == null){
			npc.say("请将您的翅膀放到第一格！");
		}else if(toDrop.getTitle().indexOf("階翅膀") == -1){
			//判断是否是翅膀
			npc.say("您的第一格装备不是该系统所需翅膀");
		}else{
			//判断階段
			nowLevel = parseInt(toDrop.getTitle().substring(0,toDrop.getTitle().length-3));//获取階段
			if(nowLevel >= chibangList.length ){
				npc.say("已顶级，无法继续升级！");
			}else{
				//通知玩家需要材料
				let ttt = "您的翅膀当前处于第 #r"+nowLevel+" #k階#v"+chibangList[nowLevel-1][1]+"#\r\n升级到 #r"+(nowLevel+1)+" #k階#v"+chibangList[nowLevel][1]+"#,需要#v"+chibangList[nowLevel][3]+"# x"+chibangList[nowLevel][4];
				let YN = npc.askYesNo(ttt);
				if(YN == 1){
					if(player.hasItem(chibangList[nowLevel][3], chibangList[nowLevel][4])){
						
						player.loseItem(chibangList[nowLevel][3], chibangList[nowLevel][4]);
						toDrop.setTitle((nowLevel+1)+"階翅膀");
						toDrop.setDex(chibangList[nowLevel][2]);
						toDrop.setStr(chibangList[nowLevel][2]);
						toDrop.setInt(chibangList[nowLevel][2]);
						toDrop.setLuk(chibangList[nowLevel][2]);
						toDrop.setMad(chibangList[nowLevel][2]);
						toDrop.setPad(chibangList[nowLevel][2]);
						toDrop.setItemId(chibangList[nowLevel][1]);
						player.updateItem(1, toDrop);
						
						npc.broadcastNoticeWithoutPrefix(player.getName() + "：我成功将翅膀进化到 階段" + (nowLevel+1));
						npc.say("升级成功");
						
					}else{
						npc.say("您的材料不足，无法升级");
					}
				}
			}
		}
		break;
}
