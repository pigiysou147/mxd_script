/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 Kent
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player, map */

var Icon = "#fUI/MultiYutGame.img/MultiYutGame/Piece/1/catch/0#";
var Icon1 = "#fEffect/ItemEff.img/1112014/0/1#";
var a = "#fEffect/ItemEff/1048001/0/0#";//雪花
var Icon2 = "#fEffect/ItemEff.img/1112812/0/2#";
var xxx = "#fEffect/CharacterEff/1032054/0/0#";
var g = "#fEffect/CharacterEff/1082229/0/0#"; //饼干兔子
var f = "#fEffect/CharacterEff/1112904/2/1#";//彩色五角星
var b = "#fEffect/CharacterEff/1003271/0/0#";
var sss = "#fEffect/ItemEff/1102874/effect/ladder/0#";
var ttt = "#fMap/MapHelper/weather/tree/9#";
var uuu = "#fUI/NameTag/medal/556/w#";
var uuu2 = "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#";
var 雲 = "#fEffect/ItemEff/1070069/effect/walk1/1#";
var 月 = new Date().getMonth() + 1;
var 日 = new Date().getDate();
var 時 = new Date().getHours();
var 分 = new Date().getMinutes();
var 日期 = 時+" #b點#r "+分+" #b分#r "
let EventList = new Array(
        Array("返回市場", '9310362', 'AB_返回市場'),
		Array("萬能傳送", '9310362', '萬能傳送'),
		Array("時尚沙龍", '9310362', "AB_時尚沙龍"),
		Array("功能服務", '9310362', "AB_功能服務"),
		Array("購物中心", '9310362', "購物中心"),
		Array("副本中心", '9310362', "AB_副本中心"),
		Array("點券中心", '9310362', "AB_交易系統"),
		Array("福利中心", '9310362', 'AB_福利中心'),
		Array("快速轉職", '9310362', 'AB_快速轉職'),
		Array("職業五轉", '9310362', 'AB_職業五轉'),
		Array("排行榜單", '9310362', "AB_排行榜單"),
		Array("綜合系統", '9310362', 'AB_綜合系統'),
		//Array("熱門活動", '9310362', 'AB_熱門活動'),
		Array("每日跑環", '9310362', '每日跑環'),
		//Array("燈泡修復", '9310362', '修燈泡'),
		//Array("抓豹地圖", '9310362', '抓豹地圖'),
		Array("#r#e168 推文", '9310362', '168禮包')
		
		);
if (map.getId() == 180000001) {
		npc.say("#r#e很遺罕您因為違反用戶守則被禁止遊戲活動，如有異議請聯系管理員.");
	} else {
let flag = false;
    let menu ="\t"+雲+"#r#fs16##e歡迎使用夏戀谷萬能NPC"+雲+"\r\n#fs12##n"
	let indexof = 1;
				menu += "#b當前在線 : #r#e" + player.getOnlineTime() + "#n#b\t分鐘\t當前擁有 : #r#e" + player.getCashShopCurrency(1)+ "#n#b 點券\r\n";
				menu += "#b當前剩餘 : #r#e" + getHyPay(1) + "#n#b\t餘額\t當前累計 : #r#e" + getHyPay(3) + "#n#b 贊助\r\n#n";
				menu += "#b目前時間 : #r#e" + 日期 + "#n\t";
				menu += "#b線上人數 : #r#e" + online() + "#b#n 人\r\n"
				menu += ""+f+f+f+f+f+f+f+f+f+f+f+f+f+f+f+f+f+f+f+f+f+"\r\n";
				for (var i = 0; i < EventList.length; i++) {
				if (indexof == 1 || indexof == 5 || indexof == 9 || indexof == 13) {
						icon = "#fEffect/CharacterEff/1082229/0/0#";
					} else if (indexof == 2 || indexof == 6 || indexof == 10 || indexof == 14) {
						icon = "#fEffect/CharacterEff/1082229/0/0#";
					} else if (indexof == 3 || indexof == 7 || indexof == 11 || indexof == 15) {
						icon = "#fEffect/CharacterEff/1082229/0/0#";
					} else if (indexof == 4 || indexof == 8 || indexof == 12 || indexof == 16) {
						icon = "#fEffect/CharacterEff/1082229/0/0#";
					}
				if ((i + 1) % 4 == 0 && i != 0 && (i + 1) < 16) {
						menu += "#L" + i + "#" + icon + "#b" + EventList[i][0] + "#l" + "\r\n\r\n";
					} else {
						menu += "#L" + i + "#" + icon + "#b" + EventList[i][0] + "#l";+ "\r\n\r\n";
					}
					indexof++;
				}
				menu += "\r\n\r\n\t\t\t  " + ""+ ""+"#L99#"+""+ ttt+" #r#e贊助中心 " + "" + "" + ttt + "#l";
    let sel = npc.askMenuS(menu);
	if(sel == 99){
	player.runScript("AB_贊助中心");
}else{
    player.runScript(EventList[sel][2]);
}
	}
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
function online() {
    var i = -1;
    var sql = "SELECT Count(accounts.loggedin) FROM accounts WHERE accounts.loggedin = 3";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("Count(accounts.loggedin)");
    }

    return name;
}