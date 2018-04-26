const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photos');

let photoSchema = mongoose.Schema({
  restaurant_id: Number,
  gallery: Array,
});

let PhotoModel = mongoose.model('photos', photoSchema);//'' is collection name

let save = (data) => {
  let photoCollection = new PhotoModel(data);
  photoCollection.collection.insertOne(data);
};

let retrieve = (restaurant, cb) => {
  let found = PhotoModel.find({
    restaurant_Id:restaurant
  },cb);
};

module.exports.retrieve = retrieve;
module.exports.save = save;
