

var status = -1;
var a1 = "#fItem/Cash/0501.img/05010101/effect/ladder/9#";//蘑菇
var a2 = "#fItem/Cash/0501.img/05010056/effect/walk1/5#";//"+z+"//草
var a3 = "#fItem/Cash/0501.img/05010056/effect/walk1/6#";//草
var a4 = "#fItem/Cash/0501.img/05010056/effect/walk1/7#";//"草"
var a5 = "#fMap/MapHelper.img/weather/knitsWithWarmWinter/9#";
var a6 = "#fMap/MapHelper.img/weather/balloon/1#";//"+z+"//美化
var a7 = "#fMap/MapHelper.img/weather/2011Haloween/2#";
var a8 = "#fItem/Pet/5000221.img/sleep/5#";//"+z+"
var a9 = "#fItem/Pet/5000221.img/jump/0#";
var a10 = "#fItem/Pet/5000221.img/cry/0#";//"+z+"//美化
var a11 = "#fEffect/CharacterEff/1082565/0/0#";
var a12 = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"
var a13 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var a14 = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
var a15 = "#fEffect/CharacterEff/1051296/1/0#";
var a16 = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"
var a17 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var a18 = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
var a19 = "#fEffect/CharacterEff/1051296/1/0#";
var a20 = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"
var a21 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var a22 = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化
var a23 = "#fEffect/CharacterEff/1051296/1/0#";
var a0 = "#fUI/UIWindow2/FadeForEvent/icon1#";//"+z+"


let selection = npc.askMenu(""
//+ "#k#k#e點券:#r#e" + player.getCashShopCurrency(1) + "\t\t#k#n#k#e抵用卷#n：#r#e" + player.getCashShopCurrency(2) + "\t\t#k#n#k#e在線#n：#r#e" + player.getOnlineTime() + "#k#n\r\n"
		 + "#e#k#L1# 選購寵物#l"+a7+" #L2##k寵物裝備#k#l"+a7+"\r\n\r\n");
		 // + "#k#L7##b"+a11+"贊助中心#l#L8#"+a11+"搬磚中心#b#l#L9#"+a11+"中介中心#l#L10#"+a11+"一鍵破功#l\r\n\r\n"
		// + "#k#L4##e#r 必做區"+a8+"#l#L5##r強化區"+a10+"#l#k#L6##r商店區"+a9+"#l\r\n\r\n\r\n");
		


            switch (selection) {
                case 0:
player.changeMap(100000000);
//npc.makeEvent("JILI_PD", false, player)
//player.changeMap(100000000);
//player.runScript(9900003,"9900003_99");
break;
case 1:
player.runScript("寵物商店1");
break;
case 2:
player.runScript("寵物裝備");
break;
case 3:
player.runScript("victoria_taxi1");
break;
case 4:
player.runScript("bizuoqu");
break;
case 5:
player.runScript("qianghuaqu");
break;
case 6:
player.runScript("shangdianqu");
break;
case 7:
player.runScript("zanzhuzhongxin");
break;
case 8:
player.runScript("搬磚副本");
break;
case 9:
player.runScript("victoria_taxi1");
break;
case 10:
player.runScript("victoria_taxi1");
break;
case 11:
player.runScript("搬磚副本");
break;
case 1:
player.runScript("victoria_taxi1");
break;
}