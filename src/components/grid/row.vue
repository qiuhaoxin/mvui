<template>
    <div :class="classes" :style="styless">
       <slot></slot>
    </div>
</template>
<script>
   import Utility from '../../utils/utils';
   const prefixCls="mvui-row";
   export default{
      name:'row',
      data(){
         return {};
      },
      props:{
         type:{
            validator(value){
                return Utility.isIn(value,['flex']);
            }
         },
         align:{
             validator(value){
                 return Utility.isIn(value,['top','middle','bottom']);
             }
         },
         justify:{
             validator(value){
                 return Utility.isIn(value,['start','end','center','space-around','space-between']);
             }
         },
         gutter:{
             type:Number,
             default:0
         },
         className:String
      },
      computed:{
         classes(){
            return {
               [`${prefixCls}`]:!this.type,
               [`${prefixCls}-${this.type}`]:!!this.type,
               [`${prefixCls}-${this.aligin}`]:!!this.align,
               [`${prefixCls}-${this.justify}`]:!!this.justify,
               [`${this.className}`]:!!this.className      //自定义的类名
            }
         },
         styles(){
            let styles={};
            if(this.gutter!==0){
                style={
                   marginLeft:this.gutter / -2 + "px",
                   marginRight:this.gutter / -2 + "px"
                }
            }
            return styles;
         }
      },
      methods:{
         updateGutter(val){
            const Cols=Utility.findComponentsDownward(this,'iCol');
            if(Cols.length){
                Cols.forEach((child)=>{
                   if(val!==0){
                      child.gutter=val;
                   }
                })
            }
         }
      },
      watch:{
          gutter(val){
             this.updateGutter(val);
          }
      },
      mounted(){

      }
   }
</script>