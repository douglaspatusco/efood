import { useParams } from 'react-router-dom'

import { ButtonLink } from './styles'

export type Props = {
  children?: string
}

const Button = ({ children }: Props) => {
  const { id } = useParams()
  return <ButtonLink to={`/profile/${id}`}>{children}</ButtonLink>
}

export default Button
