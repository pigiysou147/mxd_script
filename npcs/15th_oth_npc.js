/**
* 抽獎  QQ:739977676 
*
* 機制說明： 抽獎首先會生成0-100的隨機數，獎品里面幾率大于這個數的才會進入最終獎池，最終獲得的獎品將在最終獎池里面隨機獲得一個。
*
**/

let type = 4;// 1=點券 2=抵用 3=金幣 4=余額 物品ID=材料抽獎
let needNum = 300;//需要數量
let title = "";
let haveMoney = 0;

//獎品
let laba = 50;//公告喇叭需要的幾率
let items = Array(
	//物品ID 數量 幾率(幾率請寫100以下,只有幾率在laba以下的才會喇叭公告)
	Array(2630230,1,1),//1106  圖騰
	//小獎
	Array(2437178,1,100),//航海武器
	Array(4036313,10,100),//賞金金幣
	Array(2433028,1,100),//銀河副武自選
	Array(2434666,1,50),//蠟筆自選
	Array(2434622,1,50),//星星包
	Array(2430791,1,50),//全屬+100
	Array(2434548,1,50),//白虎
	Array(2434549,1,30),//玄武
	Array(2434550,1,20),//朱雀
	Array(2434551,1,10),//麒麟
	Array(3990001,1,49),//2
	Array(3990009,1,49),//0
	Array(3990000,1,49),//1
	Array(3990008,1,49),//9
	Array(3994047,1,49),//年
	Array(3990004,1,49),//5
	Array(3994048,1,49),//月
	Array(3990000,1,49),//1
	Array(3990005,1,5),//6
	Array(3994049,1,49),//日
	//Array(2431189,1,100),//寶石粉末箱子
	Array(2430638,1,75),//寶石C級箱子
	Array(2430639,1,50),//寶石B級箱子
	Array(2430640,1,49),//寶石A級箱子
	Array(2430656,1,30)//寶石S級箱子
);	
//展示出來的獎品
let showItems = Array(
"1288AD圖騰",
"航海武器",
"V捲自選",
"黑捲自選",
"星星包",
"蠟筆自選",
"銀河副武自選"
);

while(true){
	switch (type){
		case 1:
			title = "點券"
			haveMoney = parseInt(player.getCashShopCurrency(1));
			break;
		case 2:
			title = "抵用"
			haveMoney = parseInt(player.getCashShopCurrency(2));
			break;
		case 3:
			title = "金幣"
			haveMoney = "查閱背包";
			break;
		case 4:
			title = "餘額"
			haveMoney = parseInt(getHyPay(1));
			break;
		default:
			title = "贊助";
			haveMoney = parseInt(player.getAmountOfItem(type));
			break;
	}
	let str = "\t\t\t\t\t#fs16##r#e"+title+"轉蛋機#fs12##n\r\n";
	str += type==3?"#b每次需要 #r"+needNum+" #b金幣":type>4?("#b擁有獎券 #v"+type+"##r "+haveMoney+" #b個,每次需要 #r"+needNum+" #b個"):("#b剩餘 #r"+haveMoney+" #b"+title+" 每次需要 #r"+needNum+" #b"+title);
	str += "\r\n#e#r大獎列表:\r\n"
	for(let i = 0;i<showItems.length;i++){
		str += "#b"+showItems[i]+"\r\n"
	}
	str += "\r\n#e#r獎品列表:\r\n"
	for(let i = 0;i<items.length;i++){
		str += "#v"+items[i][0]+"# "
	}
	str += "\r\n\t\t\t\t\t\t\t\t 是否抽獎？"
	let YN = npc.askYesNo(str);
	if(YN == 1){
		let canGet = false;
		if(type != 3 && haveMoney >= needNum){
			canGet = true;
		}else if(type == 3 && player.hasMesos(needNum)){
				canGet= true;
			}
		if(canGet){
			//抽獎
			let random = Math.floor(Math.random()*100);
			let finalItems = Array();
			for(let i = 0;i<items.length;i++){
				if(random < items[i][2]) finalItems.push(items[i]);
			}
			var random1 = Math.floor(Math.random()*finalItems.length);
			
			if(player.canGainItem(finalItems[random1][0],finalItems[random1][1])){
				switch (type){
					case 1:
						player.modifyCashShopCurrency(1,-needNum);
						break;
					case 2:
						player.modifyCashShopCurrency(2,-needNum);
						break;
					case 3:
						player.loseMesos(needNum);
						break;
					case 4:
						gainHyPay(-needNum)
						break;
					default:
						player.loseItem(type,needNum);
						break;
				}
				if(finalItems[random1][2] <= laba)
					player.gainGachaponItem("["+title+"抽獎]",finalItems[random1][0],finalItems[random1][1],1);
				else
					player.gainItem(finalItems[random1][0],finalItems[random1][1]);
				npc.say("抽取成功！獲得#v"+finalItems[random1][0]+"# x "+finalItems[random1][1]);
			}else{
				npc.say("無法抽取物品，請清理背包");
			}
			
		}else{
			npc.say("您的"+title+"不足！無法抽取");
			break;
		}
	}else{
		break;
	}
}



function getHyPay(type) {
    var sql = "select * from hypay where accname = '" + getAccountName() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        if (type == 1) {
            var pay = result.get("pay");
        } else if (type == 2) {
            var pay = result.get("payUsed");
        } else if (type == 3) {
            var pay = result.get("payReward");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return pay;
}
function getAccountName() {
    var i = -1;
    var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("name");
    }

    return name;
}

function gainHyPay(count) {
    var sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";   
    player.customSqlUpdate(sql, count);
}