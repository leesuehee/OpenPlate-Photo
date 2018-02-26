const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.json());

// do i really need to get anything?
// can't all the data be served instantly??



app.listen(3000, function() {
  console.log(`listening on port: 3000`);
}); 

