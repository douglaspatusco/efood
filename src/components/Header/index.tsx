import { Logo } from '../Logo'
import { Background, Items, Links } from './styles'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Background>
      <Items>
        <Links>Restaurantes</Links>
        <Logo />
        <Links onClick={openCart}>{items.length} produto(s) no carrinho</Links>
      </Items>
    </Background>
  )
}
export default Header
