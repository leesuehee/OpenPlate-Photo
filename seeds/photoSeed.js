let mongoose = require('mongoose');
let database = require('../db/models/photos.js');
let dupe = require('./test/dataDupe.js');

mongoose.connect('mongodb://localhost/photos');

let seeding = function(data) {
  console.log('seeding dupe',dupe.length);
  for (let i = 0; i < dupe.length; i++) {
    database.save(dupe[i]) 
  }
};
seeding(dupe);  
