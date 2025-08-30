const http = require('http');
const httpProxy = require('http-proxy-middleware');
const express = require('express');

const app = express();

const proxy = httpProxy.createProxyMiddleware({
  target: 'https://luminal.lol/',
  changeOrigin: true,
  pathRewrite: {
    '^/': '/' // just in case
  }
});

app.use('/', proxy);

app.listen(3000, () => {
  console.log('Luminal running on port 3000');
});
