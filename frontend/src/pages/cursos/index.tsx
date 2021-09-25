import { List } from 'components/List'

import * as S from '../../styles/components/table'

export default function Index() {
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
            <S.ListItem>
              <td>1</td>
              <td>Medicina</td>
              <td>40 horas</td>
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
            <S.ListItem>
              <td>2</td>
              <td>Direito</td>
              <td>60 horas</td>
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