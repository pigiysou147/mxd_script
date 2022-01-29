status = -1;
var itemList = Array(
Array(2614051, 600, 1, 2), //
Array(2614034, 600, 1, 2), //
Array(2614008, 600, 1, 2), // 
Array(2614051, 600, 1, 2), //
Array(2614034, 600, 1, 2), //
Array(2614008, 600, 1, 2), // 
Array(2614051, 600, 1, 2), //
Array(2614034, 600, 1, 2), //
Array(2614008, 600, 1, 2), // 

Array(2614014, 600, 1, 2), // 
Array(2614052, 600, 1, 2), // 
Array(2614039, 600, 1, 2), // 
Array(2614014, 600, 1, 2), // 
Array(2614052, 600, 1, 2), // 
Array(2614039, 600, 1, 2), // 

Array(2614053, 600, 1, 2), // 
Array(2614025, 600, 1, 2), // 
Array(2614071, 600, 1, 2) // 
);

        var chance = Math.floor(Math.random() * 600);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
			
			
             player.gainGachaponItem("突破石箱子",itemId, quantity,  notice);
            
				player.loseItem(2436343, 1);
				//im.gainItem(4310030, 10);
                npc.say("你获得了 #b#t" + item + "##k " + quantity + "个");
            
           
        } else {
            npc.say("今天的运气可真差，什么都没有拿到。");
            
        }
