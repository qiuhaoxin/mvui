/*
*本地开发配置
*
*/
const path=require('path');
const webpack=require('webpack');
const merge=require('webpack-merge');
const baseConfig=require('./webpack.base.config.js');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports=merge(baseConfig,{
	entry:{
		main:'./demos/main.js'
	},
	output:{
		path:path.join(__dirname,"../demos/dist"),
		publicPath:'',
		filename:'[name].js',
		chunkFilename:'[name].chunk.js'
	},
	resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js'
            // vue: 'vue/dist/vue.runtime.js'
        }
    },
	plugins:[
	    new webpack.optimize.CommonsChunkPlugin({name:'vendor',filename:'vendor.chunk.js'}),
		new HtmlWebpackPlugin({
			inject:true,
			filename:path.join(__dirname,"../demos/dist/index.html"),
			template:path.join(__dirname,"../demos/index.html")
		})
	]

	
})