// const express = require('express')
// const https = require('https')
// const fs = require('fs')
// const path = require('path')
// const app = express();
// app.use('/', (req, res, next) => {
//     res.send('hello I am SSL Server !')
// })
// const options = {
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
// }
// const sslServer = https.createServer(options, app);
// sslServer.listen(9000, () => {
//     console.log('Secure server is listening on port 9000')
// })


const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};

const server = https.createServer(options, app);

app.get('/', (req, res) => {
  res.send('Hello, secured world!');
});

server.listen(443, () => {
  console.log('Server is running on https://localhost:443');
});
