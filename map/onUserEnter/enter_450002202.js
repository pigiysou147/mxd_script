/*  This is mada by Yanran    
 *
 *  功能：[啾啾岛]横亘的神秘河 - 换地图  [啾啾]这个味道是？！剧情动画
 *
 *  @Author Yanran
 */
if (player.isQuestStarted(34201)) {
        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        player.spawnTempNpc(3003167, 1392, 76);
        player.setNpcSpecialAction(3003167, "summon", 0, false);
        //player.changeBGM("Bgm46/ChewChew MainTheme");
        //player.setForcedInput(0);
        ////npc.setDelay(100);
        player.setInGameCurNodeEventEnd(true);
        ////npc.setDelay(2000);
        npc.sayNextENoEsc("#face3#欢迎来到#b啾啾岛#k的中心--#b啾啾村庄#k！", 3003159);
        npc.sayNextENoEsc("#b啾啾#k吗…？", true);
        npc.sayNextENoEsc("#face0#嗯，啾啾！这个名字怎么样？是不是很帅气？哈哈哈！这是我起的名字！\r\n这个名字很容易让人有好感吧？", 3003159);
        npc.sayNextENoEsc("你究竟是什么人啊…？还有，刚刚拦住我的那个大怪物又是什么…我必须尽快从这里通过才行… 我的肚子很饿…头也很疼… ！！", true);
        npc.sayNextENoEsc("#face3#这位朋友，你的疑问还真多！", 3003159);
        npc.sayNextENoEsc("#face3#虽然我对你很好奇，但我还是先回答你的问题吧。", 3003159);
        npc.sayNextENoEsc("#face3#我的身份…就是！！", 3003159);
        npc.sayNextENoEsc("#face0#其实，我也记不清了！哈哈哈！", 3003159);
        npc.sayNextENoEsc("果然…真的很可疑…\r\n你是#r黑魔法师#k的手下吗？", true);
        npc.sayNextENoEsc("#face3##r黑魔法师#k…？那是什么？", 3003159);
        npc.sayNextENoEsc("他住在河水的尽头处，正试图破坏这个世界！同时他也是你们的#b主人#k吧！", true);
        npc.sayNextENoEsc("#face3#啊…！这只是我的口头禅！你不要在意…！", 3003159);
        npc.sayNextENoEsc("#face0#不过倒是有个风度翩翩，英勇神武的族长… 该怎么说呢…虽然其他人想让我统治村庄，但我并不想称王称霸… 我应该说是一名义工吧？喵喵喵喵！", 3003159);
        npc.sayNextENoEsc("#face0#还有！生活在这里的村民都很奇怪，他们不记得任何#b过去的事情#k。", 3003159);
        npc.sayNextENoEsc("#face0#我们分别在不同的时间，不同的地方睁开眼睛，偶然聚集在一起，然后在这里创造了我们的家园。喵喵！。", 3003159);
        npc.sayNextENoEsc("确实！如果你们是黑魔法师的手下，那么未免也太蠢了。", true);
        npc.sayNextENoEsc("狮子一直喵喵叫个不停…好像人一样说话… 这里的村民应该是#b多个生命体的艾尔达混合#k而成的吧…", true);
        npc.sayNextENoEsc("#face2总之，这里非常美丽，而且还很富足，\r\n#b所有~~人#k都在这里生活得#b非~~常#k幸福。", 3003159);
        npc.sayNextENoEsc("#face3#只有一个人除外！！那就是#b穆托#k那家伙！", 3003159);
        npc.sayNextENoEsc("#b穆托#k？", true);
        npc.sayNextENoEsc("#face3#没错！就是刚刚攻击你，抢你食物的那个家伙！", 3003159);
        npc.sayNextENoEsc("嗯…那个大怪物是干嘛的？", true);
        npc.sayNextENoEsc("#face3#穆托是我们啾啾村可爱的老小，他是个善良正直的小朋友。", 3003159);
        npc.sayNextENoEsc("嗯…那家伙……好像有些暴力吧…", true);
        npc.sayNextENoEsc("#face3#我们穆托原本并不是那种暴力的孩子…\r\n他本是守护村庄的善良小孩…", 3003159);
        npc.sayNextENoEsc("#face3#在这啾啾岛上，个头比较大的家伙一共有两个。", 3003159);
        npc.sayNextENoEsc("#face3#其中一个是我刚刚所说的#b穆托#k。还有一个是#r古拉#k。", 3003159);
        npc.sayNextENoEsc("#face3#生活在河水里的#r古拉#k和#b穆托#k不同，完全无法沟通。", 3003159);
        player.setLayerOn(500, "0", 0, -80, -1, "Map/Effect2.img/ArcaneRiver2/attack", 4, true, -1, false, 0, 0);
        npc.sayNextENoEsc("#face3#而且，那家伙的性格十分残暴，每十天就到陆地上来，不管看到什么东西，部分青红皂白就吞到肚子里。", 3003159);
        player.setLayerOff(300, "0");
        player.setLayerOn(500, "1", 0, -80, -1, "Map/Effect2.img/ArcaneRiver2/fight",4, true, -1, false, 0, 0);
        npc.sayNextENoEsc("#face3#不过…所幸每当#r古拉#k攻击啾啾岛时，我们#b可爱的穆托#k就把那家伙击退。", 3003159);
        player.setLayerOff(300, "1");
        npc.sayNextENoEsc("#face3#作为回报，我们负责给个头过大、行动不便的穆托提供美味的食物。", 3003159);
        npc.sayNextENoEsc("#face3#不过…在不久前出现了一个问题。", 3003159);
        npc.sayNextENoEsc("究竟…是什么问题呢？", true);
        npc.sayNextENoEsc("#face3#那就是… 那家伙…", 3003159);
        npc.sayNextENoEsc("那家伙…？！", true);
        npc.sayNextENoEsc("#face3#开始绝食抗议了…", 3003159);
        npc.sayNextENoEsc("？！", true);
        npc.sayNextENoEsc("#face3#穆托说我们给他的食物不好吃，他不要再帮助我们对付古拉了…所以，村民们都陷入了对#r古拉的恐惧#k，每天都过得战战兢兢的…", 3003159);
        npc.sayNextENoEsc("这像话吗？！", true);
        npc.sayNextENoEsc("#face3#…不…我完全理解#b穆托的心情#k… 没有比难#b吃的食物#k更让人痛苦的了…我们#b可怜的穆托啊#k…", 3003159);
        npc.sayNextENoEsc("#face3#啊…对了！话说你刚刚给穆托的那个食物！\r\n那个食物穆托#b好像非常喜欢！", 3003159);
        npc.sayNextENoEsc("#face3#如果你能为穆托提供那种食物，他说不定会重新振作起来！", 3003159);
        npc.sayNextENoEsc("可是现在我也只剩下一块了啊！\r\n这个能让穆托填饱肚子吗？", true);
        npc.sayNextENoEsc("#face3#嗯…的确是小了点…那么一点东西，估计都不够穆托塞牙缝的…真是太少了…", 3003159);
        npc.sayNextENoEsc("#face3#我们最讨厌分量少但是美味的食物了…", 3003159);
        npc.sayNextENoEsc("有什么方法可以不接触穆托，从这里直接过去的吗？", true);
        npc.sayNextENoEsc("#face0#没有那种方法啦。", 3003159);
        npc.sayNextENoEsc("请不要这样斩钉截铁！", true);
        npc.sayNextENoEsc("#face3#那这样吧，你好像必须经过这条河，如果穆托像这样一动不动，你就#b永远无法离开这里#k。", 3003159);
        npc.sayNextENoEsc("阿西吧……", true);
        npc.sayNextENoEsc("#face3#同样，如果穆托不帮助我们，我们就无法阻拦古拉的袭击，所以…", 3003159);
        npc.sayNextENoEsc("#face3#你能不能帮我们一起制作能让穆托满意的食物呢？", 3003159);
        npc.sayNextENoEsc("#face3#这里有很多美味的食材，想要制作什么食物都轻而易举！\r\n这不用我多说！", 3003159);
        npc.sayNextENoEsc("我不太会做食物…", true);
        npc.sayNextENoEsc("#face0#这个你不用担心！我已经提前跟我们村庄最棒的#b顶级大厨舔舔#k说了你和那个#b又小又美味食物#k的事情！", 3003159);
        npc.sayNextENoEsc("#face0#你现在就去找#b顶级大厨舔舔#k吧！", 3003159);
        npc.sayNextENoEsc("#face3#对了，如果你见到了#b顶级大厨舔舔#k，千万不要提起他的#b~舌头~#k！", 3003159);
        player.destroyTempNpc(3003167);
        if (player.isQuestStarted(34201)) {
                player.completeQuest(34201, 0);
                player.gainExp(260000000);
        }
        player.changeMap(450002000, 0);
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(false, false, false, false);
} else if (player.isQuestStarted(34204)) {
        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        player.spawnTempNpc(3003161, -855, 138);
        player.setNpcSpecialAction(3003161, "summon", 0, false);
        npc.setCameraZoom(0, 1000, 0, -1041, 80);
        //player.setForcedInput(0);
        player.setInGameCurNodeEventEnd(true);
        npc.sayNextENoEsc("#face4#好了，我的#r特制料理#k已经完成了！哈哈！", 3003161); //0 怒 1哭 2哭 3笑 4正常	
        npc.sayNextENoEsc("看起来还不错…不知道好不好吃呢…？", true);
        npc.sayNextENoEsc("#face4#呀！你不要傻乎乎的站着了，快过来尝尝吧！希望你不会因为太好吃，幸福到晕倒！", 3003161); //0 怒 1哭 2哭 3笑 4正常		
        //player.setForcedInput(2);
        ////npc.setDelay(100);
        //player.setForcedInput(0);
        npc.sayNextENoEsc("嗯...那就让我来尝尝吧？", true);
        npc.setCameraZoom(800, 1500, 0, -1041, 80);
        npc.sayNextENoEsc("这... #b这味道#k！！！", true);
        npc.sayNextENoEsc("#face5#哈哈，是不是很赞啊，哈哈！", 3003161); //0 怒 1哭 2哭 3笑 4正常	
        npc.sayNextENoEsc("吐！！！这是什么啊？！我实在是吃不下去！", true);
        npc.setCameraZoom(800, 1000, 0, -1041, 80);
        npc.sayNextENoEsc("#face0##fs42#什么？你说什么！！！", 3003161); //0 怒 1哭 2哭 3笑 4正常		
        npc.sayNextENoEsc("这个...完全不能吃啊…你给穆托这样的食物，他当然会抗议啦…！", true);
        npc.sayNextENoEsc("#face0#你敢批评#b啾啾岛最棒的厨师#k我顶级大厨舔舔做的食物？！", 3003161);
        npc.sayNextENoEsc("主厨，你的#b舌头#k真是奇怪...", true);
        npc.sayNextENoEsc("#face0#你说我的舌头长的很奇怪？！！！", 3003161);
        npc.sayNextENoEsc("不是…不是长的奇怪...", true);
        npc.sayNextENoEsc("#face4#啊哈！话说你这家伙有穆托喜欢的#b某种食物#k？", 3003161);
        npc.sayNextENoEsc("#face4#难怪那么猖狂…！\r\n快把那#b食物#k拿出来！！", 3003161);
        npc.sayNextENoEsc("啊...三明治啊…？我现在只剩下一块了...", true);
        npc.sayNextENoEsc("#face0##fs42#拿过来！", 3003161); //0 怒 1哭 2哭 3笑 4正常	
        //player.setForcedInput(2);
        ////npc.setDelay(100);
        //player.setForcedInput(0);
        npc.sayNextENoEsc("好吧…请你尝尝…我就饿着吧...", true);
        npc.sayNextENoEsc("#face4#恩恩.... 吧嗒吧嗒...！！", 3003161);
        npc.sayNextENoEsc("#face4#呸呸呸！！这是什么啊！", 3003161);
        npc.sayNextENoEsc("哦…怎么了？！你为什么要这样！本来就只身下最后一块了！！", true);
        npc.sayNextENoEsc("#face5#你要让穆托吃这么垃圾的食物？\r\n哈哈哈哈哈！！！我还以为是什么了不起的食物呢！", 3003161); //0 怒 1哭 2哭 3笑 4正常		
        npc.sayNextENoEsc("真是奇怪…这三明治难吃吗？至少比#r那东西#k好吃…很多…很多...", true);
        npc.sayNextENoEsc("#face0#什…什么？！#r那东西#k？！\r\n好的！那我去问问那些#b村民#k吧！", 3003161); //0 怒 1哭 2哭 3笑 4正常
        player.setInGameCurNodeEventEnd(true);
        //player.setStandAloneMode(true);
        player.setInGameDirectionMode(true, false, false, false);
        player.setNpcForceFlip(3003161, 1);
        player.setNpcForceMove(3003161, 1, 100, 300);
        player.spawnTempNpc(3003167, -400, 79);
        player.setNpcSpecialAction(3003167, "summon", 0, false);
        //player.setForcedInput(2);
        ////npc.setDelay(1000);
        //player.setForcedInput(0);
        npc.setCameraMove(false, 200, -1500, 140);
        npc.sayNextENoEsc("#face4#瑞昂！", 3003161); //0 怒 1哭 2哭 3笑 4正常	
        npc.sayNextENoEsc("#face0#顶级大厨舔舔，希望人多的时候你能够喊我族长。", 3003159);
        npc.sayNextENoEsc("#face0#别废话了！你尝尝这家伙拿来的食物！\r\n穆托居然喜欢这种食物？我做的食物要好吃一千倍。\r\n你吃下这两种食物，然后评判下吧！", 3003161); //0 怒 1哭 2哭 3笑 4正常		
        npc.sayNextENoEsc("#face0#呵呵~谁让我这么善良又帅气呢，我就先不跟你计较了。", 3003159);
        npc.sayNextENoEsc("#face3#那我先尝尝吧？\r\n村民们也尝尝吧。", 3003159);
        npc.sayNextENoEsc("#face3#吧嗒吧嗒...", 3003159);
        npc.setCameraZoom(800, 1600, 0, -400, 80);
        npc.sayNextENoEsc("#face2#嗯~这味道？！", 3003159);
        npc.sayNextENoEsc("怎么样，还不错吧？", true);
        npc.sayNextENoEsc("#face2#嗯…！这味道真是！", 3003159);
        npc.sayNextENoEsc("#face2##fs42##r超级难吃#k！！", 3003159);
        npc.setCameraZoom(800, 1000, 0, -400, 80);
        npc.sayNextENoEsc("啊…？", true);
        npc.sayNextENoEsc("#face3#不是只有我这么觉得！这味道该怎么说呢...#r就算我饿上十天也不会吃的#k！呵呵！", 3003159);
        npc.sayNextENoEsc("是…是吗？！", true);
        npc.sayNextENoEsc("#face3#与之相反，我们顶级大厨舔舔做的食物...", 3003159);
        npc.sayNextENoEsc("#face2#嗯！果然很好吃...", 3003159);
        npc.sayNextENoEsc("#face0#顶级大厨舔舔，我可以打个包吗？我想带回家吃。", 3003159);
        npc.sayNextENoEsc("#face0#这些都不够给穆托的，而且你刚刚不是吃过饭了吗？！", 3003161); //0 怒 1哭 2哭 3笑 4正常		
        npc.sayNextENoEsc("#face0#哈哈？我吃过饭了吗？总之你的手艺还是那么好！", 3003159);
        npc.sayNextENoEsc("真是奇怪…你们怎么会喜欢吃那种食物呢…？", true);
        npc.sayNextENoEsc("难道是多种艾尔达混合的同时…让他们的味觉…变得奇怪了吗？", true);
        npc.sayNextENoEsc("这样下去，我就无法离开这里了...", true);
        npc.sayNextENoEsc("#face5#哼~你看到了吗？你还是一脸难以置信的表情啊？哼哼！！", 3003161); //0 怒 1哭 2哭 3笑 4正常		
        npc.sayNextENoEsc("喜欢吃我的食物的穆托，跟我的口味一样...你们觉得好吃的食物无法满足穆托的...", true);
        npc.sayNextENoEsc("#face0#你还不认可我的料理啊！！！\r\n我顶级大厨做的料理村民们都喜欢！！", 3003161); //0 怒 1哭 2哭 3笑 4正常	
        npc.sayNextENoEsc("#face4#好吧，那这样。\r\n古拉将袭击村庄，哈。\r\n在那之前你就自己想办法制作好料理。", 3003161); //0 怒 1哭 2哭 3笑 4正常	
        npc.sayNextENoEsc("可以是我连这里有什么食材都不知道。\r\n而且我自己也不会做料理啊。", true);
        npc.sayNextENoEsc("#face4#这不关我的事，哼哼！！\r\n我已经跟你说清楚了！3天后把食物带到穆托面前去！", 3003161); //0 怒 1哭 2哭 3笑 4正常		
        npc.sayNextENoEsc("#face5#当然，如果你这个对料理一窍不通的家伙，因为我完美的料理而陷入绝望从此销声匿迹的话，我也是可以理解的~哈！", 3003161); //0 怒 1哭 2哭 3笑 4正常			
        player.destroyTempNpc(3003161);
        player.destroyTempNpc(3003167);
        player.changeMap(450002000, 0);
        player.setInGameCurNodeEventEnd(true);
        player.setInGameDirectionMode(false, false, false, false);
        if (player.isQuestStarted(34204)) {
                player.gainExp(260000000);
                player.startQuest(34204, 0);
                player.completeQuest(34204, 0);
        }
}