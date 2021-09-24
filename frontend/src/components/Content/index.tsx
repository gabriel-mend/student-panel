import * as S from './styles'

interface ContentProps {
  children?: React.ReactNode
}

export function Content({ children }: ContentProps) {
  return (
    <S.Container>
      {children}
    </S.Container>
  )
}