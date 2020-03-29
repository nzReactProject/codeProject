const express = require('express')
const router = express.Router()
const {goodsList} = require('../controls/goodsCtr')

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
// 红红火火恍恍惚惚


module.exports = router