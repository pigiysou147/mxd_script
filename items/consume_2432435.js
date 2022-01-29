/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  
 *  功能：魅力香水
 *  
 *  @Author Kent 
 */

/* global im */


let pay = Math.floor(Math.random() * 10)+1;
player.loseItem(npc.getItemId(),1)
gainHyPay(pay)
npc.broadcastPlayerNotice(2,"【元旦红包】：恭喜玩家 " + player.getName() + " 元旦红包的 " + pay + " 余额。");
npc.say("你获得了:"+pay+"余额");

function gainHyPay(count) {
    var sql = "update hypay set pay =pay+? where accountid=?";   
    player.customSqlUpdate(sql, count,player.getAccountId());
}