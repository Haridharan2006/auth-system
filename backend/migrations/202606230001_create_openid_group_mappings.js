exports.up = function(knex) {
  return knex.schema.createTable("openid_group_mappings", table => {
    table.increments("id").primary();

    table.string("provider").notNullable();

    table.string("external_group").notNullable();

    table.integer("local_group_id")
      .references("id")
      .inTable("groups")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("openid_group_mappings");
};