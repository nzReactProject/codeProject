import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';
class DayCount extends Component {
  state ={
    option : {
      color:['#B0E2FF'],
      xAxis: {
        type: 'category',
        data: ['广州', '深圳', '北京', '杭州', '上海', '哈尔滨', '石家庄','青岛','南京','天津','武汉','无锡']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [3220, 3030, 4504, 3420, 2987, 3554, 1125,2720,2561,3104,2240,2468],
          type: 'bar',
          showBackground: true,
      }]
  }
  }
  render(){
    let {option} = this.state
    return (
      <div>
        <ReactEcharts option={option}></ReactEcharts>
      </div>
    )
  }
}

export default DayCount