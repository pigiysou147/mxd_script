// Created by Jackson
// ID:[865020001]
// MapName:运河1
// 贝里

//player.setForcedInput(0);
npc.sayNextSNoEsc("喂,停在那。", true);
npc.sayNextNoEsc("嗯?你有什么事?", 9390223);
npc.sayNextSNoEsc("你带着这些交易品要去哪里?", true);
npc.sayNextNoEsc("正如你所看到的,我准备去交易,你为什么这样?", 9390223);
npc.sayNextSNoEsc("是吗?... 昨天你还跟我说要带我一起去交易的。怎么能这样偷偷地自己出发了呢?", true);
npc.sayNextNoEsc("啊......是…没错。很抱歉。我…那个…出了点状况,这次交易我得自己去。", 9390223);
npc.sayNextSNoEsc("别说谎了,你这个假货!!我们今天才第一次见面!你到底是谁?你要把达尼尔拉商团的交易品偷到哪里?", true);
// [LP_NpcViewOrHide] [84 B3 01 00 00 00 ]
player.setNpcViewOrHide(9390223, false, false);
let OBJECT_1 = player.spawnTempNpc(9390204, 465, 343, 1);//NpcName:OBJECT_1
player.setSessionValue("npc1", OBJECT_1);
player.setNpcSpecialAction(OBJECT_1, "summon", 0, false);
player.setNpcViewOrHide(OBJECT_1, true, true);
npc.sayNextNoEsc("切。我居然中招了。你不必知道我是谁,要去哪里。我花钱雇佣来的佣兵们,你们快出来吧。", 9390204);
npc.sayNextSNoEsc("!!! 我没想过要打架。只是想重新拿回交易品..", true);
npc.sayNextNoEsc("好了,快把那个人赶走~", 9390204);
// Unhandled Ingame Direction Event [22] Packet: 16 BC 02 00 00
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(false, true, false, false);
//player.setStandAloneMode(false);

for (let i = 0; i < 6; i++)
        map.spawnMob(9390808, 37, 350);

for (let i = 0; i < 6; i++)
        map.spawnMob(9390811, 383, 350);