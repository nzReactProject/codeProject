import React, { Component } from 'react'
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import style from './index.module.less'
import AdminApi from '../../api/loginApi'

class Login extends Component {
  login=()=>{
    console.log('登录',this)
    let userName = this.refs.user.props.value;
    let passWord = this.refs.pass.props.value;
    if(userName||passWord){
      console.log({userName,passWord})
      AdminApi.login({userName,passWord}).then((res)=>{
        console.log(res)
        let {code,msg,token,enterTime} = res
        if(code){
          localStorage.setItem('token',token)
          localStorage.setItem('enterTime',enterTime)
          message.success(msg+'，即将进入系统，请稍后',()=>{
            this.props.history.replace('/admin')
          })
        } else {
          message.error(msg)
        }
      })
    } else {
      console.log('空着')
    }
  }
  render(){
    return(
      <div className={style.Login_box}>
        <Form name="normal_login" className={style.login_form} initialValues={{ remember: true }} >
        <Form.Item name='username' rules={[{requied:true,message:'用户名必须存在'},
              {min:3,message:'用户名最小长度3位'},
              {max:9,message:'用户名最大长度9位'}]}>
              <Input
              prefix={<UserOutlined/>}
              placeholder="Username" ref='user'
              />
         </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '不能为空' },{min:3,message:'用户名最小长度3位'},
              {max:9,message:'用户名最大长度9位'}]} >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" ref='pass'/>
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className={style.login_form_forgot} href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" onClick={this.login} className={style.login_form_button}>
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Login