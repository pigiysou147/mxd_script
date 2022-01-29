/*
 *  
 *  
 *  功能：魅力香水
 *  
 *
 */

/* global im */


var Random = Math.floor(Math.random() * 9 + 1);
player.loseItem(2431729,1)
gainHyPay(Random)
npc.broadcastPlayerNotice(39,"【餘額紅包】：恭喜玩家 " + player.getName() + " 完成每日跑環獲得了 " + Random + " 餘額。");

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
		if (count > 0) {
		player.showSystemMessage( "餘額增加了 " + count + "");
	} else if (count < 0) {
		player.showSystemMessage( "餘額減少了 " + (-count) + "");
}
}