import { useState } from 'react'
import * as S from '../../styles/components/form'
import { Form } from "components/Form"
import { api } from 'services/api'

interface CourseProps {
  name: string
  workload: string
}

export default function Create() {
  const [name, setName] = useState('')
  const [workload, setWorkload] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await api.post<CourseProps>('courses', {
        name,
        workload
      })
    } catch(error) {
      alert(error)
    }
  }

  return (
    <Form
      title="Criar cursos"
    >
      <S.FormCreate onSubmit={handleSubmit}>
        <S.Input>
          <label>Nome do curso</label>
          <input 
            type="text" 
            name="name" 
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </S.Input>
        <S.Input>
          <label>Carga horária</label>
          <input 
            type="text" 
            name="workload"
            value={workload}
            required
            onChange={(e) => setWorkload(e.target.value)}
          />
        </S.Input>
        <button type="submit">Concluir</button>
      </S.FormCreate>
    </Form>
  )
}