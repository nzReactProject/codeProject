import React, { Component } from 'react'
import style from './index.module.less'
import { Input,Button, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import userApi from '../../../api/userApi'

class AdminUpdate extends Component {
  //  发送修改请求
  getUserUpdate(){
    let _id = this.refs._id.state.value
    let userName = this.refs.userName.state.value
    let passWord = this.refs.passWord.state.value
    if(_id){
      userApi.getUserUpdate({_id,userName,passWord}).then((res)=>{
        let {code,msg} = res
        if(code){
          message.success(msg+',为您跳转列表',()=>{
            // console.log(this)
            let path = '/admin/usersList'
            this.props.history.replace(path)
          })
        }
      }).catch((err)=>{
        console.log(err)
      })
    } else {
      message.error('_id不能为空')
    }
  }

  render(){
    let _id = window.location.href.split('=')[1]
    return (
      <div className={style.update_box}>
        <div className={style.update_inpute}>
          _id:<Input placeholder="_id" value={_id} prefix={<UserOutlined />} className={style.margin_input} ref='_id'/>
          username:<Input placeholder="userName" prefix={<UserOutlined />} className={style.margin_input} ref='userName'/>
          password:<Input placeholder="可选操作" prefix={<UserOutlined />} className={style.margin_input} ref='passWord'/>
          <div className={style.update_btn}>
            <Button danger onClick={this.getUserUpdate.bind(this)}>确认</Button>
            <Button type='primary'>取消</Button>
          </div>
        </div>
      </div>
    )
  }
}
export default AdminUpdate
