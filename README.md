<<<<<<< HEAD
# Team Mystery Moose OpenTable Photos Module

This module is a rendition of the OpenTable website's photos module.  It features a photo gallery that displays an aggregate of photos that are uniquely formated (dependent on the amount of photos submitted by a given restaraunt).

The module also features a toggleable carousel mode that displays the images larger. 


### Prerequisites
1. clone the repository unto your local machine
2. npm install the dependencies located in the package.json file

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

1. open up a terminal and run the package.json script `npm run start` - this will cause nodemon to listen on any changes made and run the server (located at server/index.js) do not close this terminal.

2. open another terminal and run the package.json script `npm run watch` - this will cause webpack to watch any changes made as well as compile them with the babel compiler to the 'bundle.js' file located at path 'client/dist/bundle.js' 

## Seeding the database 
Within the 'seeds/test' path there is a file called 'dataDupe.js' that contains fake data. Unless data is being provided to the module the module  will not render any photos. 

1. open another terminal (at this point there should be atleast three terminals open - one for listening to the server, another for webpack compilation, and the one you're opening now)
2. in the terminal type `mongod` this will instantiate the MongoDB server
3. run the package.json script `npm run seed` which will access and invoke the function within 'photoSeed.js' and seed the data from 'dataDupe.js' into the database
4. to check if the database has been seeded properly open another terminal to access the mongo shell 
  a) run `mongo` 
  b) run `show dbs` you should see a list of databases, one of which should be photos
  c) run `use photos`
  d) run `db.photos.find()` this should list out multiple objects if you've seeded the database properly

## Running the tests

Within the package.json file there will be a script called 'test' that will trigger the tests created in the 'tests' folder.  To initiate tests type `npm run test` in the root directory.

## Authors

* **Suehee Lee** (https://github.com/leesuehee)
=======
# OpenPlate-Photo
>>>>>>> 6ec015d8cdcfd0a58c7bc0b940168681347d3e86
