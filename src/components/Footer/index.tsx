import logoInstagram from '../../assets/images/social-media/instagram.svg'
import logoFacebook from '../../assets/images/social-media/facebook.svg'
import logoTwitter from '../../assets/images/social-media/twitter.svg'

import { FooterContainer, SocialMedia, Span } from './styles'
import { Logo } from '../Logo'

const Footer = () => (
  <FooterContainer>
    <Logo />
    <SocialMedia>
      <img src={logoInstagram} alt="instagram" />
      <img src={logoFacebook} alt="Facebook" />
      <img src={logoTwitter} alt="Twitter" />
    </SocialMedia>
    <Span>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </Span>
  </FooterContainer>
)

export default Footer
