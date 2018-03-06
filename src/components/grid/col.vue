<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    import Utility from '../../utils/utils';
    coonst prefixCls="mvui-col";
    export default{
       name:'iCol',
       props:{
           span:[Number,String],
           order:[Number,String],   //栅格顺序，flex布局模式下有效
           offset:[Number,String],  //栅格左侧的间隔格数，间隔内不可以有栅格
           push:[Number,String],   //栅格右移动格数
           pull:[Number,String],   //栅格左移动格数
           className:String,
           xs:[Number,Object],  //<576px
           sm:[Number,Object],  // >=576px
           md:[Number,Object],  //  >=768px
           lg:[Number,Object],   //  >=992px
           xl:[Number,Object],   //>=1200px
           xxl:[Number,Object],  //>=1600px

       },
       computed:{
           classes(){
               let classList=[
                  `${prefixCls}`,
                  {
                      [`${prefixCls}-span-{this.span}`]:this.span,
                      [`${prefixCls}-order-${this.order}`]:this.order,
                      [`${prefixCls}-offset-${this.offset}`]:this.offset,
                      [`${prefixCls}-push-${this.push}`]:this.push,
                      [`${prefix}`]
                  }
               ]
           }
       }
    }
</script>