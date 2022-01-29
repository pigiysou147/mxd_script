status = -1;
var itemList = Array(
//500 这一行 越小  几率就越小
  			   
Array(1122430, 500, 1, 1),
Array(1113306, 500, 1, 1),
Array(1012632, 500, 1, 1),
Array(1022278, 500, 1, 1),
Array(1032316, 500, 1, 1),
Array(1132308, 500, 1, 1)


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
            var item = player.gainGachaponItem("创世首饰随机箱子",itemId, quantity,  notice);
            if (item != -1) {
				player.loseItem(2434746, 1);
                npc.say("你获得了 #b#v" + itemId + "##k " + quantity + "个。");
            } else {
                npc.say("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
           
        } else {
            npc.say("今天的运气可真差，什么都没有拿到。");
            
        }
