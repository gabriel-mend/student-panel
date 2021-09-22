
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(function () {
      // Inserts seed entries
      return knex('courses').insert([
        { 
          name: 'Medicina',
          workload: 4,
        },
      ]);
    });
};
