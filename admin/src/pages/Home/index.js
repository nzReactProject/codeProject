import React, { Component,Fragment } from 'react'
import style from './index.module.less'
import { Divider } from 'antd';
import GrandEcharts from './grand_echarts'
import MonthEcharts from './month_echarts'
class Home extends Component{
  render(){
    let time = localStorage.getItem('enterTime')
    return (
      <Fragment>
        <div className={style.home_box}>
          <h1 className={style.home_title}>你好，欢迎进入本系统，我们为您提供优质服务</h1>
          <p className={style.home_text}>您进入本系统的时间是<span>{time}</span></p>
        </div>
        <Divider style={{marginBottom:'30px'}}>以下是最新</Divider>
        {/* 进入本系统的比例 */}
        <div className={style.home_show_box}>
          <GrandEcharts/>
          <MonthEcharts/>
        </div>
      </Fragment>
    )
  }
}
export default Home