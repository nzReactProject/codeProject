// 创建时间
function dateToString(date){
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	var d = date.getDate();
	var h = date.getHours();
	var f = date.getMinutes();
	var s = date.getSeconds();
	var w = date.getDay();
	return y + "/" + toDB(m) + "/" + toDB(d) + "/" + toDB(h) + ":" + toDB(f);
}
//个位数前加0
// 个位数 < 10
function toDB(num){
	return num < 10 ? "0" + num : num;
}
// 用户相关的数据模型
const mongoose = require('mongoose')
let adminSchema = new mongoose.Schema({
   userName  : { type:String},
   passWord : { type:String},
   token:{type:String,default:'0'},/* 默认token */
   leavel:{type:String,default:'admin'}, /* 用户等级 */
   enterTime:{type:Date,default: dateToString(new Date())} /* 用户创建时间 */ 
})
/* user 是指相关数据库中的   users集合(表) */
let adminModel = mongoose.model('users',adminSchema)
module.exports = adminModel