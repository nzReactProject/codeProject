import axios from '../utils/axios'
class Admin {
  login(payload){
    console.log(payload)
    let {userName,passWord} = payload
    let url = `/rat/admin/login?userName=${userName}&passWord=${passWord}`
    // let url = 'http://localhost:3019/admin/login'
    return axios.post(url)
  }
}

export default new Admin()
