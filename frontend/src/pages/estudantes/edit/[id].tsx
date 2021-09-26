import * as S from '../../../styles/components/form'
import InputMask from 'react-input-mask';
import { Form } from "components/Form";
import { useEffect, useState } from 'react';
import { api } from 'services/api';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

interface CourseProps {
  id: number
  name: string
}

export default function Create() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [cep, setCep] = useState('')
  const [andress, setAndress] = useState('')
  const [phone, setPhone] = useState('')
  const [course, setCourse] = useState('')
  const [courses, setCourses] = useState<CourseProps[]>([])

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await api.put(`students/${router.query.id}`, {
        username, 
        email,
        phone,
        andress,
        cep,
        cpf,
        course_id: Number(course)
      })
      toast.success('Estudante editado!')
      router.back()
    } catch(error) {
      return toast.error('Erro ao editar estudante!')
    }
  }

  useEffect(() => {
    const fethCourses = async () => {
      const { data } = await api.get('courses')
      setCourses(data)
    }
    fethCourses()
  }, [])

  return (
    <Form
      title="Editar estudante"
    >
      <S.FormCreate onSubmit={handleSubmit}>
        <S.Input>
          <label>Nome completo</label>
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </S.Input>
        <S.Input>
          <label>E-Mail</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </S.Input>
        <S.Input>
          <label>Curso</label>
          <select name="course" onChange={(e) => setCourse(e.target.value)}>
            <option value="" selected disabled hidden>Selecione um curso</option>
            {courses.map(course => (
              <option value={course.id} key={course.id}>{course.name}</option>
            ))}
          </select>
        </S.Input>
        <S.Input>
          <label>Telefone</label>
          <InputMask 
            mask="(99) 9 9999-9999" 
            type="text" 
            name="phone" 
            value={phone} 
            onChange={e => setPhone(e.target.value)}
          />
        </S.Input>
        <S.Input>
          <label>Endereço</label>
          <input type="text" name="andress" value={andress} onChange={(e) => setAndress(e.target.value)}/>
        </S.Input>
        <S.Input>
          <label>CEP</label>
          <InputMask
            mask="99999-999" 
            type="text" 
            name="cep" 
            value={cep} 
            onChange={e => setCep(e.target.value)}
          />
        </S.Input>
        <S.Input>
          <label>CPF</label>
          <InputMask
            mask="999.999.999-99" 
            type="text" 
            name="cpf" 
            value={cpf} 
            onChange={e => setCpf(e.target.value)}
          />
        </S.Input>
        <button type="submit">Concluir</button>
      </S.FormCreate>
    </Form>
  )
}