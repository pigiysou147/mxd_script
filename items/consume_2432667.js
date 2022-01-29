




addHyPay(100);
player.loseItem(npc.getItemId(),1);
npc.broadcastNotice( "『公测福利』：恭喜玩家 " + player.getName() + " 领取了 花回忆岛公测福利 100直充 。");

npc.say("公测礼包领取成功，你获得了100直充");



function addHyPay(price) {
    var sql = "update hypay set cash=cash+? where accountId=?";
    var result = player.customSqlUpdate(sql, price, player.getAccountId());

}