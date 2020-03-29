/* 这里是导航模块 */
import React, { Component } from 'react'
import style from './index.module.less'
import { Menu } from 'antd';
import {
  HomeOutlined,
  SettingOutlined,
  AreaChartOutlined,
  ShopOutlined,
  UserOutlined
} from '@ant-design/icons';

import state from '../Store/navData/index' // 数据
const {SubMenu } = Menu;

class CustomNav extends Component {
  render(){
    return(
      <div>
        <h1 className={style.nav_login}>化妆品</h1>
        <div>
        <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark">
          {/* 
          
            这里是渲染侧边栏 数据来源 state
            具体效果可以看一下下面的，
            任务：完成页面跳转即可，可以参考老师的（做侧边栏）代码
          
          */}
        </Menu>

          {/* <Menu
          defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
          >
            <Menu.Item key="1"><HomeOutlined/>首页</Menu.Item>
            <Menu.Item key="2"><AreaChartOutlined />平均日销售</Menu.Item>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <ShopOutlined />
                  <span>商品管理</span>
                </span>
              }
            >
              <Menu.Item key="3">商品列表</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <UserOutlined />
                  <span>管理员</span>
                </span>
              }
            >
              <Menu.Item key="4">管理员列表</Menu.Item>
            </SubMenu>
            <Menu.Item key="5"><SettingOutlined/>设置</Menu.Item>
          </Menu> */}
      </div>
      </div>
    )
  }
}

export default CustomNav
