import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 40px 0px;
  background-color: ${colors.antiqueWhite};
`

export const SocialMedia = styled.div`
  display: flex;
  gap: 16px;

  img {
    cursor: pointer;
  }

  img:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`

export const Span = styled.span`
  width: 480px;
  text-align: center;
  font-size: 10px;

  a {
    font-size: 12px;
    text-decoration: none;
    color: inherit;
    padding: 8px;
    border-bottom: 1px solid ${colors.salmon};
  }
`
