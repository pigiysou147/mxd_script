





let sel = npc.askMenu("我是巨贾哈萨尔！你想要做什么呢？\r\n#L1##b雇佣搬运工#k#n#l\r\n#L2##b解雇搬运工#k#n#l\r\n#L3##b升级推车#k#n#l\r\n#L4##b存储货币#k#n#l\r\n");
switch (sel) {
        case 1:
                hire();
                break;
        case 2:
                fire();
                break;
        case 3:
                riding();
                break;
        case 4:
                saveCoin();
                break;
}

function hire() {
        if (getWorkerCount() < 5) {
                var text = "来！你需要哪种#b搬运工#k呢？\r\n#e#r持有货币：#i4034849#";
                text += getCoin();
                text += "\r\n存储的货币：";
                text += getSaveCoin();
                text += " #n\r\n";
                text += "#L0##v3801023:##b#z3801023# #r#e雇佣费用：100货币#k#n#l\r\n";
                text += "#L1##v3801024:##b#z3801024# #r#e雇佣费用：200货币#k#n#l\r\n";
                text += "#L2##v3801025:##b#z3801025# #r#e雇佣费用：200货币#k#n#l\r\n";
                text += "#L3##v3801026:##b#z3801026# #r#e雇佣费用：300货币#k#n#l\r\n";
                text += "#L999##b我现在不需要搬运工#k#n#l\r\n";
                let hSel = npc.askMenu(text);

                if (hSel >= 0 && hSel != 999) {
                        var infoId = 3801023 + hSel;
                        var money = hSel == 0 ? 100 : hSel == 1 ? 200 : hSel * 100;
                        let ret = npc.askYesNo("是否要使用#e#r" + money + "#k货币#n雇佣一个#b#v" + infoId + ":##z" + infoId + "#");
                        if (ret == 1) {
                                if (modifyCoin(money)) {
                                        hireWorker(hSel);
                                        npc.sayNext("好！你雇佣了一个#b#v" + infoId + ":##z" + infoId + "#");
                                } else {
                                        npc.sayNext("你没有足够的货币！！");
                                }
                        } else {
                                npc.sayNext("犹豫不决呀！那等你考虑好了再来！！");
                        }
                }
        } else {
                npc.sayNext("当前已有5个搬运工了，无法再雇佣！");
        }
}


function fire() {
        if (getWorkerCount() > 0) {
                var text = "当前已经雇佣#r" + getWorkerCount() + "#k个#b搬运工#k\r\n#e#r请选择要解雇的搬运工：#n\r\n";
                for (var i = 0; i < 5; i++) {
                        var infoId = 3801023 + i;
                        var data = player.getQuestRecordEx(15325, String(i));
                        if (data != null) {
                                var count = Number(data);
                                if (count > 0) {
                                        text += "#b#L" + i + "##v" + infoId + ":##z" + infoId + "# #r" + count + "#b个#l\r\n";
                                }
                        }
                }
                text += "#L999##b我现在不想解雇搬运工#k#n#l\r\n";
                let sel = npc.askMenu(text);
                if (sel != 999 && sel >= 0) {
                        let infoId = 3801023 + sel;
                        let ret = npc.askYesNo("是否要解雇一个#b#v" + infoId + ":##z" + infoId + "#");
                        if (ret == 1) {
                                fireWorker(sel);
                                npc.sayNext("好！你解雇了一个#v" + infoId + ":##z" + infoId + "#");
                        }
                }
        } else {
                npc.sayNext("你都还没有雇佣搬运工呢！");
        }
}


function riding() {
        var type = 0;
        var ride = 80001950;
        var infoId = 3801028;
        var rideData = player.getQuestRecordEx(15326);
        if (rideData != null) {
                ride = ride + Number(rideData);
                type = Number(rideData);
        }
        if (ride < 80001952) {
                type += 1;
                let money = type * 500;
                var nextRide = ride + 1;
                var nextInfoId = infoId + type;
                var text = "你现在在使用#b#v" + infoId + ":##b#z" + infoId + "##k啊？\r\n你这个推车再好一点的是";
                text += "#b#v" + nextInfoId + ":##b#z" + nextInfoId + "##k，";
                text += "费用为#r#e" + money + "#k#n个货币,你要升级吗？\r\n";
                text += "持有货币：#e#r#i4034849#";
                text += getCoin();
                text += "#n#k\r\n存储的货币：#e#r";
                text += getSaveCoin();
                text += " #n#k\r\n";
                let ret = npc.askYesNo(text);
                if (ret == 1) {
                        if (modifyCoin(money)) {
                                var nextRide = 80001950 + type;
                                player.cancelSkillEffect(nextRide - 1);
                                player.useSkillEffect(nextRide, 1, -1);
                                player.updateQuestRecordEx(15326, String(type));
                                updateTradeKingInfo();
                                npc.sayNext("好了！你的推车已经升级成#b#v" + nextInfoId + ":##b#z" + nextInfoId + "##k!");
                        } else {
                                npc.sayNext("你没有足够的货币！！");
                        }
                } else {
                        npc.sayNext("犹豫不决呀！那等你考虑好了再来！！");
                }
        } else {
                npc.sayNext("你现在在使用#b#v" + infoId + ":##b#z" + infoId + "##k啊！已经不能再升级了！");
        }
}


function saveCoin() {
        npc.sayNext("我这裡可以帮你保管货币，只不过，在我这裡存储过一次货币后就无法再次取走，那些货币只能用于在我这裡购买#b搬运工和推车#k。");
        var text = "怎么样，想要让我帮忙存储货币，壮大你的生意资本吗？存储费用为#i4034849##e#r货币50#n#k个\r\n";
        text += "持有货币：#i4034849##r#e";
        text += getCoin();
        text += "#n#k\r\n存储的货币：#r#e";
        text += getSaveCoin();
        let ret = npc.askYesNo(text);
        if (ret == 1) {
                if (getCoin() >= 50) {
                        player.updateQuestRecordEx(15324, "scount", String(getSaveCoin() + getCoin() - 50));
                        player.updateQuestRecordEx(15324, "count", "0");
                        npc.sayNext("好啦！存储的货币：#e#r" + getSaveCoin() + "#n#k个！");
                } else {
                        npc.sayNext("你好像没有那么多的货币可以存储哦！");
                }
        }
}

function modifyCoin(number) {
        var rCount = number;
        if (getCoin() + getSaveCoin() >= number) {
                if (getSaveCoin() >= number) {
                        rCount -= number;
                        player.updateQuestRecordEx(15324, "scount", String(Math.max(0, getSaveCoin() - number)));
                } else if (number > getSaveCoin()) {
                        rCount -= getSaveCoin();
                        player.updateQuestRecordEx(15324, "scount", "0");
                }
                if (rCount > 0) {
                        player.updateQuestRecordEx(15324, "count", String(Math.max(0, getCoin() - rCount)));
                }
                return true;
        }
        return false;
}

function getCoin() {
        var ret = 0;
        var data = player.getQuestRecordEx(15324, "count");
        if (data != null) {
                ret = Number(data);
        }
        return ret;
}

function getSaveCoin() {
        var ret = 0;
        var data = player.getQuestRecordEx(15324, "scount");
        if (data != null) {
                ret = Number(data);
        }
        return ret;
}

function getWorkerCount() {
        var ret = 0;
        for (var i = 0; i < 5; i++) {
                var data = player.getQuestRecordEx(15325, String(i));
                if (data != null) {
                        ret += Number(data);
                }
        }
        return ret;
}

function hireWorker(type) {
        var data = player.getQuestRecordEx(15325, String(type));
        if (data != null) {
                var count = Number(data);
                player.updateQuestRecordEx(15325, String(type), String(Math.min(5, Math.max(0, count + 1))));
        } else {
                player.updateQuestRecordEx(15325, String(type), "1");
        }
        updateTradeKingInfo();
}

function fireWorker(type) {
        var data = player.getQuestRecordEx(15325, String(type));
        if (data != null) {
                var count = Number(data);
                player.updateQuestRecordEx(15325, String(type), String(Math.max(0, count - 1)));
                updateTradeKingInfo();
                return true;
        }
        return false;
}


function updateTradeKingInfo() {
        var data = player.getQuestRecordEx(15326);//推车
        var type = 0;
        if (data != null) {
                type = Number(data);
        }
        var maxWeight = 10 + (type * 10);
        for (let i = 0; i < 5; i++) {
                data = player.getQuestRecordEx(15325, String(i));
                if (data != null) {
                        var workerNum = Number(data);
                        var addWeight = getTradeKingWeightAdd(i) * workerNum;
                        maxWeight += addWeight;
                }
        }
        player.updateQuestRecordEx(15324, "mWeight", String(maxWeight));
}

function getTradeKingWeightAdd(type) {
        switch (type) {
                case 0:
                        return 10;
                case 1:
                        return 20;
                case 2:
                        return 10;
                case 3:
                        return 15;
                case 4:
                        return 25;
                default:
                        return 10;
        }
}
