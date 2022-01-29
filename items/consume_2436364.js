/**
* 福利箱子  QQ:739977676 
**/

//送的裝備
let newerEquips = Array(
	//裝備ID 裝備名 四圍 攻擊力 BOSS 所屬 無視
	//Array(1004234,"萌新起航",10,5,1,1,1),
);
//整套字母
//送的物品
let newerItems = Array(
			Array(4000000,5),
			Array(4000001,10),
			Array(4000000,1000),
			Array(4000016,1000),
			Array(4001024,20),
			Array(4000385,20),
			Array(4000002,2000),
			Array(4000622,2000),
			Array(4001024,50),
			Array(4000385,50),
			Array(4000035,3333),
			Array(4000036,3333),
			Array(4001024,80),
			Array(4000385,80),
			Array(4000111,4444),
			Array(4000112,4444),
			Array(4001024,120),
			Array(4000385,120),
			Array(4000711,5000),
			Array(4000712,5000),
			Array(4001024,180),
			Array(4000385,180),
			Array(4000727,5555),
			Array(4000728,5555),
			Array(4000731,5555),
			Array(4001024,200),
			Array(4000385,200),
			Array(4000379,5000),
			Array(4000380,5000),
			Array(4000382,5000),
			Array(4000383,5000),
			Array(4001024,220),
			Array(4000385,220),
			Array(4110010,1)
);

let Dq = 0;//點券數量
let Dy = 0;//抵用數量
let YE = 0;//余額數量
let Meso = 0;//金幣數量
let boxId = 2436364;//箱子ID


let ss = "\r\n#e禮物清單:\r\n"
if (YE > 0) ss+= "#b余額 #rx " + YE + " \r\n"
if (Dq > 0) ss+= "#b點券 #rx " + Dq + " \r\n"
if (Dy > 0) ss+= "#b抵用 #rx " + Dy + " \r\n"
if (Meso > 0) ss+= "#b金幣 #rx " + Meso + " \r\n"
if (newerEquips.length > 0){
	ss += "#e#b屬性裝備:\r\n#n"
	for(let i = 0 ; i < newerEquips.length;i++){
		ss += "#v"+newerEquips[i][0]+"# "
	}
}
if (newerItems.length > 0){
	ss += "\r\n#e#b其他道具:\r\n#n"
	for(let i = 0 ; i < newerItems.length;i++){
		ss += "#r#v"+newerItems[i][0]+"#"
	}
}

let YN = npc.askYesNo("#b是否開啟#r2019年5月16日#b整套字母"+ss);
if(YN == 1){
	let needSlot = newerItems.length + newerEquips.length;
	if (player.getFreeSlots(1) < needSlot || player.getFreeSlots(2) < needSlot || player.getFreeSlots(3) < needSlot || player.getFreeSlots(4) < needSlot || player.getFreeSlots(5) < needSlot) {
		npc.say("請清理背包哦！需要 "+needSlot+" 個空位");
	}else{
		player.loseItem(boxId,1);
		for(let i = 0 ; i < newerItems.length;i++){
			player.gainItem(newerItems[i][0],newerItems[i][1]);
		}
		for(let i = 0 ; i < newerEquips.length;i++){
			let newItem = player.makeItemWithId(newerEquips[i][0]);
			newItem.setStr(newerEquips[i][2]); //裝備力量
			newItem.setDex(newerEquips[i][2]); //裝備敏捷
			newItem.setInt(newerEquips[i][2]); //裝備智力
			newItem.setLuk(newerEquips[i][2]); //裝備運氣
			newItem.setMad(newerEquips[i][3]);
			newItem.setPad(newerEquips[i][3]);
			newItem.setStatR(newerEquips[i][5]);// 所有屬性
			newItem.setTitle(newerEquips[i][1]);// 所有屬性
			newItem.setBossDamageR(newerEquips[i][4]);// BOSS傷 
			newItem.setIgnorePDR(newerEquips[i][6]);// 無視防禦
			newItem.setAttribute(0);
			player.gainItem(newItem);
		}
		player.gainMesos(Meso);
		player.modifyCashShopCurrency(1,Dq);
		player.modifyCashShopCurrency(2,Dy);
		gainHyPay(YE);
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