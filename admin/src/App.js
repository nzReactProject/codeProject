import React, { Component } from 'react';
import Box from './Box/index'
import {HashRouter,Route} from 'react-router-dom'
import Home from './pages/Home/index'
import Market from './pages/Market';
import GoodsList from './pages/Goods/GoodsList';
import UserList from './pages/Admins/UserList'
import isSet from './pages/isSet'

class App extends Component{
  render(){
    return (
      <HashRouter>
        <Box>
          <Route path='/admin/home' component={Home}></Route>
          <Route path='/admin/market' component={Market}></Route>
          <Route path='/admin/goodsList' component={GoodsList}></Route>
          <Route path='/admin/usersList' component={UserList}></Route>
          <Route path='/admin/isset' component={isSet}></Route>
        </Box>
      </HashRouter>
    )
  }
}

export default App;
