<template>
    <i :class="classes" :style="styles"></i>
</template>
<script>
     const autoClassName="mvui-icon";
     export default{
         name:"ICON",
         data(){
            return{
            
            }
         },
         props:{
            type:String,
            size:[Number,String],
            color:String
         },
         computed:{
            classes(){
               return `${autoClassName} ${autoClassName}-${this.type}`
            },
            styles(){
                let style={};
                if(this.size){
                   style['font-size']=`${this.size}`+"px";
                }
                if(this.color){
                   style['color']=this.color;
                }
                return style;
            }
         }
     }
</script>