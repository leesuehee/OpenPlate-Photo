const request = require('request');

describe('Server tests', () => {
  it('should successfully communicate with the client', () => {
    request.get('http://localhost:3000/photos', (err, response) => {
      if (err) throw err;
      expect(response.statusCode).toEqual(200);
    })
  })
  // it('should communicate with the database', () => {
  //   request.get('https://localhost:3000/photos', (err, response) => {
  //     if (err) throw err;
  //     expect(response.)
  //   });
  // })
  // it('should return information from the database to the client', () => {
  //   request.get('https://localhost:300/photos', (err, response) => {
  //     if (err) throw err;
  //     expect(JSON.parse(response.body).restaurant_Id).toBe(1);
  //   })
  // })
})