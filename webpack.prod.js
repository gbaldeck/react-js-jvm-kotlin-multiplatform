const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const prodBuildDirectory = 'build/webProd';

module.exports = merge(common, {
    mode: "production", //see https://webpack.js.org/concepts/mode/
    output: {
        // options related to how webpack emits results
        path: path.resolve(__dirname, prodBuildDirectory), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        "filename": "[name].[chunkhash:8].js" // string    // the filename template for entry chunks
    },
    plugins: [
        new CleanWebpackPlugin([prodBuildDirectory]),
        new CopyWebpackPlugin(//copy the public files not bundled with webpack, ignore the html template since webpack takes it and generates for us
            [{ from: 'src/jsMain/public', to: '', ignore: [ '*.html' ], force: false }], //"to" is '' because it already knows where to output based on content directory
            { copyUnmodified: false }
        )
    ]
});