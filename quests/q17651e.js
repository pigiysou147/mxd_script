// Created by Jackson
// Quest ID:17651
// [凯梅尔兹共和国] 伪装成和平的威胁


npc.sayNextE("好的,您既然先开口提了,我也就直言相告了。");
npc.sayNextE("首先，凯梅尔兹共和国在和与海本王国建交的其他国家进行贸易时，只能交易我国指定的品目，并且我国要收取售价的1%作为酬金。");
npc.sayNextE("你说什么?那是什么!!", true);
npc.sayNextE("等会,先听完他说的。请继续。", 9390203);
npc.sayNextE("好的,第二点是,和我们海本交易时,有关交易包含的所有项目都必须由我们管理。");
npc.sayNextE("第三，现在贵国使用的航线实际上是在海本王国的管辖下，希望你们能够支付航线使用的费用。");
npc.sayNextE("第四。两国从今以后绝不相互猜忌并坚信两国之间的友谊深厚。因此我们为了向凯梅尔兹共和国表达我们的诚意,我们将提供给能代表凯梅尔兹的首领亲属作为贵宾到我国留学的机会,可以花10年来学习我们的先进技术。");
npc.sayNextE("我说完了。您意下如何?");
npc.sayNextE("呃嗯... ", 9390203);
let OBJECT_1 = player.spawnTempNpc(9390236, 130, 65, 1);//NpcName:OBJECT_1
player.destroyTempNpc(OBJECT_1);
player.setNpcSpecialAction(OBJECT_1, "summon", 0, false);
npc.sayNextE("这是什么无厘头的话啊!!", 9390202);
npc.sayNextE("嗯?这位是..?");
npc.sayNextE("我是凯梅尔兹共和国首领吉尔伯特·达尼尔拉的二儿子莱文·达尼尔拉!", 9390202);
npc.sayNextE("见到你真的非常荣幸。关于莱文大人的传闻我已是耳熟能详了。优秀的船长...");
npc.sayNextE("吵死了!你胆敢在那里玩花招啊!", 9390202);
npc.sayNextE("耍花招,您这话说得太过分了吧。我是为了促进两国之间的和平而来的。");
npc.sayNextE("和平?哈!让我们成为你们这些家伙的附属国就是你所指的和平吗!再不赶紧给我滚出去的话,我就让你尝尝凯梅尔兹的厉害!", 9390202);
npc.sayNextE("这这...可不能这样啊。吉尔伯特首领。今天我们就先告辞了。明天再来拜见您。那时希望能听到您的答复。希望您会给我一个肯定的回答。");
npc.sayNextE("哼,放肆的家伙。首领大人,我还有事没有处理完先告辞了。", 9390202);
player.destroyTempNpc(OBJECT_1);
npc.completeQuest();
player.gainExp(953667);