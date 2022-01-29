/* global npc, player, map */

let items = [];
let point = 0;
let mesos = 0;
let exp = 0;
let expRate = 0;
let str = "欢迎使用在线奖励发送系统。\r\n#b";
str += "\r\n#L1#添加物品奖励#l";
str += "\r\n#L3#添加抵用券奖励#l";
str += "\r\n#L4#添加金币奖励#l";
str += "\r\n#L5#添加经验奖励#l";
str += "\r\n#L6#添加经验百分比奖励#l";
str += "\r\n#L999#奖励信息核对#l";
if (!player.isGm()) {
    throw new Error("非GM角色无法使用奖励发送系统");
}
let flag = true;
while (flag) {
    let sel = npc.askMenu(str);
    switch (sel) {
        case 1:
            while (true) {
                let iStr = "已添加的物品：\r\n\r\n";
                for (let i = 0; i < items.length; i++) {
                    iStr += "#b#L" + i + "##v" + items[i][0] + ":##r#z" + items[i][0] + "##k x#r" + items[i][1] + "#n#k#l\r\n";
                }
                iStr += "\r\n#L9999##e#b添加物品#l          #L1000#完成添加#l";
                let iSel = npc.askMenu(iStr);
                if (iSel == 1000) {
                    break;
                } else if (iSel == 9999) {
                    let itemId = npc.askNumber("请输入待添加物品的Id：\r\n#e#r(请一定确认道具Id的正确性)#k#n", 0, 1000000, 9999999);
                    if (player.makeItemWithId(itemId) != null) {
                        let quantity = npc.askNumber("添加物品#e#v" + itemId + ":##b#z" + itemId + "##n#k\r\n请输入数量：", 1, 1, 9999);
                        items.push([itemId, quantity]);
                        npc.sayNext("物品#e#v" + itemId + ":##r#z" + itemId + "##k x#r" + quantity + "#n#k 添加完成！");
                    } else {
                        npc.sayNext("你输入的Id有误，请重试！");
                    }
                } else {
                    let delRet = npc.askYesNo("是否要删除#v" + items[iSel][0] + ":##r#z" + items[iSel][0] + "##k x#r" + items[iSel][1] + "#n#k\这个物品？");
                    if (delRet == 1) {
                        items.splice(iSel, 1);
                        npc.sayNext("物品删除完成！");
                    }
                }
            }
            break;
        case 3:
            if (point > 0) {
                let mp = npc.askYesNo("已设置抵用券奖励：#e#r" + point + "\r\n是否需要修改？");
                if (mp == 0) {
                    break;
                }
            }
            point = npc.askNumber("请输入奖励的抵用券数：\r\n", 1000, 0, 2100000000);
            npc.sayNext("已成功添加抵用券奖励：#e#r" + point + "#n#k！");
            break;
        case 4:
            if (mesos > 0) {
                let mm = npc.askYesNo("已设置金币奖励：#e#r" + mesos + "\r\n是否需要修改？");
                if (mm == 0) {
                    break;
                }
            }
            mesos = npc.askNumber("请输入奖励的金币数：\r\n", 1000, 0, 2100000000);
            npc.sayNext("已成功添加金币奖励：#e#r" + mesos + "#n#k！");
            break;
        case 5:
            if (exp > 0) {
                let mm = npc.askYesNo("已设置经验值奖励：#e#r" + exp + "\r\n是否需要修改？");
                if (mm == 0) {
                    break;
                }
            }
            exp = npc.askNumber("请输入奖励的经验值：\r\n", 1000, 0, 2100000000);
            npc.sayNext("已成功添加经验值奖励：#e#r" + exp + "#n#k！");
            break;
        case 6:
            if (expRate > 0) {
                let mm = npc.askYesNo("已设置经验值百分比奖励：#e#r" + expRate + "\r\n是否需要修改？");
                if (mm == 0) {
                    break;
                }
            }
            expRate = npc.askNumber("请输入奖励的经验值百分比：\r\n", 1000, 0, 1000);
            npc.sayNext("已成功添加经验值奖励：#e#r" + expRate + "#n#k！");
            break;
        case 999:
            let all = "请核对以下奖励！\r\n";
            if (point > 0) {
                all += "#b\r\n抵用券#k：#r" + point;
            }
            if (mesos > 0) {
                all += "#b\r\n金  币#k：#r" + mesos;
            }
            if (exp > 0) {
                all += "#b\r\n经验值#k：#r" + exp;
            }
            if (expRate > 0) {
                all += "#b\r\n经验值百分比#k：#r" + expRate;
            }
            for (let i = 0; i < items.length; i++) {
                all += "\r\n#b#v" + items[i][0] + ":##r#z" + items[i][0] + "##k x#r" + items[i][1] + "#n#k";
            }
            all += "\r\n#b#r#L999#核对完成#l          #L1000#返回修改#l";
            let cSel = npc.askMenu(all);
            switch (cSel) {
                case 999:
                    let message = npc.askBoxTextNoEsc("请输入奖励描述信息：\r\n ", "来自管理员的在线奖励！", 50, 3);
                    let days = npc.askNumberNoEsc("请输入奖励可领取期限，小于1000的数字是天数，大于1000为毫秒数", 3, 1, 2100000000);
                    let ret = npc.askYesNo("请确认已核对无误！点击确认后将无法撤回！");
                    if (ret == 1) {
                        flag = false;
                        if (point > 0) {
                            npc.addCSPointReward(point, message, days);
                        }
                        if (mesos > 0) {
                            npc.addMesosReward(mesos, message, days);
                        }
                        if (exp > 0) {
                            npc.addExpReward(exp, message, days);
                        }
                        if (expRate > 0) {
                            npc.addExpRateReward(expRate, message, days);
                        }
                        for (let i = 0; i < items.length; i++) {
                            npc.addItemReward(items[i][0], items[i][1], message, days);
                        }
                        npc.broadcastWeatherEffectNotice(43, "收到在线奖励！请到左侧奖励栏查看！", 30000);
                        npc.sayNext("所有奖励已经发送完毕！请到左侧奖励栏查看！");
                    }
            }
            break;
    }
}



