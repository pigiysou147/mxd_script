// Created by Jackson
// ID:[865090002]
// MapName:达尼尔拉商团办公室


player.setInGameCurNodeEventEnd(true);
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(true, false, false, false);
//player.setStandAloneMode(true);
player.startQuest(17621, 0);//Quest Name:[凯梅尔兹共和国] 吉尔伯特·达尼尔拉
npc.sayNextENoEsc("你没听到我说的话吗?时间就是金钱。你没有提前预约就这么突然来访,这样的行为很没有礼貌。", 9390203);
player.startQuest(17621, 0, "257_show");//Quest Name:[凯梅尔兹共和国] 吉尔伯特·达尼尔拉
npc.sayNextENoEsc("那个,统帅。实际上,这个人帮我找回了差点被偷走的交易品。", 9390217);
npc.sayNextENoEsc("什么?差点被偷走的交易品?被偷是什么意思啊!", 9390203);
npc.sayNextENoEsc("啊..那个.. 突然出现了很可怕的敌人拦腰抢劫…我..我先走了！", 9390217);
player.startQuest(17621, 0);//Quest Name:[凯梅尔兹共和国] 吉尔伯特·达尼尔拉
npc.sayNextENoEsc("#b(居然说了那种谎话之后，就逃跑！！)#k", true);
npc.sayNextENoEsc("嗯.. 那我应该为此表示感谢才是。谢谢你。", 9390203);
npc.sayNextENoEsc("没什么。那是我应该做的。", true);
npc.sayNextENoEsc("我正式介绍下我自己吧。我叫#e#b吉尔伯特·达尼尔拉#k#n,我既是凯梅尔兹共和国的统帅,又是达尼尔拉商团的主人。很高兴认识你", 9390203);
npc.sayNextENoEsc("好的，我是在冒险岛世界各地旅行的#h0#。", true);
npc.sayNextENoEsc("旅行!那是年轻人的特权呢。但你为什么想要见我?", 9390203);
npc.sayNextENoEsc("啊.. 那个..(怎么办。可以告诉他我作为使节的义务吗?)", true);
player.startQuest(17621, 0, "202_show");//Quest Name:[凯梅尔兹共和国] 吉尔伯特·达尼尔拉
npc.sayNextENoEsc("爸爸!我回来啦!", 9390202);
npc.sayNextENoEsc("莱文,我不是跟你说过嘛,在商团的时候要喊我'统帅'!公私要区分清楚!", 9390203);
npc.sayNextENoEsc("…很抱歉。统帅。我按照你的命令,顺利完成交易之后回来了。", 9390202);
npc.sayNextENoEsc("嗯?呦~ #h0#已经到达啦!", 9390202);
npc.sayNextENoEsc("莱文,你认识他?听他说,他是旅行者。他把我们商团的交易品从小偷手上抢了回来。", 9390203);
npc.sayNextENoEsc("我不在的这段时间,你又做了了不起的事情啊!你这家伙还真不错。爸爸,#e#b#h0##k#n在贝里也帮了我。", 9390202);
npc.sayNextENoEsc("你并不是普通的旅行者啊。你有着出众的身手和仗义之心。你给了我们商团的人很大帮助。", 9390203);
npc.sayNextENoEsc("他哪是什么单纯的旅行者啊！#e#b#h0##k#n是代表希纳斯女皇来的和平使者！是不是很厉害？我一开始还以为从#b海本#k王国又派来使节了……", 9390202);
npc.sayNextENoEsc("什么?", 9390203);
npc.sayNextENoEsc("(该死！！)啊，是的……没错，其实是冒险岛世界的希纳斯女皇派我来的。", true);
npc.sayNextENoEsc("你之前不还说自己是旅行者吗？", 9390203);
npc.sayNextENoEsc("是……是那样的。首领大人，我实话告诉您吧。\r\n其实我不是普通的旅行者，而是代表希纳斯女皇而来。虽然我们之前还不太熟悉，但是最近冒险岛世界各地和凯梅尔兹共和国之间的交流日渐增多。", true);
npc.sayNextENoEsc("所以……你来这里的目的是什么？", 9390203);
npc.sayNextENoEsc("就像是之前莱文说的那样，我是作为希纳斯女皇的和平使者来到这里的。", true);
npc.sayNextENoEsc("和平使者？", 9390203);
npc.sayNextENoEsc("是的。希纳斯女皇希望和凯梅尔兹共和国保持友好的关系，更希望和你们成为相互合作的同伴。", true);
npc.sayNextENoEsc("嗯… 你远道而来,先休息吧。你帮了我们商团不少忙,今天就在这休息吧。", 9390203);
player.completeQuest(17621, 0);//Quest Name:[凯梅尔兹共和国] 吉尔伯特·达尼尔拉
player.gainExp(530255);
// Unhandled Ingame Direction Event [22] Packet: 16 BC 02 00 00 
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(false, true, false, false);
//player.setStandAloneMode(false);
player.changeMap(865000002, 0);