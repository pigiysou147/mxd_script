/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  
 *  功能：魅力香水
 *  
 *  @Author Kent 
 */

/* global im */
var 月 = new Date().getMonth() + 1;
var 日 = new Date().getDate();
var 時 = new Date().getHours();
var 分 = new Date().getMinutes();
var 秒 = new Date().getSeconds();
var 日期 = 月+"#r 月 #b"+日+"#r 日#b"+時+"#r 點 #b"+分+"#r 分 #b"+秒+"#r 秒 #b"

var Random = Math.floor(Math.random() * 999 + 1);
Text = "#b#e歡迎使用終極密碼取亂數系統\r\n"
Text += "#k目前時間：#b"+日期+"\r\n"
Text += "本次取出數字為"
Text += "#r#fs24#" + Random + " "
map.blowWeather(5120043,"『管理員』"+player.getName()+"已取出終極密碼數字。");
npc.say(Text);