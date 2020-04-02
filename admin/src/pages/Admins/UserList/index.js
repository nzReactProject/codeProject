import React, { Component,Fragment } from 'react'
import style from './index.module.less'
import {Table,Spin, Button, message } from 'antd'
import userApi from '../../../api/userApi'

class AdminList extends Component {
  state = {

    visible: false,
    spinning:false,
    dataSource:[], // 这里数据数据
    columns:[
      {
        title: '_id',
        dataIndex: '_id',
        key: '_id',
      },
      {
        title: '账号',
        dataIndex: 'userName',
        key: 'userName',
      },
      {
        title: '等级',
        key: 'leavel',
        dataIndex:'leavel'
      },
      {
        title:'说明',
        key:'_id',
        render:(isit)=>{
          let {leavel} = isit
          return (
            <div>
              {leavel==='root'?<span style={{color:'red'}}>超级管理员</span>:<span style={{color:'green'}}>普通管理员</span>}
            </div>
          )
        }
      },
      {
        title:'可操作项',
        key:'_id',
        render:(isit)=>{
          let {leavel,_id} = isit
          return (
            <div>
              {
                leavel==='root'?
                <div>
                  <Button type='primary' size='small' style={{margin:'0 20px'}} onClick={()=>{
                    let path = '/admin/usersUpdate?_id='+_id 
                    this.props.history.replace(path)
                  }
                  }>修改管理员</Button>
                </div>
                :<span style={{color:'skyblue'}}><Button type='primary' size='small' style={{margin:'0 20px'}} onClick={()=>{
                  let path = '/admin/usersUpdate?_id='+_id 
                    this.props.history.replace(path)
                }}>修改管理员</Button>
                <Button danger size='small' onClick={()=>{
                  userApi.getUserDel(_id).then((res)=>{
                    let {code,msg} = res
                    if(code){
                      message.success(msg)
                      this.getUserList()
                    } else {
                      message.error(msg)
                    }
                  }).catch((err)=>{
                    console.log(err)
                  })
                }}>删除管理员</Button></span>}
            </div>
          )
        }
      }
    ]
  }
  // 请求管理员列表
  getUserList = () => {
    this.setState({spinning:true})
    userApi.getUserList().then((res) => {
      console.log(res)
      this.setState({dataSource:res.list,spinning:false})
    }).catch((err) => {
      console.log(err)
    });
  }

  componentDidMount(){
    this.getUserList()
  }

  render(){
    let {columns,dataSource,spinning} = this.state 
    return (
      <Fragment>
        <div className={style.user_box}>
          <Spin spinning={spinning}>
            <Table dataSource={dataSource} columns={columns}/>;
          </Spin>
        </div>
      </Fragment>
    )
  }
}

export default AdminList
