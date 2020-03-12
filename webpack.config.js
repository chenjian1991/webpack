/* jshint esversion: 6 */ 
const path = require('path');
// const webpackHtmlPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const webpack = require('webpack');
module.exports = {
    entry:{
        app:'./src/index.js',
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
    // plugins:[
    //     new CleanWebpackPlugin(),
    //     new webpackHtmlPlugin({
    //         title:"Hot Module Replacement"
    //     }),
    //     new webpack.NamedModulesPlugin(),
    //     new webpack.HotModuleReplacementPlugin()
    // ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    mode: "development"
    
};