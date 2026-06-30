exports.up = function (knex) {
    return knex.schema.createTable("openid_providers", function (table) {

        table.increments("id").primary();

        table.string("name").notNullable();

        table.string("issuer").notNullable();

        table.string("client_id").notNullable();

        table.string("client_secret");

        table.string("redirect_uri").notNullable();

        table.boolean("enabled").defaultTo(true);

    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("openid_providers");
};