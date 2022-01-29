// Created by Jackson


if (player.isQuestActive(17643)) {
        for (let i = 0; i < 30; i++) {
                map.spawnMob(9390815, -332 + i * 20, 198);
        }
}
if (player.isQuestActive(17644)) {
        for (let i = 0; i < 45; i++) {
                map.spawnMob(9390815, -332 + i * 10, 198);
        }
}

if (player.isQuestActive(17645)) {
        for (let i = 0; i < 45; i++) {
                map.spawnMob(9390815, -332 + i * 10, 198);
        }
}
if (player.isQuestStarted(17678)) {
        map.portalEffect("PuPotal");
}

if (player.isQuestActive(17646)) {
        map.spawnMob(9390835, 33, 250);
}



