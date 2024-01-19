import { ButtonLink } from './styles'

export type Props = {
  children?: string
}

const Button = ({ children }: Props) => (
  <ButtonLink to="/Perfil">{children}</ButtonLink>
)

export default Button
