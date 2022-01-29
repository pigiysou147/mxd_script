/* 
 *  功能：贊助中心
 */
/* global cm */

var status = -1;
var iconA = "#fEffect/CharacterEff/1050312/2/0#";
var iconB = "#fEffect/CharacterEff.img/1082312/0/0#"
var iconC = "#fEffect/CharacterEff.img/1082312/1/0#"
var iconD = "#fEffect/CharacterEff.img/1082700/0/0#"
var iconE = "#fEffect/CharacterEff.img/1082700/0/0#"
var icon = "#fEffect/ItemEff.img/1004122/effect/default/18#"
let selStr = "#fn微軟正黑體##e#fs15#";

selStr += "#r什麼是餘額?\r\n"
selStr += "#b餘額就是贊助獲得的貨幣，有時候活動也可以拿得到，類似GASH。\r\n"
selStr += "#r要如何贊助?\r\n"
selStr += "#b點回贊助中心的第一個選項就可以直接打開自動贊助系統。\r\n"
selStr += "#r自動贊助系統是什麼?\r\n"
selStr += "#b輸入遊戲帳號密碼就可以開單，目前方式有超商代碼、虛擬ATM帳號、信用卡。繳費完成後系統將會在5分鐘內自動入帳餘額。\r\n"
selStr += "#r贊助有甚麼好處?\r\n"
selStr += "#b可以領累積禮包、勳章、首儲禮包。贊助禮包在DC群的頻道可以看到所有東西，首儲禮包可以領7天的全屬+500裝備，讓你起手就比別人快\r\n"
npc.say(selStr,1052238);