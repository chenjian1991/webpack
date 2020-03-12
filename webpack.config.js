/* jshint esversion: 6 */ 
const path = require('path');
const webpackHtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const webpack = require('webpack');
module.exports = {
    entry:{
        index:'./src/index.js',
        // another:'./src/another-module.js',
    },
    // devtool:'inline-source-map',
    // module: {
    //         rules: [
    //             {
    //                 test: /\.css$/,
    //                 use: ['style-loader', 'css-loader']
    //             }
    //         ]
    //     },
    // devServer:{
    //     contentBase:'./dist',
    //     hot:true
    // },
    // optimization:{//最新版本的代码分割
    //     splitChunks:{
    //         chunks:'all',
    //     }
    // },
    plugins:[
        new CleanWebpackPlugin(),
        new webpackHtmlPlugin({
            title:"Code Splitting"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode:"disabled"
        })
        // new webpack.optimize.CommonsChunkPlugin({//  webpack4 之后已经废除
        //     name:'common'//指定公共 bundle 的名称。
        // })
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        filename:'[name].bundle.js',
        chunkFilename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    mode: "development"
    
};