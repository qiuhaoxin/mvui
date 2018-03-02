/*
* 基础配置
*
*/
const path=require('path');
const webpack=require('webpack');
const package=require('../package.json');

function resolve(dir){
	return path.resolve(__dirname,"..",dir);
}

module.exports={
	module:{
		rules:[
           {
           	  test:/\.vue$/,
           	  loader:'vue-loader',
           	  options:{
           	  	  loaders:{
           	  	  	css:'vue-style-loader!css-loader',
           	  	  	less:'vue-style-loader!css-loader!less-loader'
           	  	  },
           	  	  postLoaders:{
           	  	  	html:'babel-loader'
           	  	  }
           	  }
           },
           {
           	   test:/\.js$/,
           	   loader:'babel-loader',
           	   exclude:/node_modules/
           },
           {
               test:/\.less$/,
               loader:'style-loader!css-loader!less-loader'
           },
           {
           	  test:/\.css$/,
              loader:'style-loader!css-loader'
           },
           {
           	   test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
           	   loader:'url-loader?limit=8192'
           },
           {
           	   test:/\.(html|tpl)$/,
           	   loader:'html-loader'
           }
		]
	},
	resolve:{
		extensions:['.js','.vue','.less','.css'],
		alias:{
			'vue':'vue/dist/vue.esm.js',
			'@':resolve('src')
		}
	},
	plugins:[
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
        	'process.env.VERSION':`'${package.version}'`
        })
	]
}