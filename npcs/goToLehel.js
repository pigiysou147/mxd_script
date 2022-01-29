/*  This is mada by Yanran    
 *
 *  功能：[兰克兰]穆托 前往拉克兰
 *
 *  @Author Yanran
 */
        if (player.isQuestCompleted(34218)) {
        if (player.getLevel() >= 220) {
                let sel = npc.askYesNo("#b穆托#k…我现在吃饱了…#b需要我动动吗#k…？\r\n\r\n（如果穆托让路，就能沿着神秘河畔，前往下一地区了。）#k", 3003165); //0笑  1怒 2哭 3正常	
                if (sel == 1) {
                        if (!player.isQuestCompleted(34300)) {
                                player.changeMap(450003700, 0);
                        } else {
                                player.changeMap(450003000, 0);
                        }
                } else {
                        npc.say("想去了，可以找我。");
                }
        } else {
                npc.say("220级以上，才能放你过去。");
        }
}