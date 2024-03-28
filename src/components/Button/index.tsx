import { ButtonLink } from './styles'

export type Props = {
  to?: string
  children?: string
  title?: string
}

const Button = ({ to, children, title }: Props) => {
  return (
    <ButtonLink title={title as string} to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default Button
