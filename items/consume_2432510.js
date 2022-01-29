/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：周日强化支援箱
 *  @Author Kent 
 */


var status = 0;
var psrw = Array(
        //这个为获取物品   （ID, 数量）
        Array(4001832, 500),
        Array(2049027, 3),
        Array(2470002, 1),
        Array(2048750, 1)
        );

        var txt="";
        for (i = 0; i < psrw.length; i++) {
			txt+="#v"+psrw[i][0]+"# X"+psrw[i][1];
            player.gainItem(psrw[i][0], psrw[i][1]); //随机这个道具 还有数量
        }
		player.loseItem(npc.getItemId(),1);
		npc.say(txt+"获取成功");
 