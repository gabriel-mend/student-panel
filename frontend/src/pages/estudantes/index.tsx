import { api } from 'services/api'
import { List } from 'components/List'
import { toast, ToastContainer } from 'react-toastify';

import * as S from '../../styles/components/table'
import { useEffect, useState } from 'react'
import router from 'next/router'

export interface StudentProps {
  id: number
  username: string
  email: string
  cpf: string
  cep: string
  andress: string
  name: string
  phone: string
  created_at: string
  course_id: string
}



function Index() {
  const [students, setStudents] = useState<StudentProps[]>([])

  async function handleDelete(id: number) {
    try {
      const studentsNewArray = students.filter(student => student.id !== id)

      await api.delete(`/students/${id}`) 

      toast.success('Estudante deletado!')
      return setStudents(studentsNewArray)
    } catch(error) {
      toast.error('Erro ao deletar!')
    }
  }

  function handleEdit(id) {
    return router.push(`/estudantes/edit/${id}`)
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
        tableName="lista-de-estudantes"
        dataExport={students}
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
              <th>Endereço</th>
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
                <td className="table-id">{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{name}</td>
                <td>{cpf}</td>
                <td>{cep}</td>
                <td>{andress}</td>
                <td>{phone}</td>
                <td>
                  <S.ButtonOptions>
                    <button onClick={() => handleEdit(id)}>
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