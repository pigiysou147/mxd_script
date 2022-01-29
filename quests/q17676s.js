// Created by Jackson
// Quest ID:17676
// [凯梅尔兹共和国] 她的心意


npc.sayNextE("克莱尔何时离开呢。", true);
npc.sayNextE("这会儿马上父亲准备好就要离开了。");
npc.sayNextE("看来班·特来敏大人要一起去了?", true);
npc.sayNextE("是的。他好像担心说不定又中途在哪消失了似的。");
npc.sayNextE("原来如此。那也别放弃自己的梦想。成为大魔法师的梦想。", true);
npc.sayNextE("谢谢你。有空的时候我自己会继续筹集资本...不是,是学习。");
npc.sayNextE("(这姑娘,如此的话又该离家出走了。)", true);
npc.sayNextE("你没什么话要我转告莱文吗?现在离开的话想见面可就难了。", true);
npc.sayNextE("嗯?应该是那样吧。我也没什么要说的呢。");
npc.sayNextE(".....???你会想他都没关系吗?", true);
npc.sayNextE("啊?为什么?啊,当然也不会完全不想他啦。");
npc.sayNextE("原,原来如此.(莱,莱文你这家伙..呵呵)", true);
if (npc.askYesNoE("啊,那么能请你把这个转交给他吗?")) {
        npc.startQuest();
        npc.sayNextE("知道了。我会转交给他的。", true);
        npc.sayNextE("我尝试着做的。那就拜托你了。");
} else {
        npc.sayE("如果你很忙的话也没办法..");

}