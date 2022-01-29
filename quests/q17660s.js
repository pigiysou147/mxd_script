// Created by Jackson
// Quest ID:17660
// [凯梅尔兹共和国] ]消失的克莱尔


npc.sayNextS("出什么事了?克莱尔去哪儿了?");
npc.sayNext("你去抓狼的时候有些奇怪的家伙们来过。不分青红皂白地扑过来,我就一味地抵挡,然后就发现特来敏小姐不见了!");
npc.sayNext("是逃去哪儿了吗?还是被抓走了呢?我真是个笨蛋!!怎么都没想到保护特来敏小姐!!");
npc.sayNextS("别自责了,莱文。她不会有事的。");
if (npc.askYesNo("赶紧去找找她吧!")) {
        npc.startQuest();
        //player.setNpcSpecialAction(OBJECT_1, "summon", 0, false);
        //player.setNpcSpecialAction(OBJECT_2, "summon", 0, false);
        npc.sayNextNoEsc("现在担心你们自己的小命才是更明智的。", 9390227);
        npc.sayNextNoEsc("谁呀!");
        npc.sayNextNoEsc("那个你们没必要知道。反正你们马上就要从这世界上消失了。", 9390227);
        npc.sayNextSNoEsc("你们这些家伙是暗杀海本王国使节团的家伙们啊!!");
        npc.sayNextNoEsc("呼,醒悟吧!", 9390227);
        for (let i = 0; i < 6; i++) {
                map.spawnMob(9390833, 360, 89);
        }
        for (let i = 0; i < 6; i++) {
                map.spawnMob(9390834, 310, 89);
        }
} else {
        npc.say("在干嘛呢?这可不是开玩笑的");

}
