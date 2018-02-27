import App from '../app'

const test = r => require.ensure([],()=>r(require("../pages/test")),"test")


export default [{
   path:'/',
   component:App,
   children:[
      {
      	  path:'',
      	  redirect:'/mainpage'
      },{
      	path:'/mainpage',
      	component:test
      }
   ]
}]