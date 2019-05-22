// 实际是node 需要导出对象
// import 和 require区别？https://www.cnblogs.com/sunshq/p/7922182.html es6 commonjs两种方式

const path = require('path')
const webpack = require('webpack');
// path就是获取路径的一个nodeAPI
//import依赖

const HtmlWebpackPlugin = require('html-webpack-plugin')
const extracttextplugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin");


module.exports = {
    entry: {
        // 一个或者多个入口（多个入口先不讲）
        'main': './main.js',
        // 'main':path.resolve('./main.js')
    },
    output: {
        // path: path.resolve('./dist'), //相对转绝
        path: __dirname + "/dist",
        filename: 'buildok[hash].js',
        // filename:'buildok.js'
    },
    // watch: true,
    //自动监视
    module: {
        // loader是啥？http://www.cnblogs.com/imgss/p/9813868.html
        // 咋写一个loader https://www.jianshu.com/p/cb888d69ca34
        // 简单来说就是资源转换器吧
        loaders: [ //也可以叫roles
            // loaders是一个数组，其中的元素是我们使用的所有loader，
            // 每个loader对应一个object，test是加载器要匹配的文件后缀正则，
            // !”用来分隔不同的加载器。
            // 遇到后缀为css的文件，就会使用style-loader和css-loader去加载这个文件。

            // 1.遇到后缀为.css的文件，webpack先用css-loader加载器去解析这个文件，
            // 遇到“@import”等语句就将相应样式文件引入（所以如果没有css-loader，就没法解析这类语句），
            // 最后计算完的css，将会使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里。
            // 2.loader是有顺序的，webpack肯定是先将所有css模块依赖解析完得到计算结果再创建style标签。
            // 因此应该把style-loader放在css-loader的前面（webpack loader的执行顺序是从右到左）。
            // 为啥从又到左边执行呢？因为只webpack（compose方式，而不是pipe的方式）
            //   https://blog.csdn.net/qq_37109325/article/details/80169289
 
            // 这个是样式混入到js里面
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: /node_modules/ //忽略nodemodules中的东西
                // include 
            },

            // 单独把css抽离
            // {
            //     test: /\.css$/,
            //     loader: extracttextplugin.extract({
            //         use: ["css-loader"],
            //     }),
            //     exclude: /node_modules/ //忽略nodemodules中的东西
            // },

            // less
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },


            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'url-loader'
                // 74105  ?limit=7500000
            },

            //处理es 6 7 8
            // Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中，
            // webpack可以把其不同的包整合在一起使用
            // 需要安装单独的包解析Es6的babel-env-preset
            // npm install --save-dev babel-core babel-loader babel-preset-env 

            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['env'], //处理关键字  有可能写成babelrc babel
                    plugins: ['transform-runtime'] //处理函数
                },
                exclude: /node_modules/,
            },

        ]
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: ['style-loader', 'css-loader']
    //         }
    //     ]
    // }

    // plugin是啥？插件（Plugins）是用来拓展Webpack功能的，它们会在整个构建过程中生效，执行相关的任务。
    // Loaders和Plugins常常被弄混，但是他们其实是完全不同的东西，可以这么来说，loaders是在打包构建过程中用来处理源文件的
    // （JSX，Scss，Less..），一次处理一个，插件并不直接操作单个文件，它直接对整个构建过程其作用。
    // Webpack有很多内置插件，同时也有很多第三方插件，可以让我们完成更加丰富的功能。也就是升级版本的loaders
    plugins: [
        new HtmlWebpackPlugin({
            template:'./index.html'//参照物
        }),
        new webpack.BannerPlugin('百望股份1234567'), //这个是相当于打包注释
        new webpack.optimize.UglifyJsPlugin(), //是否压缩

        // 插件执行顺序跟元素索引有关系
        //hash值
    
        //会自动创建scritp标签

        //对应抽离css的东西 分离css文件
        // new extracttextplugin({filename:'css/index.css'}) ,//这个名字随便写

        //自动清楚dist里面的东西
        new CleanWebpackPlugin('./dist/*.js', {
            root: __dirname,
            verbose: true,
            dry: false
        }),
    
    ]
}