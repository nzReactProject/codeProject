import React, { Component } from 'react'
// 引入关于商品的api文件
import goodsApi from '../../../api/goods.js'
import { Table, Tag, Button,Popconfirm,Spin } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
const { Column } = Table;
// const rootPath = 'http://localhost:3019/'
const rootPath = 'http://39.108.157.15:3019/'

class GoodsList extends Component {
  state = {
    list:[],
    isshow:false,
  }

  componentDidMount(){
    this.getGoodsData()
  }
  // 这里是获取商品数据的方法
  getGoodsData(){
    this.setState({isshow:true})
    goodsApi.goodsList().then((res)=>{
      let {list} = res
      this.setState({list:list,isshow:false})
    })
  }
  putaway = async (_id,putaway) => {
    let putawaye = putaway ==="上架"?"下架":"上架"
    let result = await goodsApi.updatePutaway(_id,putawaye)
    this.getGoodsData()
  }

  // 删除商品的方法
  del = async (_id) => {
    // console.log(_id)
    await goodsApi.goodsDelete(_id)
    // console.log(result)
    this.getGoodsData()
  }
  
  render(){
    let {isshow}= this.state
    return (
      <Spin spinning={isshow}>
        <Table  dataSource={this.state.list}>
          <Column title="id" dataIndex="_id" key="_id" />
          <Column title="名称" dataIndex="name" key="name" />
          <Column title="价格" dataIndex="price" key="price" />
          <Column title="库存" dataIndex="stock" key="stock" />
          <Column title="图片" dataIndex="img" key="img" render= {img => (
            // console.log(img)
            <img height='100px' width='100px' src={rootPath + img} alt=""/>
          )} />
          <Column title="描述" dataIndex="desc" key="desc" />
          <Column title="状态" dataIndex="putaway"  key="putaway" render={putaway => (
            <Tag color={putaway === "上架"?"green":"red"} key='putaway'>
              {putaway === "上架"?"已上架":"已下架"}
            </Tag>
          )} />
          <Column title="类别" dataIndex="kind" key="kind" />
          <Column title="操作" key="action"  render={info => (
            <div>
              <div><Button type='ghost' size= 'small'  shape="round" onClick= {() =>{
                // console.log(info._id,info.putaway)
                this.putaway(info._id,info.putaway)
              }}>上架</Button></div>
              <Popconfirm title="确定要删除该商品是么？" icon={<QuestionCircleOutlined style={{ color: 'red' }} />} onConfirm= {()=> {
                this.del(info._id)
              }} >
                <div><Button type="danger"  size= 'small' shape="round" >删除</Button></div>
              </Popconfirm>
              <div><Button type= "primary" size= 'small' shape="round" onClick= {() => {
                // 控制地址栏的改变，并且把对应商品的id携带在地址栏上作为参数传递过去
                this.props.history.replace('/admin/goodsUpdate/'+info._id)
              }}>修改</Button></div>
            </div>
          )}/>
          {/* <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={tags => (
              <span>
                {tags.map(tag => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </span>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                <a style={{ marginRight: 16 }}>Invite {record.lastName}</a>
                <a>Delete</a>
              </span>
            )}
          /> */}
        </Table>
      </Spin>
    )
  }
}

export default GoodsList
