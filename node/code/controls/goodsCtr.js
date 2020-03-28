// 这里做数据库操作
const goodsModel = require('../db/model/goodsModel')

// 查找商品数据
let goodsList = async () => {
  let list = await goodsModel.find()/* 相当于数据库的find命名 */
  return list /* 返后查询结果 */
}
/***  往下写...    */




// 将方法抛出
module.exports = {goodsList}