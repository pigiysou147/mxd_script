/**
* 新手NPC  QQ:739977676 
**/

let Dq = 0;//點券數量
let Dy = 0;//抵用數量
let YE = 11;//餘額數量
let Meso = 11000000;//金幣數量


//密碼
let password = "在"
//領取獎勵后傳送到？
let map = 910000000;
if(player.getPQLog("發財金")>0){
	npc.say("您的已經領取過發財金，無法再次領取");
}else{
	let YN = npc.askYesNo("#fs16#限主時送發財金，抓最多分享的。#k");
	if(YN == 1){
		while(true){
			let text = npc.askText("#fs16##r"+player.getName()+"#b喊在，我要送你1千萬發財金和11餘額!","",0,999);
			if(text == password){
				player.gainMesos(Meso);
				player.modifyCashShopCurrency(1,Dq);
				player.modifyCashShopCurrency(2,Dy);
				gainHyPay(YE);
				player.addPQLog("發財金",1,1);
				player.changeMap(map) 
				npc.broadcastNoticeWithoutPrefix("[發財金]: "+player.getName()+" 成功領取！快和大家一起愉快的玩耍吧！");
				let ss = "";
				if (YE > 0) ss+= "#b餘額 #rx " + YE + " \r\n"
				if (Dq > 0) ss+= "#b點券 #rx " + Dq + " \r\n"
				if (Dy > 0) ss+= "#b抵用 #rx " + Dy + " \r\n"
				if (Meso > 0) ss+= "#b楓幣 #rx " + Meso + " \r\n"
				if(ss != ""){
					ss = "\r\n以及:"+ss;
				}
				npc.say("#fs16#r非常好！我給你了！"+ss);
				break;
			}else{
				npc.say("#fs20##b你是不是想吃漢堡");
			}
		}
	}else{
		npc.say("趕緊做好準備上車吧！");
	}
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
            pay = result.get("Cumulative");
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