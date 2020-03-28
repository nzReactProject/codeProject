const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

//启动服务器的时候同时启动数据库
const db = require('./db/connect')

//post 数据的解析 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 管理员路由
let admin = require('./router/adminRouter')
//  http://localhost:3019/admin/list
app.use('/admin',admin)

// 商品信息路由
let goods = require('./router/goodsRouter')
app.use('/goods',goods)


app.listen(3019,()=>{
  console.log('server is start?')
})