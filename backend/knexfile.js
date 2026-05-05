module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "postgres_db",
      user: "postgres",
      password: "postgres",
      database: "postgres"
    },
    migrations: {
      directory: "./migrations"
    }
  }
};