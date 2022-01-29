// Created by Jackson
// [莱文·达尼尔拉]  |  [9390234]
// MapName:运河战场


if (map.getId() == 865020051) {
        let selection = npc.askMenu("结束之后，要返回#m865020300#吗？\r\n#b\r\n#L0#返回#m865020300#。#l", 9390234);
        if (selection == 0) {
                player.showSystemMessage("返回运河4。");
                player.changeMap(865020300, 1);
        }
}