let mongoose = require('mongoose');
let database = require('../db/models/photos.js');
let dupe = require('./test/dataDupe.js');
let faker = require('faker');

mongoose.connect('mongodb://localhost:27017/photos');
// mongoose.connect('mongodb://localhost/photos');

let getRandomNum = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// to deal w/ faker bug of repeated photos and descriptions
let generatePhotos = function() {
  let photo = faker.image.food();
  return photo;
};

let generateDescription = function() {
  let description = faker.lorem.words();
  return description;
};


let createOneGallery = function(num) {
  let photoHolder = [];
  
  let template = {
    restaurant_id: num,
    gallery: []
  };
  
  for (let i = 0; i < getRandomNum(1,10); i++) {
    let description = generateDescription();
    let photo = generatePhotos();

    let galleryInput = {
      txt_description: description,
      src: photo
    }
    template.gallery.push(galleryInput);
  };

  return template;
};  

let seedRestaurantPhotos = function(amount) {
  console.log('seeding restaurant inputs',amount);
  for (let i = 0; i < amount; i++) {
    let entry = createOneGallery(i);
    database.save(entry); 
    console.log('saved');
  }
};

seedRestaurantPhotos(200)

