import Button from './components/button';


const components={
	Button
}
const mvui={
	...components,
	iButton:Button
}

const install=function(Vue,opts={}){
	if(install.installed)return;
    
    Object.keys(mvui).forEach(key=>{
    	Vue.component(key,mvui[key]);
    })
}

if(typeof window!=='undefined' && window.Vue){
	install(window.Vue)
}

const API={
	version:process.env.VERSION,
	install,
	...components
}

module.exports.default=module.exports=API;