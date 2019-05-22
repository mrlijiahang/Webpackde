// 实际是node 需要导出对象

const path = require('path')
const webpack = require('webpack');
// path就是获取路径的一个nodeAPI
//import依赖

const HtmlWebpackPlugin = require('html-webpack-plugin')
const extracttextplugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin");


module.exports = {
    entry: {
        // 一个或者多个入口
        'main': './main.js',
        // 'main':path.resolve('./main.js')
    },
    output: {
        // path: path.resolve('./dist'), //相对转绝
        path: __dirname + "/dist",
        filename: 'buildok-[hash].js',
        // filename:'buildok.js'
    },
    watch: true,
    //自动监视
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader:  path.resolve('./loader/test-loader.js'),
                include:[
                    path.resolve('./test1.js'),
                ]   
            },
        ]
    },

    plugins: [
        new webpack.BannerPlugin('百望股份'), //这个是相当于打包注释
        new HtmlWebpackPlugin({
            template:'./index.html'//参照物
        }),
    ]
}