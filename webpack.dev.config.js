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
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader',		
				{
					loader:'postcss-loader',options:{ plugins:[ require('postcss-import')(),require('autoprefixer')()]}
				}
			]
		},
		{
			test: /\.tpl$/,
			use: [
				'ejs-loader'
			]
			
		},
		{
			test: /\.html$/,
			use:[
				'html-loader'
			]
		},
		
		{
              test:/\.less$/,
              use:[
                  'style-loader',
                  'css-loader',
                  {
					loader:'postcss-loader',options:{ plugins:[ require('postcss-import')(),require('autoprefixer')()]}
				  },
                  'less-loader'
              ]
        },
		{
			test: /\.(png|jpg|gif|svg)$/i,
			use:[
				'file-loader'
			]
		},
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