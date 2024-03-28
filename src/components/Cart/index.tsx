import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'
import Checkout from '../Checkout'

import imagemDeletar from '../../assets/images/lixeira.png'

import { Overlay } from '../Cards/DishCard/styles'
import * as S from './styles'

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
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <S.Sidebar>
        {!payment ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{parseToBrl(item.preco)}</p>
                  </div>
                  <img
                    onClick={() => removeItem(item.id)}
                    src={imagemDeletar}
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.TotalPrice>
              <p>Valor total</p>
              <p>{parseToBrl(getTotalPrice(items))}</p>
            </S.TotalPrice>
            <S.PaymentButton
              title="Prosseguir para a entrega "
              onClick={() => setPayment(true)}
            >
              Continuar com a entrega
            </S.PaymentButton>
          </>
        ) : (
          <Checkout />
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
