const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);


app.set('port', process.env.PORT || 3000);
app.locals.title = 'BYOB';

app.get('/', (request, response) => {
  response.send('BYOB');
});

app.get('/api/v1/maker', (request, repsonse) => {
  response.send(database('maker'))
})






app.get('/api/v1/maker', (request, response) => {
  // return car makers data
});

app.get('/api/v1/model', (request, response) => {
  // return car models data

  //check if query exist if not do normal
  //if so do other
});

app.get('/api/v1/maker/:maker_name', (request, response) => {
  // return all models from specified maker
});

// app.post('/api/v1/maker', (request, response) => {
// });

app.post('/api/v1/maker', (request, response) => {
  // add new maker to the database
});

app.put('/api/v1/models', (request, response) => {

});

app.patch('/api/v1/maker', (request, response) => {
});

app.delete('/api/v1/maker', (request, response) => {
});

app.delete('/api/v1/maker', (request, response) => {
});








app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});