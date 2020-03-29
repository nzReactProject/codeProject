const express = require('express')
const router = express.Router()
const { goodsList,goodsAdd,goodsDel,goodsUpdate } = require('../controls/goodsCtr')

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
  let {_id} = req.body;
  // console.log({_id})
  // 调用商品的删除方法，对数据库里的商品信息进行删除
  goodsDel({_id}).then((data) => {
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
 * @apiGroup list
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
module.exports = router