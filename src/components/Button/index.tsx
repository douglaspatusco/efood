import { ButtonLink } from './styles'

export type Props = {
  children?: string
}

const Button = ({ children }: Props) => (
  <ButtonLink href="#">{children}</ButtonLink>
)

export default Button
