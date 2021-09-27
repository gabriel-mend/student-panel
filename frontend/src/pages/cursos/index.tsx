import { List } from 'components/List'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from 'services/api'

import * as S from '../../styles/components/table'

export interface CourseProps {
  id: number
  name: string
  workload: string
  created_at: string
}

function Index() {
  const router = useRouter()
  const [courses, setCourses] = useState<CourseProps[]>([])

  async function handleDelete(id: number) {
    try {
      const coursesNewArray = courses.filter(course => course.id !== id)
    
      await api.delete(`/courses/${id}`) 

      toast.success('Curso deletado!')
      return setCourses(coursesNewArray)
    } catch(error) {
      toast.error('Erro ao deletar!')
    }
  }

  function handleEdit(id) {
    return router.push(`/cursos/edit/${id}`)
  }

  useEffect(() => {
    const fethCourses = async () => {
      const { data } = await api.get<CourseProps[]>('courses')
      return setCourses(data)
    }
    fethCourses()
  }, [])
  return (
    <S.Wrapper>
      <List
        title="Lista de cursos"
        link="/cursos/criar"
        dataExport={courses}
        tableName="lista-de-cursos"
      >
        <S.Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Carga horária</th>
              <th style={{ width: "100px" }}></th>
            </tr>
          </thead>
          <tbody>
            {courses.map(({id, name, workload}) => (
              <S.ListItem key={id}>
                <td className="table-id">{id}</td>
                <td>{name}</td>
                <td>{workload} horas</td>
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