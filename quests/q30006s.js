/*  This is mada by Yanran    
 *
 *  功能：鲁塔比斯 - 被封印的世界树
 *
 *  @Author Yanran
 */

player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
//player.setForcedInput(0);
npc.sayNextSNoEsc("为了解开你的封印，必须先了解入侵者的身份。");
npc.sayNextNoEsc("但是他们已经全部走掉了。");
npc.sayNextSNoEsc("也许会留下什么线索，让我们找找看吧。对于那边的四扇门，你知道些什么吗？");
npc.sayNextNoEsc("把我封印起来的那些人制造了那些门之后就走了。我试着到门外去，但是因为封印的原因，没办法出去。");
npc.sayNextSNoEsc("那些门的外面会不会有什么线索呢？到门外面去……嗯？这是怎么回事？");
player.showPlayerEffectPlay("Effect/Direction11.img/effect/Aura/0", 99900, 0, 5, true, 0, false, 0);
npc.sayNextNoEsc("哇，你的身体发出了白光！");
npc.sayNextSNoEsc("这到底是怎么回事？嗯，嗯？身，身体被吸进去了！");
//npc.setDelay(500);
//npc.setDelay(1000);
player.setVansheeMode(true);
player.showPlayerEffectPlay("Effect/Direction11.img/effect/Aura/0", 1, 0, 5, true, 0, false, 0);
player.showPlayerEffectPlay("Effect/BasicEff.img/Teleport", 0, 0, 5, true, 0, false, 0);
npc.sayNextNoEsc("#b#h0##k!!!");
player.changeMap(910700300, 0);
player.setVansheeMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);