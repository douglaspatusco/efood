import { useDispatch, useSelector } from 'react-redux'

import Checkout from '../Checkout'

import { RootReducer } from '../../store'
import { closeCart, remove } from '../../store/reducers/cart'
import { openCheckout } from '../../store/reducers/checkout'

import { getTotalPrice, parseToBrl } from '../../utils'

import imagemDeletar from '../../assets/images/lixeira.png'

import { Overlay } from '../Cards/DishCard/styles'
import * as S from './styles'

const Cart = () => {
  const { isCartOpen, items } = useSelector((state: RootReducer) => state.cart)
  const { isCheckoutOpen } = useSelector((state: RootReducer) => state.checkout)
  const dispatch = useDispatch()

  const close = () => {
    dispatch(closeCart())
  }

  const openCheck = () => {
    dispatch(openCheckout())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.Container className={isCartOpen ? 'is-open' : ''}>
      <Overlay onClick={close} />
      <S.Sidebar>
        <S.Cart>
          {!isCheckoutOpen && items.length > 0 ? (
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
                      alt="lixeira"
                    />
                  </S.CartItem>
                ))}
              </ul>
              <S.TotalPrice>
                <p>Valor total</p>
                <p>{parseToBrl(getTotalPrice(items))}</p>
              </S.TotalPrice>
              <S.PaymentButton
                title="Prosseguir para a entrega"
                onClick={openCheck}
              >
                Continuar com a entrega
              </S.PaymentButton>
            </>
          ) : (
            <p className={!isCheckoutOpen ? 'empty-cart-warning' : 'none'}>
              Seu carrinho está vazio
            </p>
          )}
        </S.Cart>
        {isCheckoutOpen && <Checkout />}
      </S.Sidebar>
    </S.Container>
  )
}

export default Cart
