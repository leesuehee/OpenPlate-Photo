const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const db = require('../db/models/photos.js');
mongoose.connect('mongodb://localhost/photos');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.json());

app.get('/photos/:restaurant_id',(req, res) => {

  let restaurant_id = req.params.restaurant_id;
  console.log(restaurant_id);

  let promise = new Promise(function(res, reject) {
    db.retrieve(Number(restaurant_id), function(err, data) {
      res(data)
    })
  }).then(function(resolved) {
    console.log('resolved',resolved)
    res.send(resolved)
  })
})

app.listen(3000, function() {
  console.log(`listening on port: 3000`);
}); 

