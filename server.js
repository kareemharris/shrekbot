/*const express = require('express');

const server = express();

server.all('/', (req, res) => {

  res.setHeader('Content-Type', 'text/html');

  res.write('<link href="https://fonts.googleapis.com/css?family=Roboto Condensed" rel="stylesheet"> <style> body {font-family: "Roboto Condensed";font-size: 22px;} <p>Hosting Active</p>');

  res.end();

})



function keepAlive() {

  server.listen(3000, () => { console.log("Server is online!") });

}

module.exports = keepAlive;*/ 

const app = require('http').createServer((req, res) => res.send('Hello world'));
const PORT = process.config.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is ready to listen on port ${PORT}`);
});