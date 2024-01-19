import styled from 'styled-components'

import { DefaultContainer, colors } from '../../styles'

import BgFundo from '../../assets/images/garfo-e-faca.png'

export const Background = styled.div`
  background-image: url(${BgFundo});
  background-color: ${colors.antiqueWhite};
`

export const Items = styled(DefaultContainer)`
  height: 186px;
  padding: 40px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Links = styled.div`
  color: ${colors.salmon};
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`
