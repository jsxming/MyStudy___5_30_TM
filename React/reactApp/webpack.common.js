//  webpack通用配置
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)/, //处理图片
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 10000,
                        outputPath: 'img/',
                        publicPath: './img'
                    }
                }]
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // 该插件默认生成index.html 文件
        new HtmlWebpackPlugin({
            template: './index.html', //以这个文件作为模板
            filename: './index.html', //打包后的文件名
            title: 'React——Webpack',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        }),
    ],
};