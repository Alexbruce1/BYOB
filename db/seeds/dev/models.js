
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('models').del()
    .then(function () {
      // Inserts seed entries
      return knex('models').insert([
        {id: 1, model: 'rowValue1', displacement: '123', engine: 'V8', drivetrain: 'AWD', horsepower: 500, torque: 400, price: 123456},
        {id: 2, model: 'rowValue2', displacement: '123', engine: 'V8', drivetrain: 'AWD', horsepower: 500, torque: 400, price: 123456},
        {id: 3, model: 'rowValue3', displacement: '123', engine: 'V8', drivetrain: 'AWD', horsepower: 500, torque: 400, price: 123456}
      ]);
    });
};
