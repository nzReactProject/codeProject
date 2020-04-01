import React, { Component } from 'react'
import { Avatar,Input,Badge   } from 'antd';
import style from './index.module.less'
import { BellOutlined } from '@ant-design/icons';
const { Search } = Input;
class Heade extends Component {
  render(){
    return(
      <div className={style.heade_top}>
        <Search placeholder="input search text" onSearch={value => console.log(value)}style={{ width: 200,marginRight:'20px' }}/>
        <Badge dot >
          <BellOutlined/>
        </Badge>
          <Avatar style={{marginLeft:'20px'}}>USER</Avatar>
      </div>
    )
  }
}

export default Heade
