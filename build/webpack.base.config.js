const path = require('path')

//webpack will make all the distribution code needed
// by taking js files adding pollyfil etc and gening up
// what is needed by browser

const config = {
  entry: {
    app: path.resolve(__dirname, '../src/client-entry.js')
  },
  resolve: { //resolve decreases performance and not recommended
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  output: {
    path: path.resolve(__dirname, '../dist'),  //end result of web page included in distribution folder
    publicPath: '/',
    filename: 'assets/js/[name].js' //name is going to be app.js here from the entry above on line 8
  }
};

  //dist folder is what will eventuall be deployed
//all files are required for development
module.exports = config

//const config = {
//  entry: {
//    app: path.resolve(__dirname, '../src/client-entry.js')
//  },
//  module: {
//    rules: [
//      {
//        enforce: 'pre',
//        test: /(\.js$)/,
//        loader: 'eslint-loader',
//        exclude: /node_modules/
//      }
//    ]
//  },
//  resolve: {
//    alias: {
//      vue: 'vue/dist/vue.js'
//    }
//  },
//  output: {
//    path: path.resolve(__dirname, '../dist'),
//    publicPath: '/',
//    filename: 'assets/js/[name].js'
//  }
//}

//module.exports = config
