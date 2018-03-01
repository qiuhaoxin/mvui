class Utility{

}
Utility.prototype.isIn=function(value,obj){
    for(let key in obj){
    	if(value==obj[key])return true;
    }
    return false;
}