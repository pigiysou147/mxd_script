/**
* 次元入侵獎勵  QQ:739977676 
**/


//送的物品
let newerItems = Array(
	Array(4000000,10),
	Array(4000001,10),
	Array(4000002,10),
	Array(4000003,10),
	Array(4000004,10)
);

let Dq = 0;//點券數量
let Dy = 0;//抵用數量
let YE = 0;//余額數量
let Meso = 0;//金幣數量


let ss = "\r\n#e禮物清單:\r\n"
if (YE > 0) ss+= "#b余額 #rx " + YE + " \r\n"
if (Dq > 0) ss+= "#b點券 #rx " + Dq + " \r\n"
if (Dy > 0) ss+= "#b抵用 #rx " + Dy + " \r\n"
if (Meso > 0) ss+= "#b金幣 #rx " + Meso + " \r\n"
if (newerItems.length > 0){
	ss += "\r\n#e#b其他道具:\r\n#n"
	for(let i = 0 ; i < newerItems.length;i++){
		ss += "#r#v"+newerItems[i][0]+"# x "+newerItems[i][1]+" "
	}
}
for(let i = 0 ; i < newerItems.length;i++){
	player.gainItem(newerItems[i][0],newerItems[i][1]);
}
player.gainMesos(Meso);
player.modifyCashShopCurrency(1,Dq);
player.modifyCashShopCurrency(2,Dy);
gainHyPay(YE);
npc.broadcastPlayerNotice(4, "【武陵道場】:玩家 "+player.getName()+" 通關武陵道場！獲得豐厚獎勵！");
npc.say("恭喜你通關次元入侵!"+ss,9020009);

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