/**
* 福利箱子 CC 835456564 
**/

//送的装备
let newerEquips = Array(
	//装备ID 装备名 四围 攻击力 BOSS 所属 无视
	Array(1122296,1,188,188,10,10,10)
);

//送的物品
let newerItems = Array(
	Array(2614067,20),//神奇魔方
	Array(2049384,5),//大师
	Array(2049389,3),//大师
	Array(1122296,1),//大师
	Array(5062500,300),//附加
	Array(5062024,150),//高级
	Array(5062002,400),//闪耀
	Array(5062000,400),//闪耀
	Array(5062009,400),//超级
	Array(2435824,20),//闪耀
	Array(4001715,20),//闪耀
	Array(5064000,30),//超级
	Array(2431993,50),//超级
    Array(5000872,1),//闪耀
	Array(5000871,1),//超级
	Array(5000870,1),//超级
	Array(2049116,30)
);

let Dq = 188888;//点券数量
let Dy = 188888;//抵用数量
let YE = 2200;//余额数量
let Meso = 0;//金币数量
let boxId = 2431357;//箱子ID


let ss = "\r\n#e礼物清单:\r\n"
if (YE > 0) ss+= "#b余额 #rx " + YE + " \r\n"
if (Dq > 0) ss+= "#b点券 #rx " + Dq + " \r\n"
if (Dy > 0) ss+= "#b抵用 #rx " + Dy + " \r\n"
if (Meso > 0) ss+= "#b金币 #rx " + Meso + " \r\n"
if (newerEquips.length > 0){
	ss += "#e#b属性装备:\r\n#n"
	for(let i = 0 ; i < newerEquips.length;i++){
		ss += "#v"+newerEquips[i][0]+"# "
	}
}
if (newerItems.length > 0){
	ss += "\r\n#e#b其他道具:\r\n#n"
	for(let i = 0 ; i < newerItems.length;i++){
		ss += "#r#v"+newerItems[i][0]+"# x "+newerItems[i][1]+" "
	}
}

let YN = npc.askYesNo("是否开启588元妖精的礼包？"+ss);
if(YN == 1){
	let needSlot = newerItems.length + newerEquips.length;
	if (player.getFreeSlots(1) < needSlot || player.getFreeSlots(2) < needSlot || player.getFreeSlots(3) < needSlot || player.getFreeSlots(4) < needSlot || player.getFreeSlots(5) < needSlot) {
		npc.say("请清理背包哦！需要 "+needSlot+" 个空位");
	}else{
		player.loseItem(boxId,1);
		for(let i = 0 ; i < newerItems.length;i++){
			player.gainItem(newerItems[i][0],newerItems[i][1]);
		}
		for(let i = 0 ; i < newerEquips.length;i++){
			let newItem = player.makeItemWithId(newerEquips[i][0]);
			newItem.setStr(newerEquips[i][2]); //装备力量
			newItem.setDex(newerEquips[i][2]); //装备敏捷
			newItem.setInt(newerEquips[i][2]); //装备智力
			newItem.setLuk(newerEquips[i][2]); //装备运气
			newItem.setMad(newerEquips[i][3]);
			newItem.setPad(newerEquips[i][3]);
			newItem.setStatR(newerEquips[i][5]);// 所有属性
			newItem.setTitle(newerEquips[i][1]);// 所有属性
			newItem.setBossDamageR(newerEquips[i][4]);// BOSS伤 
			newItem.setIgnorePDR(newerEquips[i][6]);// 无视防御
			newItem.setAttribute(0);
			player.gainItem(newItem);
		}
		player.gainMesos(Meso);
		player.modifyCashShopCurrency(1,Dq);
		player.modifyCashShopCurrency(2,Dy);
		gainHyPay(YE);
		npc.say("恭喜你收到管理员赠送的礼物！");
	}
}else{
	npc.say("记着打开你的礼物盒哦！");
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