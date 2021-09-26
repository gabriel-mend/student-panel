
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(function () {
      // Inserts seed entries
      return knex('courses').insert([
        { 
          name: 'Medicina',
          workload: 80,
        },
        { 
          name: 'Administração',
          workload: 40,
        },
        { 
          name: 'Direito',
          workload: 80,
        },
      ]);
    });
};
