/*  This is mada by Yanran    
 *
 *  功能：鲁塔比斯 - 逃少女的身份
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
//player.setForcedInput(0);
npc.sayNextSNoEsc("如果你真的是世界树，为什么会被困在这里呢？既然鲁塔比斯是你创造的，那应该不会无法离开这里啊？");
npc.sayNextNoEsc("都是那些家伙干的！");
npc.sayNextSNoEsc("那些家伙？");
npc.sayNextNoEsc("在这里沉睡之前，我在周围设置了结界。但是不久前有一些人打破了结界，入侵了这里。由于结界被打破的冲击，我从沉睡中醒了过来，他们想把我抓走。");
npc.sayNextSNoEsc("入侵者是黑魔法师的手下吗？");
npc.sayNextNoEsc("我也不知道。他们全都披着斗篷，看不见脸。啊，对了，有个一只眼睛戴着眼罩的魔族男子好像是他们的队长。");
player.showScreenDelayedEffect("rootabyss/demian", 15);
//npc.setDelay(2000);
npc.sayNextSNoEsc("(一只眼睛戴着眼罩的魔族？到底是谁呢？)");
npc.sayNextNoEsc("他们发现我的力量还没有完全恢复，就把我封印在了这里，说要等我完全恢复力量之后再把我带走。");
npc.sayNextSNoEsc("把你封印在了这里？所以你才没办法出去吗？");
npc.sayNextNoEsc("嗯，我试了各种办法，但还是没办法出去。而且那些家伙在鲁塔比斯注入了黑暗力量。因为黑暗力量的影响，我现在一点力气都使不出……");
npc.sayNextNoEsc("这样下去的话，在我完全恢复力量之前，黑暗就会把我吞噬掉。请你一定要帮帮我。我必须尽快离开这里。");
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
npc.completeQuest();