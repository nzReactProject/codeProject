import axios from '../utils/axios'
class Admin {
  login(payload){
    console.log(payload)
    let {userName,passWord} = payload
    let url = `/rat/admin/login?userName=${userName}&passWord=${passWord}`
    // let url = 'http://localhost:3019/admin/login'
    console.log(url)
    axios.post(url,{userName,passWord}).then((res)=>{
      console.log('res',res)
    }).catch((err)=>{
      console.log(err)
    })
    // return axios.post(url,payload)
  }
}

export default new Admin()
