管理员登录   v
管理员的增删改查   v
商品的增删改查 



### 数据库地址
```
server.js
=================>
let url = 'mongodb+srv://react:lian.123@root-lian-q5ayh.mongodb.net/test?retryWrites=true&w=majority'
const mongoose = require('mongoose')
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
var db = mongoose.connection;
db.on('error',()=>{
  console.log('连接失败')
})
db.once('open',()=>{
  console.log("连接成功")
})
```

### 写接口思路
1. 先写server.js,并且先创建相关的router文件
2. 可以在db 写一下连接数据库的代码
3. 写数据模型 在db文件夹创建model并写userModel.js文件
4. 写完数据模型后就可以写控制器controls,并且创建对应的文件
5. 在相关路由引入控制器，处理数据

### 需要加token验证的
用户登录时产生随机token
没有token的用户不能进入主界面
给每个用户一个权限等级，默认为admin,只有查找权限（user）

### token最后在加
需要加的有 
admin 中的 add  update  del


### 生成文档
在有server.js文件的目录下执行   apidoc -i ./router -o ./doc（生成新的文档时，先把原来的删除）


