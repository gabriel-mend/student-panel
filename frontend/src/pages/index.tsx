import * as S from '../styles/pages/home'

export default function Home() {
  return (
    <S.Wrapper>
      <S.Banner>
        <div>
          <h1>Olá, seja bem vindo(a)</h1>
          <S.UserName>Gabriel Mendonça Pereira</S.UserName>
        </div>
        <img src="./Illustration.svg" />
      </S.Banner>
      <S.List>
        <h2>Lista de estudantes</h2>
        <S.Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Curso</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <S.ListItem>
              <td>1</td>
              <td>Gabriel Mendonça</td>
              <td>Medicina</td>
            </S.ListItem>
            <S.ListItem>
              <td>1</td>
              <td>Gabriel Mendonça</td>
              <td>Medicina</td>
            </S.ListItem>
          </tbody>
        </S.Table>
      </S.List>
    </S.Wrapper>
  )
}
