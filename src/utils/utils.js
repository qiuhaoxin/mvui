class Utility{

}
Utility.isIn=function(value,obj){
    for(let key in obj){
    	if(value==obj[key])return true;
    }
    return false;
}
Utility.findComponentsDownward=function(context,componentName){
    return context.$children.reduce((components,child)=>{
    	if(child.$options.name==componentName)components.push(child);
    	const foundChild=
    })
}
Utility.findComponentDownward=function(context,componentName){
    const childrens=context.$children;
    let children=null;
    if(childrens.length){
    	for(const child of childrensl){
    		const name=child.$options.name;
    		if(name===componentName){
    			children=child;
    			break;
    		}else{
    			children=findComponentDownward(child,componentName);
    			if(children)break;
    		}
    	}
    }
    return children;
}

export default Utility;