npc.say("请等待新玩法的开放");
// var itemList = Array(
// 	1004808	,//神秘之影战士帽	
//     1004809	,//神秘之影法师帽	
//     1004811	,//神秘之影飞侠帽	
//     1004810	,//神秘之影弓箭手帽	
//     1004812	,//神秘之影海盗帽	
//     1102940	,//神秘之影战士披风	
//     1102941	,//神秘之影法师披风	
//     1102943	,//神秘之影飞侠披风	
//     1102942	,//神秘之影弓箭手披风
//     1102944	,//神秘之影海盗披风	
//     1082695	,//神秘之影战士手套	
//     1082696	,//神秘之影法师手套	
//     1082698	,//神秘之影飞侠手套	
//     1082697	,//神秘之影弓箭手手套	
//     1082699	,//神秘之影海盗手套	
//     1053063	,//神秘之影战士套装	
//     1053064	,//神秘之影法师套装	
//     1053066	,//神秘之影飞侠套装	
//     1053065	,//神秘之影弓箭手套装	
//     1053067	,//神秘之影海盗套装	
//     1073158	,//神秘之影战士鞋	
//     1073161	,//神秘之影飞侠鞋	
//     1073159	,//神秘之影法师鞋	
//     1073160	,//神秘之影弓箭手鞋	
//     1073162	,//神秘之影海盗鞋	
//     1152196 ,//神秘之影法师护肩
//     1152197	,//神秘之影法师护肩
//     1152199	,//神秘之影飞侠护肩	
//     1152198	,//神秘之影弓箭手护肩
//     1152200	//神秘之影海盗护肩
// );

// var txt="#r#e你可以对已经归一了的神秘防具进行转生强化。\r\n";
// txt+="转生之后的装备会去除掉所有强化，并且可以获得基础的188四维以及攻击魔攻\r\n";
// txt+="请把要操作的武器或者防具放在装备栏的第一个格子。";
// var item =player.getInventorySlot(1,1);
// if(item!=null)
// txt+="#L0##v"+item.getItemId()+"##l"
// let sel =npc.askMenu(txt);
// if(sel==0){
//     //npc.say("str "+item.getTotalStr()+" 火花:" +item.getStrEx()+" 基础"+item.getStr());
//     //npc.say(item.getOnlyId());
//     var itemId=item.getItemId();
//     var flag=0;
//     var ind=0;
//     for(var i=0;i<itemList.length;i++){
//         if(itemList[i]==item.getItemId()){
//             flag=1;
//             ind=i;

//         }

//     }

//     if(flag==1){
//         var title=item.getTitle();
//         if(item.getCraft()<3 ){
//             if(title=='神秘归一' &&  item.getCHUC()==25){
//                 var siwei =0;
//                 var gongji=0;
//                 var siwei=0;
//                 if(itemId>=1004808 && itemId<=1004808+5){
//                     //帽子
//                     gongji=7;
//                     siwei=65;
//                 }else if(itemId>=1102940 && itemId<1102940+5){
//                     //披风
//                     gongji=6;
//                     siwei=35;
//                 }else if(itemId>=1082695 && itemId<1082695+5){
//                     //手套
//                     gongji=9;
//                     siwei=40;
//                 }else if(itemId>=1053063 && itemId<1053063+5){
//                     //套服
//                     gongji=9;
//                     siwei=85;
//                 }else if(itemId>=1073158 && itemId<1073158+5){
//                     //鞋子
//                     gongji=9;
//                     siwei=40;
//                 }else if(itemId>=1152196 && itemId<1152196+5){
//                     //肩膀
//                     gongji=20;
//                     siwei=35;
//                 }
    
//                 item.setStr(188+siwei);
//                 item.setDex(188+siwei);
//                 item.setLuk(188+siwei);
//                 item.setInt(188+siwei);
                
//                 item.setPad(188+gongji);
//                 item.setMad(188+gongji);
//                 item.setCHUC(0);
//                 item.setRUC(item.getCUC());
//                 item.setCUC(0);
//                 item.setDamR(10);
//                 item.setStatR(10);
//                 item.setBossDamageR(30);
//                 item.setTitle("");
//                 item.setCraft(3);
//                 player.updateItem(1,item);
//                 npc.say("装备转生成功。你现在可以重新强化这件装备了。");
    
//             }else{
//                 npc.say("#r#e转生的防具需要25X 神秘归一才可以哦。\r\n这件道具不符合重铸要求。");
//             }
//         }else{

//             npc.say("这个装备已经转生过了，不允许再转生了哦");

//         }
        


//     }else{
//         npc.say("你的这件#v"+itemId+"#不符合要求哦。");
//     }
// }