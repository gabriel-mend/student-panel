
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(function () {
      // Inserts seed entries
      return knex('courses').insert([
        { 
          name: 'Medicina',
          workload: 8,
        },
        { 
          name: 'Administração',
          workload: 4,
        },
        { 
          name: 'Direito',
          workload: 8,
        },
      ]);
    });
};
