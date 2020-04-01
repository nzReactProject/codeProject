import React, { Component,useState } from 'react'
import style from  './index.module.less'
// 引入关于商品的api文件
import goodsApi from '../../../api/goods.js'
import {
  Form,
  Input,
  Button,
  Select,
  TreeSelect,
  Card,
  Upload,
  message
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

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
  componentDidMount(){
    // 在组件的props属性里面的match属性里面的params属性里面可以找到进行页面跳转时，在地址栏上面携带的参数
    // 跳转到商品修改页面页面携带的参数是对应商品的id
    console.log(this.props)
    let {id} = this.props.match.params
    console.log(id)
  }
  // 上传图片的方法
  upload = async () => {
    console.log(this.refs.img.files)
    let  data= this.refs.img.files[0]
    let file = new FormData()
    file.append('hehe',data)
    console.log(file)
    let result = await goodsApi.imgUpload(file)
    console.log(result)
  }

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        })
      )
    }
  }
  render(){
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    const { imageUrl } = this.state;
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
          <Input ref= 'name' />
        </Form.Item>
        <Form.Item label="价格">
          <Input  />
        </Form.Item>
        <Form.Item label="库存">
          <Input  />
        </Form.Item>
        <Form.Item label="描述">
          <Input  />
        </Form.Item>
        <Form.Item label="类别">
          <Select>
            <Select.Option value="demo">彩妆</Select.Option>
            <Select.Option value="demo">护肤</Select.Option>
            <Select.Option value="demo">香水</Select.Option>
          </Select>
        </Form.Item>
        
        <input type="file" className={style.upload} ref= 'img' />
        <Button onClick = {() => {
          this.upload()
        }}>上传图片</Button>
        <Button className={style.button} onClick = {() => {
          // console.log(this.refs.name)
          // console.log(this.refs.name.state.value)
        }}>提交</Button>
      </Form>
    </Card>
    )
  }
}

export default GoodsUpdate
