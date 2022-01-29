/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  游戏常用NPC
 *  @Author Kent 
 */

var status = 0;
var aa1 = "#fEffect/CharacterEff/1051296/1/0#";
var aa2 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aa3 = "#fEffect/CharacterEff/1112905/0/1#";//小红心
var aa4 ="#fUI/UIWindow/PartySearch2/BtNext/mouseOver/0#";
var tz3 = "#fEffect/CharacterEff/1082588/0/0#";  //红点
var tz4 = "#fEffect/CharacterEff/1082588/3/0#";  //蓝点
var aaa73 = "#fUI/CashShop.img/CSEffect/hot/0#";  //人气图标
var ok = "#fUI/UIWindow.img/ToolTip/Equip/Star/Star#"; 
var ok1 = "#fUI/UIWindow.img/ToolTip/Equip/Star/Star2#"; 
var gg1 = "#fUI/TenthAnniversaryBoardGame.img/TenthBoardGameUI/Gage/leftGage#";  
var gg2 = "#fUI/TenthAnniversaryBoardGame.img/TenthBoardGameUI/Gage/middleGage#";  
var gg3 = "#fUI/TenthAnniversaryBoardGame.img/TenthBoardGameUI/Gage/rightGage#";  
var ss = "#fUI/UIWorldGauge.img/worldGauge/1/gauge/normal#";  //蓝色渐变线318*6
var jl = "#fUI/CashShop.img/CSDiscount/bonus#";  //jiangli 

        var selStr = "";
        selStr += "#e#d\t\t\t"+ok1+" "+ok+" 门派相争 "+ ok +" "+ok1+"#n#k\r\n\r\n";
        selStr += "\t#k余额:#r#e" + getHyPay() + "#n#k  点卷：#b#e" + player.getCashShopCurrency(1) + "  #k活力值: #g#e"+player.getPQLog("活力")+"#k#n\r\n";
		selStr += "" + ss + "\r\n #i3800766#\r\n";
        selStr += "#L2#" + aa4 + "门派主页#l";
        selStr += "#L3#" + aa4 + "贡献排行#l";
        selStr += "#L4#" + aa4 + "口袋升级#l";
		selStr += "#L1#" + aa4 + "提升贡献#l\r\n";
        //selStr += "#L23#" + aa1 + "综合排行#l\r\n";
        let selection =npc.askMenu(selStr,9001223);

        switch (selection) {
			     case 1://
                
                player.runScript( "购买贡献度");
                break;
            case 2: //
                 
                player.runScript("门派管理");
                break;
            case 3://
                 
                player.runScript( "贡献排行");
                break;
            case 4://
                
                player.runScript( "门派勋章");
                break;

            default:
           
        }

function getHyPay() {

	var sql = "select pay from hypay where accountid = ? ";

	var result = player.customSqlResult(sql, player.getAccountId());

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("pay");
		}
	} else {
		return 0;
	}

}