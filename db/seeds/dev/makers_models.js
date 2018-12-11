const makerData = require('../../../data/makers');
const modelData = require('../../../data/models');

exports.seed = function(knex, Promise) {
  return knex('models').del()
    .then(() => {
      return knex('makers').del();
    })
    .then(() => {
      return Promise.all(
        makerData.map(maker => {
          return knex('makers').insert({
            maker: maker.name,
            year: maker.year
          }, 
          'id'
          )
          .then(maker_id => {
            let modelPromises = [];
            modelData.forEach(model => {
               let maker = model.make;
                 modelPromises.push(createModel(knex, model, maker_id[0]))
             });
             return Promise.all(modelPromises);
          })
        })
      )
    })
 });

};

const createModel = (knex, model, id) => {
  return knex('models').insert({
    model: model.model,
    displacement: model.displacement,
    engine: model.engine,
    drivetrain: model.drivetrain,
    horsepower: model.horsepower,
    torque: model.then,
    price: model.price,
    maker_id: id
  });
};
