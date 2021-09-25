import Link from 'next/link'

import * as S from './styles'

interface ListProps {
  children?: React.ReactNode
  title: string
  link: string
}

export function List({ children, title, link }: ListProps) {
  return (
    <S.List>
      <div>
        <h2>{title}</h2>
        <S.Button>
          <Link href={link}>
            <a>Adicionar</a>
          </Link>
        </S.Button>
      </div>
      {children}
    </S.List>
  )
}