var express = require('express');
var path = require('path');
var config = require('./webpack.config.dev');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();
var compiler = webpack(config);

var port = process.env.PORT || 8080;

app.use(webpackDevMiddleware(compiler, {
  noInfo: true, 
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.get('*', function (request, response){
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, 'localhost', function(error) {
  if (error) throw error;
  console.log("server started on port " + port);
});