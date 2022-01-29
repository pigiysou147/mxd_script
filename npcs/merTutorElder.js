/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  Jackson
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player */

/**
 * 
 * @author Jackson 
 */

if (player.isQuestActive(24007) || player.isQuestCompleted(24007)) {
        npc.sayNext("请救救我们.");
} else {
        npc.sayNextSNoEsc("长老们！大家没事吧！但是……但是我们的村子……");
        npc.sayNextNoEsc("非常寒冷的气息包围了村子。双弩精灵，在你身上也能感觉到强烈的寒气。", false);
        npc.sayNextNoEsc("你身上的寒气是最强烈的！难道……这是黑魔法师的力量？！", 1033203);
        npc.sayNextNoEsc("……小孩子们开始被封在冰里。再过一段时间，连大人们都……好像力量越强，受那种气息的影响就越慢。虽然我们还在坚持，不过也坚持不了太久……", 1033204);
        npc.sayNextSNoEsc("这一切……都是我的错……虽然封印黑魔法师成功了，但是他留下的#r诅咒#k……连我们村……");
        npc.sayNextNoEsc("诅咒？！", 1033203);
        npc.sayNextNoEsc("就是把村子冰起来的这个力量……", 1033204);
        npc.sayNextNoEsc("原来黑魔法师对国王诅咒，所有精灵都会受到影响啊……");
        npc.sayNextSNoEsc("对不起……全都是我的错。要是我没有被黑魔法师诅咒的话……");
        npc.sayNextNoEsc("让冒险岛世界陷入绝境的黑魔法师……真是个可怕的人。虽然封印成功了，但还是这么厉害……没想到我们竟然能把他封印起来。");
        npc.sayNextNoEsc("双弩精灵，连你这么强的人都无法阻止的诅咒，其他人就更不可能阻止了", 1033204);
        npc.sayNextNoEsc("双弩精灵！这不是你的错！封印成功了！都是因为邪恶的黑魔法师！", 1033203);
        npc.sayNextSNoEsc("但是……我应该避免这种事情发生。也许我当初不应该去和黑魔法师战斗！……让精灵们落入了现在的境地……虽然我是国王，但我没有这样的资格！");
        npc.sayNextNoEsc("别说这种话，双弩精灵。和黑魔法师的战斗要是能避免的话……我们也不会让你，让我们的国王到那么危险的地方去战斗。", 1033204);
        npc.sayNextNoEsc("该说抱歉的反倒是我们。你成为国王还没多久……就因为你是我们中力量最强的人而让你去面对黑魔法师……");
        npc.sayNextNoEsc("我这个战斗长老太弱了，无法和黑魔法师战斗。我……我才应该跟你说抱歉……", 1033203);
        npc.sayNextSNoEsc("不，不是长老们的错！是我说要去和黑魔法师战斗的……我并不后悔参战。我后悔的只是没能保护好你们而已……");
        npc.sayNextNoEsc("那是我们所有人的责任。");
        npc.sayNextNoEsc("你没有必要一个人背负这个责任。和黑魔法师战斗是我们全体精灵的决定，诅咒也必须由我们全体精灵来承担。..", 1033204);
        npc.sayNextNoEsc("被冻起来的人们都在担心你！没有任何人抱怨你！", 1033203);
        npc.sayNextSNoEsc("大家..");
        npc.sayNextNoEsc("真正可怕的不是诅咒。要是我们精灵相互埋怨，忘记了互敬互爱之心，那才是真正可怕的事情。不管黑魔法师的诅咒多么可怕，只要我们能活下去，就一定有办法。");
        npc.sayNextNoEsc("只要有你在，我们精灵就还有希望。");
        npc.sayNextSNoEsc("有什么……办法吗？");
        npc.sayNextNoEsc("现在要阻止诅咒好像太难了。但我们是精灵，是可以生活很长时间的人……时间总是站在我们一边。");
        npc.sayNextNoEsc("请在黑魔法师的诅咒让我们全部沉睡之前，把埃欧雷封印起来，双弩精灵。如果诅咒无法避免的话，就把村庄完全封印起来，#b和所有的精灵一起沉睡#k，直到封印解开为止。");
        npc.sayNextNoEsc("虽然我不知道诅咒什么时候才会解开，但是我们没有必要害怕时间。让我们耐心地等待吧，双弩精灵。", 1033204);
        npc.sayNextNoEsc("等大家都醒来的时候，黑魔法师的诅咒应该就会解开！", 1033203);
        npc.sayNextNoEsc("就算是黑魔法师的诅咒，也无法战胜时间的力量……最终的胜利，必定是属于我们的。");
        npc.sayNextSNoEsc("是的……我们一定要坚持下去！");
        npc.sayNextNoEsc("那当然.啊....我也无法抵挡住诅咒的力量了.快去把村子封印起来吧,双弩精灵.让我们在漫长的岁月中沉睡,等待诅咒解开的时候,不要有昂张的人来玷污我们美丽的村庄....");
        npc.sayNextNoEsc("在封印之前,需要做几样准备.你最好先去去问问阿斯迪拉.");
        player.startQuest(24007, 0, "1");
}