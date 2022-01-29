/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  
 *  功能：魅力香水
 *  
 *  @Author Kent 
 */

/* global im */


var Random = Math.floor(Math.random() * 20 + 10);
player.loseItem(2431026,1)
gainHyPay(Random)
player.scriptProgressMessage("恭喜你開啟『168紅包』獲得了"+Random+"楓幣");
npc.broadcastPlayerNotice(37,"【１６８紅包】：恭喜玩家 " + player.getName() + " 獲得了 " + Random + " 餘額。");

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