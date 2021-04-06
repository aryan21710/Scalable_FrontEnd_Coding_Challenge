const path = require('path');
const webpack = require('webpack');
/**  CopyWebpackPlugin is needed to copy the contents (only files) of any dir into a public dir. 
 It maintains the same dir structure while copying. Its not needed in this webpack configuration.
**/
const CopyWebpackPlugin = require('copy-webpack-plugin');
const cones = require('./src/common/cones.json');

module.exports = {
	entry: ['babel-polyfill', './src/index.tsx'],
	mode: 'development',
	output: {
		publicPath: 'public',
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin([{ from: 'public/index.html' }]),
	],
	devServer: {
		port: 3000,
		contentBase: path.join(__dirname, './public'),
		hot: true,
		open: true,
		historyApiFallback: true,
		before: function(app) {
			app.get('/api/cones', function(req, res) {
				res.json(cones);
			});
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|jpg)(\?[a-z0-9=.]+)?$/,
				loader: 'url-loader',
			},
			{
				test: /.(ts|tsx)$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
            },
            /* babel-loader is not needed in webpack if you set the target to es5 in tsconfig.json.
            all babel-polyfills related config will be handled by target es5.
            so babel-loader is not needed. ts-loader and target es5 config will still make the app work. 
            */
			{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		alias: {
			// '@ag-grid-community/core/modules': path.resolve('./node_modules/@ag-grid-community/core/dist/es2015/modules'),
			'@ag-grid-community/core': path.resolve('./node_modules/@ag-grid-community/core'),
			// 'ag-grid-enterprise': path.resolve('./node_modules/ag-grid-enterprise'),
			react: path.resolve('./node_modules/react'),
		},
		extensions: ['.ts', '.tsx', '.js'],
	},
	devtool: 'eval-cheap-source-map',
};
