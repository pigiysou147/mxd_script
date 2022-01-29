var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化
var yun = "#fUI/UIWindow/PartySearch2/BtNext/mouseOver/0#"; ////红沙漏
var wn1 = "#fUI/Basic.img/BtClaim/normal/0#"; //警灯











let txt = npc.askText("亲爱的土豪，请在下面输入你想输入的霸屏的话吗，最多100个字符哦", "", 1, 100);

npc.broadcastPlayerNotice(7,"【土豪霸屏】玩家:" + player.getName() + "" + txt);
npc.broadcastWeatherEffectNotice(22, "【土豪玩家:<" + player.getName() + ">霸屏】" + txt,10000);
player.loseItem(npc.getItemId(), 1);