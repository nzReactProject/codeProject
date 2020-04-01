// 这里是关于做商品数据请求的文件
import axios from 'axios'
class Goods {
  // 查询商品数据的请求方法
  goodsList() {
    let url = '/rat/goods/list'
    // let url = 'http://localhost:3019/goods/list'
    // console.log(1);
    // 发起数据请求
    // axios.get(url).then((res)=>{
    //   console.log('this is axios ')
    //   console.log(res)
    // })
    return axios.get(url)
  }

  // 修改商品上架信息的请求方法
  updatePutaway(_id,putaway) {
    console.log(putaway)
    let url = '/rat/goods/updatePutaway'
    return axios.post(url,{_id,putaway})
  }

  // 删除商品的方法
  goodsDelete (_id) {
    console.log(_id)
    let url = '/rat/goods/del'
    return axios.delete(url,{
      data: {
        _id
      }
    })
  }

  // 上传图片的方法
  imgUpload(file) {
    console.log(file)
    let url = '/rat/goods/img'
    return axios.post(file)
  }
}

export default new Goods()