### 化妆品后台管理系统
### react 脚手架工具
1. 全局安装脚手架 npm  install create-react-app -g 
2. 查看是否安装成功 create-react-app  -V
3. create-react-app 项目名字    通过脚手架工具创建项目

注意：部分插件的版本依赖问题  需要打开旺旺大礼包
npm run  eject  
打开旺旺大礼包之前执行一次本地git仓库的提交

npm start 跳转到实例界面项目就算创建ok

#### 框架：antd
```
npm i @ant-design/pro-layout --save
```
#### 样式 less
 1. 安装相关的预处理语言与加载器
 npm install less less-loader --save-dev
 2. 修改配置文件  config/webpack.config.js 将sass相关全变成less 

#### 引入antd
 引入全部的样式文件 index.js 
 import 'antd/dist/antd.css'
 import {Button} from antd 
#### 按需引入 
 ```
 下载安装 npm install   babel-plugin-import
 修改webpack.config.js 找 babel-loader >plugins
 babel-loader 
 "plugins": [
    ....,
    ["import", {'libraryName':'antd',style:true}]
 ]
 将less的版本回退到2.7.3 
 将index.js 里的全局样式文件删除 
 ```
### 网络请求 axios
1. axios做二次封装  拦截器
2. 处理跨域代理问题 webpackDevServer.config.js ->proxy ->配置方式和vue中完全一致
```
{
   ...,
   proxy:{
      "hehe":{
         target:"",
         changeOrigin:true,
         pathRewrite:{
            "^/hehe":''
         }
      },
       "xixi":{
         target:"",
         changeOrigin:true,
         pathRewrite:{
            "^/hehe":''
         }
      }
   }
   ...
}
```



