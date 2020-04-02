import axios from '../utils/axios'
import { message } from 'antd'
// let name =localStorage.getItem('name')
class Admin {
  getUserList(){
    let url = '/rat/admin/list'
    return axios.get(url)
  }
  getUserAdd({userName,passWord}){
    console.log({userName,passWord})
    let url = `/rat/admin/add?userName=${userName}&passWord=${passWord}`
    if(localStorage.getItem('name') === 'root'){
      return axios.post(url)
    } else {
      return message.error('权限不足')
    }
  }
  getUserUpdate({_id,userName,passWord}){
    let url = `/rat/admin/update?_id=${_id}&userName=${userName}&passWord=${passWord}`
    if(localStorage.getItem('name') === 'root'){
      return axios.put(url)
    } else {
      return message.error('权限不足')
    }
  }
  getUserDel(_id){
    let url = '/rat/admin/del?_id=' + _id
    console.log(_id)
    if(localStorage.getItem('name') ==='root'){
      return axios.delete(url)
    } else {
      return message.error('权限不足')
    }
  }
}

export default new Admin()
