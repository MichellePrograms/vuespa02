const webpack = require('webpack');
const clientConfig = require('./webpack.client.config');

module.exports = function setupDevServer(app) {
  //to make hotmiddleware work
  // to connect to the server when the bundle rebuilds
  // and update the bundle as needed
  clientConfig.entry.app = [
    'webpack-hot-middleware/client',
    clientConfig.entry.app
  ];
  //extra plugins required to make hot middleware work
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
  const clientCompiler = webpack(clientConfig);
  app.use(
    require("webpack-dev-middleware")(clientCompiler, {
    stats: {
      colors: true
    }
  })
  );
  app.use(require('webpack-hot-middleware')(clientCompiler))
};


//module.exports = function setupDevServer (app) {
//  clientConfig.entry.app = [
//    'webpack-hot-middleware/client',
//    clientConfig.entry.app
//  ]
//  clientConfig.plugins.push(
//    new webpack.HotModuleReplacementPlugin(),
//    new webpack.NoEmitOnErrorsPlugin()
//  )
//  const clientCompiler = webpack(clientConfig)
//  app.use(
//    require('webpack-dev-middleware')(clientCompiler, {
//      stats: {
//        colors: true
//      }
//    })
//  )
//  app.use(require('webpack-hot-middleware')(clientCompiler))
//}
