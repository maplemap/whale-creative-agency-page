var path = require('path');
var webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8090',
        'webpack/hot/only-dev-server',
        './client/main.js'
    ],
    output: {
        path: __dirname + '/public/',
        publicPath: "/public/",
        filename: "/js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!autoprefixer-loader!less",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loaders: [
                    'file?name=img/[sha512:hash:base64:7].[ext]',
                    'image-webpack?progressive=true&optimizationLevel=7&interlaced=true'
                ]
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'file?name=fonts/[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ["es2015", "stage-0", "react"],
                    plugins: ["react-hot-loader/babel"]
                },
                include: path.join(__dirname, 'client')
            }
        ]
    },

    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: false,
        contentBase: 'public',
        port: 8090,
        hot: true
    },

    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        }),
        new ExtractTextPlugin('css/bundle.css', {
            allChunks: true, 
            disable: process.env.NODE_ENV == 'development'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // don't show unreachable variables etc
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    );
}