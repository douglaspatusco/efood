import { Logo } from '../Logo'
import { Background, Items, Links } from './styles'

const Header = () => (
  <Background>
    <Items>
      <Links>Restaurantes</Links>
      <Logo />
      <Links>0 produto(s) no carrinho</Links>
    </Items>
  </Background>
)
export default Header
