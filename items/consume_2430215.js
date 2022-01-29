status = -1;
var itemList = Array(
//500 这一行 越小  几率就越小
                                                                      
Array(1662091, 500, 1, 1),
Array(1662090, 500, 1, 1),
Array(1662101, 500, 1, 1),
Array(1662107, 500, 1, 1),
Array(1662108, 500, 1, 1),
Array(1662109, 500, 1, 1),
Array(1662074, 500, 1, 1),
Array(1662075, 500, 1, 1),
Array(1666000, 500, 1, 1),
Array(1662059, 500, 1, 1),

Array(1662148, 500, 1, 1),
Array(1662146, 500, 1, 1),
Array(1662147, 500, 1, 1),
Array(1662145, 500, 1, 1),
Array(1662141, 500, 1, 1),
Array(1662140, 500, 1, 1),

Array(1662129, 500, 1, 1),
Array(1662092, 500, 1, 1),
Array(1662114, 500, 1, 1),
Array(1662006, 500, 1, 1)



);


        var chance = Math.floor(Math.random() * 500);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            var item = player.gainGachaponItem("机器人随机箱子",itemId, quantity,  notice);
            if (item != -1) {
				player.loseItem(2430215, 1);
                npc.say("你获得了 #b#v" + itemId + "##k " + quantity + "个。");
            } else {
                npc.say("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
           
        } else {
            npc.say("今天的运气可真差，什么都没有拿到。");
            
        }
