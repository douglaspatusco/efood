import { HeroContainer, Logo, Slogan } from './styles'

import logo from '../../assets/images/logo.png'

const Hero = () => (
  <HeroContainer>
    <Logo src={logo} alt="EFOOD" />
    <Slogan>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Slogan>
  </HeroContainer>
)

export default Hero
