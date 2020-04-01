import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';
import style from './index.module.less'
class DayEcharts extends Component {
  state ={
    option : {
      color:['#FFB6C1','#FFD700','#FF8C69','#FF6347','#EEC591','#CAE1FF','#B3EE3A','#87CEFA','#7CFC00','#ADFF2F'],
      title: {
          text: '全球数据统计',
          subtext: '化妆品',
          left: 'center'
      },
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      
      series: [
          {
              name: '数据统计',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                  {value: 335, name: '化妆品1'},
                  {value: 310, name: '化妆品2'},
                  {value: 234, name: '化妆品3'},
                  {value: 135, name: '化妆品4'},
                  {value: 148, name: '化妆品5'},
                  {value: 235, name: '化妆品6'},
                  {value: 210, name: '化妆品7'},
                  {value: 234, name: '化妆品8'},
                  {value: 135, name: '化妆品9'},
                  {value: 198, name: '化妆品10'}
              ],
              emphasis: {
                  itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
  }
  
  }
  render(){
    let {option} = this.state
    return (
      <div className={style.mark_cout}>
        <ReactEcharts option={option}></ReactEcharts>
      </div>
    )
  }
}

export default DayEcharts