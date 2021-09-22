
exports.up = (knex) => knex.schema.createTable('courses', table => {
  table.increments('id')
  table.text('name').notNullable().unique()
  table.text('workload').notNullable()
  
  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())
})


exports.down = knex => knex.schema.dropTable('courses')