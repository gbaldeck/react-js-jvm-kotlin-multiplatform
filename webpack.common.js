const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["./build/kotlin-js-min/js/main/starter.js"], //The entry point to our app, all modules are loaded from here
    module: {
        // configuration regarding modules
        rules: [
            { //this one loads the kotlin generated source maps for our kotlin emitted js files
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'build/kotlin-js-min/js/main')
                ],
                use: ["source-map-loader"],
                enforce: "pre"
            },
            { //this one passes any .scss files imported or "required" in our kotlin js application through these loaders
                "test": /\.scss$/,
                "use": [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            { //same as above but for css
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            },
            { //same as above but for images
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            { //same as above but for fonts
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ],
    },
    resolve: {
        modules: ['node_modules',path.resolve(__dirname, 'build/kotlin-js-min/js/main')], //where to resolve our modules from
        alias: { //"Components" is an alias for the "component" folder so we don't have to type out the whole folder path every time
            'Components': path.resolve(__dirname, "src/jsMain/kotlin/com/starter/frontend/component"),
        }
    },
    devtool: "source-map", // enum  // enhance debugging by adding meta info for the browser devtools
    // source-map most detailed at the expense of build speed.
    context: __dirname, // string (absolute path!)
    // the home directory for webpack
    // the entry and module.rules.loader option
    //   is resolved relative to this directory
    target: "web", // enum  // the environment in which the bundle should run
    // changes chunk loading behavior and available modules
    // lets you provide options for webpack-serve
    stats: "normal",  // lets you precisely control what bundle information gets displayed
    optimization: {
        splitChunks: { //splits into two js files, one for our main code and one for the vendors, like react, kotlin-stdlb, etc.
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({ //generates our html file based on a template
            title: 'starter',
            filename: 'index.html',
            template: 'src/jsMain/public/index.html',
            unsupportedBrowser: true,
            appMountIds: ['root']
        })
    ]
};