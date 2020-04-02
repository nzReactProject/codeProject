import React, { Component } from 'react'
import style from './index.module.less'
import { Input,Button, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import userApi from '../../../api/userApi'
class AdminAdd extends Component {
   // 添加管理员
   getUserAdd = () =>{
    let userName = this.refs.userName.state.value
    let passWord = this.refs.passWord.state.value
    userApi.getUserAdd({userName,passWord}).then((res)=>{
      let {code,msg} = res
      if(code){
        message.success(msg+',为您跳转到列表',()=>{
          let path = '/admin/usersList'
            this.props.history.replace(path)
        })
      } else {
        message.error(msg)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  render(){
    return(
      <div className={style.add_box}>
        <div className={style.add_inpute}>
          username:<Input placeholder="userName" prefix={<UserOutlined />} className={style.margin_input} ref='userName'/>
          password:<Input placeholder="password" prefix={<UserOutlined />} className={style.margin_input} ref='passWord'/>
          <div className={style.add_btn}>
            <Button danger onClick={this.getUserAdd}>确认</Button>
            <Button type='primary'>取消</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminAdd
