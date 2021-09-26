
exports.up = (knex) => knex.schema.createTable('students', table => {
  table.increments('id')
  table.text('username').notNullable()
  table.text('cpf').unique().notNullable()
  table.text('cep').notNullable()
  table.text('andress').notNullable()
  table.text('email').unique().notNullable()
  table.text('phone')

  table.integer('course_id')
    .references('id')
    .inTable('courses')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

  table.timestamp('created_at').defaultTo(knex.fn.now())
})


exports.down = knex => knex.schema.dropTable('students')