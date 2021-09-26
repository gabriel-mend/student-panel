import { useState } from 'react'
import * as S from '../../../styles/components/form'
import { Form } from "components/Form"
import { api } from 'services/api'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

interface CourseProps {
  name: string
  workload: string
}

export default function Create() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [workload, setWorkload] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await api.put<CourseProps>(`courses/${router.query.id}`, {
        name,
        workload
      })
      toast.success('Curso editado!')
      router.back()
    } catch(error) {
      return toast.error('Erro ao editar estudante!')
    }
  }

  return (
    <Form
      title="Editar curso"
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