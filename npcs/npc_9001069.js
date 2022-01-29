

/**
 * 贸易调试用
 * @author NautMS
 */

let ret = npc.askYesNo("你不想再进行贸易了，要离开这里了吗？");
if (ret == 1) {
        npc.sayNext("好的，那么我们现在就准备离开了！");
        player.changeMap(993000837);
}
