import logoInstagram from '../../assets/images/social-media/instagram.svg'
import logoFacebook from '../../assets/images/social-media/facebook.svg'
import logoTwitter from '../../assets/images/social-media/twitter.svg'

import { Logo } from '../Logo'

import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <Logo />
    <S.SocialMedia>
      <img src={logoInstagram} alt="instagram" />
      <img src={logoFacebook} alt="Facebook" />
      <img src={logoTwitter} alt="Twitter" />
    </S.SocialMedia>
    <S.Span>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </S.Span>
  </S.FooterContainer>
)

export default Footer
