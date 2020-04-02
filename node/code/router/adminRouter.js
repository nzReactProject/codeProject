const express = require('express')
const router = express.Router()
const {adminList,adminAdd,adminDel,adminUpdate,userLogin,loginToken} = require('../controls/adminCtr')
const jsonWebToken = require("jsonwebtoken") /* 创建token */
const {secret} = require("../config/config")

// 创建时间
function dateToString(date){
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	var d = date.getDate();
	var h = date.getHours();
	var f = date.getMinutes();
	var s = date.getSeconds();
	var w = date.getDay();
	return y + "/" + toDB(m) + "/" + toDB(d) + "/" + toDB(h) + ":" + toDB(f);
}
//个位数前加0
// 个位数 < 10
function toDB(num){
	return num < 10 ? "0" + num : num;
}


/**
 * @api {get} /admin/list   查询所有的管理员
 * @apiName list
 * @apiGroup admin
 *
 * @apiSuccess {String} code 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} list  返回的数据.
 * 
 */
router.get('/list',(req,res)=>{
  adminList().then((info)=>{
    // let {getUser,token}
    res.send({code:1,msg:'查询成功',list:info,cout:info.length})
  }).catch((err)=>{
    res.send({code:0,msg:'查询失败',err})
  })
})

/**
 * @api {post} /admin/add   添加管理员
 * @apiName add
 * @apiGroup admin
 *
 * @apiParam {String} userName 用户名.
 * @apiParam {String} passWord 密码.
 * 
 * @apiSuccess {String} code 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} list  返回的数据.
 * 
 */
router.post('/add',(req,res)=>{
  let {userName,passWord} = req.query
  if(!userName || !passWord){
    res.send({code:0,msg:'错误的参数'})
  } else {
    adminAdd({userName,passWord}).then((info)=>{
      res.send({code:1,msg:'管理员添加成功',list:info})
    }).catch((err)=>{
      res.send({code:0,msg:'添加失败',err:err})
    })
  }
})

/**
 * @api {delete} /admin/del   删除管理员
 * @apiName del
 * @apiGroup admin
 *
 * @apiParam {String} _id 用户名id.
 * 
 * @apiSuccess {String} code 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} list  返回的数据.
 * 
 */
router.delete('/del',(req,res)=>{
  // console.log(req)
  let {_id} = req.query
  if(!_id){
    res.send({code:0,msg:'错误的参数'})
  } else {
    adminDel({_id}).then(()=>{
      res.send({code:1,msg:'管理员删除成功'})
    }).catch((err)=>{
      console.log(err)
      res.send({code:0,msg:'删除失败',err:err})
    })
  }
})

/**
 * @api {post} /admin/update   修改管理员
 * @apiName update
 * @apiGroup admin
 *
 * @apiParam {String} _id 用户_id.
 * @apiParam {String} userName 用户名.
 * @apiParam {String} passWord 用户密码(可有可无，根据需要选择).
 * 
 * @apiSuccess {String} code 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} list  返回的数据.
 * 
 */
router.put('/update',(req,res)=>{
  let {_id,userName,passWord} = req.query
  /* 判断需不需要修改密码 */
  if(!passWord){
    /* 不想修改密码执行这里 */
    if(!_id || !userName){
      res.send({code:0,msg:'错误的参数'})
    } else {
      adminUpdate(_id,{userName}).then(()=>{
        res.send({code:1,msg:'管理员修改成功'})
      }).catch((err)=>{
        res.send({code:0,msg:'修改失败',err:err})
      })
    }
  } else {
    /* 想修改密码执行这里 */
    if(!_id || !userName || !passWord){
      res.send({code:0,msg:'错误的参数'})
    } else {
      adminUpdate(_id,{userName,passWord}).then(()=>{
        res.send({code:1,msg:'管理员修改成功'})
      }).catch((err)=>{
        res.send({code:0,msg:'修改失败',err:err})
      })
    }
  }
})
/************  userLogin ******** */
 /**
 * @api {post} /admin/login   用户登录
 * @apiName login
 * @apiGroup login
 *
 * @apiParam {String} userName 用户名.
 * @apiParam {String} passWord 密码.
 * 
 * @apiSuccess {String} code 状态码r.
 * @apiSuccess {String} msg  信息提示.
 * @apiSuccess {String} list  返回的数据.
 * 
 */
router.post('/login',(req,res)=>{
  let {userName,passWord} = req.query
  if(!userName || !passWord){
    res.send({code:0,msg:'错误的参数'})
  } else {
    userLogin({userName,passWord}).then((infos)=>{
      if(infos != null){
        // let data = {userName:'sss',passWord:'123'}
        let {userName,passWord,_id} = infos
        // 生成token
        let token = jsonWebToken.sign({userName,passWord},secret)
        let enterTime = dateToString(new Date())
        // 生产token后将token更新到数据库
        // 调用更新的接口
        loginToken({_id},token,enterTime)
        res.send({code:1,msg:'登录成功',token,enterTime})
      } else {
        console.log('登录失败')
        res.send({code:0,msg:'用户名或密码错误'})
      }
    }).catch((err)=>{
      res.send({code:0,msg:'登录失败',err:err})
    })
  }
})


module.exports = router
