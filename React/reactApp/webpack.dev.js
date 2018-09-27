//  webpack开发环境配置
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true,
    devServer: {
        contentBase: './dist',
        inline: true,
        hot: true,
        host: 'localhost',
        //服务端压缩是否开启
        compress: true,
        //配置服务端口号
        port: 9624
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    watchOptions: {
        //不监听的目录
        ignored: /node_modules/,
    }
});