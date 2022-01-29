/**
* 抽獎  QQ:739977676 
*
* 機制說明： 抽獎首先會生成0-100的隨機數，獎品里面幾率大于這個數的才會進入最終獎池，最終獲得的獎品將在最終獎池里面隨機獲得一個。
*
**/

let type = 3;// 1=點券 2=抵用 3=金幣 4=余額 物品ID=材料抽獎
let needNum = 50000000;//需要數量
let title = "";
let haveMoney = 0;

//獎品
let laba = 30;//公告喇叭需要的幾率
let items = Array(
	//物品ID 數量 幾率(幾率請寫100以下,只有幾率在laba以下的才會喇叭公告)
	Array(1113063,1,100),
	Array(1113064,1,100),
	Array(4310250,100,100),
	Array(1113065,1,100),
	Array(1113066,1,100),
	Array(1190701,1,100), //三武
	Array(4009005,3,100), //反魔力石
	Array(4036313,1,100), //金幣
	Array(4036313,1,100), //禮品幣
	Array(2435267,1,100), //花粉
	Array(2049384,1,100), //15星
	Array(2049385,1,100), //16星
	Array(2049386,1,100), //17星
	Array(1662002,1,80),//智能機器人男
	Array(1662003,1,80),//智能機器人女
	Array(1672027,1,80),//80等极真锂心脏
	
	//X捲
	Array(2048817,1,90), //X寵物裝備攻擊力券
	Array(2048818,1,90), //X寵物裝備魔力券
	Array(2616062,1,90), //X防具魔力券
	Array(2615031,1,90), //X裝飾攻擊力券
	Array(2615032,1,90), //X裝飾魔力券
	Array(2616061,1,90), //X防具攻擊力券   	
	Array(2616062,1,90), //X防具魔力券
	Array(2613050,1,90), //X單手武器攻擊力券
	Array(2613051,1,90), //X單手武器魔力券
	Array(2612061,1,90), //X雙手武器攻擊力券
	Array(2612062,1,90), //X雙手武器魔力券
	//v捲
	Array(2048821,1,80),
	Array(2048822,1,80),
	Array(2612076,1,80),
	Array(2612077,1,80),
	Array(2613064,1,80),
	Array(2613065,1,80),
	Array(2615043,1,80),
	Array(2615044,1,80),
	Array(2616074,1,80),
	Array(2616075,1,80),
	//深淵武器
	Array(1592018,1,50),
	Array(1262016,1,50),
	Array(1212063,1,50),
	Array(1272015,1,50),
	Array(1282015,1,50),
	Array(1222058,1,50),
	Array(1232057,1,50),
	Array(1242060,1,50),
	Array(1302275,1,50),
	Array(1312153,1,50),
	Array(1322203,1,50),
	Array(1332225,1,50),
	Array(1342082,1,50),
	Array(1362090,1,50),
	Array(1372177,1,50),
	Array(1382208,1,50),
	Array(1402196,1,50),
	Array(1412135,1,50),
	Array(1422140,1,50),
	Array(1432167,1,50),
	Array(1442223,1,50),
	Array(1452205,1,50),
	Array(1462193,1,50),
	Array(1472214,1,50),
	Array(1482168,1,50),
	Array(1492179,1,50),
	Array(1522094,1,50),
	Array(1532098,1,50),
	Array(1252015,1,50),
	Array(1542063,1,50),
	Array(1552063,1,50),
	Array(1403036,1,50),

	Array(1582016,1,50),
	//銀河副武器
	Array(1352975,1,40),
	Array(1352206,1,40),
	Array(1352216,1,40),
	Array(1352226,1,40),
	Array(1352935,1,40),
	Array(1099012,1,40),
	Array(1099011,1,40),
	Array(1353405,1,40),
	Array(1352506,1,40),
	Array(1352807,1,40),
	Array(1352256,1,40),
	Array(1352236,1,40),
	Array(1352246,1,40),
	Array(1352945,1,40),
	Array(1352406,1,40),
	Array(1352957,1,40),
	Array(1552084,1,40),
	Array(1352815,1,40),
	Array(1353205,1,40),
	Array(1353505,1,40),
	Array(1352266,1,40),
	Array(1352276,1,40),
	Array(1352009,1,40),
	Array(1352967,1,40),
	Array(1352296,1,40),
	Array(1352286,1,40),
	Array(1342095,1,40),
	Array(1352109,1,40),
	Array(1353006,1,40),
	Array(1353306,1,40),
	Array(1352906,1,40),
	Array(1352916,1,40),
	Array(1352928,1,40),
	Array(1353105,1,40),
	Array(1352707,1,40),
	Array(1352606,1,40),
	Array(1353707,1,40),
	Array(1353606,1,40),
	Array(1352824,1,40),
	Array(1098006,1,40)
);
//展示出來的獎品
let showItems = Array(
	2048817,    
	2048818,	     
	2616062,
	2615031,
	2615032,
	2616061,
	2616062,
	2613050,
	2613051,
	2612061,    
	2612062
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
			title = "楓幣"
			haveMoney = "查閱背包";
			break;
		case 4:
			title = "余額"
			haveMoney = parseInt(getHyPay(1));
			break;
		default:
			title = "獎券";
			haveMoney = parseInt(player.getAmountOfItem(type));
			break;
	}
	let str = "\t\t\t\t\t#fs16##r#e"+title+"轉蛋機#fs12##n\r\n";
	str += type==3?"#b每次需要 #r"+needNum+" #b金幣":type>4?("#b擁有獎券 #v"+type+"##r "+haveMoney+" #b個,每次需要 #r"+needNum+" #b個"):("#b剩余 #r"+haveMoney+" #b"+title+" 每次需要 #r"+needNum+" #b"+title);
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
			
			if(player.getFreeSlots(1) > 2 && player.getFreeSlots(2) > 2 && player.getFreeSlots(3) > 2 && player.getFreeSlots(4) > 2 && player.getFreeSlots(5) > 2){
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
				npc.say("無法抽取物品，請清理背包，並確保每個欄位都有3格以上之空間");
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