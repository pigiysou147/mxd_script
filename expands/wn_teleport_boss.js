const eff1 = "#fEffect/CharacterEff/1112924/0/0#";
const eff2 = "#fEffect/CharacterEff/1112925/0/0#";
const eff3 = "#fEffect/CharacterEff/1112924/0/0#";
const eff4 = "#fEffect/CharacterEff/1112925/0/0#";//小红心
const cat1="#fItem/Pet/5000000.img/alert/0#";
const cat2="#fItem/Pet/5000000.img/fly/0#";
const cat3="#fItem/Pet/5000000.img/cry/0#";
const tu1 = "#fItem/Cash/0501.img/05010045/effect/stand1/1#"
const tu2 = "#fItem/Cash/0501.img/05010002/effect/default/7#"
const tu3 = "#fUI/NameTag/medal/758/w#"
const tu4 = "#fEffect/SetEff.img/245/effect/28#"
const tu5 = "#fUI/NameTag/medal/758/e#"
const tu6 = "#fUI/NameTag/medal/758/c#"
const fy = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/1#";
const fy1 = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/2#";
const dz = "#fUI/GuildMark/Mark/Etc/00009020/1#";
const dz1 = "#fEffect/CharacterEff/1003393/1/0#";
const star = "#fEffect/CharacterEff/1051294/1/1#"

const bossList = [
    ["#n#v3010943##e[入门]#b扎   昆     #v3010943##v3010943##v3010943#","说明" , 211042300],
    ["#v3016206#[入门]#b帕普拉图斯    #v3016206##v3016206##v3016206#","说明" , 220080000],
    ["#v3010128#[入门]#b暗黑龙王     #v1122076##v1113084##v1142504#","说明" , 240050400],
    ["#v1004725#[入门]#b时间宠儿     #v1032216##v1152155##v1113070#","说明" , 270050000],
    ["#v3010355#[入门]#b强化钻机     #v1092111##v1092110##v1092109#","说明", 703020000],//简单：#v4310143# #v4310049# \r\n
    ["#v2870848#[入门]#b班·雷昂     #v1402091##v1402091##v1402091#","说明", 211070000],
    ["#v2870968#[入门]#b艾菲尼娅      #v4310143##v4310143##v4310143#","说明", 300030300],
    ["#v2870846#[入门]#b阿卡伊勒      #v1712003##v1712002##v1712001#","说明", 272020110],
    ["#v2870879#[入门]#b希  拉        #v1712006##v1712005##v1712004#","说明", 262030000],
    ["#v2870528#[入门]#b森兰丸       #v1242135##v1452263##v1432224#","说明" , 807300100],
    ["#v2870485#[高级]#b希纳斯       #v1003172##v1052314##v1082295#","说明" , 271040000],
    ["#v2870699#[高级]#b外星卡雄     #v1032217##v1162018##v1152156#","说明" , 221030900],
    ["#v2870577#[高级]#b鲁塔比斯    #v1242060##v1242060##v1242060#","说明" , 105200000],
    ["#v2870571#[进阶]#b麦格纳斯     #v1132178##v1132178##v1132178#","说明", 401060000],
    ["#v2870907#[进阶]#b憨批之狼     #v1712003##v1712002##v1712001#","说明", 800000000],
    ["#v2870941#[进阶]#b黑暗斯乌     #v1004425##v1102796##v1082639#","说明", 350060300],
    ["#v2870942#[进阶]#b戴米安       #v1522106##v1482180##v1332239#","说明", 105300303],
    ["#v5000345#[进阶]#b贝勒德       #v1032223##v1113075##v1122267#","说明", 863010000],
    ["#v2870950#[炼狱]#b敦凯尔       #v1113302##v1004808##v1004809#","说明", 450012200],
    ["#v4034839#[炼狱]#b虚空之眼     #v1082696##v1082696##v1152200#","说明", 450009301],
    ["#v2870943#[炼狱]#b觉醒希拉     #v1073162##v1073162##v1073162#","说明", 450011990],
    ["#v2870698#[炼狱]#b路西德       #v1102940##v1102940##v1102940#","说明", 450004000],
    ["#v2870898#[炼狱]#b威  尔       #v1402259##v1522143##v1053063#","说明", 450007240],
    ["#v3018230#[炼狱]#b黑魔法师     #v1332289##v1332289##v1332289#","说明", 450012500]
]

while(true){
    let selStr = "#fs16##e#d"+ eff1 + eff2 + eff2 + eff2 + eff2 + eff2 +  "   BOSS战场   " + eff2 + eff2 + eff2 + eff2 + eff2 + eff1 + "#fs12#\r\n";
    //selStr += "\t#g#nBecause of your support, we will do better!\r\n"

    selStr += "\r\n"
    for(let i = 0; i < bossList.length ; i++){
        selStr += "#L" + i + "#" + bossList[i][0] + "#l" + "\r\n";
    }
    let selected = npc.askMenu(selStr,9900000);

    if(selected == 10086){
        player.runScript("万能传送");
        break;
    }else if(selected == 10087){
        player.runScript("野外BOSS");
        break;
    }else{
        /*
        let txt = "#b是否确认挑战:#r"+bossList[selected][0]+"\r\n"
        txt += "#bBOSS爆物：\r\n#b" + bossList[selected][1];
        */
        let YN = 1
        if(YN == 1){
            player.changeMap(bossList[selected][2])
            break;
        }else{
        }
    }
}