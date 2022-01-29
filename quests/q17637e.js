// Created by Jackson
// Quest ID:17637
// [凯梅尔兹共和国] 这次的事也由我来解决吧


npc.sayNext("好吧,希望这次你也能助我们一臂之力。");
npc.sayNext("谢谢。首领!", 9390202);
npc.sayNext("你可以借助他的力量,但不可依赖于他的力量。");
npc.sayNext("好的,我会牢记的。我一定会凭我的力量打倒普赛依的。", 9390202);
npc.sayNextS("太好了。莱文。谢谢。首领。");
npc.sayNext("嗯?这次就拜托你了。我还有很多事情要告诉你,准备好的话就跟我说。", 9390202);
npc.sayNext("好，你拿着这个，这礼物给你是为了让我们一起好好加油。", 9390202);
let itemId = 1082607 + player.getJobCategory();
if (player.gainItem(itemId, 1)) {
        npc.completeQuest();
        player.gainExp(953667);
        npc.sayNextNoEsc("莱文就拜托给你了。也许是因为还小所以好像有些欲望高胀。");
        npc.sayNextSNoEsc("请别担心。根据我一直在旁的观察来看,我觉得他一定能出色地完成任务的。");
} else {
        npc.sayNextE("你的背包满了，清理下吧！", 9390201);
}
