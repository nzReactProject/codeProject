/* 这里是导航模块 */
import React, { Component } from 'react'
import style from './index.module.less'
import { Menu } from 'antd';
import {withRouter} from 'react-router-dom'
import {
  HomeOutlined,
  SettingOutlined,
  AreaChartOutlined,
  ShopOutlined,
  UserOutlined
} from '@ant-design/icons';

import navData from '../Store/navData/index' // 数据
const {SubMenu } = Menu;
function handleClick(e) {
  // 点击获取跳转路径通过编程式导航实现跳转
  console.log(e)
  let {path} = e.item.props 
  this.props.history.replace(path)
}

class CustomNav extends Component {
  renderIcon(icon){
    switch (icon) {
      case 'HomeOutlined':
        return <HomeOutlined/>
      case 'SettingOutlined':
        return <SettingOutlined/>
      case 'AreaChartOutlined':
        return <AreaChartOutlined/>
      case 'ShopOutlined':
        return <ShopOutlined/>
      case 'UserOutlined':
        return <UserOutlined/>
      default:
        return <UserOutlined />
    }
  }
  renderNav(data){
    return data.map((item,index)=>{
      if(item.children){
        return(
          <SubMenu key={item.key} title={(()=>{
            return(
              <span>
                {this.renderIcon(item.icon)}
                {item.title}
              </span>
            )
          })()}>
            {/* 如果里面还有2级 将渲染的方法在调用一遍 */}
            {this.renderNav(item.children)}
          </SubMenu>
        )
      }else{
        return(
        <Menu.Item key={item.key} path={item.path}>
          {this.renderIcon(item.icon)}
          {item.title}
        </Menu.Item>
        )
      }
    })
  }
  render(){
    return(
      <div>
        <h1 className={style.nav_login}>化妆品</h1>
        <div>
          <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" onClick={handleClick.bind(this)}>
            {this.renderNav(navData)}
          </Menu>
        </div>
      </div>
    )
  }
}

export default withRouter(CustomNav)
