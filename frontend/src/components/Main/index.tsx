import * as S from './styles'
import { Container } from 'components/Container'
import { Sidebar } from 'components/Sidebar'
import { Content } from 'components/Content'

interface MainProps {
  children?: React.ReactNode
}

export function Main({ children }: MainProps) {
  return (
    <Container>
      <S.Wrapper>
        <Sidebar />
        <Content>
          {children}
        </Content>
      </S.Wrapper>
    </Container>
  )
}