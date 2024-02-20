import { ButtonLink } from './styles'

export type Props = {
  to?: string
  children?: string
}

const Button = ({ to, children }: Props) => {
  return <ButtonLink to={to as string}>{children}</ButtonLink>
}

export default Button
