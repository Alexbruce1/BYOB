
exports.up = function(knex, Promise) {
  return knex.schema.table('models', table => {
    table.string('maker_id').unsigned();
    table.foreign('maker_id').references('makers.maker')
  })
};

exports.down = function(knex, Promise) {
  
};
