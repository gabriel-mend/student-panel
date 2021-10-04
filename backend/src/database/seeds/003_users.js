
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          name: 'Gabriel Mendonça Pereira',
          email: 'crowofcode@gmail.com',
          password: '123'
        },
      ]);
    });
};
