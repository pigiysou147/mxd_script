/*  This is mada by Yanran    
 *
 *  [拉克兰]坠落 对话
 *
 *  @Author Yanran
 */
let NPC;
let NPC1;
let NPC2;
player.changeBGM("Bgm00/Silence");
player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, false, false, false);
player.removeAdditionalEffect();
player.setLayerBlind(true, 255, 0);
//player.setForcedInput(1);
////npc.setDelay(1);
player.setInGameCurNodeEventEnd(true);
//player.setForcedInput(0);
////npc.setDelay(1);
npc.sayNextENoEsc("#face0#（#ho#！#ho#！必须快点救救他！）", 3003251);
npc.sayNextENoEsc("#face0#呃（！我的头… 记忆全部涌进来，啊啊……这是…噩梦，噩梦……）", 3003251);
npc.sayNextENoEsc("#face0#（她要找的………难道不是他。）", 3003251);
////npc.setDelay(1000);
//player.setLayerBlind(false, 255, 100);
npc.sayNextENoEsc("防毒面具？是你救了我啊！", true);
npc.sayNextENoEsc("#face0#……", 3003251);
npc.sayNextENoEsc("可是……落入神秘河畔的生命\r\n不是会立刻被分解成艾尔达吗？", true);
player.changeBGM("Bgm46/ClockTowerofNightmare");
npc.sayNextENoEsc("#face0#如果既不是人类，也不是艾尔达，就不会被分解吧。", 3003251);
npc.sayNextENoEsc("#face0#她要找的人是我。\r\n路西德所警戒的噩梦就是我，#b我就是那噩梦#k。", 3003251);
npc.sayNextENoEsc("怎么会？！", true);
npc.sayNextENoEsc("#face0#只有我可以偷看路西德的记忆。\r\n只有我在梦境减弱时，也会随之变弱。", 3003251);
npc.sayNextENoEsc("#face0#你还记得我曾经因为自己有没有“灵魂”而苦恼吗？\r\n答案已经出来了。", 3003251);
npc.sayNextENoEsc("防毒面具……", true);
npc.sayNextENoEsc("#face0#你走吧，#ho#。现在请你不要管我了。", 3003251);
npc.sayNextENoEsc("#face0#我只是路西德在潜意识里创造出来的#b虚像#k而已。", 3003251);
npc.sayNextENoEsc("……", true);
////npc.setDelay(2000);
npc.sayNextENoEsc("虽然我不太懂什么灵魂，但有一点，我可以明确的告诉你。", true);
npc.sayNextENoEsc("当你为了生存，为了救活别人而不断挣扎时，\r\n你已经不再是虚像。", true);
npc.sayNextENoEsc("你比任何人都真真切切地“活着”。", true);
npc.sayNextENoEsc("#face0#……", 3003251);
////npc.setDelay(1000);
npc.sayNextENoEsc("#face0#最后一个音乐盒位于时间塔。", 3003251);
//player.setForcedInput(1);
////npc.setDelay(2000);
player.setLayerBlind(true, 255, 1000);
////npc.setDelay(1000);
//player.setOverlapDetail(0, 200, 200, true);
////npc.setDelay(1);
//player.setStandAloneMode(false);
player.setInGameDirectionMode(false, false, false, false);
//player.removeOverlapDetail(1500);
player.changeMap(450003000, 0);