var htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	entry:'./src/app.js',
	//entry:['./src/script/main.js','./src/script/a.js',],
	/*entry:{
		main:'./src/script/main.js',
		a:"./src/script/a.js",
		b:"./src/script/b.js",
		c:"./src/script/c.js"
	},*/
	output:{
		path:'./dist',
		//filename:'bundle.js',
		//filename:'[name].js',
		//filename:'[hash].js',
		//filename:'[chunkshash].js',
		filename:'js/[name].bundle.js',
		//publicPath:'http://cdn.com/'//设置上线后的地址路径
	},
	module:{
		loader:[{
			test:/\.js$/,
			loader:'babel',
			query:{
				presets:['latest']
			}//或者在pack.json中定义babel"babel":{"presets":["latest"]}
		}]
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'body',
		})
		/*new htmlWebpackPlugin({
			filename:'a.html',
			template:'index.html',
			inject:'body',
			title:'this is a',
			chunks:['main','a'],
			excludeChunks:['b','c']//excludeChunks:['b','c'],不包含那些文件
		}),
		new htmlWebpackPlugin({
			filename:'b.html',
			template:'index.html',
			inject:'body',
			title:'this is b',
			chunks:['b']
		}),
		new htmlWebpackPlugin({
			filename:'c.html',
			template:'index.html',
			inject:'body',
			title:'this is c',
			chunks:['c']
		})*/
	]
}