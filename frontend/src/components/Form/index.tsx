import { IoIosArrowBack } from 'react-icons/io'
import * as S from './styles'
import { useRouter } from 'next/router'

interface FormProps {
  children?: React.ReactNode
  title: string
}

export function Form({ children, title }: FormProps) {
  const router = useRouter()
  return (
    <S.Container>
      <S.Back onClick={router.back}>
        <IoIosArrowBack size={32}/>
        <p>Voltar</p>  
      </S.Back>
      <h1>{title}</h1> 
      {children}
    </S.Container>
  )
}