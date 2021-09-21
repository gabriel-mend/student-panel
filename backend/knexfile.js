// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      data: 'student_panel',
      user: "student_panel",
      password: "student_panel"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
};
