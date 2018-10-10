const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/photos',({useNewUrlParser: true}));

let photoSchema = mongoose.Schema({
  restaurant_Id: Number,
  gallery: Array,
});

let PhotoModel = mongoose.model('photos', photoSchema);

let save = async(data) => {
  let photoCollection = new PhotoModel(data);
  try {
    console.log('im the coll')
    photoCollection.collection.insertOne(data);
    console.log(data)
  } catch (err) {
    console.log(err)
  }
};

let retrieve = (restaurant, cb) => {
  console.log('retrieving from DB id:', restaurant)
  PhotoModel.find({restaurant_Id:restaurant},cb);
};

module.exports.retrieve = retrieve;
module.exports.save = save;
