import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';
import style from './index.module.less'
class DayCount extends Component {
  state ={
    option :{
        xAxis: {
            type: 'category',
            data: ['广州', '深圳', '北京', '杭州', '上海', '哈尔滨', '石家庄','青岛','南京','天津','武汉','无锡']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320,1500,1320,1210,1103,989],
            type: 'line',
            smooth: true
        }]
    }
  }
  render(){
    let {option} = this.state
    return (
      <div className={style.mark_day}>
        <ReactEcharts option={option}></ReactEcharts>
      </div>
    )
  }
}

export default DayCount