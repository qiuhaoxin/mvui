<template>
   <button :type="buttonType" :class="classes" :disabled="disabled" 
   @click="handleClick">
        <Icon class="mvui"  v-if='loading'></Icon>
        <Icon :type="icon" v-if="icon && !loading"></Icon>
        <span v-if="showSlot" ref='slot'><slot></slot></span>
   </button>
</template>
<script type='text/javascript'>
     import Icon from '../Icon';
     import Utility from '../../utils/utils';
     const prefixCls="mvui-btn";
     export default{
        name:'Button',
        components:{Icon},
        props:{
            buttonType:{
                default:'button',
                validator(value){
                   return Utility.isIn(value,["button","submit","reset"]);
                }
            },
            type:{
               validator (value){
                   return Utility.isIn(value,['primary','ghost','dashed'])
               }
            },
            shape:{
               validator (value){
                  return Utility.isIn(value,['circle','circle-outline'])
               }
            },
            size:{
                validator (value){
                   return Utility.isIn(value,['small','large','default'])
                }
            },
            loading:Boolean,
            disabled:Boolean,
            icon:String,
            long:{
               type:Boolean,
               default:false
            }
        },
        data(){
            return {
                showSlot:true
            }
        },
        computed:{
            classes(){
                console.log("heijj");
                return [
                  `${prefixCls}`,
                  {
                      [`${prefixCls}-${this.type}`]:!!this.type,
                      [`${prefixCls}-long`]:this.long,
                      [`${prefixCls}-${this.size}`]:!!this.size,
                      [`${prefixCls}-${this.shape}`]:!!this.shape,
                      [`${prefixCls}-loading`]:this.loading!=null && this.loading,
                      [`${prefixCls}-icon-only`]:!this.showSlot && (!!this.icon || this.loading)

                  }
                ]
            }
        },
        methods:{
           handleClick(event){

           }
        },
        mounted(){
           console.log("ei");
           this.showSlot=this.$slots.default!=undefined
        }
     }
</script>