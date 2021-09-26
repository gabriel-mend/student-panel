import { List } from 'components/List'
import { useEffect, useState } from 'react'
import { api } from 'services/api'

import * as S from '../../styles/components/table'

interface CourseProps {
  id: number
  name: string
  workload: string
}

function Index() {
  const [courses, setCourses] = useState<CourseProps[]>([])

  async function handleDelete(id: number) {
    const coursesNewArray = courses.filter(course => course.id !== id)
    
    await api.delete(`/courses/${id}`) 

    return setCourses(coursesNewArray)
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
              <S.ListItem>
                <td>{id}</td>
                <td>{name}</td>
                <td>{workload} horas</td>
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