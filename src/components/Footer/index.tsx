import logoInstagram from '../../assets/images/social-media/instagram.svg'
import logoFacebook from '../../assets/images/social-media/facebook.svg'
import logoTwitter from '../../assets/images/social-media/twitter.svg'

import { Logo } from '../Logo'

import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <Logo />
    <S.SocialMedia>
      <img title="Instagram" src={logoInstagram} alt="Instagram" />
      <img title="Facebook" src={logoFacebook} alt="Facebook" />
      <img title="Twitter" src={logoTwitter} alt="Twitter" />
    </S.SocialMedia>
    <S.Span>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </S.Span>
  </S.FooterContainer>
)

export default Footer
