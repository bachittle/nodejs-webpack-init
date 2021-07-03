const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'intro.bundle.js',
	},
	module: {
		rules: [{test: /\.txt$/, use: 'raw-loader'}],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, "./src/template.html")
	})
  ],
  mode: 'production',
}