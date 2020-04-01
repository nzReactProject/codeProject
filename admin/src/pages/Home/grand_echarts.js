import React, { Component } from 'react';
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react';

class Echarts extends Component {
    state={
        option : {
            xAxis: {
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120,134,110,104,121,132,100,94,128,175,94,72],
                type: 'line'
            }]
        }
    }
  render() { 
      let {option} = this.state
    return ( 
      <div style={{margin:'0',padding:'0',height:'500px',width:'100%',float:'left'}}>
        <h1>累计访问量</h1>
        <ReactEcharts option={option} style={{width:'45%',margin:'0',padding:'0'}}></ReactEcharts>
      </div>
     );
  }
}
 
export default Echarts;