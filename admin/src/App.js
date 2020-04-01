import React, { Component } from 'react';
import Box from './Box/index'
import {HashRouter,Route,Redirect} from 'react-router-dom'
import Home from './pages/Home/index'
import Market from './pages/Market';
import GoodsList from './pages/Goods/GoodsList';
import UserList from './pages/Admins/UserList';
import isSet from './pages/isSet';
import GoodAdd from './pages/Goods/GoodsAdd'
import GoodsUpdate from './pages/Goods/GoodsUpdate/index.js'
class App extends Component{
  render(){
    return (
      <HashRouter>
        <Box>
          <Redirect from='/' to='/admin/home'></Redirect>
          <Route path='/admin/home' component={Home}></Route>
          <Route path='/admin/market' component={Market}></Route>
          <Route path='/admin/goodsList' component={GoodsList}></Route>
          <Route path='/admin/usersList' component={UserList}></Route>
          <Route path='/admin/isset' component={isSet}></Route>
          <Route path='/admin/goodsAdd' component={GoodAdd}></Route>
          <Route path='/admin/goodsUpdate/:id' component={GoodsUpdate}></Route>
        </Box>
      </HashRouter>
    )
  }
}

export default App;
