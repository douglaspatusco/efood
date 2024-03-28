import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { DefaultContainer, breakpoints, colors } from '../../styles'

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

  @media (max-width: ${breakpoints.desktop}) {
    width: 95%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 95%;
    height: 250px;
    flex-direction: column;
    column-gap: 16px;
  }
`

export const Cart = styled.div`
  color: ${colors.salmon};
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`

export const Links = styled(Link)`
  color: ${colors.salmon};
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`
