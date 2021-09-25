import * as S from '../../styles/components/form'

import { Form } from "components/Form";

export default function Create() {
  return (
    <Form
      title="Criar cursos"
    >
      <S.FormCreate>
        <S.Input>
          <label>Nome do curso</label>
          <input type="text" name="name"/>
        </S.Input>
        <S.Input>
          <label>Carga horária</label>
          <input type="text" name="workload"/>
        </S.Input>
        <button type="submit">Concluir</button>
      </S.FormCreate>
    </Form>
  )
}