import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

export default [{
    path:'/',
    component:App,
    children:[
        //地址为空时跳转home页面  
        {
            path:'',
            redirect:'/home'
        },
        //首页城市列表
        {
            path:'/home',
            component:home
        }
    ]
}]