
var ax = "#fEffect/CharacterEff/1112902/0/1#";  //蓝色爱心
var epp = "#fEffect/SetItemInfoEff/297/8#";  //彩光 红色
var xxx = "#fEffect/CharacterEff/1032054/0/0#";  //选项两边
var xx = "#fEffect/CharacterEff/1032054/0/0#";  //选项两边
var aax = "#fEffect/CharacterEff/1112903/0/1#";  //红色爱心
var iconMeso = "#fEffect/ItemEff/1048001/0/0#";//雪花


		var selStr = "\r\n";
		selStr += "#d┏━━━━━━━━━━赞助中心━━━━━━━━━━┓#k\r\n";
		selStr +="        #r▲充值比例 [1元钱=2.86余额+累计+1现金点 ]#k\r\n";
		selStr +="#r[充值方式简介:]▲\r\n";
		selStr +="        #b·充值更享有折扣比例0.35折待遇#k\r\n";
		selStr +="        #b·比如:充值100元只要35元即可#k\r\n";
		selStr +="        #b·肝与氪都让你爽到无法呼吸哦.#k\r\n";
		selStr +="        #b·仿官方长久服.绝非快餐变态服.GM24小时在线#k\r\n";
		selStr +="#r#L0#[累计礼包奖励]#l#L2#[累计破功奖励]#l#L6#[蜡 笔  潜 能]#l\r\n\r\n";
		selStr +="#L3#[余 额  商 店]#l#L4#[余额礼包商店]#l#L5#[购 买  会 员]#l\r\n\r\n";
		selStr +="#L7#[累计每日破功奖励]#e#r(每日可领取一次)#k#n#l\r\n";
		selStr += "\r\n#d┗━━━━━━━━━━━━━━━━━━━━━━━━┛#k";
        let selection =npc.askMenu(selStr);
   
        switch (selection) {
        case 0:
            
           player.runScript( "会员等级奖励");
            break;
        //case 1:
            
           player.runScript( "czjl2");
            break; 
        case 2:
            
           player.runScript( "累计破功");
            break; 
		case 3:
            
           player.runScript("yelb");
            break; 
		case 4:

           player.runScript( "2074021");
            break; 
		case 5:
            
           player.runScript( "vip");
            break; 
		case 6:
            
           player.runScript( "labi");
            break; 
		case 7:
            
           player.runScript( "leijitupo");
            break; 
 
        }
