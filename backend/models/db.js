const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "postgres_db",
    database: "postgres",
    password: "postgres",
    port: 5432,
});

module.exports = pool;