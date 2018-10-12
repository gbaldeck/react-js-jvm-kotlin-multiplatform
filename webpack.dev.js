const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const devServerContentLocation = 'build/webDevServerTemp';

module.exports = merge(common, {
    mode: "development", //see https://webpack.js.org/concepts/mode/
    output: { //location to out
        // options related to how webpack emits results
        path: path.resolve(__dirname, devServerContentLocation), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        "filename": "[name].[chunkhash:8].js" // string    // the filename template for entry chunks
    },
    devServer: {
        proxy: { // proxy URLs to backend development server (great for CORS issues while developing)
            // '/api': 'http://localhost:3000'
        },
        port: 9000,
        contentBase: path.join(__dirname, devServerContentLocation), // boolean | string | array, static file location
        compress: false, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: false, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: false, // only errors & warns on hot reload
    },
    plugins: [
        new CleanWebpackPlugin([devServerContentLocation]),
        new CopyWebpackPlugin( //copy the public files not bundled with webpack, ignore the html template since webpack takes it and generates for us
            [{ from: 'src/jsMain/public', to: '', ignore: [ '*.html' ], force: false }],//"to" is '' because it already knows where to output based on content directory
            { copyUnmodified: false }
        ),
        new WriteFileWebpackPlugin() //makes webpack dev-server write the bundles to the file system
    ]
});
