
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { 
          username: 'Aluno 1',
          email: 'aluno1@gmail.com',
          cep: 65066210,
          cpf: 11122233345,
          phone: 98999999999,
          andress: 'rua 2',
          course_id: 3
        },
        { 
          username: 'Aluno 2',
          email: 'aluno2@gmail.com',
          cep: 65066210,
          cpf: 11122233346,
          phone: 98999999999,
          andress: 'rua 2',
          course_id: 3
        },
      ]);
    });
};
