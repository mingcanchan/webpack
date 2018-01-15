const webpack = require('webpack');
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: './src/app.js',
  output: {
	path: __dirname+'/dist',
    filename: 'js/[name].bundle.js',

  },
  module: {
	rules: [
		{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader",
				options: {
					presets: ['lated']
				}
            },
            exclude: __dirname+'node_modules',
			include: __dirname+'src'
			
        },
		{
			test: /\.css/,
			use: [{
				loader:'style-loader'
			},{
				loader:'css-loader'
			},{ 
				loader: 'postcss-loader',options: {
					plugins: function () {return [require('autoprefixer')];}
				}
			}]
		}
	]
  },
	
  plugins: [
	new htmlWebpackPlugin({
		filename: 'index.html',
		template: 'index.html',
		inject: 'body'		
	})
  ]
};