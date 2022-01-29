/**
* 500贊助禮包  QQ:739977676 
**/

//送的裝備
let newerEquips = Array(
	//裝備ID 裝備名 四圍 攻擊力 BOSS 所屬 無視
);

//送的物品
let newerItems = Array(
Array(4000357, 1500),
Array(4000359, 1500),
Array(4000360, 1500)
);

let Dq = 0;//點券數量
let Dy = 0;//抵用數量
let YE = 0;//餘額數量
let Meso = 0;//金幣數量
let boxId = 2430044;//箱子ID


let ss = "\r\n#e禮物清單:\r\n"
if (YE > 0) ss+= "#b餘額 #rx " + YE + " \r\n"
if (Dq > 0) ss+= "#b點券 #rx " + Dq + " \r\n"
if (Dy > 0) ss+= "#b抵用 #rx " + Dy + " \r\n"
if (Meso > 0) ss+= "#b金幣 #rx " + Meso + " \r\n"
if (newerEquips.length > 0){
	ss += "#e#b屬性裝備:\r\n#n"
	for(let i = 0 ; i < newerEquips.length;i++){
		ss += "#v"+newerEquips[i][0]+"##r#e"+newerEquips[i][7]+""
	}
}
if (newerItems.length > 0){
	ss += "\r\n#e#b其他道具:\r\n#n"
	for(let i = 0 ; i < newerItems.length;i++){
		ss += "#r#v"+newerItems[i][0]+"# x "+newerItems[i][1]+" "
	}
}

let YN = npc.askYesNo("#b是否開啟#r4階瑪瑙戒指道具包？#b"+ss);
if(YN == 1){
	let needSlot = newerItems.length + newerEquips.length;
	if (player.getFreeSlots(1) < needSlot || player.getFreeSlots(2) < needSlot || player.getFreeSlots(3) < needSlot || player.getFreeSlots(4) < needSlot || player.getFreeSlots(5) < needSlot) {
		npc.say("請清理背包哦！需要 "+needSlot+" 個空位");
	}else{
		player.loseItem(boxId,1);
		for(let i = 0 ; i < newerItems.length;i++){
			player.gainItem(newerItems[i][0],newerItems[i][1]);
		}
		npc.say("恭喜你收到管理員贈送的禮物！");
	}
}else{
	npc.say("記著打開你的禮物盒哦！");
}

function getHyPay(type) {
    let sql = "select * from hypay where accname = '" + getAccountName() + "'";
    let push = player.customSqlResult(sql);
	let pay = "";
    if (push.size() > 0) {
        let result = push.get(0);
        if (type == 1) {
            pay = result.get("pay");
        } else if (type == 2) {
            pay = result.get("payUsed");
        } else if (type == 3) {
            pay = result.get("payReward");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return pay;
}
function getAccountName() {
    let i = -1;
    let sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    let push = player.customSqlResult(sql);
	let name = "";
    if (push.size() > 0) {
        let result = push.get(0);
        name = result.get("name");
    }
    return name;
}

function gainHyPay(count) {
    let sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";   
    player.customSqlUpdate(sql, count);
}