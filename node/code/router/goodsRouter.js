const express = require('express')
const router = express.Router()
const { goodsList,goodsAdd,goodsDel,goodsUpdate,updatePutaway } = require('../controls/goodsCtr')
const bodyparsert = require('body-parser');//引入处理post数据的第三方插件
const multer = require('multer');//利用multer插件进行文件的上传，相当于是一个中间插件
const upload = multer({});//实例化一个multer对象
const path = require('path');//引入路径模块
const fs = require('fs');//引入fs模块，用来对文件进行操作
/**
 * @api {get} /goods/list   查询所有的商品
 * @apiName list
 * @apiGroup list
 *
 * @apiSuccess {String} code 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} list  返回的数据.
 * 
 */
router.get('/list',(req,res)=>{
  goodsList().then((info)=>{
    res.send({code:1,msg:'查询成功',list:info,cout:info.length})
  }).catch((err)=>{
    res.send({code:0,msg:'查询失败',err})
  })
})


// 这里是添加商品信息接口
/**
 * @api {post} /goods/add   添加商品接口
 * @apiName add
 * @apiGroup list
 *
 * @apiSuccess {String} code 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * 
 */
router.post('/add',(req,res) => {
  let { name,price,stock,img,desc,putaway,kind } = req.body
  goodsAdd( { name,price,stock,img,desc,putaway,kind } ).then((data) => {
    res.send({code:1,msg:'添加成功'})
  }).catch(() => {
    res.send({code:0,msg:'添加失败'})
  })
})

// 这里是删除商品接口
/**
 * @api {delete} /goods/del   删除商品接口
 * @apiName del
 * @apiGroup list
 *
 * @apiSuccess {String} code 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * 
 */
router.delete('/del',(req,res) => {
  // 获取到页面用户选择的商品id
  // console.log(req.query)
  let {_id} = req.body
  console.log({_id})
  // 调用商品的删除方法，对数据库里的商品信息进行删除
  goodsDel(_id).then((data) => {
    console.log(data)
    res.send({code:1,msg:'删除成功'})
  }).catch((err) => {
    console.log(err)
    res.send({code:0,msg:'删除失败'})
  })
})


// 这里是修改商品信息接口
/**
 * @api {post} /goods/update   修改商品接口
 * @apiName update
 *
 * @apiSuccess {String} code 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * 
 */
router.post('/update',(req,res) => {
  console.log(req.body)
  // 获取用户在页面选择的商品id以及要修改商品的商品信息
  let {_id,name,price,stock,img,desc,putaway,kind} = req.body
  // 调用修改商品信息的方法
  goodsUpdate(_id,{name,price,stock,img,desc,putaway,kind}).then(() => {
    res.send({code:1,msg:'修改成功'})
  }).catch((err) => {
    console.log(err)
    res.send({code:0,msg:'修改失败'})
  })
})

// 修改上架信息的接口
router.post('/updatePutaway',(req,res) => {
  let {_id,putaway} = req.body
  console.log(putaway)
  updatePutaway(_id,{putaway}).then((data) => {
    console.log(data)
    res.send({code:1,msg:'更新成功'})
  }).catch((err) => {
    console.log(err)
    res.send({code:0,msg:'更新失败'})
  })
})

// 文件上传使用的是form-data格式
router.post('/img',upload.single('hehe'),(req,res) => {//接口路径是/img,并将上传文件的multer插件实例化出来的对象放入参数当中，使用multer实例化对象里面的single方法，里面的参数是相对应的字段
  console.log(req.file);//拿到的结果如下所示：
  // {
  //     fieldname: 'hehe',
  //     originalname: '1.jpg',
  //     encoding: '7bit',
  //     mimetype: 'image/jpeg',
  //     buffer: <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 01 00 48 00 48 00 00 ff db 00 43 00 08 06 06 07 06 05 08 07 07 07 09 09 08 0a 0c 14 0d 0c 0b 0b 0c 19 12 13 0f ... 19288 more bytes>, 
  //     size: 19338
  //   }
  // 为设置用户上传的图片大小可以利用里面的size
  let {buffer,mimetype,size} = req.file;//从保存了文件信息中的req.file中拿到所需要的值
  // 判断图片尺寸，但是如果在这里进行判断的话，其实走到这里，图片已经上传到服务器中了，已经占用资源空间了
  // 所以首先应该是前端先做判断，再到后端来进行处理
  if(size >= 30000000) {//做一个判断，判断所上传图片的大小是否超过10000
      // 如果图片过大直接使用return结束代码，并返回提示信息
      return res.send({err:-1,msg:"图片尺寸过大"});
  }


  // 限制上传的文件类型,前端和后端都应该做判断
  let type = ['png','jpeg','jpg','gif'];//设定可以上传的文件格式的后缀名
  // 获取到用户上传图片的后缀名
  let extName = mimetype.split('/')[1];//将mimetype的文件类型信息使用字符串的split方法通过分隔符/转换成为数组，数组的第二项就是所需要的文件后缀名
  // 判断用户上传的文件后缀名是否存在type数组中，如果存在，说明符合格式要求
  if(type.indexOf(extName) === -1) {
      return res.send({err:-2,msg:"图片格式错误"});
  }

  // 创建一个变量用来作为将用户提交的文件保存到静态资源路径下的文件的名称，为了保证唯一性
  let name = (new Date()).getTime() + '_' + parseInt(Math.random() * 999877) + parseInt(Math.random() * 999877);

  // 将文件写入到静态资源目录下
  // 第一个参数是文件路径
  // 第二个参数是所需要写入的内容
  // 底单个参数是回调函数
  fs.writeFile(path.join(__dirname,`../public/img/${name}.${extName}`),buffer, (err) => {
      if(err) {
        console.log(err)
          res.send({err:-3,msg:"图片上传失败，请重试"});
      } else {
          res.send({err:0,msg:"图片上传成功",path:`http://localhost:3019/public/img/${name}.${extName}`});
      }
  });
});
module.exports = router