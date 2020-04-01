// 这里做数据库操作
const goodsModel = require('../db/model/goodsModel')

// 查找商品数据
let goodsList = async () => {
  let list = await goodsModel.find()/* 相当于数据库的find命名 */
  return list /* 返后查询结果 */
}
/***  往下写...    */

// 这里是往数据库添加商品信息的方法
// 这里的obj形参接收的是当调用商品添加这个方法，传递过来的所要添加的商品信息
let goodsAdd = async (obj) => { 
  // 使用商品数据库模型下的insetMany方法来将在页面获取到的所需添加商品的信息添加到数据库中
  let result = await goodsModel.insertMany(obj)
}

// 删除商品方法
// 删除商品会需要一个参数，这个参数就是商品的id，所以在这里接收id参数
let goodsDel = async (_id) => {
  // 使用商品模型下到的deleteOne方法，根据商品传递过来的id进行数据库商品的删除
  let result = await goodsModel.findByIdAndDelete( {_id} )
}


// 这里是修改商品信息的方法
// 修改商品的信息，是根据商品的id去决定修改的商品是哪一个
// 还要拿到被修改商品的修改信息
// _id是对应需要修改的商品信息，updateInfo是商品需要修改的修改信息
let goodsUpdate = async (_id,updateInfo) => {
  // 使用商品数据模型下的updateOne方法进行修改
  let result = await goodsModel.updateOne({_id},updateInfo)
}

let updatePutaway = async (_id,putaway) => {
  console.log(putaway)
  let result = await goodsModel.updateOne({_id},putaway)
  console.log(result)
  return result
}

// 将方法抛出
module.exports = { goodsList,goodsAdd,goodsDel,goodsUpdate,updatePutaway }