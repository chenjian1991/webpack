# webpack
a  demo to study webpack
我将会在此基础上做一个webpack基本的配置的一个讲解，在自己学习的同时，希望也可以帮助到其他感兴趣的人

第一个章节：起步 和 管理资源   分支是master  已经按照官网全部做好，可下载参考；
第二章节 ： 管理输出  分支是manage-output   根据官网做的时候发现一个版本问题，CleanWebpackPlugin 这个3.0以上 npm run build  的时候会报错，这个时候应该写成const {CleanWebpackPlugin} = require('clean-webpack-plugin'); 这个样式，而且new CleanWebpackPlugin() 括号里面不能加【'dist'】; 这样就不报错了；

