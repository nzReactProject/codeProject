import React, { Component,Fragment } from 'react'
import style from './index.module.less'
import { Layout } from 'antd';
import CustomNav from '../pages/CustomNav/index'

const { Header, Footer, Sider, Content } = Layout;

class Box extends Component{
  render(){
    console.log(this)
    return(
      <Fragment>
        <Layout className={style.Box}>
          <Sider>
            <CustomNav></CustomNav>
          </Sider>
          <Layout>
            <Header style={{background:'#fff'}}>Header</Header>
            <Content>{this.props.children}</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Fragment>
    )
  }
}

export default Box
