let mongoose = require('mongoose');
let database = require('../db/models/photos.js');
let dupe = require('./test/dataDupe.js');

mongoose.connect('mongod://localhost/photos');

let seeding = (dupe) => {
  for (let data of dupe) {
    database.save(data);
  }
};
seeding(dupe);