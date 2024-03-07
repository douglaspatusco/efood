import Button from '../Button'
import { Overlay } from '../Cards/DishCard/styles'
import { CartContainer, CartItem, Sidebar, TotalPrice } from './styles'

import imagemDeletar from '../../assets/images/lixeira.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../Cards/DishCard'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formatPrice(item.preco)}</p>
              </div>
              <img onClick={() => removeItem(item.id)} src={imagemDeletar} />
            </CartItem>
          ))}
        </ul>
        <TotalPrice>
          <p>Valor total</p>
          <p>{formatPrice(getTotalPrice())}</p>
        </TotalPrice>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
