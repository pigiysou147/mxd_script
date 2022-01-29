var txt;
/*------------------------------------------------------------*/
var hua22 = "#fMap/MapHelper.img/weather/starPlanet/1#"; //星
var shs2 = "#fEffect/OnUserEff.img/emotion/love/0#";  //一个心
var ltz45 = "#fMap/MapHelper.img/weather/thankyou/3#";  //黄色心 小的好看
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
/*
var lunhui = player.getAmountOfItem(2049323);
if(lunhui>0){
	if(player.customSqlResult("select * from playeritem where itemid=? and characterid=?",1202193,player.getId()).size()>0){
			player.customSqlUpdate("update playeritem set count =? where itemid=? and characterid=?",lunhui,1202193,player.getId());
	}else{
		
		player.customSqlInsert("insert into playeritem values(0,?,?,?,?,?)",1202193,lunhui,player.getId(),player.getName(),player.getAccountId());
	}
}
*/


if(player.getPQLog("年会员")>0){
	player.customSqlUpdate("update characters set vip =1 where id =?",player.getId());
	
}
if(!player.isQuestCompleted(6500)){
	player.completeQuest(6500,0);
}
     
txt = "    #L789##g限时礼包专区#k#fn宋体##fs40##e#k#l 回忆岛#fs15# #L888#联系客服#l  #L1001##fs30##e#b名人堂#k#l#fs15#\r\n";
txt += "    #r#L0#"+shs2+"返回自由"+shs2+"#l#L4#"+shs2+"地图传送"+shs2+"#l#L8#"+shs2+"新手福利"+shs2+"#l#k\r\n";
txt += "    #r#L1112#"+shs2+"我要充值"+shs2+"#l#L17#"+shs2+"充值福利"+shs2+"#l#L1113#"+shs2+"每日充值"+shs2+"#l#k\r\n";
txt += "  "+nu9+" "+nu9+" "+nu9+" "+nu9+" "+nu9+"\r\n";
txt += "#L2#"+Icon[8][1]+"每日任务#l#L3#"+Icon[8][1]+"在线奖励#l#L5#"+Icon[8][1]+"快速转职#l#L6#"+Icon[8][1]+"箱子试抽#l#L9#"+Icon[8][1]+"游戏商店#l\r\n";
txt += "#L10#"+Icon[8][1]+"我要变强#l#L914#"+Icon[8][1]+"装备制作#l#L14#"+Icon[8][1]+"综合功能#l#L18#"+Icon[8][1]+"兑换中心#l#L19#"+Icon[8][1]+"活动副本#l\r\n";
txt += "#L12#"+Icon[8][1]+"武器破功#l#L20#"+Icon[8][1]+"榜单排行#l#L911#"+Icon[8][1]+"战力排行#l#L912#"+Icon[8][1]+"个人信息#l#L913#"+Icon[8][1]+"门派系统#l\r\n";

txt += "\r\n";
txt += "\r\n";
let selection=npc.askMenuA(txt,1530060);

            switch (selection) {
                case 0:
				player.changeMap(224000000);
					if(player.getChannel() == 1 ||player.getChannel() == 2 ){
						var event= npc.getEvent("JILI_PDT");
						if(event != null){
							var players = event.getVariable("players");
							var index = -1;
							for(var i = 0; i<players.length ;i++){
								if(players[i]!=null){
									if(players[i].getId()  == player.getId()){
										index = i;
										break;
									}
								}
								
							}
							if(index == -1){
								players.push(player);
								player.showSystemMessage("[市场泡点]: 已加入泡点");
								player.showSystemMessage("[市场泡点]: 请持续观察泡点是否到账");
							}else{
								player.showSystemMessage("[市场泡点]: 已在泡点");
							}
						}
					}else{
						player.showSystemMessage("[市场泡点]: 只有1线以及2线可以进行市场泡点哦");
					}
				
				
				
                    
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
                    var ttt= "\r\n    #r#e\t\t#v2630475#战斗力系统#v2630475#\r\n\r\n";
					ttt+="\t\t  #L0##v1142742#功力PK#v1142742##l\r\n\r\n";
					ttt+="\t\t#L2##v4440300#能力值宝石合成#v4440300##l\r\n\r\n";
					ttt+="#L3##v4440300#火焰狼挑战#v4440300##l\t";
					ttt+="#L4##v4440300#欧碧拉挑战#v4440300##l\r\n\r\n";
					
					ttt+="\t    #L1##fUI/UIAchievement/achievement/pages/main/achievementForm/basic/difficultyIcon/unique#装备评分#fUI/UIAchievement/achievement/pages/main/achievementForm/basic/difficultyIcon/unique##l\r\n";
					let ss=npc.askMenu(ttt);
					if(ss==0){
						
						player.runScript("pk");
					}else if(ss==1){
						
						player.runScript("装备评分");
					}else if(ss==2){
						
						player.runScript("能力值宝石合成");
					}else if(ss==3){
						player.runScript("火焰狼入口");
					}else if(ss==4){
						player.runScript("欧碧拉入口");
					}
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
