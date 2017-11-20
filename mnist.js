const express = require('express')
const rp = require('request-promise')
const fs = require('fs')
const exec = require('child_process').exec;
const app = express()

app.get('/favicon.ico', (req, res) => {
  res.send(fs.readFileSync(__dirname + "/favicon.ico"))
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get('/predict', (req, res) => {
  const img = req.query.img
  if(!img) {
    return res.send("Usage: /predict?img=IMG_STR")
  }

  exec('python ml_model/fnn.py -m ml_model/mnist.model -p ' + '"[[' + img + ']]"',
      function (error, stdout, stderr) {
          res.send(stdout);
          //console.log('stderr: ' + stderr);
          if (error !== null) {
               console.log('exec error: ' + error);
          }
      });
})

app.use(express.static(__dirname));
app.listen(8080)
