/*
*  生成环境
*/
const path=require('path');
const baseConfig=require('./webpack.base.config.js');
const merge=require('webpack-merge');
module.exports=merge(baseConfig,{
	entry:{
		main:'../src/index.js'
	},
	output:{
		path:path.resolve(__dirname,"../dist"),
		publicPath:'/dist/',
		filename:'mvui.min.js'
		libary:'mvui',
		libaryTarget:'umd',
		
	}
})