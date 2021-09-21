
exports.up = (knex) => knex.schema.createTable('students', table => {
  table.increments('id')
  table.text('username').notNullable()
  table.text('cpf').unique().notNullable()
  table.text('cep').notNullable()
  table.text('andress').notNullable()
  table.text('email').unique().notNullable()
  table.text('phone')
  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())
})


exports.down = knex => knex.schema.dropTable('students')