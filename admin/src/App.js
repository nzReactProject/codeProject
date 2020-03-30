import React, { Component } from 'react';
import Box from './Box/index'
import {HashRouter,Route,Redirect} from 'react-router-dom'
import Home from './pages/Home/index'
import Market from './pages/Market';
import GoodsList from './pages/Goods/GoodsList';
import UserList from './pages/Admins/UserList'
import isSet from './pages/isSet'
import Login from './pages/Login/index'

class App extends Component{
  render(){
    return (
      <HashRouter>
        {/* 登录路由 */}
        <Route path='/login' component={Login}></Route>
        {/* 进入系统的路由 */}
        <Route path='/admin' render={()=>{
          return(
            <Box> 
              <Redirect from='/admin' to='/admin/home'></Redirect>
              <Route path='/admin/home' component={Home}></Route>
              <Route path='/admin/market' component={Market}></Route>
              <Route path='/admin/goodsList' component={GoodsList}></Route>
              <Route path='/admin/usersList' component={UserList}></Route>
              <Route path='/admin/isset' component={isSet}></Route>
            </Box>
          )
        }}>
        </Route>
      </HashRouter>
    )
  }
}

export default App;
