import React, { Component } from 'react'
import style from  './index.module.less'
// 引入关于商品的api文件
import goodsApi from '../../../api/goods.js'
import {
  Form,
  Input,
  Button,
  Select,
  Card,
  Upload,
  message
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
const file = new FormData()

// const rootPath = 'http://localhost:3019'
const rootPath = 'http://39.108.157.15:3019'

// 上传图片
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
class GoodsUpdate extends Component {
  state = {
    // loading: false,
  }
  componentDidMount = async () => {
    // 在组件的props属性里面的match属性里面的params属性里面可以找到进行页面跳转时，在地址栏上面携带的参数
    // 跳转到商品修改页面页面携带的参数是对应商品的id
    // console.log(this.props)
    let {id} = this.props.match.params
    // console.log(id)
    // 根据商品的id去请求商品的数据
    let result = await goodsApi.goodsInfoById(id)
    // console.log(result)
    // console.log(result.data.data[0].name)
    // 将获取到的商品信息保存到当前组件的state中，用来渲染界面
    this.setState({
      name: result.data[0].name,
      price:result.data[0].price,
      stock:result.data[0].stock,
      img:result.data[0].img,
      desc:result.data[0].desc,
      putaway:result.data[0].putaway,
      kind:result.data[0].kind,
    })

  }
  // 上传图片的方法
  upload = async () => {
    // console.log(this.refs.img.files)
    let  data= this.refs.img.files[0]
    let file = new FormData()
    file.append('hehe',data)
    // console.log(file.get('hehe'))
    let result = await goodsApi.imgUpload(file)
    // console.log(result.data.path)
    let img = result.path.split(":3019")[1].substring(1)
    console.log(img)
    this.setState({
      path:result.path,
      img:img
    })

  }

// 当点击确认提交时触发的事件
submit= async () => {
  // 获取到商品的id
  let {id} = this.props.match.params
  // 当点击提交的时候，先确认一下是否提交了照片，可以通过判断图片的路径是否存在
  if(!this.state.path) {
    return message.info('请先上传图片')
  }
  // 调用根据商品id修改商品信息的方法
  let result = await goodsApi.goodsUpdate(id,this.state)
  // console.log(result)
  let {code} = result
  // 判断请求是否成功
  if(code === 1) {
    // 表示请求成功
    message.success('修改成功')
    // 跳转回到商品列表页面
    this.props.history.replace('/admin/goodsList')
  }

}

  handleChange = info => {
    // if (info.file.status === 'uploading') {
    //   this.setState({ loading: true });
    //   return;
    // }
    // if (info.file.status === 'done') {
    //   // Get this url from response in real world.
    //   getBase64(info.file.originFileObj, imageUrl =>
    //     this.setState({
    //       imageUrl,
    //       loading: false,
    //     })
    //   )
    // }
    let data = info.file
    // let file = new FormData()
    file.append('hehe',data)
    goodsApi.imgUpload(file).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
  render(){
    let {name,stock,price,img,desc,putaway,kind} = this.state
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    const { imageUrl } = this.state;
    let {path} = this.state
    return (
      <Card title="填写商品信息">
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
        >
        <Form.Item label="名称">
          <Input ref= 'name' value={name} onChange= {(e) => {
            console.log(e.target.value)
            this.setState({name:e.target.value})
          }}/>
        </Form.Item>
        <Form.Item label="价格">
          <Input ref= 'price' value={price} onChange= {(e) => {
            this.setState({price:e.target.value})
          }} />
        </Form.Item>
        <Form.Item label="库存">
          <Input ref= 'stock' value={stock} onChange= {(e) => {
            this.setState({stock:e.target.value})
          }}/>
        </Form.Item>
        <Form.Item label="状态">
        <Select ref='kind' value = {putaway} onChange= {(e) => {
            this.setState({putaway:String(e)})
          }}>
            <Select.Option value="上架">上架</Select.Option>
            <Select.Option value="下架">下架</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="描述">
          <Input ref= 'desc' value={desc} onChange= {(e) => {
            this.setState({desc:e.target.value})
          }}/>
        </Form.Item>
        <Form.Item label="类别">
          <Select ref='kind' value = {kind} onChange= {(e) => {
            console.log(e)
            this.setState({kind:String(e)})
          }}>
            <Select.Option value="彩妆">彩妆</Select.Option>
            <Select.Option value="护肤">护肤</Select.Option>
            <Select.Option value="香水">香水</Select.Option>
          </Select>
        </Form.Item>
        
        <input type="file" className={style.upload} ref= 'img' />
        {/* 显示缩略图 */}
        <img className={style.button} src={  path} width='120px' height= '120px' alt="暂无图片"/>
        <br/>
        <Button className={style.button} onClick = {() => {
          this.upload()
        }}>上传图片</Button>
        <br/>
        <br/>
        <Button className={style.button} onClick = {() => {
          this.submit()
        }}>确认修改</Button>

        <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
      </Form>
    </Card>
    )
  }
}

export default GoodsUpdate
