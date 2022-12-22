import { FC } from 'react'
import s from './styles.module.sass'

interface ISectionTitle {
  title: string
}

const SectionTitle: FC<ISectionTitle> = ({ title }) => {
  return <h2 className={s.title}>{title}</h2>
}

export default SectionTitle
