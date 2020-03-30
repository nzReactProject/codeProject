import React, { Component,Fragment } from 'react'
import style from './index.module.less'
import { Divider,Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
class Home extends Component{
  render(){
    let time = localStorage.getItem('enterTime')
    return (
      <Fragment>
        <div className={style.home_box}>
          <h1 className={style.home_title}>你好，欢迎进入本系统，我们为您提供优质服务</h1>
          <p className={style.home_text}>您进入本系统的时间是<span>{time}</span></p>
        </div>
        <Divider>以下是最新</Divider>
        {/* 进入本系统的比例 */}
        <div className={style.home_show_box}>
          <div className={style.home_card}>
            <Row gutter={16}>
              <Col span={12}>
                <Card>
                  <Statistic title="月营销量" value={11.28} precision={2} valueStyle={{ color: '#3f8600',fontSize:'18px' }} prefix={<ArrowUpOutlined />} suffix="%" />
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <Statistic title="月好评率" value={9.3} precision={2} valueStyle={{ color: '#cf1322',fontSize:'18px' }} prefix={<ArrowDownOutlined />} suffix="%"/>
                </Card>
              </Col>
            </Row> 
          </div>
          <div className={style.home_card_mark}> 
            <h1>今日访问量</h1>
            <div className={style.home_card_content}>
              <span>180</span>
            </div>
          </div>
          <div className={style.home_card_mark}>
            <h1>累计访问量</h1>
            <div className={style.home_card_content}>
              <span>180</span>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Home