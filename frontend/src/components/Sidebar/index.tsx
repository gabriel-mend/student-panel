import Link from 'next/link'

import * as S from './styles'

export function Sidebar () {
  return (
    <S.Container>
      <S.Logo>SP</S.Logo>
      <S.MenuLinks>
        <S.MenuLink>
          <Link href="/">
            <a>
              <img src="/icons/home.svg" />
              <p>Página inicial</p>
            </a>
          </Link>
        </S.MenuLink>
        <S.MenuLink>
          <Link href="/cursos">
            <a>
              <img src="/icons/class.svg" />
              <p>Cursos</p>
            </a>
          </Link>
        </S.MenuLink>
        <S.MenuLink>
          <Link href="">
            <a>
              <img src="/icons/user.svg" />
              <p>Estudantes</p>
            </a>
          </Link>
        </S.MenuLink>
      </S.MenuLinks>
    </S.Container>
  )
}