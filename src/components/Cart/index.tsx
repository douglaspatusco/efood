import { Overlay } from '../Cards/DishCard/styles'
import {
  CartContainer,
  CartItem,
  PaymentButton,
  Sidebar,
  TotalPrice
} from './styles'

import imagemDeletar from '../../assets/images/lixeira.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../Cards/DishCard'
import { useState } from 'react'
import Checkout from '../Checkout'
import { Menu } from '../../types/types'

export const getTotalPrice = (items: Menu[]) => {
  return items.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco!)
  }, 0)
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [payment, setPayment] = useState(false)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {!payment ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{formatPrice(item.preco)}</p>
                  </div>
                  <img
                    onClick={() => removeItem(item.id)}
                    src={imagemDeletar}
                  />
                </CartItem>
              ))}
            </ul>
            <TotalPrice>
              <p>Valor total</p>
              <p>{formatPrice(getTotalPrice(items))}</p>
            </TotalPrice>
            <PaymentButton onClick={() => setPayment(true)}>
              Continuar com a entrega
            </PaymentButton>
          </>
        ) : (
          <Checkout />
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
