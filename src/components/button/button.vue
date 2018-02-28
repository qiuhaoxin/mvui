<template>
   <button :type="buttonType" :class="classes" :disabled="disabled" 
   @click="handleClick">
        <Icon class="mvui" v-if='loading'></Icon>
   </button>
</template>
<script type='text/javascript'>
     import Icon from '../Icon';

     export default{
        name:'Button',
        components:['Icon'],
        props:{

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