// 这里做数据库操作
const adminModel = require('../db/model/adminModel')

// 查找管理员
let adminList = async () => {
  let list = await adminModel.find()/* 相当于数据库的find命名 */
  return list /* 返后查询结果 */
}

// 添加管理员
let adminAdd = async ({userName,passWord}) => {
  let add = await adminModel.insertMany({userName,passWord})
  return add
}

// 删除管理员
let adminDel = async (_id) => {
  let del = await adminModel.deleteOne({_id})
  return del
}

// 修改管理员
let adminUpdate = async (_id,userName,passWord) => {
  /* 可能只是修改用户名，不修改密码 */
  let update = null
  if(passWord == undefined) {
    /* 不想修改密码执行这里 */
    update = await adminModel.findByIdAndUpdate({_id},userName)
  }else{
    /* 想修改密码执行这里 */
    update = await adminModel.findByIdAndUpdate({_id},userName,passWord)
  }
  return update
}

// 管理员登录
let userLogin = async ({userName,passWord}) => {
  let getUser = adminModel.findOne({userName,passWord})
  return getUser
}

// 将方法抛出
module.exports = {adminList,adminAdd,adminDel,adminUpdate,userLogin}
