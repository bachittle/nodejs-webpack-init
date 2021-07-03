const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'intro.bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.txt$/, 
				use: 'ts-loader',
				exclude: /node_modules/
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, "./src/template.html")
	})
  ],
  mode: 'production',
}