const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photos');

let photoSchema = mongoose.Schema({
  restaurant_id: Number,
  src: String,
  txt_description: String
});


let PhotoModel = mongoose.model('Photo', photoSchema);

let save = (data) => {
  let photoCollection = new PhotoModel(data);
  photoCollection.collection.insertOne(data)
};

let retrieve = (restaurant, cb) => {
  let found = PhotoModel.find({
    restaurant_Id:restaurant
  },cb);
};

module.exports.retrieve = retrieve;
module.exports.save = save;
