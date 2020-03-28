// 商品相关的数据模型
const mongoose = require('mongoose')
let goodsSchema = new mongoose.Schema({
  name : { type:String,default:'king'},
  price : { type:String,default:'998'},
  stock : { type:String,default:'100'},
  img : { type:String,default:'/img/123456654.jpg'},
  desc : { type:String,default:'这是什么我不知道'},
  putaway : { type:String,default:0},/* 状态 下架（-1）  未上架（0） 已上架（1）*/
  kind : { type:String,default:'口红'},/* 口红类 */
  createTime: {type: Date,default: new Date().getTime()}
})
   
/* goods 是指相关数据库中的   goods集合(表) */
let goodsModel = mongoose.model('goods',goodsSchema)
module.exports = goodsModel