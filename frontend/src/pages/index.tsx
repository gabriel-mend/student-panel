import { GetServerSideProps } from 'next'
import { api } from 'services/api'
import * as S from '../styles/pages/home'

interface HomeProps {
  data: [{
    id: number
    username: string
    name: string
  }]
}

export default function Home({ data }: HomeProps) {
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
            {data.map(({ id, name, username}) => (
              <S.ListItem key={id}>
                <td>{id}</td>
                <td>{username}</td>
                <td>{name}</td>
              </S.ListItem>
            ))}
          </tbody>
        </S.Table>
      </S.List>
    </S.Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await api.get('/students')
  return {
    props: {
      data
    }
  }
}