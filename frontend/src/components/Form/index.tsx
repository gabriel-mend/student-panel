import * as S from './styles'

interface FormProps {
  children?: React.ReactNode
  title: string
}

export function Form({ children, title }: FormProps) {
  return (
    <S.Container>
      <h1>{title}</h1>
      {children}
    </S.Container>
  )
}