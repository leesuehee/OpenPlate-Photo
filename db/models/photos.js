const mongoose = require('mongoose');
// require('seed-mongoose')();

// mongoose.connect('mongodb://localhost:27017/photos');
// mongoose.connect('mongodb://localhost:27017/photos', mongoOptions, () => {
//   require('seed-mongoose')({
//     suffix: '_seed',
//     mongoose: mongoose
//   }), function (err, results) {
//     if (err) throw err;
//     else console.log(results);
//   };

let photoSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  size: {carosel: String, large: String, medium: String, small: String},
  txt_description: String, src: String});

let PhotoModel = mongoose.model('Photo', photoSchema);


let save = (collection) => {
  let photoCollection = new PhotoModel(collection);
  photoCollection.save((err, succ) => {
    if (err) {
      throw err;
    } else {
      console.log('db has been updated');
    }
  });
};


// make an retrieve
// let retrieve = () => {
//   PhotoModel.find();
// }

module.exports.save = save;