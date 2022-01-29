/**
* 寶石箱子 幾里 315342975 
* 
**/


let jobs = Array(
	//力量職業0
	Array("力量",112,122,132,3712,2112,4112,5112,6112,3112,1112,3122,512,1512,2512,532,10100),
	//智力職業1
	Array("智力",14212,15212,2217,212,222,232,1212,2712,3212,4212,11212,15512),
	//敏捷職業2
	Array("敏捷",312,322,3312,2312,1312,522,3512,6512,572,332),
	//運氣職業3
	Array("運氣",412,422,434,1412,2412,6412,900,3612)
);

let 寶石 = Array(
	//寶石從低等級到高等級 修煉裝備有幾個階段就要幾個寶石
	//力量職業0
	Array(4440300,4440200,4440100,4440000),
	//智力職業1
	Array(4442300,4442200,4442100,4442000),
	//敏捷職業2
	Array(4443300,4443200,4443100,4443000),
	//運氣職業3
	Array(4441300,4441200,4441100,4441000)
);
let baoshiF = null;
let job = player.getJob();
let jobSelected = -1;

let boxId = 2436632;

//判斷目標職業
for(let i = 0;i<jobs.length;i++){
	if(jobs[i].indexOf(job) != -1){
		jobSelected = i;
		baoshiF = 寶石[i];
		break;
	}
}


while(true){

	let str = "#d歡迎使用#r隨機寶石#d箱子，該功能將會根據您的職業屬性給予該屬性的寶石，確認領取寶石嗎？\r\n";
	if(jobSelected == -1){
		npc.say(str+"\r\n#b您還沒有進行#r四轉#b,無法開啟",3003307);
		break;
	}else{
		let YN = npc.askYesNo(str);
		if(YN == 1){
			if(player.hasItem(boxId,1)){
				player.loseItem(boxId,1);
				let ran = Math.floor(Math.random() * baoshiF.length)
				player.gainItem(baoshiF[ran],1);
				npc.say("恭喜你獲得#v"+baoshiF[ran]+"##z"+baoshiF[ran]+"#",3003307);
			}else{
				npc.say("你沒有#v"+boxId+"##z"+boxId+"#",3003307);
				break;
			}
		}else{
			npc.say("真遺憾",3003307);
			break;
		}
	}
}

