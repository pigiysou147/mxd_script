// Created by Jackson
// Quest ID:17634
// [凯梅尔兹共和国] 向吉尔伯特报告


npc.sayNext("长时间在外面进行贸易,还是在家好啊。还有,刚刚的事,谢了。", 9390202);
npc.sayNextS("说什么谢不谢的。那又没什么。实际上,你也展现了你那优秀的用兵方法。以后不要犯同样的错误就行了。吃一堑长一智嘛。");
npc.sayNext("嗯!!没错!!以后我得小心了。", 9390202);
npc.sayNextS("更何况,如果说得到了不明身份的女人的帮助的话...");
npc.sayNext("嗯.. 如果接受了不认识的人的帮助,按我爸爸的性格,他应该是不会开心的。总之,今天你也辛苦了,好好休息吧。", 9390202);
let itemId = 1072966 + player.getJobCategory();
if (player.gainItem(itemId, 1)) {
        npc.sayNext("给,收下这个吧。是你帮助我的谢礼。", 9390202);
        npc.completeQuest();
        player.completeQuest(17721, 0);//Quest Name:第2章.奇怪的女人
        player.gainExp(5793937);
} else {
        npc.sayNextE("你的背包满了，清理下吧！", 9390201);
}
