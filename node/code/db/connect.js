let url = 'mongodb+srv://react:lian.123@root-lian-q5ayh.mongodb.net/code?retryWrites=true&w=majority'
const mongoose = require('mongoose')
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
var db = mongoose.connection;
db.on('error',()=>{
  console.log('连接失败')
})
db.once('open',()=>{
  console.log("连接成功")
})
