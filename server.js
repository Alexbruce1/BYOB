const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const utils = require('util')

app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);
app.locals.title = 'BYOB';

app.get('/', (request, response) => {
  response.send(app.locals.title);
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

  database('makers').where('id', id).select()
    .then(result => {
      response.status(200).json(result)
    })
    .catch(error => {
      response.status(404).json(error)
    });
});

app.get('/api/v1/models/:id', (request, response) => {
  let { id } = request.params;

  database('models').where('id', id).select()
    .then(result => {
      response.status(200).json(result)
    })
    .catch(error => {
      response.status(404).json(`${id} was not found`)
    });
});

app.post('/api/v1/makers', (request, response) => {
  let newMaker = {
    ...request.body
  }

  for(let requiredParam of ['maker', 'year']) {
    if (!newMaker[requiredParam]) {
      return response.status(422).json({error: `Missing param ${requiredParam}`})
    }
  }

  database('makers').insert(newMaker, 'id')
    .then(makerId => {
      return response.status(201).json(`Added new maker with and Id of ${makerId[0]}`)
    });
});

app.post('/api/v1/models', (request, response) => {
  let newModel = {
    ...request.body
  }

  for (let requiredParam of ['model', 'displacement', 'engine', 'drivetrain', 'horsepower', 'price']) {
    if (!newModel[requiredParam]) {
      return response.status(422).json({error: `Missing param ${requiredParam}`})
    }
  }

  database('models').insert(newModel, 'id')
    .then(modelId => {
      return response.status(201).json(`Added new model with and Id of ${modelId[0]}`)
    })
})

// app.put('/api/v1/makers/:id', (request, response) => {
//   const { id } = request.params;
//   const updatedMaker = {
//     ...request.body
//   }

//   for (let requiredParam of ['maker', 'year']) {
//     if (!updatedMaker[requiredParam]) {
//       return response.status(422).json({ error: `Missing param ${requiredParam}` })
//     }
//   }

//   database('makers').where('id', id).update('maker', updatedMaker);
//   // response.status(200).json();
//   response.send(`Done`)
// });

app.patch('/api/v1/models', (request, response) => {
  
  // response.status(200).json();
});

app.delete('/api/v1/makers/:id', (request, response) => {
  const { id } = request.params;

  database('makers').where('id', id).del()
    .then(result => {
      response.status(200).json(`removed ${result} maker`)
    });
});

app.delete('/api/v1/models/:id', (request, response) => {
  const { id } = request.params;

  database('models').where('id', id).del()
    .then(result => {
      response.status(200).json(`removed ${result} model`)
    });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;