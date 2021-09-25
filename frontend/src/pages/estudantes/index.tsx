import { List } from 'components/List'
import * as S from '../../styles/components/table'

export default function Index() {
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
            <S.ListItem>
              <td>1</td>
              <td>Gabriel Mendonça Pereira</td>
              <td>crowofcode@gmail.com</td>
              <td>123.123.123-81</td>
              <td>Rua 5 avenida</td>
              <td>65066-210</td>
              <td>989898989898</td>
              <td>
                <S.ButtonOptions>
                  <button>
                    <img src="./icons/edit.svg" />
                  </button>
                  <button>
                    <img src="./icons/delete.svg" />
                  </button>
                </S.ButtonOptions>
              </td>
            </S.ListItem>
          </tbody>
        </S.Table>
      </List>
    </S.Wrapper>
  )
}