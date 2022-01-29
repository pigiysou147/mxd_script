/*     
 *  
 *  
 *  功能:Custom Draw Chair
 *  
 *  @author NautMS 
 */

/* global cm */

var status = -1;
var psrw = Array(
Array(2431965, 1),
Array(2431966, 1),
Array(2432131, 1),
Array(2432154, 1),
Array(2432207, 1),
Array(2432354, 1),
Array(2432355, 1),
Array(2432465, 1),
Array(2432479, 1),
Array(2432532, 1),
Array(2432591, 1),
Array(2432592, 1),
Array(2432603, 1),
Array(2432640, 1),
Array(2432695, 1),
Array(2432710, 1),
Array(2432748, 1),
Array(2432749, 1),
Array(2432804, 1),
Array(2432836, 1),
Array(2433038, 1),
Array(2433063, 1),
Array(2433104, 1),
Array(2433112, 1),
Array(2433113, 1),
Array(2433178, 1),
Array(2433182, 1),
Array(2433183, 1),
Array(2433184, 1),
Array(2433197, 1),
Array(2433252, 1),
Array(2433362, 1),
Array(2433456, 1),
Array(2433558, 1),
Array(2433568, 1),
Array(2433569, 1),
Array(2433570, 1),
Array(2433571, 1),
Array(2433572, 1),
Array(2433587, 1),
Array(2433588, 1),
Array(2433631, 1),
Array(2433715, 1),
Array(2433775, 1),
Array(2433776, 1),
Array(2433777, 1),
Array(2433804, 1),
Array(2433828, 1),
Array(2433829, 1),
Array(2433830, 1),
Array(2433831, 1),
Array(2433832, 1),
Array(2433833, 1),
Array(2433883, 1),
Array(2433913, 1),
Array(2433980, 1),
Array(2433981, 1),
Array(2433990, 1),
Array(2434045, 1),
Array(2434051, 1),
Array(2434081, 1),
Array(2434147, 1),
Array(2434157, 1),
Array(2434273, 1),
Array(2434274, 1),
Array(2434289, 1),
Array(2434374, 1),
Array(2434375, 1),
Array(2434390, 1),
Array(2434391, 1),
Array(2434519, 1),
Array(2434528, 1),
Array(2434529, 1),
Array(2434530, 1),
Array(2434542, 1),
Array(2434544, 1),
Array(2434545, 1),
Array(2434546, 1),
Array(2434566, 1),
Array(2434574, 1),
Array(2434575, 1),
Array(2434601, 1),
Array(2434619, 1),
Array(2434654, 1),
Array(2434655, 1),
Array(2434658, 1),
Array(2434659, 1),
Array(2434661, 1),
Array(2434710, 1),
Array(2434734, 1),
Array(2434817, 1),
Array(2434818, 1),
Array(2434824, 1),
Array(2434873, 1),
Array(2434875, 1),
Array(2434868, 1),
Array(2434877, 1),
Array(2434879, 1),
Array(2434950, 1),
Array(2434951, 1),
Array(2434977, 1),
Array(2435026, 1),
Array(2435027, 1),
Array(2435028, 1),
Array(2435030, 1),
Array(2435037, 1),
Array(2435043, 1),
Array(2435044, 1),
Array(2435046, 1),
Array(2435047, 1),
Array(2435140, 1),
Array(2435141, 1),
Array(2435157, 1),
Array(2435158, 1),
Array(2435159, 1),
Array(2435162, 1),
Array(2435166, 1),
Array(2435175, 1),
Array(2435179, 1),
Array(2435183, 1),
Array(2435184, 1),
Array(2435193, 1),
Array(2435196, 1),
Array(2435213, 1),
Array(2435222, 1),
Array(2435293, 1),
Array(2435313, 1),
Array(2435316, 1),
Array(2435335, 1),
Array(2435336, 1),
Array(2435356, 1),
Array(2435357, 1),
Array(2435358, 1),
Array(2435408, 1),
Array(2435424, 1),
Array(2435425, 1),
Array(2435427, 1),
Array(2435428, 1),
Array(2435429, 1),
Array(2435433, 1),
Array(2435456, 1),
Array(2435486, 1),
Array(2435487, 1),
Array(2435488, 1),
Array(2435489, 1),
Array(2435516, 1),
Array(2435521, 1),
Array(2435522, 1),
Array(2435523, 1),
Array(2435542, 1),
Array(2435543, 1),
Array(2435544, 1),
Array(2435545, 1),
Array(2435546, 1),
Array(2435548, 1),
Array(2435549, 1),
Array(2435565, 1),
Array(2435566, 1),
Array(2435567, 1),
Array(2435568, 1),
Array(2435670, 1),
Array(2435673, 1),
Array(2435674, 1),
Array(2435802, 1),
Array(2435905, 1),
Array(2435906, 1),
Array(2435907, 1),
Array(2435908, 1),
Array(2435948, 1),
Array(2435949, 1),
Array(2435950, 1),
Array(2435951, 1),
Array(2435952, 1),
Array(2435953, 1),
Array(2435954, 1),
Array(2435955, 1),
Array(2435956, 1),
Array(2435957, 1),
Array(2435972, 1),
Array(2436023, 1),
Array(2436024, 1),
Array(2436026, 1),
Array(2436027, 1),
Array(2436028, 1),
Array(2436029, 1),
Array(2436085, 1),
Array(2436132, 1),
Array(2436133, 1),
Array(2436136, 1),
Array(2436182, 1),
Array(2436227, 1),
Array(2436228, 1),
Array(2436229, 1),
Array(2436230, 1),
Array(2436258, 1),
Array(2436259, 1),
Array(2436268, 1),
Array(2436300, 1),
Array(2436323, 1),
Array(2436400, 1),
Array(2436437, 1),
Array(2436474, 1),
Array(2436475, 1),
Array(2436476, 1),
Array(2436477, 1),
Array(2436478, 1),
Array(2436479, 1),
Array(2436521, 1),
Array(2436522, 1),
Array(2436528, 1),
Array(2436529, 1),
Array(2436553, 1),
Array(2436560, 1),
Array(2436563, 1),
Array(2436578, 1),
Array(2436596, 1),
Array(2436611, 1),
Array(2436612, 1),
Array(2436643, 1),
Array(2436644, 1),
Array(2436645, 1),
Array(2436646, 1),
Array(2436651, 1),
Array(2436652, 1),
Array(2436653, 1),
Array(2436654, 1),
Array(2436655, 1),
Array(2436656, 1),
Array(2436657, 1),
Array(2436658, 1),
Array(2436679, 1),
Array(2436681, 1),
Array(2436682, 1),
Array(2436683, 1),
Array(2436684, 1),
Array(2436740, 1),
Array(2436741, 1),
Array(2436742, 1),
Array(2436743, 1),
Array(2436744, 1),
Array(2436745, 1),
Array(2436746, 1),
Array(2436747, 1),
Array(2436748, 1),
Array(2436749, 1),
Array(2436766, 1),
Array(2436808, 1),
Array(2436830, 1),
Array(2436831, 1),
Array(2436832, 1),
Array(2437005, 1),
Array(2437009, 1),
Array(2437023, 1),
Array(2437049, 1),
Array(2437050, 1),
Array(2437051, 1),
Array(2437052, 1),
Array(2437166, 1),
Array(2437167, 1),
Array(2437168, 1),
Array(2437169, 1),
Array(2437190, 1),
Array(2437238, 1),
Array(2437239, 1),
Array(2437243, 1),
Array(2437268, 1),
Array(2437269, 1),
Array(2437270, 1),
Array(2437271, 1),
Array(2437847, 1),
Array(2437877, 1),
Array(2438085, 1),
Array(2438086, 1),
Array(2438087, 1),
Array(2438088, 1),
Array(2438089, 1),
Array(2438095, 1),
Array(2438143, 1),
Array(2438158, 1),
Array(2438192, 1),
Array(2438204, 1),
Array(2438233, 1),
Array(2438241, 1),
Array(2438247, 1),
Array(2438251, 1),
Array(2438252, 1),
Array(2438254, 1),
Array(2438255, 1),
Array(2438263, 1),
Array(2438265, 1),
Array(2438266, 1),
Array(2438268, 1),
Array(2438272, 1),
Array(2438281, 1),
Array(2438293, 1),
Array(2437848, 1),
Array(2437849, 1),
Array(2437856, 1),
Array(2436984, 1),
Array(2437274, 1),
Array(2437470, 1),
Array(2437484, 1),
Array(2437485, 1),
Array(2437488, 1),
Array(2437489, 1),
Array(2437490, 1),
Array(2437491, 1),
Array(2437521, 1),
Array(2437522, 1),
Array(2437523, 1),
Array(2437524, 1),
Array(2437696, 1),
Array(2437697, 1),
Array(2437700, 1),
Array(2437701, 1),
Array(2437702, 1),
Array(2437703, 1),
Array(2437707, 1),
Array(2437708, 1),
Array(2437709, 1),
Array(2437710, 1),
Array(2437711, 1),
Array(2437712, 1),
Array(2437761, 1),
Array(2437768, 1),
Array(2437769, 1),
Array(2438297, 1),
Array(2438298, 1),
Array(2438300, 1),
Array(2438309, 1),
Array(2438311, 1),
Array(2438312, 1),
Array(2438313, 1),
Array(2438315, 1),
Array(2438347, 1),
Array(2438348, 1),
Array(2438378, 1),
Array(2438413, 1),
Array(2438415, 1),
Array(2438418, 1),
Array(2438420, 1),
Array(2438467, 1),
Array(2438469, 1),
Array(2438471, 1),
Array(2438473, 1),
Array(2438477, 1),
Array(2438485, 1),
Array(2438491, 1),
Array(2438529, 1),
Array(2438579, 1),
Array(2438587, 1),
Array(2438592, 1),
Array(2438594, 1),
Array(2438596, 1),
Array(2438637, 1),
Array(2438655, 1),
Array(2438661, 1),
Array(2438297, 1),
Array(2438298, 1),
Array(2438300, 1),
Array(2438309, 1),
Array(2438311, 1),
Array(2438312, 1),
Array(2438313, 1),
Array(2438315, 1),
Array(2438347, 1),
Array(2438348, 1),
Array(2438378, 1),
Array(2438413, 1),
Array(2438415, 1),
Array(2438418, 1),
Array(2438420, 1),
Array(2438467, 1),
Array(2438469, 1),
Array(2438471, 1),
Array(2438473, 1),
Array(2438477, 1),
Array(2438485, 1),
Array(2438491, 1),
Array(2438529, 1),
Array(2438579, 1),
Array(2438587, 1),
Array(2438592, 1),
Array(2438594, 1),
Array(2438596, 1),
Array(2438637, 1),
Array(2438655, 1),
Array(2438661, 1),
Array(2438663, 1),
Array(2437846, 1),
Array(2438671, 1),
Array(2438297, 1),
Array(2438298, 1),
Array(2438300, 1),
Array(2438309, 1),
Array(2438311, 1),
Array(2438312, 1),
Array(2438313, 1),
Array(2438315, 1),
Array(2438347, 1),
Array(2438348, 1),
Array(2438378, 1),
Array(2438413, 1),
Array(2438415, 1),
Array(2438418, 1),
Array(2438420, 1),
Array(2438467, 1),
Array(2438469, 1),
Array(2438471, 1),
Array(2438473, 1),
Array(2438477, 1),
Array(2438485, 1),
Array(2438491, 1),
Array(2438529, 1),
Array(2438579, 1),
Array(2438587, 1),
Array(2438592, 1),
Array(2438594, 1),
Array(2438596, 1),
Array(2438637, 1),
Array(2438655, 1),
Array(2438661, 1),
Array(2438663, 1),
Array(2438671, 1),
Array(2438676, 1),
Array(2438726, 1),
Array(2438753, 1),
Array(2438755, 1),
Array(2438757, 1),
Array(2438759, 1),
Array(2438764, 1),
Array(2438775, 1),
Array(2438799, 1),
Array(2438802, 1),
Array(2438808, 1),
Array(2438823, 1),
Array(2438864, 1),
Array(2438880, 1),
Array(2438885, 1),
Array(2438924, 1),
Array(2438925, 1),
Array(2438926, 1),
Array(2438927, 1),
Array(2438928, 1),
Array(2438929, 1),
Array(2438930, 1),
Array(2438931, 1),
Array(2439064, 1),
Array(2439129, 1),
Array(2439132, 1),
Array(2439157, 1),
Array(2439164, 1),
Array(2439167, 1),
Array(2439212, 1),
Array(2439256, 1),
Array(2439277, 1),
Array(2439336, 1),
Array(2439337, 1),
Array(2439373, 1),
Array(2439376, 1),
Array(2439381, 1),
Array(2439393, 1),
Array(2439395, 1),
Array(2439396, 1),
Array(2439398, 1),
Array(2439407, 1),
Array(2439442, 1),
Array(2439489, 1),
Array(2439523, 1),
Array(2439551, 1),
Array(2439554, 1),
Array(2439579, 1),
Array(2439697, 1),
Array(2439700, 1),
Array(2439711, 1),
Array(2439800, 1),
Array(2439805, 1),
Array(2439875, 1),
Array(2439876, 1),
Array(2439894, 1),
Array(2439897, 1),
Array(2630153, 1),
Array(2630156, 1),
Array(2630301, 1),
Array(2630304, 1)


        );
var rand = Math.floor(Math.random() * psrw.length);

var selection;



       selection = npc.askYesNo("#e你好?这里是伤害皮肤随机抽取中心\r\n每次抽取消耗1万点券\r\n#r目前伤害皮肤无法保存，请妥善使用");

        if (selection == 1) {
            var itemID = psrw[rand][0];
            var number = psrw[rand][1];
            if (player.getCashShopCurrency(1) < 10000) {
                npc.say("你没有10000点券");
            } else if (!player.canGainItem(itemID, number)) {
                npc.say("你保证你背包有足够空位.");
            } else {
				var item;
				item = player.gainGachaponItem("皮肤抽奖", itemID, number, 13);
                player.modifyCashShopCurrency(1, -10000); //减少1个使用的情迷道具
				//npc.broadcastWeatherEffectNotice(203,"天呐~这位土豪"+ player.getName() + "  抽取了" + getName(itemID) + "",60000);
                npc.say("获取了 " + "#v" + itemID + "#" + "#z" + itemID + "# " + number + "个");
            }
        }




function getName(itemid){
	var Item = player.makeItemWithId(itemid);
	if(Item==null){
		return null;
	}
	return Item.getName();
}