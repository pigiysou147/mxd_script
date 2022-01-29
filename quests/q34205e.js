/*  This is mada by Yanran    
 *
 *  功能：[啾啾岛]循着美味而来
 *
 *  @Author Yanran
 */
npc.sayNextENoEsc("#face0#嗯！今天做的料理好像也很赞！", 3003160);
npc.sayNextENoEsc("#face0#那个还是等我尝过后再判断吧。", 3003153);
npc.sayNextENoEsc("#face0#哔比哥哥，怎么一直吐槽猴姐啊？", 3003154);
npc.sayNextENoEsc("#face0#你这小家伙不要顶嘴，我是你哥哥！", 3003153);
npc.sayNextENoEsc("#face0#我知道，“哥哥”你总是没礼貌，所以#r#fs26#我有点生气了！", 3003154);
npc.sayNextENoEsc("#face0#哔~~~米哔哔美姐…姐好可怕…我害怕...哼哼哼...", 3003155);
npc.sayNextENoEsc("#face0#哎…哎，这么开心的用餐时间，干嘛要这样…快点吃饭吧！", 3003153);
npc.sayNextENoEsc("#face0#就是嘛，哔比哥哥，你早点像这样礼貌该多好啊？就算是为了我们辛苦做饭的猴姐，也请你以后一直~这么懂礼貌，知道了吗？", 3003154);
npc.sayNextENoEsc("#face0#如若不然，#r#fs26#我就把...你..的...头...#r#fs20#我就不跟你多说了，哥哥...", 3003154);
npc.sayNextENoEsc("#face0#我…知道了！", 3003153);
npc.sayNextENoEsc("#face0#呵呵呵，哔美姐..姐姐又教训..哔比哥哥了…呵呵呵", 3003155);
npc.sayNextENoEsc("#face0#我们哔嘟~你要多吃点饭，让你#b受伤的头#k快点好起来..！", 3003154);
npc.sayNextENoEsc("#face0#我…我…我本来就这样啊…？呵呵呵", 3003155);
npc.sayNextENoEsc("#face0#哔嘟啊…你原来并不是傻瓜…不对，你原来是个#b正常的孩子#k…所以你要快点好起来....哎...", 3003154);
npc.sayNextENoEsc("#face3#哔比！哔美！哔嘟！你们这样吵吵闹闹，同时又互相关心对方的样子看起来很好！", 3003160); //3正常 0 微笑
npc.sayNextENoEsc("#face0#这里大部分和我一样，#b没有家人#k，你们#b三个可以互相依靠#k，真是太幸福了！", 3003160);
npc.sayNextENoEsc("#face0#猴姐，你怎么会没有家人呢~你收留了#b因为口味奇怪而被赶出村庄的#k我们啊~姐姐你就和我们家人没有区别~", 3003154);
npc.sayNextENoEsc("#face0#没错，哔美！虽然我也一样无家可归！我们像现在这样，永远生活在一起吧！", 3003160);
npc.sayNextENoEsc("#face0#切…什么家人啊…长的完全不一样啊...", 3003153);
npc.sayNextENoEsc("#face0#喂…适可而止…吧？", 3003154);
npc.sayNextENoEsc("#face0#我…我的意思是，所以我们更该心怀感激！猴姐的个头比我们高大很多，要照顾我们这些小不点…我们的口味这么奇特，她还要给我们做好吃的....", 3003153);
npc.sayNextENoEsc("#face0#谢谢你...猴姐...", 3003153);
npc.sayNextENoEsc("#face0#嘻嘻，我知道哔比你非常喜欢我~哔美啊，你也不要总这样对待你哥哥~家人之间也是不能互相打骂的~", 3003160);
npc.sayNextENoEsc("#face0#应该不是…互相…打骂吧…？呵呵呵...好像是#b单方#k…呵呵呵", 3003155);
npc.sayNextENoEsc("#face3#好啦~好啦~放着美味不吃，我们这是在干嘛呢？今天我特意为你们准备了你们爱吃的#b劲道脚掌汤#k！快吃吧~", 3003160);
npc.sayNextENoEsc("美食的味道是从这里传来的...\r\n正好到了饭点，趁机蹭点饭吃吧..", true);
if (player.isQuestStarted(34205)) {
        npc.completeQuest();
        player.gainExp(300000000);
}