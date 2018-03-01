import App from '../app'

const mainpage = r => require.ensure([],()=>r(require("../pages/mainpage")),"mainpage");
const button = r => require.ensure([],()=>r(require("../pages/button")),"button");


export default [{
   path:'/',
   component:App,
   children:[
      {
      	  path:'',
      	  redirect:'/mainpage'
      },{
      	path:'/mainpage',
      	component:mainpage
      },{
         path:'/button',
         component:button
      }
   ]
}]