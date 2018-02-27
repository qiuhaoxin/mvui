/*
*本地开发配置
*
*/
const path=require('path');
const webpack=require('webpack');
const merge=require('webpack-merge');
const baseConfig=require('./webpack.base.config.js');

module.exports=merge(baseConfig,{
	entry:'',
	out:[],
	
})