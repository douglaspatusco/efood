import { useDispatch, useSelector } from 'react-redux'

import { Logo } from '../Logo'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.Background>
      <S.Items>
        <S.Links to="/">Restaurantes</S.Links>
        <Logo />
        <S.Cart onClick={openCart}>
          {items.length} produto(s) no carrinho
        </S.Cart>
      </S.Items>
    </S.Background>
  )
}
export default Header
