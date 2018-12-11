
exports.up = function(knex, Promise) {
  return knex.schema.table('models', table => {
    table.integer('maker_id').unsigned();
    table.foreign('maker_id').references('makers.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('models', table => {
    table.dropColumn('maker_id');
  });
};
