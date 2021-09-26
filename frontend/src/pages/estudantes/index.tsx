import { GetServerSideProps } from 'next'
import { api } from 'services/api'
import { List } from 'components/List'

import * as S from '../../styles/components/table'
import { useEffect, useState } from 'react'

interface StudentProps {
  id: number
  username: string
  email: string
  cpf: string
  cep: string
  andress: string
  name: string
  phone: string
}

function Index() {
  const [students, setStudents] = useState<StudentProps[]>([])

  async function handleDelete(id: number) {
    const studentsNewArray = students.filter(student => student.id !== id)
    
    await api.delete(`/students/${id}`) 
    
    return setStudents(studentsNewArray)
  }

  useEffect(() => {
    const fethCourses = async () => {
      const { data } = await api.get<StudentProps[]>('students')
      return setStudents(data)
    }
    fethCourses()
  }, [])

  return (
    <S.Wrapper>
      <List
        title="Lista de estudantes"
        link="/estudantes/criar"
      >
        <S.Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Curso</th>
              <th>CPF</th>
              <th>CEP</th>
              <th>Telefone</th>
              <th style={{ width: "100px" }}></th>
            </tr>
          </thead>
          <tbody>
            {students.map(({
              id,
              username,
              name,
              cpf,
              andress,
              cep,
              email,
              phone
            }) => (
              <S.ListItem key={id}>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{name}</td>
                <td>{cpf}</td>
                <td>{cep}</td>
                <td>{phone}</td>
                <td>
                  <S.ButtonOptions>
                    <button>
                      <img src="./icons/edit.svg" />
                    </button>
                    <button onClick={() => handleDelete(id)}>
                      <img src="./icons/delete.svg" />
                    </button>
                  </S.ButtonOptions>
                </td>
              </S.ListItem>
            ))}
          </tbody>
        </S.Table>
      </List>
    </S.Wrapper>
  )
}

export default Index