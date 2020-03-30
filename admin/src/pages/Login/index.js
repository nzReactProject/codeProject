import React, { Component } from 'react'
import style from './index.module.less'
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import AdminApi from '../../api/loginApi'
class Login extends Component {
  login=()=>{
    console.log('登录',this)
    let {validateFields} = this.props.form //用户获取表单数据的值
    // 校验输入的值
    validateFields((err,data)=>{
      console.log(err,data)
      if(err){
        // 输入错误
        message.error('输入有误请重试')
      }else{
        console.log('ok')
        AdminApi.login(data).then((res)=>{
          console.log(res)
          // if(res.code === 404){
          //   message.error('用户名密码错误')
          // }else{
          //   // 登录成功获取token并且保存到localstorage里 
          //   localStorage.setItem('token',res.token)
          //   message.success('登录成功，3s后跳转首页',3,()=>{
          //     this.props.history.replace('/admin')
          //   })
          // }
         
        })
      }
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={style.Login_box}>
        <div className={style['login_form']}>
          {/* 用户名 */}
          <Form.Item>
            {/* userName 参数1获取第一个数据的key值 */}
            {getFieldDecorator('userName',{
              rules:[{requied:true,message:'用户名必须存在'},
              {min:3,message:'用户名最小长度3位'},
              {max:9,message:'用户名最大长度9位'}]
            })(
              <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              />
              )}
          </Form.Item>
          {/* 用户密码 */}
          <Form.Item>
            {getFieldDecorator('passWord',{
              rules:[{requied:true,message:'用户名必须存在'},
              {min:3,message:'用户名最小长度3位'},
              {max:9,message:'用户名最大长度9位'}]
            })(
              <Input
              prefix={<Icon type="eye-invisible" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="PassWord"
              />
              )}
          </Form.Item>
          {/* 记住我  提交*/}
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <span className="login-form-forgot" >
              Forgot password
            </span>
            <Button type="primary" onClick={this.login} className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </div>
      </div>
    )
  }
}

export default Form.create()(Login)
