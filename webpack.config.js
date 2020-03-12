/* jshint esversion: 6 */ 
const path = require('path');
const webpackHtmlPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
    },
    plugins:[
        new CleanWebpackPlugin(),
        new webpackHtmlPlugin({
            title:"output management test"
        }),
        new webpack.ProvidePlugin({
            _ : 'lodash'
        })
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    
};