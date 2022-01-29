// Created by Jackson
// Quest ID:17663
// [凯梅尔兹共和国] 暗杀团据点


npc.sayNext("那些家伙们看上去是这地方的守卫。");
npc.sayNextS(" ...如果说是守卫的话这人数也太多了吧?");
if (npc.askYesNo("...不管怎样不干掉他们的话就无法通过这里了。先把能看到的都干掉。")) {
        npc.startQuest();
        npc.sayNext("我们比比看谁干掉的更多吧?走吧!");
        for (let i = 0; i < 8; i++) {
                map.spawnMob(9390834, 113 + 50, 89);
        }
} else {
        npc.say("你不会到了这里害怕了吧?");
}
