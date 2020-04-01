// 用户相关的数据模型
const mongoose = require('mongoose')
let adminSchema = new mongoose.Schema({
   userName  : { type:String},
   passWord : { type:String},
   token:{type:String,default:'0'},/* 默认token */
   leavel:{type:String,default:'admin'}, /* 用户等级 */
   enterTime:{type:String} /* 用户登录时间 */ 
})
/* user 是指相关数据库中的   users集合(表) */
let adminModel = mongoose.model('users',adminSchema)
module.exports = adminModel