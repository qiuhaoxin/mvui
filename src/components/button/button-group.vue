<template>
    <div :class="classes">
       <slot></slot>
    </div>
</template>
<script>
    import Utility from '../../utils/utils';
    const prefixCls="mvui-btn-group";
    export default{
       name:'ButtonGroup',
       props:{
          //button 组的大小
          size:{
             validator(value){
                return Utitility.isIn(value,['large','default','small']);
             }
          },
          //button 的形状
          shape:{
              validator(value){
                 return Utility.isIn(value,['circle','circle-outline']);
              }
          },
          //button的排序
          vertical:{
              type:Boolean,
              default:false
          }
       },
       computed:{
          classes(){
              return [
                  `${prefixCls}`,
                  {
                       [`${prefixCls}-${this.size}`]:!!this.size,
                       [`${prefixCls}-${this.shape}`]:!!this.shape,
                       [`${prefixCls}-${this.vertical}`]:this.vertical

                  }
              ]
          }
       }
    }
</script>