const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const db = require('../db/models/photos.js');

mongoose.connect('mongodb://localhost/photos');

const app = express();

app.use(express.static(__dirname + './../client/dist'));
app.use(parser.json());

app.get('/', (req, res) => {
  res.redirect('/photos/1');
});

app.use('/photos/:restaurant_Id', express.static(__dirname + './../client/dist'))
app.get('/api/photos/:restaurant_Id',(req, res) => {
  let restaurant_Id = req.params.restaurant_Id;
  console.log('pinged server with id:', restaurant_Id)
  let promise = new Promise(function(res, reject) {
    db.retrieve(Number(restaurant_Id), function(err, data) {
      res(data);
    })
  }).then(function(resolved) {
    res.send(resolved);
  })
})

app.listen(2000, function() {
  console.log(`listening on port: 2000`);
}); 

