//  webpack生产环境配置
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    plugins: [
        // 指定环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        // 清理/dist 文件夹
        new CleanWebpackPlugin(['dist']),  
    ]
});