import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
  background-color: ${colors.antiqueWhite};
`

export const SocialMedia = styled.div`
  margin: 32px 0px 80px 0px;
  display: flex;
  gap: 8px;
`

export const Span = styled.span`
  width: 480px;
  text-align: center;
  font-size: 10px;
`
