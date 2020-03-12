# webpack
a  demo to study webpack
我将会在此基础上做一个webpack基本的配置的一个讲解，在自己学习的同时，希望也可以帮助到其他感兴趣的人

第一个章节：起步 和 管理资源   分支是master  已经按照官网全部做好，可下载参考；

第二章节 ： 管理输出  分支是manage-output   根据官网做的时候发现一个版本问题，CleanWebpackPlugin 这个3.0以上 npm run build  的时候会报错，这个时候应该写成const {CleanWebpackPlugin} = require('clean-webpack-plugin'); 这个样式，而且new CleanWebpackPlugin() 括号里面不能加【'dist'】; 这样就不报错了；

第三章节 ：模块热替换，也就是常说的热更新   分支在hot-module-replace  可自行查看下载;

第四章节 ：tree-shaking  去除无用代码， 分支 tree-shaking  可以自行查看；

第五章 ：生产环境配置  分支production-constructor 可自行查看；

第六章： 代码分割  分支code-split   代码分割第方法 new webpack.optimize.CommonsChunkPlugin({//  webpack4 之后已经废除
        //     name:'common'//指定公共 bundle 的名称。
        // })
        这个方法现在最新的webpack版本已经废除了，新的方法换成了直接配置optimization:{//最新版本的代码分割
    //     splitChunks:{
    //         chunks:'all',
    //     }
    // },
    这样就可以啦，真是坑啊，希望小伙伴们了解一下；
    
第七章：懒加载 分支lazy-load  其实就是运用了import(/*webpackChunkName:'name'*/,'name').then()  这样第懒加载方法，点击第时候可以再去加载需要用到的文件；







