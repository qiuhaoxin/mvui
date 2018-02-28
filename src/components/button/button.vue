<template>
   <button :type="buttonType" :class="classes" :disabled="disabled" 
   @click="handleClick">
        <Icon class="mvui"  v-if='loading'></Icon>
   </button>
</template>
<script type='text/javascript'>
     import Icon from '../Icon';
     const prefixCls="mvui-btn";
     export default{
        name:'Button',
        components:['Icon'],
        props:{
            buttonType
        },
        data(){
            return {
            
            }
        },
        methods{
           handleClick(){

           }
        },

     }
</script>