import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Echarts extends Component {
    state={
      option : {
        color:['#FF4040','#8DEEEE','#ccc','#7B68EE','#90EE90'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: ['当月访问', '好评度', '差评度', '新用户', '其他']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 335, name: '当月访问'},
                    {value: 310, name: '好评度'},
                    {value: 234, name: '差评度'},
                    {value: 135, name: '新用户'},
                    {value: 18, name: '其他'}
                ]
            }
        ]
    }
    }
  render() { 
      let {option} = this.state
    return ( 
      <div style={{position:'absolute',right:'0',width:'40%'}}>
        <h1>当月整体情况</h1>
        <ReactEcharts option={option}></ReactEcharts>
      </div>
     );
  }
}
 
export default Echarts;