// const express = require('express');
// const jsonServer = require('json-server');

// const app = express();

// const PORT = process.env.PORT || 8000;

// app.use('http://localhost:3000', jsonServer.router('db.json'));
// app.use(express.static(__dirname+'/dist/assignment'));

// app.get('/*', (req, res) => {
//     res.sendFile(__dirname+'/dist/assignment/index.html');
// });

// app.listen(PORT, () => {
//     console.log('app is listening at '+PORT);
// })

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');

const middlewares = jsonServer.defaults({
  static: './dist/assignment',
});

server.get('/*', (req, res) => {
    res.sendFile('.dist/assignment/index.html');
});

const PORT = process.env.PORT || 8000;
server.use(middlewares);

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);

server.use(router);
server.listen(PORT, () => {
  console.log('Server is running');
});

