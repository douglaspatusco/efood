import Button from '../Button'
import { Overlay } from '../Cards/DishCard/styles'
import { CartContainer, CartItem, Sidebar, TotalPrice } from './styles'

import imagemTeste from '../../assets/images/dish-italian-1.png'
import imagemDeletar from '../../assets/images/lixeira.png'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <li>
            <CartItem>
              <img src={imagemTeste} />
              <div>
                <h3>Pizza Marguerita</h3>
                <p>R$60,90</p>
              </div>
              <img src={imagemDeletar} />
            </CartItem>
          </li>
          <li>
            <CartItem>
              <img src={imagemTeste} />
              <div>
                <h3>Pizza Marguerita</h3>
                <p>R$60,90</p>
              </div>
              <img src={imagemDeletar} />
            </CartItem>
          </li>
        </ul>
        <TotalPrice>
          <p>Valor total</p>
          <p>R$ 182,70</p>
        </TotalPrice>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
