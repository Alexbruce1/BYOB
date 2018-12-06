
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('makers').del()
    .then(function () {
      // Inserts seed entries
      return knex('makers').insert([
        {id: 1, name: 'rowValue1', year: 0, models: []},
        {id: 2, name: 'rowValue2', year: 0, models: []},
        {id: 3, name: 'rowValue3', year: 0, models: []}
      ]);
    });
};
