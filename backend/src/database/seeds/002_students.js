
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { 
          username: 'Aluno 1',
          email: 'aluno1@gmail.com',
          cep: '65066-210',
          cpf: '111.111.111-11',
          phone: '(98) 9 9999-9999',
          andress: 'rua 1',
          course_id: 1
        },
        { 
          username: 'Aluno 2',
          email: 'aluno2@gmail.com',
          cep: '65066-210',
          cpf: '111.111.111-12',
          phone: '(98) 9 9999-9999',
          andress: 'rua 1',
          course_id: 1
        },
        { 
          username: 'Aluno 3',
          email: 'aluno3@gmail.com',
          cep: '65066-210',
          cpf: '111.111.111-13',
          phone: '(98) 9 9999-9999',
          andress: 'rua 1',
          course_id: 1
        },
        { 
          username: 'Aluno 4',
          email: 'aluno4@gmail.com',
          cep: '65066-210',
          cpf: '111.111.111-14',
          phone: '(98) 9 9999-9999',
          andress: 'rua 1',
          course_id: 2
        },
        { 
          username: 'Aluno 5',
          email: 'aluno5@gmail.com',
          cep: '65066-210',
          cpf: '111.111.111-15',
          phone: '(98) 9 9999-9999',
          andress: 'rua 1',
          course_id: 2
        },
        { 
          username: 'Aluno 6',
          email: 'aluno6@gmail.com',
          cep: '65066-210',
          cpf: '111.111.111-16',
          phone: '(98) 9 9999-9999',
          andress: 'rua 1',
          course_id: 3
        },
        { 
          username: 'Aluno 7',
          email: 'aluno7@gmail.com',
          cep: '65066-210',
          cpf: '111.111.111-17',
          phone: '(98) 9 9999-9999',
          andress: 'rua 1',
          course_id: 3
        },
      ]);
    });
};
