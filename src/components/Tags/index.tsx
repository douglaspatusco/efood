import { TagStyled } from './styles'

export type RestaurantProps = {
  restaurant: Restaurant
}

export type Props = {
  size?: string
  children?: string
  destacado?: boolean
}

type geralProps = RestaurantProps & Props

const Tag = ({ children }: geralProps) => {
  return (
    <>
      <TagStyled>{children}</TagStyled>
    </>
  )
}

export default Tag
