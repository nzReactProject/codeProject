import React, { Component } from 'react';
import { Tabs,Statistic } from 'antd';
import style from './index.module.less'
import DayEcharts from './echarts/dayEcharts.js'
import DayCount from './echarts/dayEchart2.js'
import TolEcharts from './echarts/totlEcharts.js'

const { TabPane } = Tabs;
class Market extends Component {
  callback(key) {
    console.log(key);
  }
  render() { 
    return (
      <div className={style.market_box}>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="日销售" key="1">
            <div className={style.market_content}>
              <DayEcharts/>
              <div className={style.market_text}>
                <div className={style.market_text_title}>
                  <Statistic title="当月全国销售总额" value={123845} suffix='￥' className={style.market_text_total} valueStyle={{color:'#333'}}/>
                  <Statistic title="当月目标完成" value={41.28}suffix="%" valueStyle={{color:'#333'}} className={style.market_text_finish}/>
                </div>
                <DayCount/>
              </div>
            </div>
          </TabPane>
          <TabPane tab="累计销售" key="2">
            <div className={style.market_content}>
              <TolEcharts/>
            </div>
          </TabPane>
          <TabPane tab="好评" key="3">
          <div className={style.market_content}>
            <DayEcharts/>
          </div>
          </TabPane>
          <TabPane tab="差评" key="4">
          <div className={style.market_content}>
           <DayEcharts/>
           </div>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Market;
