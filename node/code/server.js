const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const bodyparsert = require('body-parser');


//启动服务器的时候同时启动数据库
const db = require('./db/connect')

//post 数据的解析 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 开启静态资源路径
//这里的静态访问路径是http://localhost:3019/public/img/1581759909298_208791549207.jpeg
app.use('/public',express.static(path.join(__dirname,'./public')));//将public文件作为静态资源目录

// 管理员路由
let admin = require('./router/adminRouter')
//  http://localhost:3019/admin/list
// http://39.108.157.15:3019/admin/list
app.use('/admin',admin)

// 商品信息路由
let goods = require('./router/goodsRouter')
app.use('/goods',goods)


app.listen(3019,()=>{
  console.log('server is start?')
})