/*     
 *  
 *  
 *  功能：贝勒德副本 三核 奖励
 *  
 *  @author NautMS 
 */

/* global rm */

function act() {
    var em = rm.getEventManager("boss_beidler");
    var eim = rm.getEventInstance();
    if (em != null && eim != null) {
        var state = eim.getProperty("BeidlerHead");
        if ("1111".equals(state)) {
            if ("0".equals(eim.getProperty("RewardDone"))) {
                eim.setProperty("RewardDone", "1");
                rm.dropItems(true);
            }
        }
    }
}
