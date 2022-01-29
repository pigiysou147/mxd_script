/**
* 抽獎  QQ:739977676 
*
* 機制說明： 抽獎首先會生成0-100的隨機數，獎品里面幾率大于這個數的才會進入最終獎池，最終獲得的獎品將在最終獎池里面隨機獲得一個。
*
**/

let type = 4;// 1=點券 2=抵用 3=金幣 4=余額 物品ID=材料抽獎
let needNum = 200;//需要數量
let title = "";
let haveMoney = 0;

//獎品
let laba = 50;//公告喇叭需要的幾率
let items = Array(
	//物品ID 數量 幾率(幾率請寫100以下,只有幾率在laba以下的才會喇叭公告)
	Array(4036313,1,100), //金幣
	Array(2435267,1,100), //花粉
	Array(2049384,1,100), //15星
	Array(2049385,1,100), //16星
	Array(2049386,1,100), //17星
	Array(1012170,1,100), //洽吉
	Array(1012171,1,100), //洽吉
	Array(1012172,1,100), //洽吉
	Array(1012173,1,100), //洽吉
	Array(1012174,1,100), //洽吉
	Array(2048817,1,20), //X寵物裝備攻擊力券
	Array(2048818,1,20), //X寵物裝備魔力券
	Array(2616062,1,10), //X防具魔力券
	Array(2615031,1,10), //X裝飾攻擊力券
	Array(2615032,1,10), //X裝飾魔力券
	Array(2616061,1,10), //X防具攻擊力券   	
	Array(2616062,1,10), //X防具魔力券
	Array(2613050,1,10), //X單手武器攻擊力券
	Array(2613051,1,10), //X單手武器魔力券
	Array(2612061,1,10), //X雙手武器攻擊力券
	Array(2612062,1,10), //X雙手武器魔力券
	Array(1672027,1,10), //X雙手武器魔力券
	Array(1662003,1,10), //X雙手武器魔力券
	Array(1662002,1,10) //X雙手武器魔力券
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