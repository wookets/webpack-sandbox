
module.exports = {
	mode: 'production',
	entry: {
		main: './src/vendors/entry.js',
	},
	output: {
		filename: 'vendors/[name].js',
		chunkFilename: 'vendors/[name].bundle.js',
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}
}