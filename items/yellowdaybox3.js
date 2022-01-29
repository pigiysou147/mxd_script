		//npc.say("\t#b目前暫停開放專屬廣播功能，開放會公告。\r\n")
		
let boss = Array(
	// 名字 title color
	Array("Boss_cyz","單身徵女友的cyz",20),
	Array("天香","雲絲頓天香",31),
	Array("SermentOwO","可波管理仔",20),
	Array("小康康ya","我不是藝人",10),
	Array("楠羽ooooo","弒帝",37),
	Array("管管丶R沁","抓周抓到奶",9),
	Array("鬼忒","星爆氣流斬",1),
	Array("花花保底","減肥討債人",12),
	Array("o梓潼o","傾國傾城",21),
	Array("Fun喔","翹屁股",5),
	Array("小俊o","減肥教練",20),
	Array("苏沫","夏戀小仙女",12),
	Array("肚子好饿","好累好餓好想睡",20),
	Array("口口口口","大課長",21),
	Array("乐柒","非奸即盗ü",10),
	Array("昀煞","小腿獅王",43),
	Array("Beta","汪汪",1),
	Array("Auls","隨緣就好",20),
	Array("迷心o","彼岸",12),
	Array("艾琳c","—董事長—",12),
	Array("應到積水","大帅哥",2),
	Array("小佐","§少年董§",10),
	Array("非洲难民","亞細亞的孤兒",10),
	Array("LyHon丶","δ不再是少年δ",20),
	Array("阿波x77","<77>§",43),
	Array("阿边","減肥老司機",20),
	Array("是我","想養美短",20),
	Array("夜沁","超嫩萌新",10)
	)
	
let title = "";
let color = "";
for(let i = 0;i<boss.length;i++){
	if(boss[i][0] == player.getName()){
		title = boss[i][1];
		color = boss[i][2];
		break;
	}
}
var 差額 = 50000-getHyPay(3)
if(title == ""){
	npc.say("你無法使用此系統，請到指定dc頻道填單。\r\n且須累積餘額達到5萬，你還差"+差額+"餘額")
}else{
	let tittle = title+"┣"+player.getName()+"┫"
	var 公告 = npc.askTextS("#b歡迎使用#r贊助玩家#b專屬喇叭\r\n你目前的開頭為#r#e"+title+"\r\n#n#b請輸入您要說的話","",0,999);
	npc.broadcastPlayerNotice(color,tittle+"："+公告);
}
function getHyPay(type) {
    var sql = "select * from hypay where accname = '" + getAccountName() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        if (type == 1) {
            var pay = result.get("pay");
        } else if (type == 2) {
            var pay = result.get("payUsed");
        } else if (type == 3) {
            var pay = result.get("payReward");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return pay;
}
function getAccountName() {
    var i = -1;
    var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("name");
    }

    return name;
}
function gainHyPay(count) {
    var sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";   
    player.customSqlUpdate(sql, count);
}