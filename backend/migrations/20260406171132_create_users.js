exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table.string("email").unique();
    table.string("password");
    table.integer("group_id").references("id").inTable("groups");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};