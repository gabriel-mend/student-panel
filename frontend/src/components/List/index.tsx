import Js2excel from 'js2excel'

import Link from 'next/link'
import { CourseProps } from 'pages/cursos'
import { StudentProps } from 'pages/estudantes'
import { toast } from 'react-toastify'

import * as S from './styles'

interface ListProps {
  children?: React.ReactNode
  title: string
  link: string
  dataExport?: CourseProps[] | StudentProps[]
  tableName: string
}

export function List({ children, title, link, dataExport, tableName }: ListProps) {
  function createExcelFile () {
    try {
      const data = dataExport.map((elem) => {
        return {
          ...elem,
          created_at: elem.created_at.slice(0, 10),
        }
      })
      
      Js2excel.json2excel({
        data,
        name: tableName,
        formateDate: 'yyyy/mm/dd'
      });
    } catch (e) {
      toast.error('Erro ao exportar');
    }
  }
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
      <button onClick={createExcelFile}>Exportar tabela</button>
      {children}
    </S.List>
  )
}