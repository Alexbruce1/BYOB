const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const makers = require('./data/makers');
const models = require('./data/models');


app.set('port', process.env.PORT || 3000);
app.locals.title = 'BYOB';

app.get('/', (request, response) => {
  response.send('BYOB');
});

app.get('/api/v1/makers', async (request, response) => {
  if (database('makers')) {
    let makers = await database('makers');
    response.status(200).json(makers);
  } else {
    response.send('Not found')
  }
})

app.get('/api/v1/models', async (request, response) => {
  if (database('models')) {
    let models = await database('models');
    response.status(200).json(models);
  } else {
    response.send('Not found')
  }
});

app.get('/api/v1/makers/:id', (request, response) => {

  let { id } = request.params;

  const specificMaker = makers.filter(maker => {
    return maker.name.includes(id);
  })

  response.status(200).json(specificMaker);
});

app.post('/api/v1/makers', (request, response) => {
  // const { makerName, makerYear } = request.body;
  // const newMaker = {
  //   name: makerName,
  //   year: makerYear,
  //   models: []
  // }

  // response.status(200).json(newMaker);
});

app.post('/api/v1/models', (request, response) => {
  // add new model to the database

  // make sure model has maker_id
});

app.patch('/api/v1/makers', (request, response) => {
// change part of a piece of 
});

app.patch('/api/v1/models', (request, response) => {
  // change part of the model data
});

app.delete('/api/v1/makers', (request, response) => {
  // delete a maker from the db

});

app.delete('/api/v1/models', (request, response) => {
  // delete a model from the db
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});