import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Avatar,Input,Badge ,Modal } from 'antd';
import style from './index.module.less'
import { BellOutlined,ExclamationCircleOutlined } from '@ant-design/icons';

const { Search } = Input;
const { confirm } = Modal;
class Heade extends Component {
  showConfirm(_this) {
     confirm({
       title: '退出',
       icon: <ExclamationCircleOutlined />,
       content: '您确定退出账户？',
       onOk() {
        let path = '/login'
        localStorage.setItem('name',null)
        _this.props.history.replace(path)
       },
       onCancel() {},
     });
   }
  render(){
    return(
      <div className={style.heade_top}>
        <Search placeholder="input search text" onSearch={value => console.log(value)}style={{ width: 200,marginRight:'20px' }}/>
        <Badge dot >
          <BellOutlined/>
        </Badge>
          <Avatar onClick={()=>{this.showConfirm(this)}} style={{marginLeft:'20px'}}>{localStorage.getItem('name')}</Avatar>
      </div>
    )
  }
}

export default withRouter(Heade)
