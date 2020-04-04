/* 这里是关于做商品数据请求的文件*/
/* import axios from 'axios'*/
import axios from '../utils/axios'
import { message } from 'antd'

class Goods {
  /* 查询商品数据的请求方法 */ 
  goodsList() {
    let url = '/rat/goods/list'
    return axios.get(url)
  }

  /* 修改商品上架信息的请求方法 */ 
  updatePutaway(_id,putaway) {
    let url = '/rat/goods/updatePutaway'
    if(localStorage.getItem('name') === 'root'){
      return axios.post(url,{_id,putaway})
    } else {
      return message.error('权限不足')
    }
  }

  /* 删除商品的方法 */ 
  goodsDelete (_id) {
    let url = '/rat/goods/del'
    if(localStorage.getItem('name') === 'root'){
      return axios.delete(url,{
        data: {
          _id
        }
      })
    } else {
      return message.error('权限不足')
    }
  }

  /* 上传图片的方法 */ 
  imgUpload(file) {
    // console.log(file)
    let url = '/rat/goods/img'
    return axios.post(url,file)
  }

  /* 根据商品id获取单个商品的数据请求方法 */ 
  goodsInfoById(_id) {
    // console.log(_id)
    let url = '/rat/goods/goodsInfoById'
    return axios.post(url,{_id})
  }

  /* 根据商品id去修改商品信息 */ 
  goodsUpdate(_id,info) {
    let url = '/rat/goods/update'
    if(localStorage.getItem('name') === 'root'){
      return axios.post(url,{_id,info})
    } else {
      return message.error('权限不足')
    }
  }
  /* 添加商品的接口 */ 
  goodsAdd(goodsInfo) {
    let url = '/rat/goods/add'
    if(localStorage.getItem('name') === 'root'){
      return axios.post(url,goodsInfo)
    } else {
      return message.error('权限不足')
    }
  }
}

export default new Goods()