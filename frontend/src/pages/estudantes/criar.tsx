import * as S from '../../styles/components/form'

import { Form } from "components/Form";

export default function Create() {
  return (
    <Form
      title="Criar estudante"
    >
      <S.FormCreate>
        <S.Input>
          <label>Nome completo</label>
          <input type="text" name="name"/>
        </S.Input>
        <S.Input>
          <label>E-Mail</label>
          <input type="email" name="email"/>
        </S.Input>
        <S.Input>
          <label>Curso</label>
          <select name="select">
            <option value="valor1">Medicina</option>
            <option value="valor2">Adiministração</option>
            <option value="valor3">Direito</option>
          </select>
        </S.Input>
        <S.Input>
          <label>Telefone</label>
          <input type="text" name="number"/>
        </S.Input>
        <S.Input>
          <label>Endereço</label>
          <input type="text" name="andress"/>
        </S.Input>
        <S.Input>
          <label>CEP</label>
          <input type="text" name="cep"/>
        </S.Input>
        <S.Input>
          <label>CPF</label>
          <input type="text" name="CPF"/>
        </S.Input>
        <button type="submit">Concluir</button>
      </S.FormCreate>
    </Form>
  )
}