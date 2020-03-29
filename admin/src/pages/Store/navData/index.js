export default [
  {
    key:'1',
    title:'首页',
    icon:'<HomeOutlined/>',
    path:'/admin/home'
  },
  {
    key:'2',
    title:'平均日销售',
    icon:'<AreaChartOutlined/>',
    path:'/admin/market'
  },
  {
    key:'3',
    title:'商品管理',
    icon:'<ShopOutlined/>',
    path:'/admin/goods',
    children:[
      {
        key:'3-1',
        title:'商品列表',
        icon:'<ShopOutlined/>',
        path:'/admin/goodList'
      },
      {
        // 需要什么往下加
      }
    ]
  },
  {
    key:'4',
    title:'管理员',
    icon:'<UserOutlined/>',
    path:'/admin/users',
    children:[
      {
        key:'4-1',
        title:'管理员列表',
        icon:'<UserOutlined/>',
        path:'/admin/usersList'
      },
      {
        // 需要什么往下加
      }
    ]
  }
]