const express = require('express');
const next = require('next');
const proxy = require('http-proxy-middleware');

const port = 3000;
const app = next({ dev: true, dir: '.' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(
    '/api',
    proxy.createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
    }),
  );

  server.all('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});