var txt;
/*------------------------------------------------------------*/
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化

var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //红星

var hua22 = "#fMap/MapHelper.img/weather/starPlanet/1#"; //星
var shs2 = "#fMap/MapHelper.img/weather/thankyou/3#";  //一个心
var ltz45 = "#fEffect/CharacterEff/1112926/0/0#";  //黄色心 小的好看
var ltz46 = "#fMap/MapHelper.img/weather/thankyou/4#";  //小的红色的
var hua23 = "#fMap/MapHelper.img/weather/starPlanet/2#"; //粉红天使
var nu09 = "#fUI/GuildMark.img/Mark/Etc/00009001/9#";//乌鸦省略号10  9 5 4
var nu19 = "#fUI/GuildMark.img/Mark/Etc/00009001/10#";//乌鸦省略号10  9 5 4
var nu29 = "#fUI/GuildMark.img/Mark/Etc/00009001/4#";//乌鸦省略号10  9 5 4
var nu39 = "#fUI/GuildMark.img/Mark/Etc/00009001/5#";//乌鸦省略号10  9 5 4
var nu9 = "#fEtc/EmotionEffect.img/oops/8#";//乌鸦省略号
var Icon = Array(
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/9#"),//
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
    Array("条件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
    Array("钻石", "#fUI/NameTag/medal/556/w#"),
    Array("钻石", "#fUI/NameTag/medal/556/c#"),
    Array("钻石", "#fUI/NameTag/medal/556/e#"),
    Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
    Array("蓝点", "#fUI/piggyBarMinigame/crunch/1#"),
    Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
    Array("拇指", "#fUI/NameTag/medal/10/w#"),
    Array("拇指", "#fUI/NameTag/medal/10/c#"),
    Array("拇指", "#fUI/NameTag/medal/10/e#"),
    Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
    Array("失败", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
    Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/0/0#"),
    Array("淡星", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
    Array("花朵", "#fEffect/CharacterEff/1051294/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1051296/1/0#"),
    Array("金菇", "#fUI/NameTag/medal/74/w#"),
    Array("金菇", "#fUI/NameTag/medal/74/c#"),
    Array("金菇", "#fUI/NameTag/medal/74/e#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/w#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/c#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/e#"),
    Array("胡子", "#fUI/NameTag/124/w#"),
    Array("胡子", "#fUI/NameTag/124/c#"),
    Array("胡子", "#fUI/NameTag/124/e#"),
    Array("帽子", "#fUI/NameTag/nick/312/w#"),
    Array("帽子", "#fUI/NameTag/nick/312/c#"),
    Array("帽子", "#fUI/NameTag/nick/312/e#"),
    Array("圣诞", "#fUI/NameTag/medal/728/w#"),
    Array("圣诞", "#fUI/NameTag/medal/728/c#"),
    Array("圣诞", "#fUI/NameTag/medal/728/e#"),
    Array("红钻", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
    Array("王冠", "#fUI/NameTag/medal/468/w#"),
    Array("王冠", "#fUI/NameTag/medal/468/c#"),
    Array("王冠", "#fUI/NameTag/medal/468/e#"),
    Array("方框", "#fUI/UIWindow.img/Item/New/inventory/0#"),
    Array("方框", "#fUI/UIWindow.img/Item/activeExpChairIcon#"),
    Array("箭头", "#fUI/Basic.img/icon/arrow#"),
    Array("笑脸", "#fEtc/ItemPotLifeInfo/1000/state/good/0#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#"),
    Array("睡脸", "#fEtc/ItemPotLifeInfo/1000/state/sleep/0#")

);



if(player.getPQLog("年会员")>0){
	player.customSqlUpdate("update characters set vip =1 where id =?",player.getId());
	
}
if(!player.isQuestCompleted(6500)){
	player.completeQuest(6500,0);
}
//player.loseItem(2022529);
     
txt = "    #L789##g限时礼包专区#k#fn宋体##fs40##e#k#l #v1001135#回忆岛#v1001135##fs15#   #L1001##fs30##e#b名人堂#k#l#fs15#\r\n";
txt += "    #r#L0#"+shs2+"返回上海"+shs2+"#l#L4#"+shs2+"地图传送"+shs2+"#l#L8#"+shs2+"新手福利"+shs2+"#l#k\r\n";
txt += "    #r#L1112#"+shs2+"我要充值"+shs2+"#l#L17#"+shs2+"充值福利"+shs2+"#l#L1113#"+shs2+"每日充值"+shs2+"#l#k\r\n";
txt += "  "+nu9+" "+nu9+" "+nu9+" "+nu9+" "+nu9+"\r\n";
txt += "#L2#"+ltz45+"每日任务#l#L3#"+ltz45+"在线奖励#l#L5#"+ltz45+"快速转职#l#L6#"+ltz45+"箱子试抽#l#L9#"+ltz45+"游戏商店#l\r\n";
txt += "#L10#"+ltz45+"我要变强#l#L914#"+ltz45+"装备制作#l#L14#"+ltz45+"综合功能#l#L18#"+ltz45+"兑换中心#l#L19#"+ltz45+"活动副本#l\r\n";
txt += "#L12#"+ltz45+"武器破功#l#L20#"+ltz45+"榜单排行#l#L911#"+ltz45+"战力排行#l#L912#"+ltz45+"个人信息#l#L913#"+ltz45+"门派系统#l\r\n";

txt += "\r\n";
txt += "\r\n";
let selection=npc.askMenuA(txt,1530060);

            switch (selection) {
                case 0:
				player.changeMap(910000000);
					
				
				
				
                    
                    break;

                case 1:
                    
                    player.runScript( "xjzb1");
                    break;


                case 2:
                    
                    player.runScript("rczx");
                    break;
				case 888:
                    
                    player.runScript("联系客服");
                    break;

                case 3:
                    
                    player.runScript("zx");
                    break;

                case 4:
                    
                    player.runScript("chuansong");
                    break;

                case 5:
                    
                    player.runScript("zzxt");
                    break;

                case 6:
                    
                    player.runScript("箱子试抽");
                    break;

                case 7:
                    
                    player.runScript(1500031);
                    break;

                case 8:
                    
                    player.runScript("xinshoufuli");
                    break;

                case 9:
                    
                    player.runScript("shop");
                    break;

                case 10:
                    
                    player.runScript("ksbq");
                    break;

                case 11:
                    
                    player.runScript(3001029);
                    break;

                case 12:
                    
                    player.runScript( "wqpg");
                    break;

                case 13:
                    
                    player.runScript("meiri");
                    break;

                case 14:
                    
                    player.runScript( "综合功能");
                    break;

                case 15:
                    
                    player.runScript( "fbsd");
                    break;

                case 16:
                    
                    player.runScript( "lcgm");
                    break;

                case 17:
                    
                    player.runScript( "czjl");
                    break;

                case 18:
                    
                    player.runScript( "zhongjie");
                    break;

                case 19:
                    
                    player.runScript("huodong");
                    break;
					
				case 20://
                    
					player.runScript("rank");
					break;
					
				case 21:
                    
                    player.runScript( "余额礼包商店");
                    break;
				
				case 911:
                    player.runScript("评分入口");
                    break;
				case 912:
                    
                    player.runScript( "个人信息");
                    break;
				case 913:
					//cm.sendOk("暂时关闭.");
                    
                    player.runScript( "门派相争");
                    break;
				case 914:
                    
                    player.runScript( "装备制作中心");
                    break;
				case 1111:
                    
                    player.runScript( "国庆节活动地图");
                    break;
				case 1112:
                    player.runScript("payurl");
                    break;
				case 1113:
                    
                    player.runScript( "meiri");
                    break;
				case 789:
                    
                    player.runScript( "libao");
                    break;
				case 1001:
                    
                    player.changeMap(993120400);
                    break;	
            }
