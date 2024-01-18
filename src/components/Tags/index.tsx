import { TagStyled } from './styles'

export type Props = {
  size?: string
  children?: string
}

const Tag = ({ children }: Props) => {
  return <TagStyled>{children}</TagStyled>
}

export default Tag
