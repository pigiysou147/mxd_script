
declare const cm: NPCConversationManager
declare const player: ScriptPlayer
declare const map: ScriptField
declare const npc: ScriptNpc | ScriptQuest
declare const portal: ScriptPortal
declare const reactor: ScriptReactor
declare const party: ScriptParty
// @ts-ignore
declare const event: ScriptEvent

declare const ScriptPath: string

type byte = number
type short = number
type int = number
type long = number
type double = number
type Integer = number
type List<T> = Array<T>

declare class Point {    x: number
    y: number
}

declare class Rectangle {
    x: number
    y: number
    width: number
    hight: number
}


declare class PlayerScriptInteraction {
/**
 * 获取副本实例
 *
 * @param script
 * @return
 */
// @ts-ignore
getEvent(script: String): Object
/**
 * 获取地图记录
 *
 * @param variable
 * @return
 */
// @ts-ignore
getRememberedMap(variable: String): Object
/**
 * 作弊信息记录
 *
 * @param msg
 */
// @ts-ignore
logSuspicious(msg: String): void
/**
 * 创建副本实例
 *
 * @param script
 * @param onlyOne
 * @param attachment
 * @return
 */
// @ts-ignore
makeEvent(script: String, onlyOne: boolean, attachment: Object): Object
/**
 * 写入地图记录
 *
 * @param variable
 */
// @ts-ignore
rememberMap(variable: String): void
/**
 * 重置地图记录
 *
 * @param variable
 * @return
 */
// @ts-ignore
resetRememberedMap(variable: String): Object
}
declare class ScriptEvent {
// @ts-ignore
getVariables(): Map<String,Object>
// @ts-ignore
setVariable(key: String, value: Object): void
// @ts-ignore
getVariable(key: String): Object
// @ts-ignore
getMap(mapId: int): Object
// @ts-ignore
makeMap(mapId: int, instanceId: int): Object
// @ts-ignore
destroyMap(map: ScriptField): void
// @ts-ignore
startTimer(key: String, millisDelay: int): void
// @ts-ignore
stopTimer(key: String): void
// @ts-ignore
stopTimers(): void
// @ts-ignore
destroyEvent(): void
// @ts-ignore
broadcastNoticeWithoutPrefix(msg: String): void
// @ts-ignore
broadcastPlayerNotice(type: int, message: String): void
}
declare class ScriptField {
// @ts-ignore
addNarrowWeb(): void
/**
 * 地图天气效果
 */
// @ts-ignore
blowWeather(itemId: int, msg: String): void
// @ts-ignore
broadcastEventNotice(msg: String): void
// @ts-ignore
changeBGM(name: String): void
// @ts-ignore
checkWillHp(cLimit: boolean): void
/**
 * 清理地图怪物
 */
// @ts-ignore
clearMobs(): void
// @ts-ignore
createObtacleAtom(nCreateType: int, count: int, type: int, maxType: int, top: int, bottom: int): void
// @ts-ignore
cutDownCandle(): void
// @ts-ignore
destroyTempNpc(entId: int): void
// @ts-ignore
disableObjectEffect(name: String): void
// @ts-ignore
getArea(id: int): Rectangle
// @ts-ignore
getEventMobCount(): int
// @ts-ignore
getMap(): GameMap
// @ts-ignore
getId(): int
// @ts-ignore
getNumItemsInArea(id: int): int
// @ts-ignore
getNumPlayersInArea(id: int): int
// @ts-ignore
getNumPlayersItemsInArea(id: int): int
// @ts-ignore
getPlayerCount(): int
/**
 * 生成怪物
 */
// @ts-ignore
makeMob(mobId: int): Object
/**
 * 重写传送口名、脚本名
 */
// @ts-ignore
overridePortal(portalName: String, script: String): void
/**
 * 执行触发器脚本
 */
// @ts-ignore
overrideReactor(reactorName: String, script: String): void
// @ts-ignore
portalEffect(name: String): void
// @ts-ignore
prepareCheckWillHp(): void
// @ts-ignore
resetHourglass(time: int, skill: int, level: int): void
// @ts-ignore
resetKinHill(): void
/**
 * 重置地图召唤怪物 一般用于副本地图 使用之前请先 使用 clearMobs() 进行清理怪物
 */
// @ts-ignore
resetMobsSpawns(): void
/**
 * 重置触发器
 */
// @ts-ignore
resetReactors(): void
/**
 * 移除重写的传送口名称
 */
// @ts-ignore
revertPortal(portalName: String): void
/**
 * 重写传送口名称
 */
// @ts-ignore
revertReactor(reactorName: String): void
// @ts-ignore
screenEffect(name: String): void
// @ts-ignore
scriptProgressMessage(msg: String): void
// @ts-ignore
setMapTagedObjectSmoothVisible(tag: String, visible: boolean, nManual: int, tDelay: int): void
// @ts-ignore
setMapTagedObjectVisible(key: String, value: int): void
// @ts-ignore
setMapTaggedObjectAnimation(name: String, type: int): void
/**
 * 设置是否允许怪物重生
 */
// @ts-ignore
setNoSpawn(value: boolean): void
// @ts-ignore
setReactorState(name: String, state: byte): void
// @ts-ignore
setWillBoss(dummy: ScriptMob, willBossF: ScriptMob, willBossS: ScriptMob): void
// @ts-ignore
showBalrogShip(): void
// @ts-ignore
showDockShip(): void
// @ts-ignore
showGiantBossCountDown(total: int, remain: int): void
// @ts-ignore
showPortalEffect(data: String, type: int): void
/**
 * 显示计时器
 */
// @ts-ignore
showTimer(seconds: int): void
// @ts-ignore
showUndockShip(): void
// @ts-ignore
showWillHpBar(pers: int[]): void
// @ts-ignore
soundEffect(name: String): void
/**
 * 召唤怪物
 */
// @ts-ignore
spawnMob(mobId: int, x: int, y: int): Object
/**
 * 召唤怪物
 */
// @ts-ignore
spawnMob(mobId: int, x: int, y: int, faceRight: boolean): Object
/**
 * 召唤生成的怪物
 */
// @ts-ignore
spawnMob(sMob: ScriptMob, x: int, y: int): Object
// @ts-ignore
spawnTempNpc(npcId: int, x: int, y: int): int
/**
 * 转移所有玩家到其他地图
 */
// @ts-ignore
transferPlayers(mapId: int): void
}
declare class ScriptMob {
// @ts-ignore
getMob(): Mob
/**
 * 改变怪物的基础血量 （包括当前血量和最大血量）
 *
 * @param maxHp
 */
// @ts-ignore
changeBaseHp(maxHp: long): void
/**
 * 扔物品
 *
 * @param itemId
 */
// @ts-ignore
dropItem(itemId: int): void
/**
 * 获取怪物的WZ数据Id
 *
 * @return
 */
// @ts-ignore
getDataId(): int
// @ts-ignore
getDropAfter(afterHit: boolean): int
/**
 * 获取怪物的实例Id
 *
 * @return
 */
// @ts-ignore
getEntityId(): int
/**
 * 获取怪物的血量
 *
 * @return
 */
// @ts-ignore
getHp(): long
/**
 * 获取怪物当前地图Id
 *
 * @return
 */
// @ts-ignore
getMapId(): int
/**
 * 获取怪物最大血量上限
 *
 * @return
 */
// @ts-ignore
getMaxHp(): long
/**
 * 更改怪物等级
 *
 * @param level
 */
// @ts-ignore
setForcedMobStat(level: int): void
/**
 * 更改怪物能力属性
 *
 * @param level 等级
 * @param rate 倍率（基础能力 * 倍率）
 */
// @ts-ignore
setForcedMobStat(level: int, rate: int): void
// @ts-ignore
setHpLimitPercent(hpLimitPercent: double): void
// @ts-ignore
getForcedMobStat(): ForcedMobStat
/**
 * 设置怪物的最大血量
 *
 * @param maxHp
 */
// @ts-ignore
setMaxHp(maxHp: long): void
// @ts-ignore
setZoneDataType(nCurZoneDataType: int): void
}
declare class ScriptNpc extends PlayerScriptInteraction {
// @ts-ignore
getNpcId(): int
// @ts-ignore
say(message: String): Object
// @ts-ignore
say(msg: String, bLeft: boolean): Object
// @ts-ignore
say(msg: String, diffNpcID: int): Object
// @ts-ignore
say(msg: String, diffNpcID: int, bLeft: boolean): Object
// @ts-ignore
sayNext(msg: String): Object
// @ts-ignore
sayNext(msg: String, bLeft: boolean): Object
// @ts-ignore
sayNext(msg: String, diffNpcID: int): Object
// @ts-ignore
sayNext(msg: String, diffNpcID: int, bLeft: boolean): Object
// @ts-ignore
sayNextE(msg: String): Object
// @ts-ignore
sayNextE(msg: String, bPlayer: boolean): Object
// @ts-ignore
sayNextE(msg: String, diffNpcID: int): Object
// @ts-ignore
sayNextENoEsc(msg: String): Object
// @ts-ignore
sayNextENoEsc(msg: String, bPlayer: boolean): Object
// @ts-ignore
sayNextENoEsc(msg: String, diffNpcID: int): Object
// @ts-ignore
sayNextENoEsc(msg: String, diffNpcID: int, bPlayer: boolean): Object
// @ts-ignore
sayNextNoEsc(msg: String): Object
// @ts-ignore
sayNextNoEsc(msg: String, bLeft: boolean): Object
// @ts-ignore
sayNextNoEsc(msg: String, diffNpcID: int): Object
// @ts-ignore
sayNextNoEsc(msg: String, diffNpcID: int, bLeft: boolean): Object
// @ts-ignore
sayNextS(msg: String): Object
// @ts-ignore
sayNextS(msg: String, bLeft: boolean): Object
// @ts-ignore
sayNextSNoEsc(msg: String): Object
// @ts-ignore
sayNextSNoEsc(msg: String, bLeft: boolean): Object
// @ts-ignore
sayNoEsc(msg: String): Object
// @ts-ignore
sayNoEsc(msg: String, bLeft: boolean): Object
// @ts-ignore
sayNoEsc(msg: String, diffNpcID: int): Object
// @ts-ignore
sayNoEsc(msg: String, diffNpcID: int, bLeft: boolean): Object
// @ts-ignore
sayS(msg: String): Object
// @ts-ignore
sayS(msg: String, bLeft: boolean): Object
// @ts-ignore
saySNoEsc(msg: String): Object
// @ts-ignore
saySNoEsc(msg: String, bLeft: boolean): Object
// @ts-ignore
sendShop(shopId: int): boolean
// @ts-ignore
sendStorage(npcId: int): boolean
// @ts-ignore
setCameraMove(bBack: boolean, nPixelPerSec: int, bSet: boolean, posX: int, posY: int): Object
// @ts-ignore
setCameraMove(bBack: boolean, nPixelPerSec: int, posX: int, posY: int): Object
// @ts-ignore
setCameraOnCharacter(dwID: int): Object
// @ts-ignore
setCameraReleaseFromUserPoint(): Object
// @ts-ignore
setCameraZoom(nTime: int, nScale: int, nTimePos: int, posX: int, posY: int): Object
// @ts-ignore
setContinuation(continuation: Object): Object
// @ts-ignore
setDelay(delay: int): Object
// @ts-ignore
setInputUI(nIdx: int): Object
// @ts-ignore
setMonologue(text: String, bEnd: boolean): Object
// @ts-ignore
setMonologueScroll(text: String, bEnd: boolean, nAlign: int, tTime: int, nDecTic: int): Object
// @ts-ignore
setPatternInputRequest(data: String, nAct: int, nRequestCount: int, nTime: int): Object
// @ts-ignore
setVansheeMode(bVanshee: boolean): Object
// @ts-ignore
setForcedMove(nForcedMoveDir: int, nForcedMoveFixel: int): Object
// @ts-ignore
setForcedInput(nForcedInput: int): Object
// @ts-ignore
setForcedFlip(nForcedFlip: int): Object
// @ts-ignore
setForcedAction(nAction: int, tDuration: int): Object
// @ts-ignore
setFaceOff(nFaceItemID: int): Object
// @ts-ignore
removeAdditionalEffect(): Object
// @ts-ignore
askYesNo(msg: String): Object
// @ts-ignore
askYesNo(msg: String, bLeft: boolean): Object
// @ts-ignore
askYesNo(msg: String, diffNpcID: int): Object
// @ts-ignore
askYesNo(msg: String, diffNpcID: int, bLeft: boolean): Object
// @ts-ignore
askYesNoE(msg: String): Object
// @ts-ignore
askYesNoE(msg: String, bPlayer: boolean): Object
// @ts-ignore
askYesNoE(msg: String, diffNpcID: int): Object
// @ts-ignore
askYesNoENoEsc(msg: String): Object
// @ts-ignore
askYesNoENoEsc(msg: String, bPlayer: boolean): Object
// @ts-ignore
askYesNoENoEsc(msg: String, diffNpcID: int): Object
// @ts-ignore
askYesNoENoEsc(msg: String, diffNpcID: int, bPlayer: boolean): Object
// @ts-ignore
askYesNoNoEsc(msg: String): Object
// @ts-ignore
askYesNoNoEsc(msg: String, bLeft: boolean): Object
// @ts-ignore
askYesNoNoEsc(msg: String, diffNpcID: int): Object
// @ts-ignore
askYesNoNoEsc(msg: String, diffNpcID: int, bLeft: boolean): Object
// @ts-ignore
askYesNoS(msg: String): Object
// @ts-ignore
askYesNoS(msg: String, bLeft: boolean): Object
// @ts-ignore
askYesNoSNoEsc(msg: String): Object
// @ts-ignore
askYesNoSNoEsc(msg: String, bLeft: boolean): Object
/**
 * 全服广播道具属性信息
 *
 * @param msg
 * @param item
 */
// @ts-ignore
broadcastGachaponMsgEx(msg: String, item: Item): void
/**
 * 全服公告 带前缀[公告事项]
 *
 * @param msg
 */
// @ts-ignore
broadcastNotice(msg: String): void
/**
 * 全服公告 不带前缀
 *
 * @param msg
 */
// @ts-ignore
broadcastNoticeWithoutPrefix(msg: String): void
/**
 * 全服 广播玩家聊天窗口信息
 *
 * @param type
 * @param msg
 */
// @ts-ignore
broadcastPlayerNotice(type: int, msg: String): void
/**
 * 全服 天气效果公告
 *
 * @param type
 * @param msg
 * @param tDuration
 */
// @ts-ignore
broadcastWeatherEffectNotice(type: int, msg: String, tDuration: int): void
// @ts-ignore
clearBackButton(): void
// @ts-ignore
endConversation(): void
// @ts-ignore
getAllEyeColors(): Object
// @ts-ignore
getAllEyeStyles(): Object
// @ts-ignore
getAllHairColors(): Object
// @ts-ignore
getAllHairStyles(): Object
// @ts-ignore
getAllSkinColors(): Object
// @ts-ignore
isFaceValid(face: int): boolean
// @ts-ignore
isHairValid(hair: int): boolean
// @ts-ignore
playMovie(data: String, show: boolean): Object
/**
 * 全服广播 显示任务关闭（头顶信封）
 *
 * @param questId
 */
// @ts-ignore
announcedQuestClose(questId: int): void
/**
 * 全服广播 限时任务开启（头顶信封）
 *
 * @param questId
 * @param tDuration
 */
// @ts-ignore
announcedQuestOpen(questId: int, tDuration: int): void
// @ts-ignore
askAccept(msg: String): Object
// @ts-ignore
askAccept(msg: String, bLeft: boolean): Object
// @ts-ignore
askAccept(msg: String, diffNpcID: int): Object
// @ts-ignore
askAccept(msg: String, diffNpcID: int, bLeft: boolean): Object
// @ts-ignore
askAcceptE(msg: String): Object
// @ts-ignore
askAcceptE(msg: String, bPlayer: boolean): Object
// @ts-ignore
askAcceptE(msg: String, diffNpcID: int): Object
// @ts-ignore
askAcceptENoEsc(msg: String): Object
// @ts-ignore
askAcceptENoEsc(msg: String, bPlayer: boolean): Object
// @ts-ignore
askAcceptENoEsc(msg: String, diffNpcID: int): Object
// @ts-ignore
askAcceptENoEsc(msg: String, diffNpcID: int, bPlayer: boolean): Object
// @ts-ignore
askAcceptNoEsc(msg: String): Object
// @ts-ignore
askAcceptNoEsc(msg: String, bLeft: boolean): Object
// @ts-ignore
askAcceptNoEsc(msg: String, diffNpcID: int): Object
// @ts-ignore
askAcceptNoEsc(msg: String, diffNpcID: int, bLeft: boolean): Object
// @ts-ignore
askAcceptNoEscS(msg: String): Object
// @ts-ignore
askAcceptSNoEsc(msg: String, bLeft: boolean): Object
// @ts-ignore
askAngelicBuster(): Object
// @ts-ignore
askAvatar(msg: String, styles: int[], cItemID: int, bAngelicBuster: boolean, bZeroBeta: boolean): Object
// @ts-ignore
askBoxText(msg: String, msg2: String, nCol: short, nLine: short): Object
// @ts-ignore
askGuildCreateAgree(name: String): Object
// @ts-ignore
askGuildName(): Object
// @ts-ignore
askMenu(msg: String): Object
// @ts-ignore
askMenu(msg: String, bLeft: boolean): Object
// @ts-ignore
askMenu(msg: String, diffNpcID: int): Object
// @ts-ignore
askMenu(msg: String, diffNpcID: int, bLeft: boolean): Object
// @ts-ignore
askMenuA(msg: String): Object
// @ts-ignore
askMenuA(msg: String, bPlayer: boolean): Object
// @ts-ignore
askMenuA(msg: String, diffNpcID: int): Object
// @ts-ignore
askMenuANoESC(msg: String): Object
// @ts-ignore
askMenuANoESC(msg: String, bPlayer: boolean): Object
// @ts-ignore
askMenuANoESC(msg: String, diffNpcID: int): Object
// @ts-ignore
askMenuE(msg: String): Object
// @ts-ignore
askMenuE(msg: String, bPlayer: boolean): Object
// @ts-ignore
askMenuE(msg: String, diffNpcID: int): Object
// @ts-ignore
askMenuENoESC(msg: String): Object
// @ts-ignore
askMenuENoESC(msg: String, bPlayer: boolean): Object
// @ts-ignore
askMenuENoESC(msg: String, diffNpcID: int): Object
// @ts-ignore
askMenuNoEsc(msg: String): Object
// @ts-ignore
askMenuNoEsc(msg: String, bLeft: boolean): Object
// @ts-ignore
askMenuNoEsc(msg: String, diffNpcID: int): Object
// @ts-ignore
askMenuNoEsc(msg: String, diffNpcID: int, bLeft: boolean): Object
// @ts-ignore
askMenuS(msg: String): Object
// @ts-ignore
askMenuS(msg: String, bLeft: boolean): Object
// @ts-ignore
askMenuSNoEsc(msg: String): Object
// @ts-ignore
askMenuSNoEsc(msg: String, bLeft: boolean): Object
// @ts-ignore
askNumber(msg: String, def: int, min: int, max: int): Object
// @ts-ignore
askNumberNoEsc(msg: String, def: int, min: int, max: int): Object
// @ts-ignore
askNumberS(msg: String, def: int, min: int, max: int): Object
// @ts-ignore
askNumberSNoEsc(msg: String, def: int, min: int, max: int): Object
// @ts-ignore
askPet(msg: String): Object
// @ts-ignore
askText(msg: String, defText: String, nLenMin: short, nLenMax: short): Object
// @ts-ignore
askTextNoEsc(msg: String, defText: String, nLenMin: short, nLenMax: short): Object
// @ts-ignore
askTextS(msg: String, defText: String, nLenMin: short, nLenMax: short): Object
// @ts-ignore
askTextSNoEsc(msg: String, defText: String, nLenMin: short, nLenMax: short): Object
}
declare class ScriptParty {
/**
 * 传送组队到指定地图
 */
// @ts-ignore
changeMap(mapId: int): void
/**
 * 传送组队到指定地图的传送点
 */
// @ts-ignore
changeMap(mapId: int, portal: int): void
/**
 * 传送组队到指定地图的传送点
 */
// @ts-ignore
changeMap(mapId: int, portal: String): void
/**
 * 给与组队经验
 */
// @ts-ignore
gainExp(gain: int): void
// @ts-ignore
getLocalMembers(): ScriptPartyMember[]
// @ts-ignore
getLeader(): int
/**
 * 获取当前组队的所有成员数
 */
// @ts-ignore
getMembersCount(): int
/**
 * 获取符合条件的组队成员数
 */
// @ts-ignore
getMembersCount(mapId: int, minLevel: short, maxLevel: short): int
/**
 * 判断所有成员是否超过最大允许事件记录
 */
// @ts-ignore
isAllMembersAllowedPQ(pqLog: String, maxEnter: int): boolean
/**
 * 获取超过最大允许事件记录的队员实例
 *
 * @return
 */
// @ts-ignore
getNotAllowedMember(pqLog: String, maxEnter: int): ScriptPartyMember
// @ts-ignore
isAllMembersHasItem(itemId: int, quantity: int): boolean
/**
 * 移除组队成员对应所有道具
 */
// @ts-ignore
loseItem(itemId: int): void
// @ts-ignore
loseItem(itemId: int, quantity: int): void
/**
 * 获取当前频道的组队成员数
 */
// @ts-ignore
numberOfMembersInChannel(): int
// @ts-ignore
showGiantBossMap(infos: Map<String,String>): void
}
declare class ScriptPartyMember extends ScriptPlayer {
}
declare class ScriptPlayer {
/**
 * 断开客户端连接
 */
// @ts-ignore
dissociateClient(): void
// @ts-ignore
actionMapleUnion(): boolean
/**
 * 增加生活技能经验值
 */
// @ts-ignore
addMakingSkillExp(craftId: int, exp: int): void
/**
 * 屏幕右下方 显示弹出Npc对话
 */
// @ts-ignore
addPopupSay(npcId: int, duration: int, msg: String, sound: String): void
/**
 * 增加事件记录值
 */
// @ts-ignore
addPQLog(key: String): void
/**
 * 增加事件记录值
 */
// @ts-ignore
addPQLog(key: String, value: int, resetDays: int): void
/**
 * 取消道具Buff
 */
// @ts-ignore
cancelItemEffect(itemId: int): void
/**
 * 取消技能Buff
 */
// @ts-ignore
cancelSkillEffect(skillId: int): void
/**
 * 判断能否获取指定数量的道具
 */
// @ts-ignore
canGainItem(itemId: int, quantity: int): boolean
/**
 * 判断能手册使用
 */
// @ts-ignore
canUseSkillBook(skillId: int, masterLevel: int): boolean
// @ts-ignore
changeBGM(data: String): void
/**
 * 传送到指定地图
 */
// @ts-ignore
changeMap(mapId: int): void
/**
 * 传送到指定地图的传送点
 */
// @ts-ignore
changeMap(mapId: int, portal: int): void
/**
 * 传送到指定地图的传送点
 */
// @ts-ignore
changeMap(mapId: int, portal: String): void
/**
 * 传送到指定地图实例
 */
// @ts-ignore
changeMap(map: ScriptField): void
/**
 * 检查疲劳度
 */
// @ts-ignore
checkFatigue(): void
/**
 * 检查匠人效果设置
 */
// @ts-ignore
checkMakingSkillEff(): void
/**
 * 检查生活技能是否可以升级
 */
// @ts-ignore
checkMakingSkillExpFull(craftId: int): boolean
/**
 * 检查点距离 距离100
 */
// @ts-ignore
checkNearby(pos: Point): boolean
/**
 * 完成指定任务
 */
// @ts-ignore
completeQuest(questId: int, npcId: int): void
// @ts-ignore
createAlliance(): void
/**
 * 创建家族
 */
// @ts-ignore
createGuild(name: String): String
/**
 * 数据库插入操作
 */
// @ts-ignore
customSqlInsert(sql: String, args: Object): void
/**
 * 数据库获取操作
 */
// @ts-ignore
customSqlResult(sql: String, args: Object): List<Map<String,Object>>
/**
 * 数据库更新操作
 */
// @ts-ignore
customSqlUpdate(sql: String, args: Object): int
/**
 * 移除临时Npc
 */
// @ts-ignore
destroyTempNpc(npcId: int): void
// @ts-ignore
disbandGuild(): void
// @ts-ignore
doMapleUnionLevelUp(): boolean
/**
 * 弹出窗口消息
 */
// @ts-ignore
dropAlertNotice(message: String): void
/**
 * 显示消息
 */
// @ts-ignore
dropMessage(type: int, message: String): void
/**
 * 进化宠物
 */
// @ts-ignore
evolveBossPet(): boolean
// @ts-ignore
forfeitQuest(questId: int): void
/**
 * 给与AP点
 */
// @ts-ignore
gainAp(gain: short): void
/**
 * 增加好友数量上限
 */
// @ts-ignore
gainBuddySlots(gain: short): void
/**
 * 拓展特殊栏位
 */
// @ts-ignore
gainCashInventorySlots(delta: short): void
/**
 * 给与宠物亲密度
 */
// @ts-ignore
gainCloseness(gain: short): void
/**
 * 拓展装备栏位
 */
// @ts-ignore
gainEquipInventorySlots(delta: short): void
/**
 * 拓展其他栏位
 */
// @ts-ignore
gainEtcInventorySlots(delta: short): void
/**
 * 给与角色经验值
 */
// @ts-ignore
gainExp(gain: long): void
/**
 * 给与玩家道具并全服广播
 */
// @ts-ignore
gainGachaponItem(from: String, itemId: int, quantity: short, rareness: int): boolean
/**
 * 给与指定数量的道具
 */
// @ts-ignore
gainItem(itemId: int, quantity: int): boolean
/**
 * 给与道具
 */
// @ts-ignore
gainItem(item: Item): boolean
/**
 * 给与金币
 */
// @ts-ignore
gainMesos(gain: long): void
/**
 * 拓展设置栏位
 */
// @ts-ignore
gainSetupInventorySlots(delta: short): void
/**
 * 给与指定职业的技能点
 */
// @ts-ignore
gainSp(skillbook: int, gain: short): void
/**
 * 给与当前职业技能点
 */
// @ts-ignore
gainSp(gain: short): void
/**
 * 拓展消耗栏位
 */
// @ts-ignore
gainUseInventorySlots(delta: short): void
/**
 * 获取账号Id
 */
// @ts-ignore
getAccountId(): int
// @ts-ignore
getAllianceCapacity(): int
// @ts-ignore
getAllianceRank(): byte
/**
 * 获取物品数量
 */
// @ts-ignore
getAmountOfItem(itemId: int): int
/**
 * 获取初始职业ID
 */
// @ts-ignore
getBeginner(): int
/**
 * 获取好友数量上限
 */
// @ts-ignore
getBuddyCapacity(): short
/**
 * 获取点券或抵用券
 */
// @ts-ignore
getCashShopCurrency(type: int): int
// @ts-ignore
getChannel(): byte
/**
 * 获取基本敏捷属性（不包含技能、装备等附加属性值）
 */
// @ts-ignore
getDex(): short
/**
 * 获取脸型
 */
// @ts-ignore
getFace(): int
/**
 * 获取指定背包类型剩余空格
 */
// @ts-ignore
getFreeSlots(type: byte): short
/**
 * 获取性别
 */
// @ts-ignore
getGender(): byte
/**
 * 获取家族成员数量上限
 */
// @ts-ignore
getGuildCapacity(): int
/**
 * 获取家族Id
 */
// @ts-ignore
getGuildId(): int
/**
 * 获取家族职位Id
 */
// @ts-ignore
getGuildRank(): byte
/**
 * 获取发型
 */
// @ts-ignore
getHair(): int
/**
 * 获取当期血量
 */
// @ts-ignore
getHp(): int
/**
 * 获取角色Id
 */
// @ts-ignore
getId(): int
/**
 * 获取基本智力属性（不包含技能、装备等附加属性值）
 */
// @ts-ignore
getInt(): short
/**
 * 获取任务记录整数值
 */
// @ts-ignore
getIntQuestRecordEx(quest: int, key: String): int
/**
 * 获取世界账号共享任务记录整数值
 */
// @ts-ignore
getIntWorldShareRecord(quest: int, key: String): int
/**
 * 获取指定背包栏位的道具实例
 */
// @ts-ignore
getInventorySlot(type: byte, slot: short): Item
/**
 * 获取职业ID
 */
// @ts-ignore
getJob(): short
/**
 * 获取角色等级
 */
// @ts-ignore
getLevel(): int
/**
 * 获取基本运气属性（不包含技能、装备等附加属性值）
 */
// @ts-ignore
getLuk(): short
/**
 * 获取生活技能经验
 */
// @ts-ignore
getMakingSkillExp(id: int): int
/**
 * 获取生活技能等级
 */
// @ts-ignore
getMakingSkillLevel(id: int): int
// @ts-ignore
getMapleUnionLevel(): int
// @ts-ignore
getMapleUnionNextLevel(): int
/**
 * 获取角色名
 */
// @ts-ignore
getName(): String
/**
 * 获取当前在线时间
 */
// @ts-ignore
getNowOnlineTime(): int
/**
 * 获取当日账号的总在线时间
 */
// @ts-ignore
getOnlineTime(): int
/**
 * 获取召唤的宠物数量
 */
// @ts-ignore
getPetCount(): int
/**
 * 获取事件记录值
 */
// @ts-ignore
getPQLog(key: String): int
/**
 * 获取任务记录
 */
// @ts-ignore
getQuestRecordEx(quest: int): String
/**
 * 获取任务记录
 */
// @ts-ignore
getQuestRecordEx(quest: int, key: String): String
/**
 * 获取技能等级
 */
// @ts-ignore
getSkillLevel(skillId: int): int
/**
 * 获取对应可提升最高的级的技能
 */
// @ts-ignore
getSkillMenu(skillMaster: int): String
/**
 * 获取当前职业的技能点
 */
// @ts-ignore
getSp(): int
/**
 * 获取基本力量属性（不包含技能、装备等附加属性值）
 */
// @ts-ignore
getStr(): short
/**
 * 获取第二职业类型
 */
// @ts-ignore
getSubJob(): short
// @ts-ignore
getWorld(): int
/**
 * 获取世界账号共享任务记录
 */
// @ts-ignore
getWorldShareRecord(quest: int): String
/**
 * 获取世界账号共享任务记录
 */
// @ts-ignore
getWorldShareRecord(quest: int, key: String): String
/**
 * 是否有家族族徽
 */
// @ts-ignore
hasGuildEmblem(): boolean
/**
 * 判断指定道具的数量
 */
// @ts-ignore
hasItem(itemId: int, quantity: int): boolean
/**
 * 判断金币
 */
// @ts-ignore
hasMesos(min: long): boolean
// @ts-ignore
increaseAllianceCapacity(): void
/**
 * 增加家族成员数量上限
 */
// @ts-ignore
increaseGuildCapacity(amount: byte): void
/**
 * 增加血量上限
 */
// @ts-ignore
increaseMaxHp(delta: int): void
/**
 * 增加魔量上限
 */
// @ts-ignore
increaseMaxMp(delta: int): void
/**
 * 判断是否为GM
 */
// @ts-ignore
isGm(): boolean
/**
 * 判断任务是否启动
 */
// @ts-ignore
isQuestActive(questId: int): boolean
/**
 * 判断任务是否完成
 */
// @ts-ignore
isQuestCompleted(questId: int): boolean
/**
 * 判断任务是否开始
 */
// @ts-ignore
isQuestStarted(questId: int): boolean
/**
 * 清除指定背包的指定栏位的物品
 */
// @ts-ignore
loseInvSlot(type: byte, slot: short): void
/**
 * 移除指定的所有道具
 */
// @ts-ignore
loseItem(itemId: int): void
/**
 * 移除指定数量的道具
 */
// @ts-ignore
loseItem(itemId: int, quantity: int): boolean
/**
 * 扣除金币
 */
// @ts-ignore
loseMesos(lose: long): void
/**
 * 获取新的道具
 */
// @ts-ignore
makeItemWithId(itemId: int): Item
/**
 * 加满当前职业Id的技能
 */
// @ts-ignore
maxSkills(): void
/**
 * 修改点券等信息
 */
// @ts-ignore
modifyCashShopCurrency(type: int, value: int): void
/**
 * 增减疲劳度
 */
// @ts-ignore
modifyFatigue(value: short): void
// @ts-ignore
modifyMoonlightValue(nMoonlightValue: int): void
// @ts-ignore
offSpineScreen(key: String, value: int): void
// @ts-ignore
offStaticScreenMessage(): void
/**
 * 打开UI
 */
// @ts-ignore
openUI(uiId: int): void
// @ts-ignore
openUIWithOption(uiId: int, option: int): void
/**
 * 打开网页
 */
// @ts-ignore
openURL(sURL: String): void
/**
 * 打开网页UI
 *
 * @param sURL
 */
// @ts-ignore
openWebUI(sURL: String): void
/**
 * 打开网页UI
 */
// @ts-ignore
openWebUI(uiID: int, sUOL: String, sURL: String): void
// @ts-ignore
playAmbientSound(sSoundName: String, uVolumeRate: int, value: int): void
// @ts-ignore
playExclSoundWithDownBGM(data: String): void
// @ts-ignore
playSoundWithMuteBGM(data: String): void
// @ts-ignore
removeAdditionalEffect(): void
/**
 * 重置角色超级技能
 */
// @ts-ignore
resetHyperSkill(): boolean
/**
 * 重置角色超级属性技能
 */
// @ts-ignore
resetHyperStatSkill(): boolean
/**
 * 重置事件记录值
 */
// @ts-ignore
resetPQLog(key: String): void
/**
 * 重置角色技能
 */
// @ts-ignore
resetSkills(): void
/**
 * 重置四维属性，并分配指定数值
 */
// @ts-ignore
resetStats(str: int, dex: int, _int: int, luk: int): void
/**
 * 重置角色V技能 解除所有装备的技能
 */
// @ts-ignore
resetVSkills(): void
/**
 * 复活宠物
 */
// @ts-ignore
revivePet(uniqueId: long): boolean
/**
 * 执行其他脚本（注意：使用前请确认下文已经没有其他执行代码）
 */
// @ts-ignore
runScript(script: String): void
// @ts-ignore
screenEffect(name: String): void
/**
 * 在游戏中间显示通知信息，显示道具图标
 */
// @ts-ignore
scriptProgressItemMessage(itemId: int, msg: String): void
/**
 * 在游戏中间显示通知信息
 */
// @ts-ignore
scriptProgressMessage(msg: String): void
// @ts-ignore
setAvatarLook(items: List<Integer>): void
/**
 * 设置副本可死亡次数
 */
// @ts-ignore
setDeathCount(nDeathCount: int): void
// @ts-ignore
setDirectionMod(bSet: boolean): void
/**
 * 设置事件实例
 */
// @ts-ignore
setEvent(event: ScriptEvent): void
/**
 * 设置脸型
 */
// @ts-ignore
setFace(newEyes: int): void
// @ts-ignore
setFaceOff(nFaceItemID: int): void
// @ts-ignore
setForcedAction(nAction: int, tDuration: int): void
// @ts-ignore
setForcedFlip(nForcedFlip: int): void
/**
 * 剧情模式下 设置人物行动
 */
// @ts-ignore
setForcedInput(nForcedInput: int): void
/**
 * 剧情模式下 设置人物行动
 */
// @ts-ignore
setForcedMove(nForcedMoveDir: int, nForcedMoveFixel: int): void
// @ts-ignore
setGrayScale(type: int, bSet: boolean): void
/**
 * 设置家族族徽
 */
// @ts-ignore
setGuildEmblem(arr: Object): void
/**
 * 设置发型
 */
// @ts-ignore
setHair(newHair: int): void
/**
 * 设置当前血量
 */
// @ts-ignore
setHp(newHp: int): void
// @ts-ignore
setInGameCurNodeEventEnd(bEnd: boolean): void
// @ts-ignore
setInGameDirectionMode(bSet: boolean, block: boolean, bForceMouseOver: boolean, bShowUI: boolean): void
/**
 * 设置职业Id
 */
// @ts-ignore
setJob(newJob: short): void
// @ts-ignore
setLayerBlind(pLayerBlind: boolean, binary: int, duration: int): void
// @ts-ignore
setLayerBlindWhite(layerBlind: boolean, binary: int, duration: int): void
// @ts-ignore
setLayerMove(term: int, key: String, rx: int, ry: int): void
// @ts-ignore
setLayerOff(term: int, key: String): void
// @ts-ignore
setLayerOn(term: int, key: String, rx: int, ry: int, z: int, uol: String, location: int): void
// @ts-ignore
setMapTagedObjectVisible(key: String, value: int): void
// @ts-ignore
setMapTaggedObjectAnimation(name: String, type: int): void
// @ts-ignore
setNPCForceFlip(npcId: int, nFlip: int): void
/**
 * 设置临时Npc 移动
 */
// @ts-ignore
setNpcForceMove(npcId: int, nForceX: int, nMoveX: int, nSpeedRate: int): void
/**
 * 显示临时Npc 特殊效果
 */
// @ts-ignore
setNpcSpecialAction(npcId: int, action: String, tDuration: int, bLocalAct: boolean): void
/**
 * 设置角色技能等级
 */
// @ts-ignore
setSkillLevel(skill: int, level: int, masterLevel: int, onlyMasterLevel: boolean): void
/**
 * 设置肤色
 */
// @ts-ignore
setSkin(newSkin: byte): void
/**
 * 设置单人模式
 */
// @ts-ignore
setStandAloneMode(bAlone: boolean): void
// @ts-ignore
setStaticScreenMessage(idx: int, msg: String, removeText: boolean): void
// @ts-ignore
setUserEmotionLocal(type: int, tDuration: int): void
// @ts-ignore
setVansheeMode(bVanshee: boolean): void
// @ts-ignore
showAvatarOriented(msg: String): void
// @ts-ignore
showAvatarOrientedRepeat(show: boolean, msg: String): void
// @ts-ignore
showBlindEffect(blind: boolean): void
/**
 * 副本 显示死亡次数
 */
// @ts-ignore
showDeathCount(): void
// @ts-ignore
showDojangRank(): void
/**
 * 显示采集效果
 */
// @ts-ignore
showGatherResult(success: boolean): void
// @ts-ignore
showGiantBossCountDown(total: int, remain: int): void
/**
 * 剧情模式下 显示 Npc Wz效果
 */
// @ts-ignore
showNpcEffectPlay(npcId: int, data: String, tDuration: int, nRx: int, nRy: int, bOverlay: boolean, pOverlay: int, bNotOrigin: boolean, x: int): void
/**
 * 剧情模式下 显示 玩家 Wz效果
 */
// @ts-ignore
showPlayerEffectPlay(data: String, tDuration: int, nRx: int, nRy: int, bOverlay: boolean, pOverlay: int, bNotOrigin: boolean, x: int): void
// @ts-ignore
showPortalEffect(data: String, type: int): void
/**
 * 显示游戏中间的通知信息 可设置字体
 */
// @ts-ignore
showProgressMessageFont(msg: String, fontNameType: int, fontSize: int, fontColorType: int, fadeOutDelay: int): void
// @ts-ignore
showReservedEffect(data: String): void
// @ts-ignore
showScreenAutoLetterBox(data: String, delay: int): void
// @ts-ignore
showScreenDelayedEffect(msg: String, delay: int): void
// @ts-ignore
showSpineScreen(type: int, data: String, animat: String): void
// @ts-ignore
showSpineScreen(type: int, data: String, animat: String, key: String): void
/**
 * 显示系统通知（红色文字）
 */
// @ts-ignore
showSystemMessage(msg: String): void
/**
 * 显示计时器
 */
// @ts-ignore
showTimer(seconds: int): void
// @ts-ignore
showTopScreenEffect(data: String, value: int): void
// @ts-ignore
showTrembleEffect(bHeavyNShortTremble: boolean, tDelay: int): void
/**
 * 显示次元之门可传送列表
 */
// @ts-ignore
showUnityPortal(): void
// @ts-ignore
showUOLEffect(data: String, reverse: boolean, time: int, mode: int): void
// @ts-ignore
showUOLEffect(data: String, time: int): void
// @ts-ignore
showWeatherEffectNotice(msg: String, nType: int, tDuration: int): void
// @ts-ignore
soundEffect(name: String): void
/**
 * 召唤临时Npc 只对当前角色可见，不写入地图实例，切换地图消失
 */
// @ts-ignore
spawnTempNpc(npcId: int, x: int, y: int): void
/**
 * 开始指定任务
 */
// @ts-ignore
startQuest(questId: int, npcId: int): void
/**
 * 开始指定任务并写入数据
 */
// @ts-ignore
startQuest(questId: int, npcId: int, data: String): void
// @ts-ignore
stopAmbientSound(sSoundName: String, value: int): void
// @ts-ignore
teleportToPortalId(nUserCallingType: int, portalID: int): void
// @ts-ignore
teleportToPos(nUserCallingType: int, dwCallerID: int, pos: Point): void
/**
 * 更新设置伤害皮肤
 */
// @ts-ignore
updateDamageSkin(dSkinId: int): void
/**
 * 更新道具 （请注意，一定要是原先获取道具的 slot！！）
 */
// @ts-ignore
updateItem(slot: short, item: Item): void
/**
 * 更新任务记录
 */
// @ts-ignore
updateQuestRecordEx(questid: int, data: String): void
/**
 * 更新任务记录
 */
// @ts-ignore
updateQuestRecordEx(questid: int, key: String, value: String): void
/**
 * 更新世界账号共享任务记录
 */
// @ts-ignore
updateWorldShareRecord(questid: int, data: String): void
/**
 * 更新世界账号共享任务记录
 */
// @ts-ignore
updateWorldShareRecord(questid: int, key: String, value: String): void
/**
 * 给与道具Buff
 */
// @ts-ignore
useItemEffect(itemId: int): void
/**
 * 使用能手册
 */
// @ts-ignore
useSkillBook(successRate: int, skillId: int, masterLevel: int): void
/**
 * 给与技能Buff
 */
// @ts-ignore
useSkillEffect(skillId: int, level: int): void
// @ts-ignore
openPachinko(b: boolean): void
// @ts-ignore
getIntKeyValue(key: String): int
}
declare class ScriptPortal extends PlayerScriptInteraction {
// @ts-ignore
getName(): String
/**
 * 终止传送（如果传送口不执行传送，需要在脚本中调用这个方法）
 */
// @ts-ignore
abortWarp(): void
/**
 * 传送口已关闭
 */
// @ts-ignore
block(): void
// @ts-ignore
getId(): int
/**
 * 播放传送口音效
 */
// @ts-ignore
playPortalSE(): void
/**
 * 显示头顶信息
 *
 * @param hint
 * @param width
 * @param height
 */
// @ts-ignore
showHint(hint: String, width: short, height: short): void
/**
 * 返回传送口是否传送成功
 *
 * @return
 */
// @ts-ignore
warped(): boolean
// @ts-ignore
rememberMap(variable: String): void
}
declare class ScriptQuest extends ScriptNpc {
/**
 * 完成任务
 */
// @ts-ignore
completeQuest(): void
/**
 * 开始任务
 */
// @ts-ignore
startQuest(): void
/**
 * 开始任务，并写入数据
 *
 * @param data
 */
// @ts-ignore
startQuest(data: String): void
}
declare class ScriptReactor extends PlayerScriptInteraction {
// @ts-ignore
getName(): String
/**
 * 获取reactor wzId
 *
 * @return
 */
// @ts-ignore
getDataId(): int
/**
 * 掉落金币/物品
 *
 * @param mesosMin 金币最小值
 * @param mesosMax 金币最大值
 * @param mesoChance 金币概率 1000000=100%
 * @param itemsAndChances 需要成对，要有itemId 和 chance
 */
// @ts-ignore
dropItems(mesosMin: int, mesosMax: int, mesoChance: int, itemsAndChances: int): void
/**
 * 掉落金币/物品
 *
 * @param minMeso 金币最小值
 * @param maxMeso 金币最大值
 * @param mesoChance 金币概率 1000000=100%
 * @param itemDrops 数组，[itemId,
 *                   itemChance,
 *                   itemCountMin(optional,default=1),
 *                   itemCountMax(optional,default=itemCountMin),
 *                   quest(optional,default=-1)]
 */
// @ts-ignore
dropItems(minMeso: int, maxMeso: int, mesoChance: int, itemDrops: int[]): void
// @ts-ignore
gatherDone(): void
}
declare class AbstractPlayerInteraction {
// @ts-ignore
getClient(): GameClient
// @ts-ignore
getPosX(): int
// @ts-ignore
getPosY(): int
// @ts-ignore
getChannelServer(): ChannelServer
// @ts-ignore
warp(mapId: int): void
// @ts-ignore
warp(mapId: int, portal: int): void
// @ts-ignore
warpS(mapId: int, portal: int): void
// @ts-ignore
warp(mapId: int, portal: String): void
// @ts-ignore
warpS(mapId: int, portal: String): void
// @ts-ignore
warpMap(mapId: int, portal: int): void
// @ts-ignore
playPortalSE(): void
// @ts-ignore
getMap(): GameMap
// @ts-ignore
getMap(mapId: int): GameMap
// @ts-ignore
spawnMobLevel(mobId: int, level: int): void
// @ts-ignore
spawnMobLevel(mobId: int, quantity: int, level: int): void
// @ts-ignore
spawnMobLevel(mobId: int, quantity: int, level: int, x: int, y: int): void
// @ts-ignore
spawnMobLevel(mobId: int, quantity: int, level: int, pos: Point): void
// @ts-ignore
spawnMobStats(mobId: int, newhp: long, newExp: int): void
// @ts-ignore
spawnMobStats(mobId: int, quantity: int, newhp: long, newExp: int): void
// @ts-ignore
spawnMobStats(mobId: int, quantity: int, newhp: long, newExp: int, x: int, y: int): void
// @ts-ignore
spawnMobStats(mobId: int, quantity: int, newhp: long, newExp: int, pos: Point): void
// @ts-ignore
spawnMobMultipler(mobId: int, multipler: int): void
// @ts-ignore
spawnMobMultipler(mobId: int, quantity: int, multipler: int): void
// @ts-ignore
spawnMobMultipler(mobId: int, quantity: int, multipler: int, x: int, y: int): void
// @ts-ignore
spawnMobMultipler(mobId: int, quantity: int, multipler: int, pos: Point): void
// @ts-ignore
spawnMonster(mobId: int, quantity: int): void
// @ts-ignore
spawnMobOnMap(mobId: int, quantity: int, x: int, y: int, map: int): void
// @ts-ignore
spawnMob(mobId: int, quantity: int, x: int, y: int): void
// @ts-ignore
spawnMob(mobId: int, x: int, y: int): void
// @ts-ignore
killMob(mobId: int): void
// @ts-ignore
killAllMob(): void
// @ts-ignore
addHP(delta: int): void
// @ts-ignore
getPlayerStat(type: String): int
// @ts-ignore
getAndroidStat(type: String): int
// @ts-ignore
getName(): String
// @ts-ignore
getServerName(): String
// @ts-ignore
getTrueServerName(): String
// @ts-ignore
haveItem(itemId: int): boolean
// @ts-ignore
haveItem(itemId: int, quantity: int): boolean
// @ts-ignore
haveItem(itemId: int, quantity: int, checkEquipped: boolean, greaterOrEquals: boolean): boolean
// @ts-ignore
getItemQuantity(itemId: int): int
// @ts-ignore
canHold(): boolean
// @ts-ignore
canHoldSlots(slot: int): boolean
// @ts-ignore
canHold(itemId: int): boolean
// @ts-ignore
canHold(itemId: int, quantity: int): boolean
// @ts-ignore
getQuestStatus(questId: int): byte
// @ts-ignore
isQuestActive(questId: int): boolean
// @ts-ignore
isQuestFinished(questId: int): boolean
// @ts-ignore
showQuestMsg(msg: String): void
// @ts-ignore
forceStartQuest(questId: int, data: String): void
// @ts-ignore
forceStartQuest(questId: int, data: int, filler: boolean): void
// @ts-ignore
setText(text: String): void
// @ts-ignore
getText(): String
// @ts-ignore
forceStartQuest(questId: int): void
// @ts-ignore
forceCompleteQuest(questId: int): void
// @ts-ignore
spawnNpc(npcId: int): void
// @ts-ignore
spawnNpc(npcId: int, x: int, y: int): void
// @ts-ignore
spawnNpc(npcId: int, pos: Point): void
// @ts-ignore
start_DojoAgent(dojo: boolean, party: boolean): boolean
// @ts-ignore
removeNpc(mapid: int, npcId: int): void
// @ts-ignore
removeNpcforQ(mapid: int, npcId: int): void
// @ts-ignore
removeNpc(npcId: int): void
// @ts-ignore
getJob(): int
// @ts-ignore
getJobId(): int
// @ts-ignore
getBeginner(): int
// @ts-ignore
getTrueJobGrade(): int
// @ts-ignore
getJobName(jobId: int): String
// @ts-ignore
isBeginnerJob(): boolean
// @ts-ignore
getLevel(): int
// @ts-ignore
getLevelup(): void
// @ts-ignore
getFame(): int
// @ts-ignore
gainFame(famechange: int): void
// @ts-ignore
gainFame(famechange: int, show: boolean): void
// @ts-ignore
getNX(type: int): int
// @ts-ignore
gainNX(amount: int): boolean
// @ts-ignore
gainNX(type: int, amount: int): boolean
/**
 * 给玩家道具
 *
 * @param itemId 道具ID
 * @param quantity 道具数量
 * @param period 时间小于 1000 按天算 大于使用给的时候计算的默认时间
 */
// @ts-ignore
gainItemPeriod(itemId: int, quantity: short, period: long): void
/**
 * 给玩家道具
 *
 * @param itemId 道具ID
 * @param quantity 道具数量
 * @param period 时间小于 1000 按天算 大于使用给的时候计算的默认时间
 * @param owner 道具上面带角色名字
 */
// @ts-ignore
gainItemPeriod(itemId: int, quantity: short, period: long, owner: String): void
/**
 * 给玩家道具
 *
 * @param itemId 道具ID
 * @param quantity 道具数量
 */
// @ts-ignore
gainItem(itemId: int, quantity: short): void
/**
 * 给玩家道具
 *
 * @param itemId 道具ID
 * @param quantity 道具数量
 * @param state 是否有潜能
 */
// @ts-ignore
gainItem(itemId: int, quantity: short, state: int): void
/**
 * 给玩家道具
 *
 * @param itemId 道具ID
 * @param quantity 道具数量
 * @param randomStats 是否随机属性
 */
// @ts-ignore
gainItem(itemId: int, quantity: short, randomStats: boolean): void
/**
 * 给玩家道具
 *
 * @param itemId 道具ID
 * @param quantity 道具数量
 * @param owner 道具上面带角色名字
 */
// @ts-ignore
gainItem(itemId: int, quantity: short, owner: String): void
/**
 * 给玩家道具
 *
 * @param itemId 道具ID
 * @param quantity 道具数量
 * @param owner 道具上面带角色名字
 * @param state
 */
// @ts-ignore
gainItem(itemId: int, quantity: short, owner: String, state: int): void
/**
 * 给玩家道具
 *
 * @param itemId 道具ID
 * @param quantity 道具数量
 * @param randomStats 是否随机属性
 * @param slots 设置道具的可升级次数
 */
// @ts-ignore
gainItem(itemId: int, quantity: short, randomStats: boolean, slots: int): void
/**
 * 给玩家道具
 *
 * @param itemId 道具ID
 * @param quantity 道具数量
 * @param period 时间小于 1000 按天算 大于使用给的时候计算的默认时间
 */
// @ts-ignore
gainItem(itemId: int, quantity: short, period: long): void
/**
 * 给玩家道具
 *
 * @param itemId 道具ID
 * @param quantity 道具数量
 * @param state 潜能状态
 */
// @ts-ignore
gainItemByState(itemId: int, quantity: short, state: int): void
/**
 * 给玩家道具
 *
 * @param itemId 道具ID
 * @param quantity 道具数量
 * @param period 时间小于 1000 按天算 大于使用给的时候计算的默认时间
 * @param state 是否有潜能
 */
// @ts-ignore
gainItem(itemId: int, quantity: short, period: long, state: int): void
/**
 * 给玩家道具
 *
 * @param itemId 道具ID
 * @param quantity 道具数量
 * @param randomStats 是否随机属性
 * @param period 时间小于 1000 按天算 大于使用给的时候计算的默认时间
 * @param slots 设置道具的可升级次数
 */
// @ts-ignore
gainItem(itemId: int, quantity: short, randomStats: boolean, period: long, slots: int): void
/**
 * 给玩家道具
 *
 * @param itemId 道具ID
 * @param quantity 道具数量
 * @param randomStats 是否随机属性
 * @param period 时间小于 1000 按天算 大于使用给的时候计算的默认时间
 * @param slots 设置道具的可升级次数
 * @param owner 道具上面带角色名字
 */
// @ts-ignore
gainItem(itemId: int, quantity: short, randomStats: boolean, period: long, slots: int, owner: String): void
/**
 * 给玩家道具
 *
 * @param itemId 道具ID
 * @param quantity 道具数量
 * @param randomStats 是否随机属性
 * @param period 时间小于 1000 按天算 大于使用给的时候计算的默认时间
 * @param slots 设置道具的可升级次数
 * @param owner 道具上面带角色名字
 * @param state 是否带潜能
 */
// @ts-ignore
gainItem(itemId: int, quantity: short, randomStats: boolean, period: long, slots: int, owner: String, state: int): void
/**
 * 给玩家道具
 *
 * @param itemId 道具ID
 * @param quantity 道具数量
 * @param randomStats 是否随机属性
 * @param period 时间小于 1000 按天算 大于使用给的时候计算的默认时间
 * @param slots 设置道具的可升级次数
 * @param owner 道具上面带角色名字
 * @param state 是否带潜能
 * @param cg 当前角色的连接(MapleClient对象)
 */
// @ts-ignore
gainItem(itemId: int, quantity: short, randomStats: boolean, period: long, slots: int, owner: String, state: int, cg: GameClient): void
/**
 * 移除角色道具 数量为: 1
 *
 * @param itemId 道具ID
 */
// @ts-ignore
removeItem(itemId: int): boolean
// @ts-ignore
removeAllItem(type: int): void
// @ts-ignore
gainItemAndEquip(itemId: int, slot: short): void
// @ts-ignore
gainLockItem(itemId: int, quantity: short, lock: boolean, period: long): void
// @ts-ignore
gainLockItem(itemId: int, quantity: short, lock: boolean, period: long, from: String): void
// @ts-ignore
gainLockItem(itemId: int, quantity: short, lock: boolean, period: long, from: String, broad: boolean): void
// @ts-ignore
worldMessageItem(message: String, item: Item): void
// @ts-ignore
worldMessageYellow(message: String): void
// @ts-ignore
worldMessageEffect(message: String, type: int, time: int): void
// @ts-ignore
worldBrodcastEffect(itemid: int, message: String): void
// @ts-ignore
changeMusic(songName: String): void
// @ts-ignore
channelMessage(type: int, message: String): void
// @ts-ignore
worldMessage(message: String): void
// @ts-ignore
laba(type: int, message: String): void
// @ts-ignore
worldMessage(type: int, message: String): void
// @ts-ignore
worldSpouseMessage(type: int, message: String): void
// @ts-ignore
playerMessage(message: String): void
// @ts-ignore
mapMessage(message: String): void
// @ts-ignore
guildMessage(message: String): void
/**
 * 给玩家发送消息
 *
 * @param type 消息类型
 * @param message 消息内容
 */
// @ts-ignore
playerMessage(type: int, message: String): void
/**
 * 给玩家发送消息
 *
 * @param type 消息类型
 * @param message 消息内容
 */
// @ts-ignore
dropMessage(type: int, message: String): void
/**
 * 给当前地图的所有玩家发送信息
 *
 * @param type 消息类型
 * @param message 消息内容
 */
// @ts-ignore
mapMessage(type: int, message: String): void
/**
 * 发送给家族信息
 *
 * @param type 消息类型
 * @param message 消息内容
 */
// @ts-ignore
guildMessage(type: int, message: String): void
/**
 * 顶部公告
 *
 * @param message 消息内容
 */
// @ts-ignore
topMessage(message: String): void
// @ts-ignore
topMsg(string: String): void
// @ts-ignore
getPartySize(): int
// @ts-ignore
getPartyID(): int
// @ts-ignore
isChrInParty(cid: int): boolean
// @ts-ignore
getPartyAverageLevel(): int
// @ts-ignore
isLeader(): boolean
// @ts-ignore
partyMessage(partyId: int, string: String): void
// @ts-ignore
isAllPartyMembersAllowedJob(jobId: int): boolean
// @ts-ignore
isAllPartyMembersAllowedLevel(min: int, max: int): boolean
// @ts-ignore
isAllPartyMembersNotCoolDown(questID: int, coolDownTime: int): boolean
// @ts-ignore
getIsInCoolDownMemberName(questID: int, coolDownTime: int): String
// @ts-ignore
getCustomData(questid: int): String
// @ts-ignore
setCustomData(questid: int, customdata: String): void
// @ts-ignore
isAllPartyMembersHaveItem(itemId: int, quantity: int): boolean
// @ts-ignore
getNotHaveItemMemberName(itemId: int, quantity: int): String
// @ts-ignore
isAllPartyMembersAllowedPQ(pqName: String, times: int): boolean
// @ts-ignore
isAllPartyMembersAllowedPQ(pqName: String, times: int, day: int): boolean
// @ts-ignore
getNotAllowedPQMemberName(pqName: String, times: int): String
// @ts-ignore
getNotAllowedPQMemberName(string: String, times: int, day: int): String
// @ts-ignore
allMembersHere(): boolean
// @ts-ignore
warpParty(mapId: int): void
// @ts-ignore
warpParty(mapId: int, portal: int): void
// @ts-ignore
gainMeso(gain: long): void
// @ts-ignore
gainExp(gain: long): void
// @ts-ignore
gainExpR(gain: long): void
// @ts-ignore
addPartyTrait(t: String, e: int): void
// @ts-ignore
addTrait(t: String, e: int): void
// @ts-ignore
givePartyItems(itemId: int, quantity: short): void
// @ts-ignore
givePartyItems(itemId: int, quantity: short, removeAll: boolean): void
// @ts-ignore
gainExp_PQ(maxLevel: int, mod: double): void
// @ts-ignore
givePartyExp_PQ(maxLevel: int, mod: double): void
// @ts-ignore
givePartyExp(amount: long): void
// @ts-ignore
givePartyNX(amount: int): void
// @ts-ignore
endPartyQuest(amount: int): void
// @ts-ignore
removeFromParty(itemId: int): void
// @ts-ignore
useSkill(skillId: int, skillLevel: int): void
// @ts-ignore
useItem(itemId: int): void
// @ts-ignore
cancelItem(itemId: int): void
// @ts-ignore
getMorphState(): int
// @ts-ignore
removeAll(itemId: int): void
// @ts-ignore
gainCloseness(closeness: int, index: int): void
// @ts-ignore
gainClosenessAll(closeness: int): void
// @ts-ignore
resetMap(mapId: int): void
// @ts-ignore
getMapId(): int
// @ts-ignore
haveMonster(mobId: int): boolean
// @ts-ignore
getChannelNumber(): int
// @ts-ignore
getMonsterByID(mobid: int): boolean
/**
 * 获取当前中指定地图的怪物数量
 *
 * @param mapId 地图ID
 * @return
 */
// @ts-ignore
getMonsterCount(mapId: int): int
/**
 * 获取当前中指定地图的怪物数量
 *
 * @param mapId 地图ID
 * @param mobid 怪物ID
 * @return
 */
// @ts-ignore
getMonsterCount(mapId: int, mobid: int): int
// @ts-ignore
teachSkill(skillId: int, skilllevel: int, masterlevel: byte): void
// @ts-ignore
teachSkill(skillId: int, skilllevel: int): void
// @ts-ignore
getSkillLevel(skillId: int): int
// @ts-ignore
getPlayerCount(mapId: int): int
// @ts-ignore
dojo_getUp(): void
// @ts-ignore
instantMapWarp(by2: byte): void
// @ts-ignore
currentMapWarp(type: int, pos: Point): void
// @ts-ignore
teleport(n: int): void
// @ts-ignore
teleport(n: int, n2: int, point: Point): void
// @ts-ignore
dojoAgent_NextMap(dojo: boolean, fromresting: boolean): boolean
// @ts-ignore
dojoAgent_NextMap(dojo: boolean, fromresting: boolean, mapid: int): boolean
// @ts-ignore
dojo_getPts(): int
// @ts-ignore
rememberMap(loc: String): void
// @ts-ignore
saveReturnLocation(loc: String): void
// @ts-ignore
clearSavedLocation(loc: String): void
// @ts-ignore
summonMsg(msg: String): void
// @ts-ignore
summonMsg(type: int): void
// @ts-ignore
showInstruction(msg: String, width: int, height: int): void
// @ts-ignore
playerSummonHint(summon: boolean): void
// @ts-ignore
getInfoQuest(questId: int): String
// @ts-ignore
updateInfoQuest(questId: int, data: String): void
// @ts-ignore
getEvanIntroState(data: String): boolean
// @ts-ignore
updateEvanIntroState(data: String): void
// @ts-ignore
Aran_Start(): void
// @ts-ignore
evanTutorial(data: String, v1: int): void
// @ts-ignore
AranTutInstructionalBubble(data: String): void
// @ts-ignore
TutInstructionalBalloon(data: String): void
// @ts-ignore
showWZEffect(data: String): void
// @ts-ignore
showEffect(effect: String): void
// @ts-ignore
setAnimationEffect(path: String, name: String): void
// @ts-ignore
playSound(sound: String): void
// @ts-ignore
playSound(broadcast: boolean, sound: String): void
// @ts-ignore
startMapEffect(msg: String, itemId: int): void
// @ts-ignore
showWeatherEffectNotice(s: String, n: int, n2: int): void
// @ts-ignore
showWeatherEffectNoticeY(s: String, n: int, n2: int, n3: int): void
// @ts-ignore
showMapEffect(path: String): void
// @ts-ignore
EnableUI(i: short): void
// @ts-ignore
EnableUI(i: short, block: boolean): void
// @ts-ignore
DisableUI(enabled: boolean): void
// @ts-ignore
MovieClipIntroUI(enabled: boolean): void
// @ts-ignore
lockUI(): void
// @ts-ignore
unlockUI(): void
// @ts-ignore
getName(itemId: int): String
// @ts-ignore
gainPetItem(itemid: int): void
// @ts-ignore
gainPetItem(itemid: int, quantity: short): void
// @ts-ignore
gainPet(itemId: int, name: String, level: int, closeness: int, fullness: int, period: long, flags: short): void
// @ts-ignore
removeSlot(invType: int, slot: short, quantity: short): void
// @ts-ignore
gainGP(gp: int): void
// @ts-ignore
getGP(): int
// @ts-ignore
itemQuantity(itemId: int): int
// @ts-ignore
isAllReactorState(reactorId: int, state: int): boolean
// @ts-ignore
getCurrentTime(): long
// @ts-ignore
spawnMonster(mobId: int): void
// @ts-ignore
spawnMonster(mobId: int, x: int, y: int): void
// @ts-ignore
spawnMonster(mobId: int, quantity: int, x: int, y: int): void
// @ts-ignore
spawnMonster(mobId: int, quantity: int, pos: Point): void
// @ts-ignore
sendNPCText(text: String, npcId: int): void
// @ts-ignore
getTempFlag(flag: int): boolean
// @ts-ignore
nextInt(arg0: int): int
// @ts-ignore
achievement(a: int): void
// @ts-ignore
randInt(arg0: int): int
// @ts-ignore
getProfessions(): int
// @ts-ignore
setVip(vip: int, period: long): void
// @ts-ignore
getVip(): int
// @ts-ignore
isVip(): boolean
// @ts-ignore
setVip(vip: int): void
// @ts-ignore
setViptime(period: long): void
// @ts-ignore
getBossLog(bossid: String): int
// @ts-ignore
getBossLog(bossid: String, type: int): int
// @ts-ignore
setBossLog(bossid: String): void
// @ts-ignore
setBossLog(bossid: String, type: int): void
// @ts-ignore
setBossLog(bossid: String, type: int, count: int): void
// @ts-ignore
resetBossLog(bossid: String): void
// @ts-ignore
resetBossLog(bossid: String, type: int): void
// @ts-ignore
setPartyBossLog(bossid: String): void
// @ts-ignore
setPartyBossLog(bossid: String, type: int): void
// @ts-ignore
setPartyBossLog(bossid: String, type: int, count: int): void
// @ts-ignore
getBossLogAcc(bossid: String): int
// @ts-ignore
setBossLogAcc(bossid: String): void
// @ts-ignore
setBossLogAcc(bossid: String, bosscount: int): void
// @ts-ignore
getClock(time: int): void
// @ts-ignore
openWeb(web: String): void
// @ts-ignore
openURL(web: String): void
// @ts-ignore
openWebUI(n: int, s: String, s2: String): void
// @ts-ignore
isCanPvp(): boolean
// @ts-ignore
showDoJangRank(type: byte): void
// @ts-ignore
MarrageChecking(): int
// @ts-ignore
getPartyFormID(): int
// @ts-ignore
getGMLevel(): int
// @ts-ignore
getReborns(): int
// @ts-ignore
getReborns1(): int
// @ts-ignore
getReborns2(): int
// @ts-ignore
getReborns3(): int
// @ts-ignore
doReborn(type: int): void
// @ts-ignore
doReborn(type: int, ap: int): void
// @ts-ignore
spouseMessage(op: int, msg: String): void
// @ts-ignore
sendPolice(text: String, dc: boolean): void
// @ts-ignore
givePartyHonorExp(gain: int, show: boolean): void
// @ts-ignore
getTime(): String
// @ts-ignore
checkPartyEvent(minLevel: int, maxLevel: int, minPartySize: int, maxPartySize: int, itemId: int): boolean
// @ts-ignore
getPlayerPoints(): int
// @ts-ignore
setPlayerPoints(gain: int): void
// @ts-ignore
gainPlayerPoints(gain: int): void
// @ts-ignore
getPlayerEnergy(): int
// @ts-ignore
setPlayerEnergy(gain: int): void
// @ts-ignore
gainPlayerEnergy(gain: int): void
// @ts-ignore
getEventCount(eventId: String): int
// @ts-ignore
getEventCount(eventId: String, type: int): int
// @ts-ignore
setEventCount(eventId: String): void
// @ts-ignore
setEventCount(eventId: String, type: int): void
// @ts-ignore
setEventCount(eventId: String, type: int, count: int): void
// @ts-ignore
resetEventCount(eventId: String): void
// @ts-ignore
resetEventCount(eventId: String, type: int): void
// @ts-ignore
setPartyEventCount(eventId: String): void
// @ts-ignore
setPartyEventCount(eventId: String, type: int): void
// @ts-ignore
setPartyEventCount(eventId: String, type: int, count: int): void
// @ts-ignore
checkPartyEventCount(eventId: String): boolean
// @ts-ignore
checkPartyEventCount(eventId: String, checkcount: int): boolean
// @ts-ignore
getNewEquip(equipid: int): Equip
// @ts-ignore
getEquipBySlot(slot: short): Equip
// @ts-ignore
getEquippedBySlot(slot: short): Equip
// @ts-ignore
updateEquip(item: Item): void
/**
 * 修改角色武器的攻击上限
 * 如果角色武器为空 或者不是武器 返回 假
 * 如果角色武器新的攻击上限属性小于0 或者大于1亿也返回 假
 */
// @ts-ignore
changeLimitBreak(amount: long): boolean
/**
 * 获取角色武器的攻击突破上限
 */
// @ts-ignore
getLimitBreak(): long
// @ts-ignore
WeaponLimitBreak(limitBreak: long): boolean
// @ts-ignore
getRandomPotential(slot: short, potId: int): int
// @ts-ignore
changePotential(slot: short, potline: int, potId: int, show: boolean): boolean
// @ts-ignore
getSubcategory(): byte
// @ts-ignore
getMapleEquipOnlyId(): int
// @ts-ignore
addFromDrop(c: GameClient, item: Item, show: boolean): void
// @ts-ignore
newItem(id: int, position: byte, quantity: short): Item
// @ts-ignore
newItem(id: int, position: byte, quantity: short, flag: short): Item
// @ts-ignore
addByItem(item: Item): void
// @ts-ignore
changeDamageSkin(id: int): void
// @ts-ignore
getMonster(mobid: int): Mob
// @ts-ignore
getNextDayDiff(day: int): long
// @ts-ignore
getShowItemGain(itemId: int, quantity: short, inChat: boolean): void
/**
 * 发送NPC右下角对话，单位：分钟
 *
 * @param npcid 显示的NPCID, 为0的话 显示的是玩家自己
 * @param text 文本内容
 * @param time 持续时间
 */
// @ts-ignore
getNpcNotice(npcid: int, text: String, time: int): void
// @ts-ignore
getWp(): int
// @ts-ignore
setWp(wp: int): void
// @ts-ignore
gainWp(wp: int): void
// @ts-ignore
enterCS(): void
// @ts-ignore
playMovie(data: String, show: boolean): void
// @ts-ignore
openUI(id: int): void
// @ts-ignore
updatePet(object: Object): void
// @ts-ignore
changePetColor(index: int): boolean
// @ts-ignore
canSpawn(mapid: int, point: Point): boolean
// @ts-ignore
checkPartyMemberNearby(point: Point): boolean
// @ts-ignore
deleteCharacter(cid: int): int
// @ts-ignore
dispelBuff(skillid: int): void
// @ts-ignore
displayNode(mob: Mob): void
// @ts-ignore
EventGainNX(): void
// @ts-ignore
fieldGravefall(count: int, type1: int, type2: int): void
// @ts-ignore
gainPQPoint(): void
// @ts-ignore
gainSailBouns(): boolean
// @ts-ignore
getSailStat(): int
// @ts-ignore
getSailCoins(): int
// @ts-ignore
setCanSail(): void
// @ts-ignore
GainSpecial(type: int): void
// @ts-ignore
getAccountName(): String
// @ts-ignore
getCashItemlist(): List
// @ts-ignore
getChoiceText(type: byte, mode: byte, npc: int): void
// @ts-ignore
getOnlineTime(): int
// @ts-ignore
getTodayOnlineTime(): int
// @ts-ignore
initTodayOnlineTime(): void
// @ts-ignore
spawnNpcForPlayer(mapid: int, id: int, pos: Point): void
// @ts-ignore
getSpawnPoint(mapid: int): Point
// @ts-ignore
isAdmin(): boolean
// @ts-ignore
isMarried(): boolean
// @ts-ignore
nextNodeAction(mobid: int, time: int): void
// @ts-ignore
outputFileError(throwable: Throwable): void
// @ts-ignore
sendRemoveNPC(npcid: int): void
// @ts-ignore
sendPyramidEnergy(object: String, amount: String): void
// @ts-ignore
spawnPortal(): void
// @ts-ignore
enableActions(): void
// @ts-ignore
spawnReactorOnGroundBelow(id: int, x: int, y: int): void
// @ts-ignore
sendESLab(): void
// @ts-ignore
sendSceneUI(): void
// @ts-ignore
sendUIWindow(op: int, npc: int): void
// @ts-ignore
setDirection(z: int): void
// @ts-ignore
showVisitorResult(type: int): void
// @ts-ignore
showVisitoKillResult(total: int): void
// @ts-ignore
showEventMesssage(type: int, dally: int, text: String): void
// @ts-ignore
broadcastWeatherEffectNotice(s: String, n: int, n2: int): void
// @ts-ignore
showPQEffect(type: int, str: String, count: String): void
// @ts-ignore
showScreenShaking(mapID: int, stop: boolean): void
// @ts-ignore
showSetAction(str: String, act: String): void
// @ts-ignore
updatePartyOneInfo(questid: int, key: String, value: String): void
// @ts-ignore
updatePartyInfoQuest(questid: int, data: String): void
// @ts-ignore
updatePartyInfoQuest(questid: int, data: String, check: boolean): void
/**
 * 充值函数 - 获取
 *
 * @param type 1 = 当前充值金额 2 = 已经消费金额 3 = 总计消费金额 4 = 充值奖励
 * @return
 */
// @ts-ignore
getHyPay(type: int): int
/**
 * 充值函数 - 消费, 如需增加请加负号, 如: -100
 *
 * @param pay 1 = 当前充值金额 2 = 已经消费金额 3 = 总计消费金额 4 = 充值奖励
 * @return
 */
// @ts-ignore
addHyPay(pay: int): int
/**
 * 充值函数 - 加减消费奖励
 *
 * @param pay
 * @return
 */
// @ts-ignore
delPayReward(pay: int): int
/**
 * 制作道具
 *
 * @param id 道具ID
 * @param str 力量
 * @param dex 敏捷
 * @param ints 智力
 * @param luk 运气
 * @param watk 物攻
 * @param matk 魔攻
 * @param period 时间
 */
// @ts-ignore
makeitem(id: int, str: short, dex: short, ints: short, luk: short, watk: short, matk: short, period: long): void
/**
 * 制作道具
 *
 * @param id 道具ID
 * @param str 力量
 * @param dex 敏捷
 * @param ints 智力
 * @param luk 运气
 * @param watk 物攻
 * @param matk 魔攻
 * @param period 时间
 * @param state 潜能状态
 */
// @ts-ignore
makeitem(id: int, str: short, dex: short, ints: short, luk: short, watk: short, matk: short, period: long, state: int): void
/**
 * 制作道具
 *
 * @param id 道具ID
 * @param str 力量
 * @param dex 敏捷
 * @param ints 智力
 * @param luk 运气
 * @param watk 物攻
 * @param matk 魔攻
 * @param period 时间
 * @param state 潜能状态
 * @param owner 道具签名
 */
// @ts-ignore
makeitem(id: int, str: short, dex: short, ints: short, luk: short, watk: short, matk: short, period: long, state: int, owner: String): void
// @ts-ignore
isSocketDone(s2: short): int
// @ts-ignore
startQuestTimeLimitTask(n2: int, n3: int): void
// @ts-ignore
show5thJobEffect(): void
// @ts-ignore
setLTime(): void
// @ts-ignore
gainVCraftCore(n2: int): void
/**
 * 斗燃消息提示框
 *
 * @param message 消息内容
 * @param second 持续时间, 单位: 秒
 */
// @ts-ignore
showCombustionMessage(message: String, second: int): void
// @ts-ignore
checkMapleUnion(): boolean
// @ts-ignore
getUnionUpdateInfo(sb: StringBuilder): boolean
// @ts-ignore
updateMapleUnion(): String
// @ts-ignore
openMapleUnion(): void
// @ts-ignore
getExpNeededForLevel(level: int): long
// @ts-ignore
gainRandVSkill(n: int, b: boolean): boolean
// @ts-ignore
gainRandVSkill(): boolean
// @ts-ignore
customSqlInsert(sql: String, values: Object): void
// @ts-ignore
customSqlUpdate(sql: String, values: Object): int
// @ts-ignore
customSqlResult(sql: String, values: Object): List<Map<String,Object>>
// @ts-ignore
setScriptPath(scriptPath: String): void
// @ts-ignore
getScriptPath(): String
// @ts-ignore
setPetSN(petSN: long): void
// @ts-ignore
getPetSN(): long
// @ts-ignore
setNumber(number: int): void
// @ts-ignore
getNumber(): int
// @ts-ignore
setUsePoint(usePoint: boolean): void
// @ts-ignore
isUsePoint(): boolean
// @ts-ignore
getAllPetItem(): List<Item>
// @ts-ignore
showScreenEffect(s: String): void
// @ts-ignore
showTopScreenEffect(s: String, n: int): void
// @ts-ignore
showScreenDelayedEffect(s: String, n: int): void
// @ts-ignore
showScreenAutoLetterBox(s: String, n: int): void
// @ts-ignore
broadcastScreenEffect(s: String): void
// @ts-ignore
broadcastScreenEffect(n: int, s: String, n2: int): void
// @ts-ignore
playFieldSoundMap(s: String): void
// @ts-ignore
playFieldSound(s: String): void
// @ts-ignore
setSpineScreen(s: String, s2: String): void
// @ts-ignore
setSpineScreen(n: int, s: String, s2: String): void
// @ts-ignore
setSpineScreen(n: int, s: String, s2: String, s3: String): void
// @ts-ignore
offSpineScreen(s: String, n: int): void
// @ts-ignore
playExclSoundWithDownBGM(s: String): void
// @ts-ignore
setUserEmotionLocal(n: int, n2: int): void
// @ts-ignore
showBlindEffect(b: boolean): void
// @ts-ignore
showSpecialUI(b: boolean, s: String): void
// @ts-ignore
showPortalEffect(s: String, n: int): void
// @ts-ignore
setInGameCurNodeEventEnd(inGameCurNode: boolean): void
// @ts-ignore
setStandAloneMode(b: boolean): void
// @ts-ignore
setDirectionMod(b: boolean): void
// @ts-ignore
setInGameDirectionMode(b: boolean, b2: boolean, b3: boolean, b4: boolean): void
// @ts-ignore
showDimensionMirror(): void
// @ts-ignore
getQuestCustomData(questid: int): String
// @ts-ignore
updateOneQuestInfo(n: int, s: String, s2: String): void
// @ts-ignore
updateQuestInfo(n: int, s: String): void
// @ts-ignore
getQuestInfo(n: int): String
// @ts-ignore
getQuestInfo(n: int, s: String): String
// @ts-ignore
setUserTimerInfo(n: int, n2: int, n3: int, n4: int, n5: int): void
// @ts-ignore
gainQuestPoint(questId: int, value: int): void
// @ts-ignore
getQuestPoint(questid: int): int
// @ts-ignore
showSystemMessage(msg: String): void
// @ts-ignore
dropAlertNotice(msg: String): void
// @ts-ignore
setObjectState(s: String): void
// @ts-ignore
playSoundWithMuteBGM(wzPath: String): void
// @ts-ignore
getReactorStat(s: String): int
// @ts-ignore
showAvatarOriented(s: String): void
// @ts-ignore
showAvatarOrientedRepeat(b: boolean, s: String): void
// @ts-ignore
gainArcItem(itemId: int): boolean
// @ts-ignore
getEventMobSize(): int
// @ts-ignore
getMapleUnionLevel(): int
// @ts-ignore
doMapleUnionLevelUp(): boolean
// @ts-ignore
updateTowerRank(stage: int, time: int): void
// @ts-ignore
updateWorldShareInfo(n: int, s: String, s2: String): void
// @ts-ignore
updateWorldShareInfo(n: int, s: String): void
// @ts-ignore
getWorldShareInfo(n: int): String
// @ts-ignore
getWorldShareInfo(n: int, s: String): String
// @ts-ignore
doneCollection(): void
// @ts-ignore
registerMobCollection(mobId: int): void
// @ts-ignore
checkMobCollection(n: int): boolean
// @ts-ignore
checkMobComplete(s: String): boolean
// @ts-ignore
handleRandCollection(n: int): void
// @ts-ignore
registerMobCollectionQuest(): boolean
/**
 * 屏幕中上方黄色消息
 *
 * @param msg
 */
// @ts-ignore
showScriptProgressMessage(msg: String): void
// @ts-ignore
showScriptProgressItemMessage(n: int, s: String): void
// @ts-ignore
scriptProgressItemMessage(n: int, s: String): void
// @ts-ignore
setStaticScreenMessage(n: int, s: String, b: boolean): void
// @ts-ignore
offStaticScreenMessage(): void
// @ts-ignore
showProgressMessageFont(msg: String, fontNameType: int, fontSize: int, fontColorType: int, fadeOutDelay: int): void
// @ts-ignore
showBalloonMsg(msg: String, width: int, timeout: int, point: Point): void
// @ts-ignore
showPopupSay(npcid: int, time: int, msg: String, sound: String): void
// @ts-ignore
setTicktockCrane(): void
// @ts-ignore
getItemBySN(n: long): Item
// @ts-ignore
updateItem(petItem: Item): void
// @ts-ignore
setLayerOn(n: int, s: String, n2: int, n3: int, n4: int, s2: String, n5: int): void
// @ts-ignore
setLayerMove(n: int, s: String, n2: int, n3: int): void
// @ts-ignore
setLayerOff(n: int, s: String): void
// @ts-ignore
setOverlapDetail(n: int, n2: int, n3: int, b: boolean): void
// @ts-ignore
removeOverlapDetail(n: int): void
// @ts-ignore
setLayerBlind(b: boolean, n: int, n2: int): void
// @ts-ignore
setLayerBlindWhite(b: boolean, n: int, n2: int): void
// @ts-ignore
openVCoreUI(): void
}
declare class NPCConversationManager extends AbstractPlayerInteraction {
// @ts-ignore
showMobImg(mob: int): String
// @ts-ignore
getType(): ScriptType
// @ts-ignore
getNpc(): int
// @ts-ignore
getSlideMenuSelection(type: int): String
// @ts-ignore
getSlideMenuDataIntegers(type: int, selection: int): int[]
// @ts-ignore
hairExists(id: int): boolean
// @ts-ignore
faceExists(id: int): boolean
// @ts-ignore
setHair(hair: int): void
// @ts-ignore
setFace(face: int): void
// @ts-ignore
setSkin(color: int): void
// @ts-ignore
getCanHair(hairs: int[]): int[]
// @ts-ignore
getCanFace(faces: int[]): int[]
// @ts-ignore
setAndroidHair(hair: int): void
// @ts-ignore
setAndroidFace(face: int): void
// @ts-ignore
setAndroidSkin(skin: int): void
// @ts-ignore
setRandomAvatarA(ticket: int, args_all: int): int
// @ts-ignore
setAvatarA(ticket: int, args: int): int
// @ts-ignore
setRandomAvatar(ticket: int, args_all: int): int
// @ts-ignore
setRandomAvatar(ticket: int, args_all: int[], isSecond: boolean): int
// @ts-ignore
setAvatar(ticket: int, args: int): int
// @ts-ignore
setAvatar(ticket: int, args: int, isSecond: boolean): int
// @ts-ignore
getAskMIXHair(string: String): void
// @ts-ignore
getAskMIXHairNew(string: String): void
// @ts-ignore
getAskCustomMIXHair(string: String): void
// @ts-ignore
sendStorage(): void
// @ts-ignore
openShop(id: int): void
// @ts-ignore
openShopNPC(id: int): void
// @ts-ignore
gainGachaponItem(id: int, quantity: int): int
// @ts-ignore
gainGachaponItem(id: int, quantity: int, msg: String): int
// @ts-ignore
gainGachaponItem(id: int, quantity: int, msg: String, rareness: int): int
// @ts-ignore
gainGachaponItem(id: int, quantity: int, msg: String, rareness: int, period: long): int
// @ts-ignore
gainGachaponItem(id: int, quantity: int, msg: String, rareness: int, buy: boolean): int
// @ts-ignore
gainGachaponItem(id: int, quantity: int, msg: String, rareness: int, buy: boolean, period: long): int
// @ts-ignore
changeJob(jobId: int): void
// @ts-ignore
isValidJob(jobId: int): boolean
// @ts-ignore
getJobNameById(jobId: int): String
/**
 * 开始任务
 *
 * @param questId 任务ID
 */
// @ts-ignore
startQuest(questId: int): void
/**
 * 完成任务
 *
 * @param questId 任务ID
 */
// @ts-ignore
completeQuest(questId: int): void
/**
 * 放弃任务
 *
 * @param questId 任务ID
 */
// @ts-ignore
forfeitQuest(questId: int): void
/**
 * 强制开始任务
 *
 * @param questId 任务ID
 */
// @ts-ignore
forceStartQuest(questId: int): void
// @ts-ignore
forceStartQuest(data: String): void
// @ts-ignore
getQuestId(): int
/**
 * 强制完成任务
 *
 * @param questId
 */
// @ts-ignore
forceCompleteQuest(questId: int): void
// @ts-ignore
getMeso(): long
// @ts-ignore
gainAp(amount: int): void
// @ts-ignore
expandInventory(type: byte, amt: int): void
// @ts-ignore
unequipEverything(): void
// @ts-ignore
showEffect(broadcast: boolean, effect: String): void
// @ts-ignore
playSound(broadcast: boolean, sound: String): void
// @ts-ignore
environmentChange(env: String): void
// @ts-ignore
environmentChange(env: String, info: int): void
// @ts-ignore
environmentChange(broadcast: boolean, env: String, info: int): void
// @ts-ignore
sendchangeMap(mapid: int): void
// @ts-ignore
directionEffect(data: String, value: int, x: int, y: int, z: int): void
// @ts-ignore
sendRedLeaf(viewonly: boolean, autocheck: boolean): void
// @ts-ignore
updateBuddyCapacity(capacity: int): void
// @ts-ignore
getBuddyCapacity(): int
// @ts-ignore
partyMembersInMap(): int
// @ts-ignore
warpPartyWithExp(mapId: int, exp: int): void
// @ts-ignore
warpPartyWithExpMeso(mapId: int, exp: int, meso: int): void
// @ts-ignore
resetReactors(): void
// @ts-ignore
genericGuildMessage(code: int): void
// @ts-ignore
disbandGuild(): void
// @ts-ignore
getGuildCapacity(): int
// @ts-ignore
displayGuildRanks(): void
// @ts-ignore
displayGuildRanks(show: boolean): void
// @ts-ignore
getCreateGuildCost(): int
// @ts-ignore
isPlayerInstance(): boolean
/**
 * 修改装备属性
 *
 * @param slot
 * @param type
 * @param amount
 */
// @ts-ignore
changeStat(slot: short, type: int, amount: int): void
// @ts-ignore
changeStat(slot: short, type: String, amount: int, inpack: boolean): void
// @ts-ignore
changePotentialStat(slot: short, type: int, amount: int): void
// @ts-ignore
openDuey(): void
// @ts-ignore
openMerchantItemStore(): void
// @ts-ignore
sendPVPWindow(): void
// @ts-ignore
sendPartyWindow(): void
// @ts-ignore
sendPartyWindow(id: int): void
// @ts-ignore
sendRepairWindow(): void
// @ts-ignore
sendProfessionWindow(): void
// @ts-ignore
sendEventWindow(): void
// @ts-ignore
sendLinkSkillWindow(skillId: int): void
// @ts-ignore
getMulungRanking(): void
// @ts-ignore
getDojoPoints(): int
// @ts-ignore
getDojoRecord(): int
// @ts-ignore
setDojoRecord(reset: boolean): void
// @ts-ignore
setDojoRecord(reset: boolean, take: boolean, amount: int): void
// @ts-ignore
start_DojoAgent(dojo: boolean, party: boolean): boolean
// @ts-ignore
maxStats(): void
// @ts-ignore
getEquip(itemid: int): Equip
// @ts-ignore
setExpiration(statsSel: Object, expire: long): void
// @ts-ignore
setLock(statsSel: Object): void
// @ts-ignore
setItemLock(): void
// @ts-ignore
setItemLock(lock: boolean): void
// @ts-ignore
setItemLock(slot: int, lock: boolean): void
// @ts-ignore
addFromDrop(statsSel: Object): boolean
// @ts-ignore
replaceItem(slot: int, invType: int, statsSel: Object, offset: int, type: String): boolean
// @ts-ignore
replaceItem(slot: int, invType: int, statsSel: Object, offset: int, type: String, takeSlot: boolean): boolean
// @ts-ignore
replaceItem(slot: int, invType: int, statsSel: Object, upgradeSlots: int): boolean
// @ts-ignore
isCash(itemId: int): boolean
// @ts-ignore
getTotalStat(itemId: int): int
// @ts-ignore
getReqLevel(itemId: int): int
// @ts-ignore
getEffect(buff: int): MapleStatEffect
// @ts-ignore
buffGuild(buff: int, duration: int, msg: String): void
// @ts-ignore
createAlliance(alliancename: String): boolean
// @ts-ignore
addCapacityToAlliance(): boolean
// @ts-ignore
disbandAlliance(): boolean
// @ts-ignore
hasSkill(skillid: int): boolean
// @ts-ignore
maxAllSkills(): void
// @ts-ignore
maxSkillsByJob(): void
// @ts-ignore
clearSkills(): void
// @ts-ignore
maxHyperSkillsByJob(): void
// @ts-ignore
maxBeginnerSkills(): void
// @ts-ignore
resetStats(str: int, dex: int, z: int, luk: int): void
// @ts-ignore
dropItem(slot: int, invType: int, quantity: int): boolean
// @ts-ignore
removeItem(slot: int, invType: int, quantity: int): boolean
// @ts-ignore
getAllPotentialInfo(): List<Integer>
// @ts-ignore
getAllPotentialInfoSearch(content: String): List<Integer>
// @ts-ignore
getPotentialInfo(id: int): String
// @ts-ignore
sendRPS(): void
// @ts-ignore
setQuestRecord(ch: Object, questid: int, data: String): void
// @ts-ignore
putKey(key: int, type: int, action: int): void
// @ts-ignore
doRing(name: String, itemid: int): void
// @ts-ignore
isEligibleName(t: String): boolean
// @ts-ignore
checkDrop(mobId: int, type: int): String
// @ts-ignore
checkDrop(mobId: int): String
// @ts-ignore
checkMapDrop(type: int): String
// @ts-ignore
checkMapDrop(): String
// @ts-ignore
getLeftPadded(input: String, padchar: char, length: int): String
// @ts-ignore
getReadableMillis(startMillis: long, endMillis: long): String
// @ts-ignore
canCreateUltimate(): boolean
// @ts-ignore
sendUltimateExplorer(): void
// @ts-ignore
sendPendant(b: boolean): void
// @ts-ignore
getSpace(type: byte): short
// @ts-ignore
haveSpace(type: int): boolean
// @ts-ignore
haveSpaceForId(itemid: int): boolean
// @ts-ignore
fakeRelog(): void
// @ts-ignore
EquipList(c: GameClient): String
// @ts-ignore
UseList(c: GameClient): String
// @ts-ignore
CashList(c: GameClient): String
// @ts-ignore
EtcList(c: GameClient): String
// @ts-ignore
SetupList(c: GameClient): String
// @ts-ignore
deleteAll(itemId: int): void
// @ts-ignore
useNebuliteGachapon(): int
// @ts-ignore
giveMountSkill(itemId: int, mountSkillId: int, period: long): void
// @ts-ignore
giveMountSkill(itemId: int, mountSkillId: int, period: long, test: boolean): void
// @ts-ignore
checkLevelAndItem(minLevel: int, maxLevel: int, itemId: int): boolean
// @ts-ignore
checkLevelAndItem(minLevel: int, maxLevel: int, itemId: int, minSize: int): boolean
/**
 * 改变角色内在能力的技能
 */
// @ts-ignore
changeInnerSkill(skillId: int, skillevel: int, position: int, rank: int): void
// @ts-ignore
changeInnerSkill(skillId: int, skillevel: int, position: int, rank: int, replace: boolean): void
/**
 * 角色是否有变身效果
 *
 * @return true ? 有 : 没有
 */
// @ts-ignore
isMorphed(): boolean
/**
 * 角色变身后的效果值ID
 *
 * @return 1=蘑菇，2=猪，3=外星人
 */
// @ts-ignore
getMorphValue(): int
// @ts-ignore
getInventorys(type: int): String
// @ts-ignore
getItem(slot: int, type: int): Item
// @ts-ignore
changeitemxx(invType: int, slot: int, str: int, dex: int, int_: int, luk: int, watk: int, matk: int, hc: int): boolean
// @ts-ignore
getLastSMType(): int
}
declare class Item {
// @ts-ignore
copyWithQuantity(quantitys: short): Item
// @ts-ignore
copy(): Item
// @ts-ignore
getDataId(): int
// @ts-ignore
setItemId(id: int): void
// @ts-ignore
getPosition(): short
// @ts-ignore
setPosition(position: short): void
// @ts-ignore
getAttribute(): short
// @ts-ignore
setAttribute(attribute: short): void
// @ts-ignore
getQuantity(): short
// @ts-ignore
setQuantity(quantity: short): void
// @ts-ignore
getType(): byte
// @ts-ignore
getTitle(): String
// @ts-ignore
setOwner(owner: String): void
// @ts-ignore
removeFlag(flag: short): void
// @ts-ignore
addFlag(flag: short): void
// @ts-ignore
getDateExpire(): long
// @ts-ignore
setExpiration(expire: long): void
// @ts-ignore
getLog(): String
// @ts-ignore
setLog(GameMaster_log: String): void
// @ts-ignore
getInventoryId(): long
// @ts-ignore
setSN(sn: long): void
// @ts-ignore
getFamiliarid(): int
// @ts-ignore
setFamiliarid(familiarid: int): void
/**
 * 有这个ID的道具必须是装备道具 且不是点装 且这个ID小于等于0 且这个道具为装备道具类型
 */
// @ts-ignore
hasSetOnlyId(): boolean
// @ts-ignore
getInventoryId(): int
// @ts-ignore
setEquipOnlyId(OnlyId: int): void
// @ts-ignore
getInventoryId(): long
// @ts-ignore
setInventoryId(ui: long): void
// @ts-ignore
getGiftFrom(): String
// @ts-ignore
setGiftFrom(gf: String): void
// @ts-ignore
getESPos(): short
// @ts-ignore
setESPos(espos: short): void
// @ts-ignore
isSkillSkin(): boolean
// @ts-ignore
compareTo(other: Item): int
// @ts-ignore
equals(obj: Object): boolean
// @ts-ignore
toString(): String
// @ts-ignore
getName(): String
// @ts-ignore
getData(): ItemData
// @ts-ignore
logItem(playerId: int, log: String): void
// @ts-ignore
getBagIndex(): int
// @ts-ignore
setBagIndex(bagIndex: int): void
}
declare class Equip extends Item {
// @ts-ignore
copy(): Item
// @ts-ignore
inherit(srcEquip: Equip, decEquip: Equip): Item
// @ts-ignore
getType(): byte
// @ts-ignore
copyPotential(equip: Equip): Equip
// @ts-ignore
getRestUpgradeCount(): byte
// @ts-ignore
setRestUpgradeCount(restUpgradeCount: byte): void
// @ts-ignore
getTotalStr(): short
// @ts-ignore
getStr(): short
// @ts-ignore
setStr(str: short): void
// @ts-ignore
getTotalDex(): short
// @ts-ignore
getDex(): short
// @ts-ignore
setDex(dex: short): void
// @ts-ignore
getTotalInt(): short
// @ts-ignore
getInt(): short
// @ts-ignore
setInt(_int: short): void
// @ts-ignore
getTotalLuk(): short
// @ts-ignore
getLuk(): short
// @ts-ignore
setLuk(luk: short): void
// @ts-ignore
getTotalHp(): short
// @ts-ignore
getHp(): short
// @ts-ignore
setHp(hp: short): void
// @ts-ignore
getTotalMp(): short
// @ts-ignore
getMp(): short
// @ts-ignore
setMp(mp: short): void
// @ts-ignore
getTotalPad(): short
// @ts-ignore
getWatk(): short
// @ts-ignore
setWatk(watk: short): void
// @ts-ignore
getTotalMad(): short
// @ts-ignore
getMatk(): short
// @ts-ignore
setMatk(matk: short): void
// @ts-ignore
getTotalWdef(): short
// @ts-ignore
getWdef(): short
// @ts-ignore
setWdef(wdef: short): void
// @ts-ignore
getMdef(): short
// @ts-ignore
setMdef(mdef: short): void
// @ts-ignore
getAcc(): short
// @ts-ignore
setAcc(acc: short): void
// @ts-ignore
getAvoid(): short
// @ts-ignore
setAvoid(avoid: short): void
// @ts-ignore
getHands(): short
// @ts-ignore
setHands(hands: short): void
// @ts-ignore
getSpeed(): short
// @ts-ignore
setSpeed(speed: short): void
// @ts-ignore
getJump(): short
// @ts-ignore
setJump(jump: short): void
// @ts-ignore
getCurrentUpgradeCount(): byte
// @ts-ignore
setCurrentUpgradeCount(currentUpgradeCount: byte): void
// @ts-ignore
getViciousHammer(): byte
// @ts-ignore
setViciousHammer(ham: byte): void
// @ts-ignore
getItemEXP(): long
// @ts-ignore
setItemEXP(itemEXP: long): void
// @ts-ignore
getEquipExp(): long
// @ts-ignore
getEquipExpForLevel(): long
// @ts-ignore
getExpPercentage(): long
// @ts-ignore
getEquipLevel(): int
// @ts-ignore
getBaseLevel(): int
// @ts-ignore
setQuantity(quantity: short): void
// @ts-ignore
getDurability(): int
// @ts-ignore
setDurability(dur: int): void
// @ts-ignore
getEnhance(): byte
// @ts-ignore
setEnhance(en: byte): void
// @ts-ignore
getPotential(pos: int, add: boolean): int
// @ts-ignore
setPotential(potential: int, pos: int, add: boolean): void
// @ts-ignore
getPotential1(): int
// @ts-ignore
setPotential1(en: int): void
// @ts-ignore
getPotential2(): int
// @ts-ignore
setPotential2(en: int): void
// @ts-ignore
getPotential3(): int
// @ts-ignore
setPotential3(en: int): void
// @ts-ignore
getPotential4(): int
// @ts-ignore
setPotential4(en: int): void
// @ts-ignore
getPotential5(): int
// @ts-ignore
setPotential5(en: int): void
// @ts-ignore
getPotential6(): int
// @ts-ignore
setPotential6(en: int): void
// @ts-ignore
getState(add: boolean): byte
// @ts-ignore
setState(en: byte, add: boolean): void
// @ts-ignore
initAllState(): void
// @ts-ignore
initState(useAddPot: boolean): void
// @ts-ignore
resetPotential_Fuse(half: boolean, potentialState: int): void
// @ts-ignore
renewPotential(add: boolean): void
// @ts-ignore
renewPotential(rank: int, add: boolean): void
// @ts-ignore
renewPotential(third: boolean, add: boolean): void
// @ts-ignore
renewPotential(rank: int, third: boolean, add: boolean): void
// @ts-ignore
renewPotential_A(): void
// @ts-ignore
renewPotential_S(): void
// @ts-ignore
c(defaultRate: int, flag: int, lockSlot: int): void
// @ts-ignore
setNewArcInfo(job: int): void
// @ts-ignore
recalcArcStat(job: int): void
// @ts-ignore
getIncSkill(): int
// @ts-ignore
setIncSkill(inc: int): void
// @ts-ignore
getCharmEXP(): short
// @ts-ignore
setCharmEXP(s: short): void
// @ts-ignore
getPVPDamage(): short
// @ts-ignore
setPVPDamage(p: short): void
// @ts-ignore
getStateMsg(): int
// @ts-ignore
setStateMsg(en: int): void
// @ts-ignore
getSocketState(): short
// @ts-ignore
getSocket1(): int
// @ts-ignore
setSocket1(socket: int): void
// @ts-ignore
getSocket2(): int
// @ts-ignore
setSocket2(socket: int): void
// @ts-ignore
getSocket3(): int
// @ts-ignore
setSocket3(socket: int): void
// @ts-ignore
getItemSkin(): int
// @ts-ignore
setItemSkin(id: int): void
// @ts-ignore
getEnchantBuff(): short
// @ts-ignore
setEnchantBuff(enchantBuff: short): void
// @ts-ignore
getReqLevel(): short
// @ts-ignore
setReqLevel(reqLevel: short): void
// @ts-ignore
getYggdrasilWisdom(): short
// @ts-ignore
setYggdrasilWisdom(yggdrasilWisdom: short): void
// @ts-ignore
getFinalStrike(): boolean
// @ts-ignore
setFinalStrike(finalStrike: boolean): void
// @ts-ignore
getBossDamage(): short
// @ts-ignore
setBossDamage(bossDamage: short): void
// @ts-ignore
getIgnorePDR(): short
// @ts-ignore
setIgnorePDR(ignorePDR: short): void
// @ts-ignore
getTotalDamage(): short
// @ts-ignore
setTotalDamage(totalDamage: short): void
// @ts-ignore
getTotalStatR(): short
// @ts-ignore
getAllStat(): short
// @ts-ignore
setAllStat(allStat: short): void
// @ts-ignore
getKarmaCount(): short
// @ts-ignore
setKarmaCount(karmaCount: short): void
// @ts-ignore
getEquipFlag(): int
// @ts-ignore
getEquipSpecialFlag(): int
// @ts-ignore
getLimitBreak(): long
// @ts-ignore
setLimitBreak(lb: long): void
// @ts-ignore
setLockPotential(slot: int, id: short): void
// @ts-ignore
getLockSlot(): int
// @ts-ignore
getLockId(): int
// @ts-ignore
isSealedEquip(): boolean
// @ts-ignore
getSealedLevel(): byte
// @ts-ignore
setSealedLevel(level: byte): void
// @ts-ignore
gainSealedExp(gain: long): void
// @ts-ignore
getSealedExp(): long
// @ts-ignore
setSealedExp(exp: long): void
// @ts-ignore
getSoulOptionID(): short
// @ts-ignore
setSoulOptionID(soulname: short): void
// @ts-ignore
getSoulSocketID(): short
// @ts-ignore
setSoulSocketID(soulenchanter: short): void
// @ts-ignore
getSoulOption(): short
// @ts-ignore
setSoulOption(soulpotential: short): void
// @ts-ignore
getSoulSkill(): int
// @ts-ignore
setSoulSkill(skillid: int): void
// @ts-ignore
getiIncReq(): int
// @ts-ignore
getNirvanaFlame(): NirvanaFlame
// @ts-ignore
setNirvanaFlame(nirvanaFlame: NirvanaFlame): void
// @ts-ignore
getFire(): long
// @ts-ignore
getDefaultStarRate(): int
// @ts-ignore
getStartCurse(): boolean
// @ts-ignore
getStartDown(): boolean
// @ts-ignore
getBonusTime(): boolean
// @ts-ignore
getBonus(): int
// @ts-ignore
setBonus(bonus: int): void
// @ts-ignore
getARC(): short
// @ts-ignore
setARC(ARC: short): void
// @ts-ignore
getArcExp(): int
// @ts-ignore
setARCExp(ARCExp: int): void
// @ts-ignore
getARCLevel(): short
// @ts-ignore
setARCLevel(ARCLevel: short): void
// @ts-ignore
getCurseRate(): int
// @ts-ignore
getGrade(): byte
// @ts-ignore
setGrade(grade: byte): void
}
declare class ForcedMobStat {
// @ts-ignore
getUserCount(): int
// @ts-ignore
setUserCount(userCount: int): void
// @ts-ignore
getLevel(): int
// @ts-ignore
setLevel(level: int): void
// @ts-ignore
getSpeed(): int
// @ts-ignore
setSpeed(speed: int): void
// @ts-ignore
getPushed(): int
// @ts-ignore
setPushed(pushed: int): void
// @ts-ignore
getMDRate(): int
// @ts-ignore
setMDRate(mdRate: int): void
// @ts-ignore
getPDRate(): int
// @ts-ignore
setPDRate(pdRate: int): void
// @ts-ignore
getEva(): int
// @ts-ignore
setEva(eva: int): void
// @ts-ignore
getAcc(): int
// @ts-ignore
setAcc(acc: int): void
// @ts-ignore
getMatk(): int
// @ts-ignore
setMatk(matk: int): void
// @ts-ignore
getWatk(): int
// @ts-ignore
setWatk(watk: int): void
// @ts-ignore
getExp(): int
// @ts-ignore
setExp(exp: int): void
// @ts-ignore
isChange(): boolean
// @ts-ignore
setChange(change: boolean): void
}
declare class NirvanaFlame {
// @ts-ignore
reset(): void
// @ts-ignore
randomState(equip: Equip, nfId: int): void
// @ts-ignore
resetEquipExStats(equip: Equip, flag: long): void
// @ts-ignore
getNstr(): int
// @ts-ignore
setNstr(nstr: int): void
// @ts-ignore
getNdex(): int
// @ts-ignore
setNdex(ndex: int): void
// @ts-ignore
getNint(): int
// @ts-ignore
setNint(nint: int): void
// @ts-ignore
getNluk(): int
// @ts-ignore
setNluk(nluk: int): void
// @ts-ignore
getNhp(): int
// @ts-ignore
setNhp(nhp: int): void
// @ts-ignore
getNmp(): int
// @ts-ignore
setNmp(nmp: int): void
// @ts-ignore
getNwatk(): int
// @ts-ignore
setNwatk(nwatk: int): void
// @ts-ignore
getNmatk(): int
// @ts-ignore
setNmatk(nmatk: int): void
// @ts-ignore
getNwdef(): int
// @ts-ignore
setNwdef(nwdef: int): void
// @ts-ignore
getNmdef(): int
// @ts-ignore
setNmdef(nmdef: int): void
// @ts-ignore
getNacc(): int
// @ts-ignore
setNacc(nacc: int): void
// @ts-ignore
getNavoid(): int
// @ts-ignore
setNavoid(navoid: int): void
// @ts-ignore
getNhands(): int
// @ts-ignore
setNhands(nhands: int): void
// @ts-ignore
getNspeed(): int
// @ts-ignore
setNspeed(nspeed: int): void
// @ts-ignore
getNjump(): int
// @ts-ignore
setNjump(njump: int): void
// @ts-ignore
getNbossDamage(): int
// @ts-ignore
setNbossDamage(nbossDamage: int): void
// @ts-ignore
getNignorePDR(): int
// @ts-ignore
setNignorePDR(nignorePDR: int): void
// @ts-ignore
getNtotalDamage(): int
// @ts-ignore
setNtotalDamage(ntotalDamage: int): void
// @ts-ignore
getNallStat(): int
// @ts-ignore
setNallStat(nallStat: int): void
// @ts-ignore
getFlag(): long
// @ts-ignore
setFlag(flag: long): void
}
declare class ItemData {
// @ts-ignore
getLevelInfo(): Map<Integer,LevelUpItemInfo>
// @ts-ignore
getEquipSkills(): List<Integer>
// @ts-ignore
getQuests(): Set<Integer>
// @ts-ignore
getOption(): List<Integer>
// @ts-ignore
getOnlyHeart(): List<Integer>
// @ts-ignore
getOnlyAndroid(): List<Integer>
// @ts-ignore
getScrollReq(): List<Integer>
// @ts-ignore
getRewardInfos(): List<RewardInfo>
// @ts-ignore
getSpecialData(): ItemSpecialData
// @ts-ignore
getSpecialExData(): ItemSpecialExData
// @ts-ignore
getBookSkills(): List<Integer>
// @ts-ignore
getDataId(): int
// @ts-ignore
getName(): String
// @ts-ignore
getDesc(): String
// @ts-ignore
getSlotMax(): int
// @ts-ignore
getReqJob(): int
// @ts-ignore
getReqSpecJob(): int
// @ts-ignore
getReqLevel(): int
// @ts-ignore
getTuc(): int
// @ts-ignore
getPrice(): int
// @ts-ignore
getUnitPrice(): int
// @ts-ignore
getReqSTR(): int
// @ts-ignore
getReqDEX(): int
// @ts-ignore
getReqINT(): int
// @ts-ignore
getReqLUK(): int
// @ts-ignore
getReqPOP(): int
// @ts-ignore
getSetItemID(): int
// @ts-ignore
getGrade(): int
// @ts-ignore
getCharmEXP(): int
// @ts-ignore
getWillEXP(): int
// @ts-ignore
getInsightEXP(): int
// @ts-ignore
getSenseEXP(): int
// @ts-ignore
getCraftEXP(): int
// @ts-ignore
getCharismaEXP(): int
// @ts-ignore
getAndroid(): int
// @ts-ignore
isCash(): boolean
// @ts-ignore
isTradeBlock(): boolean
// @ts-ignore
isNotSale(): boolean
// @ts-ignore
isTimeLimited(): boolean
// @ts-ignore
isOnly(): boolean
// @ts-ignore
isEquipTradeBlock(): boolean
// @ts-ignore
getTradeAvailable(): int
// @ts-ignore
isNotExtend(): boolean
// @ts-ignore
isSharableOnce(): boolean
// @ts-ignore
isAccountSharable(): boolean
// @ts-ignore
isBlockGoldHammer(): boolean
// @ts-ignore
isExceptUpgrade(): boolean
// @ts-ignore
isOnlyEquip(): boolean
// @ts-ignore
isAccountShareTag(): boolean
// @ts-ignore
isCashTradeBlock(): boolean
// @ts-ignore
isNoMoveToLocker(): boolean
// @ts-ignore
isExceptToadsHammer(): boolean
// @ts-ignore
isExceptTransmission(): boolean
// @ts-ignore
isUnsyntesizable(): boolean
// @ts-ignore
isUndecomposable(): boolean
// @ts-ignore
isNoPotential(): boolean
// @ts-ignore
isExpireOnLogout(): boolean
// @ts-ignore
isQuest(): boolean
// @ts-ignore
isAbilityTimeLimited(): boolean
// @ts-ignore
isNActivatedSocket(): boolean
// @ts-ignore
isJokerToSetItem(): boolean
// @ts-ignore
isExUpgradeBlock(): boolean
// @ts-ignore
isNoExpend(): boolean
// @ts-ignore
isEpicItem(): boolean
// @ts-ignore
getIncMAD(): int
// @ts-ignore
getIncPAD(): int
// @ts-ignore
getIncSTR(): int
// @ts-ignore
getIncDEX(): int
// @ts-ignore
getIncINT(): int
// @ts-ignore
getIncLUK(): int
// @ts-ignore
getIncMMP(): int
// @ts-ignore
getIncMHP(): int
// @ts-ignore
getIncACC(): int
// @ts-ignore
getIncEVA(): int
// @ts-ignore
getIncSpeed(): int
// @ts-ignore
getIncJump(): int
// @ts-ignore
getIncPDD(): int
// @ts-ignore
getIncMDD(): int
// @ts-ignore
getIncMHPr(): int
// @ts-ignore
getIncMMPr(): int
// @ts-ignore
getImdR(): int
// @ts-ignore
getBdR(): int
// @ts-ignore
getRecoveryHP(): int
// @ts-ignore
getRecoveryMP(): int
// @ts-ignore
getNickSkill(): int
// @ts-ignore
getNickTag(): int
// @ts-ignore
getSuccess(): int
// @ts-ignore
getCursed(): int
// @ts-ignore
getFixLevel(): int
// @ts-ignore
getIncRMAF(): int
// @ts-ignore
getIncRMAI(): int
// @ts-ignore
getIncRMAL(): int
// @ts-ignore
getIncRMAS(): int
// @ts-ignore
getElemDefault(): int
// @ts-ignore
getMaxHP(): int
// @ts-ignore
getMaxMP(): int
// @ts-ignore
getRandOption(): int
// @ts-ignore
getRandStat(): int
// @ts-ignore
getCreate(): int
// @ts-ignore
getMob(): int
// @ts-ignore
getBagType(): int
// @ts-ignore
getLv(): short
// @ts-ignore
isPickUpBlock(): boolean
// @ts-ignore
isMobHP(): boolean
// @ts-ignore
isSuperiorEqp(): boolean
// @ts-ignore
getStateChangeItem(): int
// @ts-ignore
getMeso(): int
// @ts-ignore
getReqEquipLevelMax(): int
// @ts-ignore
getSkillID(): int
// @ts-ignore
getRate(): int
// @ts-ignore
getAfterImage(): String
// @ts-ignore
getMaxLevel(): int
// @ts-ignore
getLimitBreak(): long
// @ts-ignore
isFloatType(): boolean
// @ts-ignore
isPickupItem(): boolean
// @ts-ignore
isLongRange(): boolean
// @ts-ignore
isPickupAll(): boolean
// @ts-ignore
isSweepForDrop(): boolean
// @ts-ignore
isConsumeHP(): boolean
// @ts-ignore
isConsumeMP(): boolean
// @ts-ignore
isAutoBuff(): boolean
// @ts-ignore
getForceUpgrade(): int
// @ts-ignore
isSafetyShield(): boolean
// @ts-ignore
getDamR(): int
// @ts-ignore
getIncALB(): int
// @ts-ignore
isNoCursed(): boolean
// @ts-ignore
isNoNegative(): boolean
// @ts-ignore
getRecover(): int
// @ts-ignore
getLife(): int
// @ts-ignore
getQuestId(): Integer
// @ts-ignore
getReqSkillLevel(): int
// @ts-ignore
getMasterLevel(): int
// @ts-ignore
setLevelInfo(levelInfo: Map<Integer,LevelUpItemInfo>): void
// @ts-ignore
setEquipSkills(equipSkills: List<Integer>): void
// @ts-ignore
setOption(option: List<Integer>): void
// @ts-ignore
setOnlyHeart(onlyHeart: List<Integer>): void
// @ts-ignore
setOnlyAndroid(onlyAndroid: List<Integer>): void
// @ts-ignore
setScrollReq(scrollReq: List<Integer>): void
// @ts-ignore
setRewardInfos(rewardInfos: List<RewardInfo>): void
// @ts-ignore
setSpecialData(specialData: ItemSpecialData): void
// @ts-ignore
setSpecialExData(specialExData: ItemSpecialExData): void
// @ts-ignore
setBookSkills(bookSkills: List<Integer>): void
// @ts-ignore
setItemId(itemId: int): void
// @ts-ignore
setName(name: String): void
// @ts-ignore
setDesc(desc: String): void
// @ts-ignore
setSlotMax(slotMax: int): void
// @ts-ignore
setReqJob(reqJob: int): void
// @ts-ignore
setReqSpecJob(reqSpecJob: int): void
// @ts-ignore
setReqLevel(reqLevel: int): void
// @ts-ignore
setTuc(tuc: int): void
// @ts-ignore
setPrice(price: int): void
// @ts-ignore
setUnitPrice(unitPrice: int): void
// @ts-ignore
setReqSTR(reqSTR: int): void
// @ts-ignore
setReqDEX(reqDEX: int): void
// @ts-ignore
setReqINT(reqINT: int): void
// @ts-ignore
setReqLUK(reqLUK: int): void
// @ts-ignore
setReqPOP(reqPOP: int): void
// @ts-ignore
setSetItemID(setItemID: int): void
// @ts-ignore
setGrade(grade: int): void
// @ts-ignore
setCharmEXP(charmEXP: int): void
// @ts-ignore
setWillEXP(willEXP: int): void
// @ts-ignore
setInsightEXP(insightEXP: int): void
// @ts-ignore
setSenseEXP(senseEXP: int): void
// @ts-ignore
setCraftEXP(craftEXP: int): void
// @ts-ignore
setCharismaEXP(charismaEXP: int): void
// @ts-ignore
setAndroid(android: int): void
// @ts-ignore
setCash(cash: boolean): void
// @ts-ignore
setTradeBlock(tradeBlock: boolean): void
// @ts-ignore
setNotSale(notSale: boolean): void
// @ts-ignore
setTimeLimited(timeLimited: boolean): void
// @ts-ignore
setOnly(only: boolean): void
// @ts-ignore
setEquipTradeBlock(equipTradeBlock: boolean): void
// @ts-ignore
setTradeAvailable(tradeAvailable: int): void
// @ts-ignore
setNotExtend(notExtend: boolean): void
// @ts-ignore
setSharableOnce(sharableOnce: boolean): void
// @ts-ignore
setAccountSharable(accountSharable: boolean): void
// @ts-ignore
setBlockGoldHammer(blockGoldHammer: boolean): void
// @ts-ignore
setExceptUpgrade(exceptUpgrade: boolean): void
// @ts-ignore
setOnlyEquip(onlyEquip: boolean): void
// @ts-ignore
setAccountShareTag(accountShareTag: boolean): void
// @ts-ignore
setCashTradeBlock(cashTradeBlock: boolean): void
// @ts-ignore
setNoMoveToLocker(noMoveToLocker: boolean): void
// @ts-ignore
setExceptToadsHammer(exceptToadsHammer: boolean): void
// @ts-ignore
setExceptTransmission(exceptTransmission: boolean): void
// @ts-ignore
setUnsyntesizable(unsyntesizable: boolean): void
// @ts-ignore
setUndecomposable(undecomposable: boolean): void
// @ts-ignore
setNoPotential(noPotential: boolean): void
// @ts-ignore
setExpireOnLogout(expireOnLogout: boolean): void
// @ts-ignore
setQuest(quest: boolean): void
// @ts-ignore
setAbilityTimeLimited(abilityTimeLimited: boolean): void
// @ts-ignore
setNActivatedSocket(nActivatedSocket: boolean): void
// @ts-ignore
setJokerToSetItem(jokerToSetItem: boolean): void
// @ts-ignore
setExUpgradeBlock(exUpgradeBlock: boolean): void
// @ts-ignore
setNoExpend(noExpend: boolean): void
// @ts-ignore
setEpicItem(epicItem: boolean): void
// @ts-ignore
setIncMAD(incMAD: int): void
// @ts-ignore
setIncPAD(incPAD: int): void
// @ts-ignore
setIncSTR(incSTR: int): void
// @ts-ignore
setIncDEX(incDEX: int): void
// @ts-ignore
setIncINT(incINT: int): void
// @ts-ignore
setIncLUK(incLUK: int): void
// @ts-ignore
setIncMMP(incMMP: int): void
// @ts-ignore
setIncMHP(incMHP: int): void
// @ts-ignore
setIncACC(incACC: int): void
// @ts-ignore
setIncEVA(incEVA: int): void
// @ts-ignore
setIncSpeed(incSpeed: int): void
// @ts-ignore
setIncJump(incJump: int): void
// @ts-ignore
setIncPDD(incPDD: int): void
// @ts-ignore
setIncMDD(incMDD: int): void
// @ts-ignore
setIncMHPr(incMHPr: int): void
// @ts-ignore
setIncMMPr(incMMPr: int): void
// @ts-ignore
setImdR(imdR: int): void
// @ts-ignore
setBdR(bdR: int): void
// @ts-ignore
setRecoveryHP(recoveryHP: int): void
// @ts-ignore
setRecoveryMP(recoveryMP: int): void
// @ts-ignore
setNickSkill(nickSkill: int): void
// @ts-ignore
setNickTag(nickTag: int): void
// @ts-ignore
setSuccess(success: int): void
// @ts-ignore
setCursed(cursed: int): void
// @ts-ignore
setFixLevel(fixLevel: int): void
// @ts-ignore
setIncRMAF(incRMAF: int): void
// @ts-ignore
setIncRMAI(incRMAI: int): void
// @ts-ignore
setIncRMAL(incRMAL: int): void
// @ts-ignore
setIncRMAS(incRMAS: int): void
// @ts-ignore
setElemDefault(elemDefault: int): void
// @ts-ignore
setMaxHP(MaxHP: int): void
// @ts-ignore
setMaxMP(MaxMP: int): void
// @ts-ignore
setRandOption(randOption: int): void
// @ts-ignore
setRandStat(randStat: int): void
// @ts-ignore
setCreate(create: int): void
// @ts-ignore
setMob(mob: int): void
// @ts-ignore
setBagType(bagType: int): void
// @ts-ignore
setLv(lv: short): void
// @ts-ignore
setPickUpBlock(pickUpBlock: boolean): void
// @ts-ignore
setMobHP(mobHP: boolean): void
// @ts-ignore
setSuperiorEqp(superiorEqp: boolean): void
// @ts-ignore
setStateChangeItem(stateChangeItem: int): void
// @ts-ignore
setMeso(meso: int): void
// @ts-ignore
setReqEquipLevelMax(reqEquipLevelMax: int): void
// @ts-ignore
setSkillID(skillID: int): void
// @ts-ignore
setRate(rate: int): void
// @ts-ignore
setAfterImage(afterImage: String): void
// @ts-ignore
setMaxLevel(maxLevel: int): void
// @ts-ignore
setLimitBreak(limitBreak: long): void
// @ts-ignore
setFloatType(floatType: boolean): void
// @ts-ignore
setPickupItem(pickupItem: boolean): void
// @ts-ignore
setLongRange(longRange: boolean): void
// @ts-ignore
setPickupAll(pickupAll: boolean): void
// @ts-ignore
setSweepForDrop(sweepForDrop: boolean): void
// @ts-ignore
setConsumeHP(consumeHP: boolean): void
// @ts-ignore
setConsumeMP(consumeMP: boolean): void
// @ts-ignore
setAutoBuff(autoBuff: boolean): void
// @ts-ignore
setForceUpgrade(forceUpgrade: int): void
// @ts-ignore
setSafetyShield(safetyShield: boolean): void
// @ts-ignore
setDamR(damR: int): void
// @ts-ignore
setIncALB(incALB: int): void
// @ts-ignore
setNoCursed(noCursed: boolean): void
// @ts-ignore
setNoNegative(noNegative: boolean): void
// @ts-ignore
setRecover(recover: int): void
// @ts-ignore
setLife(life: int): void
// @ts-ignore
setQuestId(questId: Integer): void
// @ts-ignore
setReqSkillLevel(reqSkillLevel: int): void
// @ts-ignore
setMasterLevel(masterLevel: int): void
// @ts-ignore
toString(): String
}
